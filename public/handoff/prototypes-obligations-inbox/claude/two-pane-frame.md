# Two-pane frame

The fixed frame the two panes live in — the direct sibling of bcn-triage-workspace, composing the .sidebar hub primitive with a queue of fixed basis and a thread pane taking the rest.

## Key decisions
- A FIXED FOOTPRINT that never resizes on interaction. Selecting a trigger must not make the page jump, and a fifty-row thread must not grow the viewport — each pane scrolls inside its own half instead, so the queue keeps its place while a long thread is read.
- The geometry composes the .sidebar PRIMITIVE rather than reimplementing flex. What the component adds is the frame and the two independent scroll regions.
- Below 60rem the primitive stacks the panes, so the fixed height releases — otherwise the thread is trapped in a short box on a phone.

## Gotchas
- The cleared-inbox empty states for BOTH panes are server-rendered and start hidden. The controller reveals them; it must not build them, for the same compile-time reason as the threads.

## Done when
- Selecting any trigger leaves the frame exactly the same height.
- Both panes scroll independently, and neither the page nor the frame grows when a long thread is opened.

## Markup
```html
<div class="bcn-inbox-workspace">
  <div class="bcn-inbox-workspace__panes sidebar" data-gap="md">
    <div class="bcn-inbox-workspace__queue">
      <div class="bcn-inbox-queue">
        <div class="bcn-inbox-queue__head">
          <esa-button-toggle
            data-inbox-view="true"
            value="open"
            size="sm"
          ></esa-button-toggle>
          <p class="bcn-inbox-queue__lede">
            <span data-inbox-count="triggers">8</span> open ·<span
              data-inbox-count="obligations"
              >180</span
            >
            of 402 obligations in play
          </p>
          <p class="bcn-inbox-queue__keys">
            <kbd>↑</kbd><kbd>↓</kbd> move · <kbd>e</kbd> mark seen
          </p>
        </div>
        <div class="bcn-inbox-queue__scroll">
          <section class="bcn-inbox-queue__group">
            <h3 class="bcn-inbox-queue__bucket">Today</h3>
            <ul class="bcn-inbox-queue__list">
              <li
                class="bcn-inbox-row"
                data-inbox-row="obs-owl"
                data-urgency="now"
                data-seen="0"
                data-owed="5"
                data-raised="30"
                aria-current="true"
              >
                <button
                  type="button"
                  class="bcn-inbox-row__body"
                  data-inbox-open="obs-owl"
                  aria-label="Open Burrowing owl seen on the alignment"
                >
                  <span class="bcn-inbox-row__line"
                    ><span class="bcn-inbox-row__kind"
                      ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                        ><svg
                          width="16"
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
                            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                          ></path>
                          <circle cx="12" cy="12" r="3"></circle></svg></span></span
                    ><span class="bcn-inbox-row__what"
                      >Burrowing owl seen on the alignment</span
                    ><span class="bcn-inbox-row__when">40m ago</span></span
                  ><span class="bcn-inbox-row__meta"
                    >Reach 2 — Canal alignment, station 14+200</span
                  ><span class="bcn-inbox-row__foot"
                    ><span
                      class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">5 notices owed</span></span
                    ><span class="bcn-inbox-row__raised">30 obligations raised</span
                    ><span class="bcn-inbox-row__seen" data-inbox-seenmark="" hidden=""
                      >Seen</span
                    ></span
                  ></button
                ><span class="bcn-inbox-row__restore" data-inbox-restorewrap="" hidden=""
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-inbox-restore="obs-owl"
                    >
                      <span class="esa-button__label">Move back to open</span>
                    </button></span
                  ></span
                >
              </li>
              <li
                class="bcn-inbox-row"
                data-inbox-row="obs-hawk"
                data-urgency="now"
                data-seen="0"
                data-owed="6"
                data-raised="51"
              >
                <button
                  type="button"
                  class="bcn-inbox-row__body"
                  data-inbox-open="obs-hawk"
                  aria-label="Open Injured Swainson’s hawk recovered near a haul road"
                >
                  <span class="bcn-inbox-row__line"
                    ><span class="bcn-inbox-row__kind"
                      ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                        ><svg
                          width="16"
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
                            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                          ></path>
                          <circle cx="12" cy="12" r="3"></circle></svg></span></span
                    ><span class="bcn-inbox-row__what"
                      >Injured Swainson’s hawk recovered near a haul road</span
                    ><span class="bcn-inbox-row__when">2h ago</span></span
                  ><span class="bcn-inbox-row__meta">Access Road 14</span
                  ><span class="bcn-inbox-row__foot"
                    ><span
                      class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">6 notices owed</span></span
                    ><span class="bcn-inbox-row__raised">51 obligations raised</span
                    ><span class="bcn-inbox-row__seen" data-inbox-seenmark="" hidden=""
                      >Seen</span
                    ></span
                  ></button
                ><span class="bcn-inbox-row__restore" data-inbox-restorewrap="" hidden=""
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-inbox-restore="obs-hawk"
                    >
                      <span class="esa-button__label">Move back to open</span>
                    </button></span
                  ></span
                >
              </li>
              <li
                class="bcn-inbox-row"
                data-inbox-row="obs-barge"
                data-urgency="now"
                data-seen="0"
                data-owed="2"
                data-raised="16"
              >
                <button
                  type="button"
                  class="bcn-inbox-row__body"
                  data-inbox-open="obs-barge"
                  aria-label="Open Barge grounding during a cargo transfer"
                >
                  <span class="bcn-inbox-row__line"
                    ><span class="bcn-inbox-row__kind"
                      ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                        ><svg
                          width="16"
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
                            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                          ></path>
                          <circle cx="12" cy="12" r="3"></circle></svg></span></span
                    ><span class="bcn-inbox-row__what"
                      >Barge grounding during a cargo transfer</span
                    ><span class="bcn-inbox-row__when">17h ago</span></span
                  ><span class="bcn-inbox-row__meta">Turner Cut Barge Landing</span
                  ><span class="bcn-inbox-row__foot"
                    ><span
                      class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">2 notices owed</span></span
                    ><span class="bcn-inbox-row__raised">16 obligations raised</span
                    ><span class="bcn-inbox-row__seen" data-inbox-seenmark="" hidden=""
                      >Seen</span
                    ></span
                  ></button
                ><span class="bcn-inbox-row__restore" data-inbox-restorewrap="" hidden=""
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-inbox-restore="obs-barge"
                    >
                      <span class="esa-button__label">Move back to open</span>
                    </button></span
                  ></span
                >
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-queue__group">
            <h3 class="bcn-inbox-queue__bucket">Yesterday</h3>
            <ul class="bcn-inbox-queue__list">
              <li
                class="bcn-inbox-row"
                data-inbox-row="mil-pile"
                data-urgency="soon"
                data-seen="0"
                data-owed="2"
                data-raised="16"
              >
                <button
                  type="button"
                  class="bcn-inbox-row__body"
                  data-inbox-open="mil-pile"
                  aria-label="Open Pile driving began"
                >
                  <span class="bcn-inbox-row__line"
                    ><span class="bcn-inbox-row__kind"
                      ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                        ><svg
                          width="16"
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
                            d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                          ></path>
                          <line x1="4" x2="4" y1="22" y2="15"></line></svg></span></span
                    ><span class="bcn-inbox-row__what">Pile driving began</span
                    ><span class="bcn-inbox-row__when">Yesterday</span></span
                  ><span class="bcn-inbox-row__meta">Reach 3 — Intake</span
                  ><span class="bcn-inbox-row__foot"
                    ><span
                      class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">2 notices owed</span></span
                    ><span class="bcn-inbox-row__raised">16 obligations raised</span
                    ><span class="bcn-inbox-row__seen" data-inbox-seenmark="" hidden=""
                      >Seen</span
                    ></span
                  ></button
                ><span class="bcn-inbox-row__restore" data-inbox-restorewrap="" hidden=""
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-inbox-restore="mil-pile"
                    >
                      <span class="esa-button__label">Move back to open</span>
                    </button></span
                  ></span
                >
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-queue__group">
            <h3 class="bcn-inbox-queue__bucket">Earlier this week</h3>
            <ul class="bcn-inbox-queue__list">
              <li
                class="bcn-inbox-row"
                data-inbox-row="obs-turbid"
                data-urgency="soon"
                data-seen="0"
                data-owed="1"
                data-raised="20"
              >
                <button
                  type="button"
                  class="bcn-inbox-row__body"
                  data-inbox-open="obs-turbid"
                  aria-label="Open Turbidity above the approved threshold downstream of dewatering"
                >
                  <span class="bcn-inbox-row__line"
                    ><span class="bcn-inbox-row__kind"
                      ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                        ><svg
                          width="16"
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
                            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                          ></path>
                          <circle cx="12" cy="12" r="3"></circle></svg></span></span
                    ><span class="bcn-inbox-row__what"
                      >Turbidity above the approved threshold downstream of
                      dewatering</span
                    ><span class="bcn-inbox-row__when">4d ago</span></span
                  ><span class="bcn-inbox-row__meta">Reach 1 — Dewatering</span
                  ><span class="bcn-inbox-row__foot"
                    ><span
                      class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">1 notice owed</span></span
                    ><span class="bcn-inbox-row__raised">20 obligations raised</span
                    ><span class="bcn-inbox-row__seen" data-inbox-seenmark="" hidden=""
                      >Seen</span
                    ></span
                  ></button
                ><span class="bcn-inbox-row__restore" data-inbox-restorewrap="" hidden=""
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-inbox-restore="obs-turbid"
                    >
                      <span class="esa-button__label">Move back to open</span>
                    </button></span
                  ></span
                >
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-queue__group">
            <h3 class="bcn-inbox-queue__bucket">Older</h3>
            <ul class="bcn-inbox-queue__list">
              <li
                class="bcn-inbox-row"
                data-inbox-row="sea-nesting"
                data-urgency="aware"
                data-seen="0"
                data-owed="3"
                data-raised="40"
              >
                <button
                  type="button"
                  class="bcn-inbox-row__body"
                  data-inbox-open="sea-nesting"
                  aria-label="Open Nesting season opened"
                >
                  <span class="bcn-inbox-row__line"
                    ><span class="bcn-inbox-row__kind"
                      ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                        ><svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          focusable="false"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path></svg></span></span
                    ><span class="bcn-inbox-row__what">Nesting season opened</span
                    ><span class="bcn-inbox-row__when">7d ago</span></span
                  ><span class="bcn-inbox-row__meta">Project-wide</span
                  ><span class="bcn-inbox-row__foot"
                    ><span
                      class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">3 notices owed</span></span
                    ><span class="bcn-inbox-row__raised">40 obligations raised</span
                    ><span class="bcn-inbox-row__seen" data-inbox-seenmark="" hidden=""
                      >Seen</span
                    ></span
                  ></button
                ><span class="bcn-inbox-row__restore" data-inbox-restorewrap="" hidden=""
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-inbox-restore="sea-nesting"
                    >
                      <span class="esa-button__label">Move back to open</span>
                    </button></span
                  ></span
                >
              </li>
              <li
                class="bcn-inbox-row"
                data-inbox-row="mil-dewater"
                data-urgency="aware"
                data-seen="0"
                data-owed="2"
                data-raised="19"
              >
                <button
                  type="button"
                  class="bcn-inbox-row__body"
                  data-inbox-open="mil-dewater"
                  aria-label="Open Dewatering &amp; Fish Salvage Plan approved"
                >
                  <span class="bcn-inbox-row__line"
                    ><span class="bcn-inbox-row__kind"
                      ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                        ><svg
                          width="16"
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
                            d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                          ></path>
                          <line x1="4" x2="4" y1="22" y2="15"></line></svg></span></span
                    ><span class="bcn-inbox-row__what"
                      >Dewatering &amp; Fish Salvage Plan approved</span
                    ><span class="bcn-inbox-row__when">8d ago</span></span
                  ><span class="bcn-inbox-row__meta">Reach 1 — Dewatering</span
                  ><span class="bcn-inbox-row__foot"
                    ><span
                      class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">2 notices owed</span></span
                    ><span class="bcn-inbox-row__raised">19 obligations raised</span
                    ><span class="bcn-inbox-row__seen" data-inbox-seenmark="" hidden=""
                      >Seen</span
                    ></span
                  ></button
                ><span class="bcn-inbox-row__restore" data-inbox-restorewrap="" hidden=""
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-inbox-restore="mil-dewater"
                    >
                      <span class="esa-button__label">Move back to open</span>
                    </button></span
                  ></span
                >
              </li>
              <li
                class="bcn-inbox-row"
                data-inbox-row="sea-inwater"
                data-urgency="aware"
                data-seen="0"
                data-owed="2"
                data-raised="57"
              >
                <button
                  type="button"
                  class="bcn-inbox-row__body"
                  data-inbox-open="sea-inwater"
                  aria-label="Open In-water work window closes in 21 days"
                >
                  <span class="bcn-inbox-row__line"
                    ><span class="bcn-inbox-row__kind"
                      ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                        ><svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          focusable="false"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path></svg></span></span
                    ><span class="bcn-inbox-row__what"
                      >In-water work window closes in 21 days</span
                    ><span class="bcn-inbox-row__when">11d ago</span></span
                  ><span class="bcn-inbox-row__meta">Reaches 1 and 3</span
                  ><span class="bcn-inbox-row__foot"
                    ><span
                      class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">2 notices owed</span></span
                    ><span class="bcn-inbox-row__raised">57 obligations raised</span
                    ><span class="bcn-inbox-row__seen" data-inbox-seenmark="" hidden=""
                      >Seen</span
                    ></span
                  ></button
                ><span class="bcn-inbox-row__restore" data-inbox-restorewrap="" hidden=""
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-inbox-restore="sea-inwater"
                    >
                      <span class="esa-button__label">Move back to open</span>
                    </button></span
                  ></span
                >
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div class="bcn-inbox-workspace__empty" data-inbox-empty="queue-open" hidden="">
        <div class="esa-empty-state esa-empty-state--md">
          <h3 class="esa-empty-state__title typography-label-md-strong">Inbox clear</h3>
          <p class="esa-empty-state__description typography-body-sm">
            Every trigger has been seen. New ones arrive as the field reports them.
          </p>
          <div class="esa-empty-state__actions typography-label-md"></div>
        </div>
      </div>
      <div class="bcn-inbox-workspace__empty" data-inbox-empty="queue-seen" hidden="">
        <div class="esa-empty-state esa-empty-state--md">
          <h3 class="esa-empty-state__title typography-label-md-strong">
            Nothing filed yet
          </h3>
          <p class="esa-empty-state__description typography-body-sm">
            Triggers you mark as seen collect here, and can be moved back to Open.
          </p>
          <div class="esa-empty-state__actions typography-label-md"></div>
        </div>
      </div>
    </div>
    <div class="bcn-inbox-workspace__thread">
      <section
        class="bcn-inbox-thread"
        data-inbox-thread="obs-owl"
        aria-label="Burrowing owl seen on the alignment"
      >
        <header class="bcn-inbox-thread__head">
          <p class="bcn-inbox-thread__kind">
            <span class="bcn-inbox-thread__kind-icon"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
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
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle></svg></span></span
            >Observation · 40m ago
          </p>
          <h2 class="bcn-inbox-thread__what">Burrowing owl seen on the alignment</h2>
          <dl class="bcn-inbox-thread__facts">
            <div>
              <dt>Where</dt>
              <dd>Reach 2 — Canal alignment, station 14+200</dd>
            </div>
            <div>
              <dt>Reported by</dt>
              <dd>M. Okonkwo, Biological Monitor</dd>
            </div>
            <div>
              <dt>Raised</dt>
              <dd>30 obligations</dd>
            </div>
          </dl>
        </header>
        <div class="bcn-inbox-thread__scroll">
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Needs a notice now<span data-inbox-owedbadge="obs-owl"
                ><span
                  class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">5</span></span
                ></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Burrowing owl seen on or near site and not reported
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Immediately</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.109</a
                    ><span class="bcn-inbox-ob__ctitle">BUOW Avoidance</span>
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-026"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-026"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-026</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Nest abandonment or distress not reported to CDFW within 24 hours
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within 24 hours</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-44</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Conduct Preconstruction Surveys and Implement Protective Measures
                      to Avoid Disturbance of Tricolored Blackbird (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-36b</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Conduct Preconstruction Surveys and Implement Protective Measures
                      to Avoid Disturbance of White-Tailed Kite (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-39</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Conduct Preconstruction Surveys and Implement Protective Measures
                      to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-012"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-012"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-012</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Reoccupied blocked burrow not reported to CDFW immediately
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Immediately</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.117</a
                    ><span class="bcn-inbox-ob__ctitle">BUOW Exclusion Activities</span>
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-021"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-021"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-021</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Owl presence changed on site without stop-work and CDFW notice
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock"
                    >Within one business day; within 24 hours when an owl moves on
                    site</span
                  >A notice is owed because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.117</a
                    ><span class="bcn-inbox-ob__ctitle">BUOW Exclusion Activities</span>
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.116</a
                    ><span class="bcn-inbox-ob__ctitle">BUOW Monitoring</span>
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.114</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Non-Disturbance Buffers (BUOW)</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-027"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-027"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-027</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  CDFW representative not contacted within one business day of take or
                  injury
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within one business day</span>A notice
                  is owed because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.103</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >CBB Notification of CBB Take or Injury</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.52</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >CTS - Notification of CTS Take or Injury</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.68</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >GGS - Notification of GGS Take or Injury</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-003"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-003"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-003</span>
                </p>
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Also raised<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">25</span></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Required diverter, wildlife fencing or visual barrier not in place
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-056"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-18 · BIO-53 · BIO-22b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Injured Covered Species not taken to the approved facility
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-003"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.2 · COA 11.52 · COA 11.68</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Work resumed after distress or threshold exceedance without CDFW
                  consultation
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-109"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.33 · COA 11.116</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  One-way doors installed without 48-hour CDFW notice
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">48 hours before</span>Applies to what
                  was seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-042"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.117</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Burrowing owl take or burrow relocation without CDFW mitigation
                  consultation
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Not stated</span>Concerns take or
                  injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-011"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CMP-20</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Construction started before survey results reached CDFW
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock"
                    >At least 5 days before construction</span
                  >Applies to what was seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-040"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CM 6.3.2.1 · BIO-46 · BIO-36b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Annual species survey not repeated for a site still in work
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-085"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.97 · COA 11.42 · COA 11.46</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work continued after a biologist stop-work call
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-061"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-33 · BIO-24a · BIO-22a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Burrows or refugia outside the footprint are damaged or destroyed
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-073"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-17 · COA 11.100 · COA 11.56</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Burrow complex map not updated with new sightings
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-057"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.112</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Burrow blocked or work inside a reduced buffer without the required
                  monitoring
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-070"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.117 · COA 11.116</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Ground disturbance in owl habitat without the 14-day and 24-hour surveys
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-086"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.111 · COA 11.110</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Burrowing owl mitigation acreage short of the phase requirement
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-095"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 12.6</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Daily monitoring record missing or incomplete
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-040"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQ-5 · EC-14 · COA 10.10</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  BUOW exclusion started without an approved Exclusion Activities Plan
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-106"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.117</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Nest, colony or den buffer unmarked or marker down
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-048"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CM 6.3.2.1 · BIO-46 · BIO-36b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Covered Activity within 1,640 ft of an occupied BUOW burrow, Feb 1 to
                  Aug 31
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-028"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.117 · COA 11.113</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  BUOW burrow excluded or excavated outside plan conditions
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-007"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.117 · COA 11.111</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Owl exclusion or buffer reduction without the required monitoring
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-079"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.117 · COA 11.114</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work resumed after a lapse without a repeat clearance survey
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-084"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-21 · BIO-24a · BIO-22a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Rodenticide, poison or trapping used on site or habitat
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-054"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-17 · AMM-14 · BIO-2b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Crew working near buffers without avoidance-procedure training
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-059"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.82 · COA 11.109</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Sensitive species handled by a biologist without the required expertise
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-071"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id"
                    >COA 11.102 · COA 11.105 · COA 11.108</span
                  >
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Vehicles exceed the posted speed limit on non-public roads or sites
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-087"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-17 · AMM-18 · AMM-14</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  One-way burrow doors not checked twice daily or left beyond 72 hours
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-012"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.117</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
        <footer class="bcn-inbox-thread__foot">
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              data-inbox-dismiss="obs-owl"
            >
              <span class="esa-button__label">Mark as seen</span>
            </button></span
          ><span class="bcn-inbox-thread__footnote"
            >The obligations stay in force. Only this notice leaves the inbox.</span
          >
        </footer>
      </section>
      <section
        class="bcn-inbox-thread"
        data-inbox-thread="obs-hawk"
        hidden=""
        aria-label="Injured Swainson’s hawk recovered near a haul road"
      >
        <header class="bcn-inbox-thread__head">
          <p class="bcn-inbox-thread__kind">
            <span class="bcn-inbox-thread__kind-icon"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
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
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle></svg></span></span
            >Observation · 2h ago
          </p>
          <h2 class="bcn-inbox-thread__what">
            Injured Swainson’s hawk recovered near a haul road
          </h2>
          <dl class="bcn-inbox-thread__facts">
            <div>
              <dt>Where</dt>
              <dd>Access Road 14</dd>
            </div>
            <div>
              <dt>Reported by</dt>
              <dd>D. Alvarez, Designated Biologist</dd>
            </div>
            <div>
              <dt>Raised</dt>
              <dd>51 obligations</dd>
            </div>
          </dl>
        </header>
        <div class="bcn-inbox-thread__scroll">
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Needs a notice now<span data-inbox-owedbadge="obs-hawk"
                ><span
                  class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">6</span></span
                ></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Initial take notification to CDFW not made by phone immediately
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Immediately, by phone and email</span
                  >A notice is owed because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.2</a
                    ><span class="bcn-inbox-ob__ctitle">Covered Species Injury</span>
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 10.16</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Notification of Take or Injury/Damage</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-002"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-002"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-002</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Fish injury or distress not reported to the agencies immediately
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Immediately</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1c</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement a Fish Rescue and Salvage Plan</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1a</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement an Underwater Sound Control and Abatement
                      Plan (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >TC-4a</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Title not in the commitment library</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-007"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-007"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-007</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Nest abandonment or distress not reported to CDFW within 24 hours
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within 24 hours</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-44</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Conduct Preconstruction Surveys and Implement Protective Measures
                      to Avoid Disturbance of Tricolored Blackbird (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-36b</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Conduct Preconstruction Surveys and Implement Protective Measures
                      to Avoid Disturbance of White-Tailed Kite (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-39</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Conduct Preconstruction Surveys and Implement Protective Measures
                      to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-012"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-012"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-012</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Special-status species take or death not reported within one working day
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within one working day</span>A notice
                  is owed because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AMM-14</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Construction Best Management Practices for Biological
                      Resources</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >EC-14</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Construction Best Management Practices for Biological Resources
                      (FEIR)</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-006"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-006"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-006</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Take, injury or carcass not reported to the Designated Biologist
                  immediately
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Immediately</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-46</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Conduct Preconstruction Survey for San Joaquin Kit Fox and
                      Implement Avoidance and Minimization Measures (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.103</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >CBB Notification of CBB Take or Injury</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.52</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >CTS - Notification of CTS Take or Injury</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-001"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-001"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-001</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  CDFW representative not contacted within one business day of take or
                  injury
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within one business day</span>A notice
                  is owed because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.103</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >CBB Notification of CBB Take or Injury</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.52</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >CTS - Notification of CTS Take or Injury</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.68</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >GGS - Notification of GGS Take or Injury</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-003"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-003"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-003</span>
                </p>
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Also raised<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">45</span></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Bird strike diverters missing or damaged on transmission lines
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-011"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-22 · BIO-2c · COA 11.17</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Kit fox incident handled without the approved biologist contact
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-063"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-46</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Take-risk work underway without a Designated Biologist or Monitor on
                  site
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-068"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 9.2 · CM 6.3.2.6</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Required diverter, wildlife fencing or visual barrier not in place
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-056"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-18 · BIO-53 · BIO-22b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Injured Covered Species not taken to the approved facility
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-003"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.2 · COA 11.52 · COA 11.68</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Work resumed after distress or threshold exceedance without CDFW
                  consultation
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-109"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.33 · COA 11.116</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Buffer or seasonal restriction breached without CDFW consultation
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Before the breach</span>Applies to
                  what was seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-043"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.59 · COA 11.75 · COA 11.91</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Air monitoring reaches 80% of a standard without corrective action
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-043"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQ-5</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Pile driving without a fish distress watch
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-074"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-26 · AQUA-1a · COA 11.33</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Burrowing owl take or burrow relocation without CDFW mitigation
                  consultation
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Not stated</span>Concerns take or
                  injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-011"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CMP-20</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Ground disturbance began without a clearance survey
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-083"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-24a · BIO-22a · BIO-30</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Work continues while a nesting bird shows distress
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-014"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.75 · COA 11.86</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Construction started before survey results reached CDFW
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock"
                    >At least 5 days before construction</span
                  >Applies to what was seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-040"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CM 6.3.2.1 · BIO-46 · BIO-36b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Take surrogate exceedance not reported to NMFS within 48 hours
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within 48 hours</span>Concerns take or
                  injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-008"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">TC-4a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Nest tree, rookery or nest removed without CDFW approval
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Before removal</span>Applies to what
                  was seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-041"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-35 · BIO-36b · BIO-39</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work continued near a failing nest after the biologist's call
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-062"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-34 · BIO-36a · BIO-44</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Surface construction after daylight within 0.25 mile of intake
                  residences
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-039"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AES-4a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work after daylight within 325 ft of a SWHA nest or 1,300 ft of a TRBL
                  colony
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-040"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-44 · BIO-39</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Dewatering proceeds without the Designated Biologist on site
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-077"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.61</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Dewatering pump running without a screened intake
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-051"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-25 · BIO-24a · BIO-22a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Helicopter operates inside a nest or colony exclusion radius
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-079"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-44 · BIO-36b · BIO-39</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Intake or construction lighting casts lux onto the channel
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-020"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.9</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Intake screen inspection cycle missed</p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-013"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.27 · COA 10.30 · COA 10.29</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Long-term mitigation site monitoring lapses
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-061"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-53 · PH-1b · CMP-9</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Mitigation land crop mix below the required share
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-097"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CMP-18b · CMP-19b · CMP-22b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Woody vegetation removed near a SWHA nest in nesting season
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-026"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.76 · COA 11.71 · COA 11.77</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Nest, colony or den buffer unmarked or marker down
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-048"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CM 6.3.2.1 · BIO-46 · BIO-36b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Activity inside an active nest, den, refuge or roost buffer
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-072"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-14 · AMM-22 · BIO-21</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Occupied nest tree contacted, trimmed or removed before fledging
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-078"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-36b · BIO-39 · COA 11.74</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Occupied raptor nest not observed for the required hours today
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-067"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-36b · BIO-39 · COA 11.75</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Personnel on break or out of vehicles inside a nest or colony buffer
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-080"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.74 · COA 11.78 · COA 11.89</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  ESA stakes or wire not inspected before the workday
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-014a"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.54 · COA 11.10</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Nesting-season work without the species nest or colony survey
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-098"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-33 · BIO-36a · BIO-44</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work within 0.5 mile of a SWHA nest tree in nesting season
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-025"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-36b · BIO-39 · COA 11.74</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Relocation Plan scenario not followed</p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-005"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id"
                    >COA 11.104 · COA 11.106 · COA 11.108</span
                  >
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work resumed after a lapse without a repeat clearance survey
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-084"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-21 · BIO-24a · BIO-22a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Rodenticide, poison or trapping used on site or habitat
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-054"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-17 · AMM-14 · BIO-2b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Bypass flow below the seasonal minimum</p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-004"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.122</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Sensitive species handled by a biologist without the required expertise
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-071"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id"
                    >COA 11.102 · COA 11.105 · COA 11.108</span
                  >
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Surveys or Covered Activities conducted before protocol approval
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-103"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.38</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  In-season field investigation started without a 0.5-mile SWHA nest
                  survey
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-094"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.78</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Replacement nest site missing, unirrigated, or trees not replaced
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-096"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CMP-19b · CMP-19a · COA 12.5</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Replacement nest trees below survival criteria
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-060"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CMP-19a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Vessel engine older than the required model year
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-040"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-10 · EC-10</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Activity outside the delineated work area or off flagged routes
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-047"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-14 · BIO-30 · EC-14</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
        <footer class="bcn-inbox-thread__foot">
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              data-inbox-dismiss="obs-hawk"
            >
              <span class="esa-button__label">Mark as seen</span>
            </button></span
          ><span class="bcn-inbox-thread__footnote"
            >The obligations stay in force. Only this notice leaves the inbox.</span
          >
        </footer>
      </section>
      <section
        class="bcn-inbox-thread"
        data-inbox-thread="obs-barge"
        hidden=""
        aria-label="Barge grounding during a cargo transfer"
      >
        <header class="bcn-inbox-thread__head">
          <p class="bcn-inbox-thread__kind">
            <span class="bcn-inbox-thread__kind-icon"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
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
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle></svg></span></span
            >Observation · 17h ago
          </p>
          <h2 class="bcn-inbox-thread__what">Barge grounding during a cargo transfer</h2>
          <dl class="bcn-inbox-thread__facts">
            <div>
              <dt>Where</dt>
              <dd>Turner Cut Barge Landing</dd>
            </div>
            <div>
              <dt>Reported by</dt>
              <dd>Barge crew (6)</dd>
            </div>
            <div>
              <dt>Raised</dt>
              <dd>16 obligations</dd>
            </div>
          </dl>
        </header>
        <div class="bcn-inbox-thread__scroll">
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Needs a notice now<span data-inbox-owedbadge="obs-barge"
                ><span
                  class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">2</span></span
                ></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Barge grounding, spill or plan deviation not reported the same day
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Same day</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AMM-27</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement a Barge Operations Plan</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1b</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement a Barge Operations Plan (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.36</a
                    ><span class="bcn-inbox-ob__ctitle">Barge Operations Plan</span>
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-016"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-016"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-016</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Invasive species on equipment not reported and quarantined
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within 24 hours</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.36</a
                    ><span class="bcn-inbox-ob__ctitle">Barge Operations Plan</span>
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-033"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-033"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-033</span>
                </p>
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Also raised<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">14</span></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">Vessel wake over 2 ft at shore</p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-085"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-27 · AQUA-1b · COA 11.36</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  In-water work started without waterway agency notice or marina postings
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Before activities begin</span>Applies
                  to what was seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-037"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-16 · EC-16</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Barge-eroded bank not restored</p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-075"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.36</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Barge anchors, grounds, or throws wake over 2 ft at shore
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-074"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-27 · AQUA-1b · COA 11.36</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Vessel operates without the approved plan aboard
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-076"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQUA-1b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Barge operations underway without an approved Barge Operations Plan
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-100"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.36</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Barge pilot operating without a signed plan affidavit
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-051"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-27 · AQUA-1b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Barge loading or unloading proceeds without a monitor
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-073"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-27 · AQUA-1b · COA 11.36</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Equipment enters a site or waterway uncleaned or unlogged
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-077"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-27 · EC-14 · AQUA-1b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Vessel operates without HMMP, SWPPP and SPCC measures
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-060"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-27 · COA 11.36</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Work site or vessel without a spill kit</p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-054"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-27 · AMM-2 · AQUA-1b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Tug or barge operator without environmental measures training
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-052"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQUA-1b · COA 11.36</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Barge site vegetation and bank condition not mapped this growing season
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-056"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQUA-1b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Vessel engine older than the required model year
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-040"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-10 · EC-10</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
        <footer class="bcn-inbox-thread__foot">
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              data-inbox-dismiss="obs-barge"
            >
              <span class="esa-button__label">Mark as seen</span>
            </button></span
          ><span class="bcn-inbox-thread__footnote"
            >The obligations stay in force. Only this notice leaves the inbox.</span
          >
        </footer>
      </section>
      <section
        class="bcn-inbox-thread"
        data-inbox-thread="mil-pile"
        hidden=""
        aria-label="Pile driving began"
      >
        <header class="bcn-inbox-thread__head">
          <p class="bcn-inbox-thread__kind">
            <span class="bcn-inbox-thread__kind-icon"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
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
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                  ></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line></svg></span></span
            >Milestone · Yesterday
          </p>
          <h2 class="bcn-inbox-thread__what">Pile driving began</h2>
          <dl class="bcn-inbox-thread__facts">
            <div>
              <dt>Where</dt>
              <dd>Reach 3 — Intake</dd>
            </div>
            <div>
              <dt>Raised</dt>
              <dd>16 obligations</dd>
            </div>
          </dl>
        </header>
        <div class="bcn-inbox-thread__scroll">
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Needs a notice now<span data-inbox-owedbadge="mil-pile"
                ><span
                  class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">2</span></span
                ></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Pile driving sound exceedance not reported within one business day
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within one business day</span>A notice
                  is owed because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.33</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Underwater Sound Abatement Plan</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-018"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-018"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-018</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Fish injury or distress not reported to the agencies immediately
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Immediately</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1c</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement a Fish Rescue and Salvage Plan</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1a</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement an Underwater Sound Control and Abatement
                      Plan (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >TC-4a</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Title not in the commitment library</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-007"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-007"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-007</span>
                </p>
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Also raised<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">14</span></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Work resumed after distress or threshold exceedance without CDFW
                  consultation
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-109"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.33 · COA 11.116</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Pile driving without a fish distress watch
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-074"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-26 · AQUA-1a · COA 11.33</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Noise limit exceeded without relocation assistance offered
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">On exceedance</span>This work is now
                  underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-023"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">NOI-1</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  In-water work outside the approved work window
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-022"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-14 · AMM-26 · EC-14</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  New TRBL colony adjacent to work without buffer or sound curtain
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-086"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.85</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Vibration treatments on historic buildings not field-checked
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-030"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CUL-1b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Impact pile driving without hydroacoustic monitoring or above sound
                  limits
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-021"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-14 · AQUA-1a · COA 11.33</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Pile driver unshrouded or fixed noise source unenclosed
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-026"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-21 · NOI-1</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Pile driving or local-road hauling outside 7 am to 7 pm
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-021"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-21 · AMM-26 · NOI-1</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Construction near occupied habitat without the pre-start survey series
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-088"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-31 · BIO-34 · BIO-42</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  In-water work underway without an approved sound abatement plan
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-102"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.33</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Underwater sound exceeds 206 dB peak, 187 dB SELcum or 150 dB RMS
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-022"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-26 · AQUA-1a · COA 11.31</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Vibration-generating work near historic buildings without vibration
                  monitoring
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-023"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CUL-1b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Noise over 50 dBA at a crane roost or foraging habitat, Sep 15 to Mar 15
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-024"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-33</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
        <footer class="bcn-inbox-thread__foot">
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              data-inbox-dismiss="mil-pile"
            >
              <span class="esa-button__label">Mark as seen</span>
            </button></span
          ><span class="bcn-inbox-thread__footnote"
            >The obligations stay in force. Only this notice leaves the inbox.</span
          >
        </footer>
      </section>
      <section
        class="bcn-inbox-thread"
        data-inbox-thread="obs-turbid"
        hidden=""
        aria-label="Turbidity above the approved threshold downstream of dewatering"
      >
        <header class="bcn-inbox-thread__head">
          <p class="bcn-inbox-thread__kind">
            <span class="bcn-inbox-thread__kind-icon"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
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
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle></svg></span></span
            >Observation · 4d ago
          </p>
          <h2 class="bcn-inbox-thread__what">
            Turbidity above the approved threshold downstream of dewatering
          </h2>
          <dl class="bcn-inbox-thread__facts">
            <div>
              <dt>Where</dt>
              <dd>Reach 1 — Dewatering</dd>
            </div>
            <div>
              <dt>Reported by</dt>
              <dd>Field technician</dd>
            </div>
            <div>
              <dt>Raised</dt>
              <dd>20 obligations</dd>
            </div>
          </dl>
        </header>
        <div class="bcn-inbox-thread__scroll">
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Needs a notice now<span data-inbox-owedbadge="obs-turbid"
                ><span
                  class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">1</span></span
                ></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Pile driving sound exceedance not reported within one business day
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within one business day</span>A notice
                  is owed because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.33</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Underwater Sound Abatement Plan</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-018"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-018"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-018</span>
                </p>
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Also raised<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">19</span></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  PM or NO2 increment exceedance not reported to the air district
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Not stated</span>Applies to what was
                  seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-022"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQ-5</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Work resumed after distress or threshold exceedance without CDFW
                  consultation
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-109"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.33 · COA 11.116</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Air monitoring reaches 80% of a standard without corrective action
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-043"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQ-5</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Monitored parameter exceeds its ECMP limit without report
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Not stated</span>Applies to what was
                  seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-017"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.11</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Projected impact exceedance not reported to CDFW
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Not stated</span>Applies to what was
                  seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-020"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.9</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Noise limit exceeded without relocation assistance offered
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">On exceedance</span>Applies to what
                  was seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-023"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">NOI-1</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Stormwater sampling exceedance not filed within the deadline
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within 10 days after the storm</span
                  >Applies to what was seen here
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-019"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-4b · EC-4b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Take surrogate exceedance not reported to NMFS within 48 hours
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within 48 hours</span>Concerns take or
                  injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-008"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">TC-4a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Earth-moving started without erosion and sediment controls in place
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-052"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-4a · EC-4a · COA 11.26</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Fence-line air quality monitoring not running at a modeled exceedance
                  site
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-028"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQ-5</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Impact pile driving without hydroacoustic monitoring or above sound
                  limits
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-021"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-14 · AQUA-1a · COA 11.33</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  pH and turbidity not sampled during qualifying rain at a Risk Level 2 or
                  3 site
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-024"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-4b · EC-4b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Pile driver unshrouded or fixed noise source unenclosed
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-026"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-21 · NOI-1</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Clearing continues under a rain forecast above threshold
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-019"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-24a · BIO-22a · BIO-23</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Restoration site below 70% survivorship or above 5% invasives
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-091"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.19 · COA 12.3</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Operations water quality monitoring element not running
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-027"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.20</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  pH outside 6.5 to 8.5 or turbidity above 250 NTU without BMP change
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-073"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-4b · EC-4b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Underwater sound exceeds 206 dB peak, 187 dB SELcum or 150 dB RMS
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-022"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-26 · AQUA-1a · COA 11.31</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Well decline exceeds the threshold without reinjection or supply
                </p>
                <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-082"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">GW-1</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
        <footer class="bcn-inbox-thread__foot">
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              data-inbox-dismiss="obs-turbid"
            >
              <span class="esa-button__label">Mark as seen</span>
            </button></span
          ><span class="bcn-inbox-thread__footnote"
            >The obligations stay in force. Only this notice leaves the inbox.</span
          >
        </footer>
      </section>
      <section
        class="bcn-inbox-thread"
        data-inbox-thread="sea-nesting"
        hidden=""
        aria-label="Nesting season opened"
      >
        <header class="bcn-inbox-thread__head">
          <p class="bcn-inbox-thread__kind">
            <span class="bcn-inbox-thread__kind-icon"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span></span
            >Season · 7d ago
          </p>
          <h2 class="bcn-inbox-thread__what">Nesting season opened</h2>
          <dl class="bcn-inbox-thread__facts">
            <div>
              <dt>Where</dt>
              <dd>Project-wide</dd>
            </div>
            <div>
              <dt>Raised</dt>
              <dd>40 obligations</dd>
            </div>
          </dl>
        </header>
        <div class="bcn-inbox-thread__scroll">
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Needs a notice now<span data-inbox-owedbadge="sea-nesting"
                ><span
                  class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">3</span></span
                ></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Crotch bumble bee sighting or nest not reported within 24 hours
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within 24 hours</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-21</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Avoid and Minimize Impacts on Bumble Bees (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.94</a
                    ><span class="bcn-inbox-ob__ctitle">CBB Avoidance</span>
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.99</a
                    ><span class="bcn-inbox-ob__ctitle">CBB Daily Monitoring</span>
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-028"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-028"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-028</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Nest abandonment or distress not reported to CDFW within 24 hours
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within 24 hours</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-44</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Conduct Preconstruction Surveys and Implement Protective Measures
                      to Avoid Disturbance of Tricolored Blackbird (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-36b</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Conduct Preconstruction Surveys and Implement Protective Measures
                      to Avoid Disturbance of White-Tailed Kite (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >BIO-39</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Conduct Preconstruction Surveys and Implement Protective Measures
                      to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-012"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-012"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-012</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Owl presence changed on site without stop-work and CDFW notice
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock"
                    >Within one business day; within 24 hours when an owl moves on
                    site</span
                  >A notice is owed because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.117</a
                    ><span class="bcn-inbox-ob__ctitle">BUOW Exclusion Activities</span>
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.116</a
                    ><span class="bcn-inbox-ob__ctitle">BUOW Monitoring</span>
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.114</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Non-Disturbance Buffers (BUOW)</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-027"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-027"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-027</span>
                </p>
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Also raised<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">37</span></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Work continues while a nesting bird shows distress
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-014"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.75 · COA 11.86</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Construction started before survey results reached CDFW
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock"
                    >At least 5 days before construction</span
                  >Its season is now in effect
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-040"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CM 6.3.2.1 · BIO-46 · BIO-36b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Nest tree, rookery or nest removed without CDFW approval
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Before removal</span>Its season is now
                  in effect
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-041"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-35 · BIO-36b · BIO-39</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work near an active nest without monitoring until fledging
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-069a"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-35 · BIO-34 · BIO-36a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Activity within 1,300 ft of an active TRBL colony in nesting season
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-027"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-44 · COA 11.82 · COA 11.89</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work continued near a failing nest after the biologist's call
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-062"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-34 · BIO-36a · BIO-44</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work within 500 ft of rail habitat in breeding season or at extreme high
                  tide
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-031"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-32</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Bumble bee nest present without full-time monitoring
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-071"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-21 · COA 11.99 · COA 11.102</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Ground disturbance in owl habitat without the 14-day and 24-hour surveys
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-086"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.111 · COA 11.110</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work after daylight within 325 ft of a SWHA nest or 1,300 ft of a TRBL
                  colony
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-040"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-44 · BIO-39</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work near unfenced CTS breeding sites started without a forecast check
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-018"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.45</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Golden eagle surveys started without a records review
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-097"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-37</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Helicopter operates inside a nest or colony exclusion radius
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-079"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-44 · BIO-36b · BIO-39</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Construction in occupied least tern habitat in nesting season
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-033"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-34 · CM 6.3.2.2</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Woody vegetation removed near a SWHA nest in nesting season
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-026"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.76 · COA 11.71 · COA 11.77</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Nest, colony or den buffer unmarked or marker down
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-048"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CM 6.3.2.1 · BIO-46 · BIO-36b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Noisy work started in breeding season within 500 ft of a calling center
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-025"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-32</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Activity inside an active nest, den, refuge or roost buffer
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-072"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-14 · AMM-22 · BIO-21</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Covered Activity within 1,640 ft of an occupied BUOW burrow, Feb 1 to
                  Aug 31
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-028"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.117 · COA 11.113</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Occupied nest tree contacted, trimmed or removed before fledging
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-078"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-36b · BIO-39 · COA 11.74</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Occupied raptor nest not observed for the required hours today
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-067"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-36b · BIO-39 · COA 11.75</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Personnel on break or out of vehicles inside a nest or colony buffer
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-080"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.74 · COA 11.78 · COA 11.89</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Construction near occupied habitat without the pre-start survey series
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-088"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-31 · BIO-34 · BIO-42</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Nesting-season work without the species nest or colony survey
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-098"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-33 · BIO-36a · BIO-44</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Nesting-season work without preconstruction nesting surveys
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-089"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-35 · BIO-36a · BIO-32</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work within 0.5 mile of a SWHA nest tree in nesting season
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-025"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-36b · BIO-39 · COA 11.74</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work within 50 ft of a Crotch bumble bee nest
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-008"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id"
                    >COA 11.94 · COA 11.102 · COA 11.98</span
                  >
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work inside suitable TRBL nesting or roosting habitat without approval
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-081"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.85 · COA 11.87</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  In-season field investigation started without a 0.5-mile SWHA nest
                  survey
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-094"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.78</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Replacement nest site missing, unirrigated, or trees not replaced
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-096"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CMP-19b · CMP-19a · COA 12.5</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Replacement nest trees below survival criteria
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-060"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CMP-19a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work within 300 ft of CTS breeding habitat south of Byron Highway in
                  breeding season
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-038"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-22a · COA 11.40 · CM 6.3.2.6</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Active colony or roost not monitored for the required hours
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-068"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-44 · COA 11.86 · COA 11.88</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Breeding-season start without the 15-day survey series
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-090"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-44 · COA 11.83 · COA 11.84</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">TRBL nesting stands not maintained</p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-098"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CMP-22a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Upland disturbance near pond turtle habitat started in nesting season
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-024"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-25 · CM 6.3.2.10</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Vegetation removed or trimmed in the nesting or flight season
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-034"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-35 · BIO-18 · BIO-36a</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
        <footer class="bcn-inbox-thread__foot">
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              data-inbox-dismiss="sea-nesting"
            >
              <span class="esa-button__label">Mark as seen</span>
            </button></span
          ><span class="bcn-inbox-thread__footnote"
            >The obligations stay in force. Only this notice leaves the inbox.</span
          >
        </footer>
      </section>
      <section
        class="bcn-inbox-thread"
        data-inbox-thread="mil-dewater"
        hidden=""
        aria-label="Dewatering &amp; Fish Salvage Plan approved"
      >
        <header class="bcn-inbox-thread__head">
          <p class="bcn-inbox-thread__kind">
            <span class="bcn-inbox-thread__kind-icon"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
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
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                  ></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line></svg></span></span
            >Milestone · 8d ago
          </p>
          <h2 class="bcn-inbox-thread__what">
            Dewatering &amp; Fish Salvage Plan approved
          </h2>
          <dl class="bcn-inbox-thread__facts">
            <div>
              <dt>Where</dt>
              <dd>Reach 1 — Dewatering</dd>
            </div>
            <div>
              <dt>Raised</dt>
              <dd>19 obligations</dd>
            </div>
          </dl>
        </header>
        <div class="bcn-inbox-thread__scroll">
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Needs a notice now<span data-inbox-owedbadge="mil-dewater"
                ><span
                  class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">2</span></span
                ></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Fish-isolating work started without 7-day notice or rescue results
                  unreported
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock"
                    >7 days before; results within one business day of salvage
                    completion</span
                  >A notice is owed because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1c</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement a Fish Rescue and Salvage Plan</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.37</a
                    ><span class="bcn-inbox-ob__ctitle">Dewatering Plan</span>
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.35</a
                    ><span class="bcn-inbox-ob__ctitle">Fish Salvage Plan</span>
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-038"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-038"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-038</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Fish injury or distress not reported to the agencies immediately
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Immediately</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1c</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement a Fish Rescue and Salvage Plan</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1a</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement an Underwater Sound Control and Abatement
                      Plan (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >TC-4a</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Title not in the commitment library</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-007"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-007"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-007</span>
                </p>
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Also raised<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">17</span></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  In-water work outside the approved work window
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-022"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-14 · AMM-26 · EC-14</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Dewatering proceeds without a biologist on site
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-066"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-24a · BIO-30 · COA 11.61</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Dewatering proceeds without the Designated Biologist on site
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-077"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.61</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Dewatering or salvage underway without an approved plan
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-101"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.37 · COA 11.35</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Dewatering pump running without a screened intake
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-051"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-25 · BIO-24a · BIO-22a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Fish salvage record missing</p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-050a"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.35</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Dewatering completed without fish inspection and rescue records
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-047"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQUA-1c · COA 11.37</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Fish rescue worker on site without safety training
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-058"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQUA-1c · COA 11.35</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Stranded fish not salvaged within 48 hours
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-012"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQUA-1c · COA 11.35</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Groundwater monitoring missed at an active dewatering site
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-025"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">GW-1</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Non-stormwater discharge reaches surface water or storm drains
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-071"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-4b · EC-4b · COA 11.25</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work or dewatering in occupied aquatic habitat before clearance
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-078"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-25 · BIO-24a · BIO-22a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Fish rescue or salvage without a permitted Designated Fisheries
                  Biologist
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-073"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AQUA-1c · COA 11.35 · COA 10.22</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Dewatering pump unscreened in pond turtle habitat
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-063"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">CM 6.3.2.10</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Pump keeps running with a snake at the screen
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-080"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.61</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work continues after suspected soil or groundwater contamination
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-063"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">HAZ-2</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Well decline exceeds the threshold without reinjection or supply
                </p>
                <p class="bcn-inbox-ob__why">
                  This work is now underway, so the duty applies
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-082"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">GW-1</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
        <footer class="bcn-inbox-thread__foot">
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              data-inbox-dismiss="mil-dewater"
            >
              <span class="esa-button__label">Mark as seen</span>
            </button></span
          ><span class="bcn-inbox-thread__footnote"
            >The obligations stay in force. Only this notice leaves the inbox.</span
          >
        </footer>
      </section>
      <section
        class="bcn-inbox-thread"
        data-inbox-thread="sea-inwater"
        hidden=""
        aria-label="In-water work window closes in 21 days"
      >
        <header class="bcn-inbox-thread__head">
          <p class="bcn-inbox-thread__kind">
            <span class="bcn-inbox-thread__kind-icon"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span></span
            >Season · 11d ago
          </p>
          <h2 class="bcn-inbox-thread__what">In-water work window closes in 21 days</h2>
          <dl class="bcn-inbox-thread__facts">
            <div>
              <dt>Where</dt>
              <dd>Reaches 1 and 3</dd>
            </div>
            <div>
              <dt>Raised</dt>
              <dd>57 obligations</dd>
            </div>
          </dl>
        </header>
        <div class="bcn-inbox-thread__scroll">
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Needs a notice now<span data-inbox-owedbadge="sea-inwater"
                ><span
                  class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">2</span></span
                ></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Fish-isolating work started without 7-day notice or rescue results
                  unreported
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock"
                    >7 days before; results within one business day of salvage
                    completion</span
                  >A notice is owed because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1c</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement a Fish Rescue and Salvage Plan</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.37</a
                    ><span class="bcn-inbox-ob__ctitle">Dewatering Plan</span>
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >COA 11.35</a
                    ><span class="bcn-inbox-ob__ctitle">Fish Salvage Plan</span>
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-038"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-038"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-038</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="now">
                <p class="bcn-inbox-ob__cond">
                  Fish injury or distress not reported to the agencies immediately
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Immediately</span>A notice is owed
                  because of this
                </p>
                <ul class="bcn-inbox-ob__drivers">
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1c</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement a Fish Rescue and Salvage Plan</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >AQUA-1a</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Develop and Implement an Underwater Sound Control and Abatement
                      Plan (FEIR)</span
                    >
                  </li>
                  <li>
                    <a class="bcn-inbox-ob__code" href="#data-catalog/commitments"
                      >TC-4a</a
                    ><span class="bcn-inbox-ob__ctitle"
                      >Title not in the commitment library</span
                    >
                  </li>
                </ul>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-007"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__verb"
                    ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-inbox-file="4-007"
                        >
                          <span class="esa-button__label">Mark filed</span>
                        </button></span
                      ></span
                    ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                      >Filed</span
                    ></span
                  ><span class="bcn-inbox-ob__id">4-007</span>
                </p>
              </li>
            </ul>
          </section>
          <section class="bcn-inbox-thread__group">
            <h3 class="bcn-inbox-thread__grouphead">
              Also raised<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">55</span></span
              >
            </h3>
            <ul class="bcn-inbox-obs">
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Work resumed after distress or threshold exceedance without CDFW
                  consultation
                </p>
                <p class="bcn-inbox-ob__why">
                  Concerns take or injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-109"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.33 · COA 11.116</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Operations data or screen outage not reported within the window
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within 72 hours</span>Its season is
                  now in effect
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-047"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id"
                    >COA 10.27 · COA 11.122 · COA 11.120</span
                  >
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  In-water maintenance without 60-day CDFW notice and approval
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">60 days before</span>Its season is now
                  in effect
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-039"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.31</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Monitored parameter exceeds its ECMP limit without report
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Not stated</span>Its season is now in
                  effect
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-017"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.11</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  Take surrogate exceedance not reported to NMFS within 48 hours
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Within 48 hours</span>Concerns take or
                  injury, so it applies the moment this happened
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-008"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">TC-4a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="soon">
                <p class="bcn-inbox-ob__cond">
                  In-water work started without waterway agency notice or marina postings
                </p>
                <p class="bcn-inbox-ob__why">
                  <span class="bcn-inbox-ob__clock">Before activities begin</span>Its
                  season is now in effect
                </p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/4-037"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-16 · EC-16</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  GGS habitat disturbed outside the May 1 to Oct 1 window
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-023"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-30 · COA 11.61 · COA 11.60</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  In-water work outside the approved work window
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-022"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-14 · AMM-26 · EC-14</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Mercury monitoring not conducted in a year with in-water work
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-026"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-23 · WQ-6 · COA 11.30</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Bathymetric survey not run after a qualifying high-flow event
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-031"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.23</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Biological criteria exceeded for a Covered Fish Species
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-011"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id"
                    >COA 11.126 · COA 11.128 · COA 11.127</span
                  >
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work within 500 ft of rail habitat in breeding season or at extreme high
                  tide
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-031"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-32</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Channel work disturbs banks or exceeds the permitted method
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-079"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.60 · COA 11.57</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  CCWD interconnection capacity below 18,000 acre-feet per year
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-114"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">WQ-4</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Combined diversions exceed 10,350 cfs daily average
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-009"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.125 · COA 11.123</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  A scheduled fish monitoring element is not running
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-032"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.18 · COA 10.21 · COA 10.19</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Barge loading or unloading proceeds without a monitor
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-073"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-27 · AQUA-1b · COA 11.36</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  In-water equipment not checked daily for leaks
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-044"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-3 · EC-3 · COA 11.22</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Dewatering pump running without a screened intake
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-051"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-25 · BIO-24a · BIO-22a</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Diversion concentrated on the minimum number of screens
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-003"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.120</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Equipment enters a site or waterway uncleaned or unlogged
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-077"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-27 · EC-14 · AQUA-1b</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Screen approach or sweeping velocity outside criteria
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-002"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.120</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Fish screen retest lapses after a qualifying change
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-035a"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.27</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Diversion through a fish screen unit not meeting criteria
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-001"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.120</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Diversion exceeds the flow-tier percentage
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-005"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.122</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Food web baseline shorter than five years before Phase 1
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-034"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.21</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Diversions cause avoidable Georgiana Slough flow reversal
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-013"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.21</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Impact pile driving without hydroacoustic monitoring or above sound
                  limits
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-021"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-14 · AQUA-1a · COA 11.33</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  In-water baseline or velocity testing lapses
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-038"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.18 · COA 11.120</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Intake or construction lighting casts lux onto the channel
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-020"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.9</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Intake screen inspection cycle missed</p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-013"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.27 · COA 10.30 · COA 10.29</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Equipment entered a site or waterway without an invasive species
                  inspection
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-043"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-14 · EC-14 · COA 11.36</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  June criteria applied before salmon off-ramp met
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-006"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.122</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Operations depart from the LFS distribution scenario
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-015"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 12.7</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Mason's lilaeopsis removed or worked without buffers
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-082"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.107 · COA 11.106</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  North Delta diversion in balanced conditions outside shifting limits
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-008"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.124</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Equipment enters water without booms or with external petroleum
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-050"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-3 · EC-3 · COA 11.22</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Operations data not shared with CDFW after QA/QC
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-012"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 7.1 · COA 11.124</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Operations depart from the resolved NDDMT/WOMT decision
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-007"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.122</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Phase 1 diversion exceeds test limits</p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-010"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.121</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Work within 100 ft of water during rain above 0.25 in or a 30 percent
                  forecast
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/2-020"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.27 · COA 11.58 · COA 11.13</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Real-time data feed to CDFW lapses</p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-035b"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.20</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Riparian corridor or canopy broken by construction
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-113"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">BIO-53</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Bypass flow below the seasonal minimum</p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-004"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.122</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Sediment monitoring at the north Delta diversion stops before five years
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-036"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">EC-15</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Operations water quality monitoring element not running
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-027"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.20</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  In-water work underway without an approved sound abatement plan
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-102"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.33</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Spoils or dredged material placed where runoff reaches habitat
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-081"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 11.16 · COA 11.60</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Salinity Control Gates not operated on the additional days
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-017"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 12.7</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Telemetry or sonar equipment out of service
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-014"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.19</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">Telemetry tagging season missed</p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/3-033"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">COA 10.19</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Fish tissue mercury above reference without adaptive management
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-083"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-23 · WQ-6</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Underwater sound exceeds 206 dB peak, 187 dB SELcum or 150 dB RMS
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-022"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-26 · AQUA-1a · COA 11.31</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Vessel engine older than the required model year
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-040"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-10 · EC-10</span>
                </p>
              </li>
              <li class="bcn-inbox-ob" data-urgency="aware">
                <p class="bcn-inbox-ob__cond">
                  Overwater concrete without watertight forms or mud tracked off site
                </p>
                <p class="bcn-inbox-ob__why">Its season is now in effect</p>
                <p class="bcn-inbox-ob__acts">
                  <a
                    class="bcn-inbox-ob__link"
                    href="/beacon-design/prototypes/data-catalog-obligation/1-072"
                    >Open the obligation</a
                  ><span class="bcn-inbox-ob__id">AMM-4a · EC-4a · COA 11.26</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
        <footer class="bcn-inbox-thread__foot">
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              data-inbox-dismiss="sea-inwater"
            >
              <span class="esa-button__label">Mark as seen</span>
            </button></span
          ><span class="bcn-inbox-thread__footnote"
            >The obligations stay in force. Only this notice leaves the inbox.</span
          >
        </footer>
      </section>
      <div class="bcn-inbox-workspace__empty" data-inbox-empty="thread-open" hidden="">
        <div class="esa-empty-state esa-empty-state--md">
          <h3 class="esa-empty-state__title typography-label-md-strong">
            Nothing left to read
          </h3>
          <p class="esa-empty-state__description typography-body-sm">
            The obligations these triggers raised are all still in force — the registry
            has them.
          </p>
          <div class="esa-empty-state__actions typography-label-md"></div>
        </div>
      </div>
      <div class="bcn-inbox-workspace__empty" data-inbox-empty="thread-seen" hidden="">
        <div class="esa-empty-state esa-empty-state--md">
          <h3 class="esa-empty-state__title typography-label-md-strong">
            No filed triggers
          </h3>
          <p class="esa-empty-state__description typography-body-sm">
            Mark a trigger as seen and it appears here with everything it raised.
          </p>
          <div class="esa-empty-state__actions typography-label-md"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Styles
```css
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.sidebar-toggle {
  border-radius: var(--spacing-050);
  width: 32px;
  height: 32px;
  color: var(--bcn-gray-600);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition:
    background 0.15s,
    color 0.15s;
  display: flex;
}
.sidebar-toggle:hover {
  background: var(--bcn-gray-200);
  color: var(--color-background-brand);
}
.sidebar-toggle:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.sidebar-toggle__icon {
  transition: transform 0.15s;
}
.sidebar-toggle--collapsed .sidebar-toggle__icon {
  transform: scaleX(-1);
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
.sidebar-header {
  padding: var(--spacing-300) var(--spacing-400);
  flex-shrink: 0;
  transition: padding 0.2s ease-in-out;
}
.side-nav.collapsed .sidebar-header {
  padding: var(--spacing-300) var(--spacing-200);
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
.bcn-inbox-queue {
  flex-direction: column;
  block-size: 100%;
  min-block-size: 0;
  display: flex;
}
.bcn-inbox-queue__head {
  gap: var(--spacing-200);
  padding: var(--spacing-250) var(--spacing-300);
  border-block-end: 1px solid var(--color-border-default);
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}
.bcn-inbox-queue__lede {
  color: var(--bcn-content-muted);
  font-variant-numeric: tabular-nums;
  margin: 0;
  font-size: 0.8125rem;
}
.bcn-inbox-queue__keys {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--bcn-content-muted);
  margin: 0;
  font-size: 0.75rem;
  display: flex;
}
.bcn-inbox-queue__keys kbd {
  font-family: var(--typography-font-family-mono);
  padding: 0 var(--spacing-100);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  font-size: 0.6875rem;
}
.bcn-inbox-queue__scroll {
  flex: 1;
  min-block-size: 0;
  overflow-y: auto;
}
.bcn-inbox-queue__bucket {
  padding: var(--spacing-150) var(--spacing-300);
  background: var(--color-background-elevation-sunken);
  border-block-end: 1px solid var(--color-border-default);
  font-size: 0.75rem;
  font-weight: var(--typography-font-weight-semibold);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--bcn-content-muted);
  z-index: 1;
  margin: 0;
  position: sticky;
  inset-block-start: 0;
}
.bcn-inbox-queue__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-inbox-row {
  border-block-end: 1px solid var(--color-border-subtle, var(--color-border-default));
}
.bcn-inbox-row__body {
  inline-size: 100%;
  padding: var(--spacing-250) var(--spacing-300);
  font: inherit;
  color: inherit;
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-inbox-row__body:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-inbox-row__body:focus-visible {
  outline: 2px solid var(--color-background-brand-muted);
  outline-offset: -2px;
}
.bcn-inbox-row[aria-current="true"] .bcn-inbox-row__body {
  background: var(--color-background-brand-subtle);
}
.bcn-inbox-row__line {
  align-items: baseline;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-inbox-row__kind {
  color: var(--bcn-content-muted);
  flex-shrink: 0;
  transform: translateY(2px);
}
.bcn-inbox-row__what {
  min-inline-size: 0;
  font-size: 0.9375rem;
  line-height: 1.35;
  font-weight: var(--typography-font-weight-medium);
  flex: 1;
}
.bcn-inbox-row[data-urgency="now"] .bcn-inbox-row__what {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-inbox-row__when {
  color: var(--bcn-content-muted);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  font-size: 0.75rem;
}
.bcn-inbox-row__meta {
  color: var(--bcn-content-muted);
  padding-inline-start: calc(var(--spacing-200) + 16px);
  font-size: 0.8125rem;
}
.bcn-inbox-row__foot {
  align-items: center;
  gap: var(--spacing-200);
  margin-block-start: var(--spacing-100);
  padding-inline-start: calc(var(--spacing-200) + 16px);
  display: flex;
}
.bcn-inbox-row__raised {
  color: var(--bcn-content-muted);
  font-variant-numeric: tabular-nums;
  font-size: 0.75rem;
}
.bcn-inbox-row__seen {
  padding: 1px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  color: var(--bcn-content-muted);
  font-size: 0.75rem;
}
.bcn-inbox-row[data-seen="1"] .bcn-inbox-row__what {
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-secondary);
}
.bcn-inbox-row__restore:not([hidden]) {
  padding: 0 var(--spacing-300) var(--spacing-250)
    calc(var(--spacing-300) + var(--spacing-200) + 16px);
  display: block;
}
.bcn-inbox-thread {
  flex-direction: column;
  block-size: 100%;
  min-block-size: 0;
  display: flex;
}
.bcn-inbox-thread__head {
  padding: var(--spacing-300);
  border-block-end: 1px solid var(--color-border-default);
}
.bcn-inbox-thread__kind {
  align-items: center;
  gap: var(--spacing-150);
  margin: 0 0 var(--spacing-150);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--bcn-content-muted);
  font-size: 0.75rem;
  display: flex;
}
.bcn-inbox-thread__what {
  margin: 0 0 var(--spacing-250);
  font-size: 1.25rem;
  line-height: 1.25;
  font-weight: var(--typography-font-weight-semibold);
  text-wrap: balance;
}
.bcn-inbox-thread__facts {
  gap: var(--spacing-200) var(--spacing-500);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.bcn-inbox-thread__facts dt {
  color: var(--bcn-content-muted);
  font-size: 0.75rem;
}
.bcn-inbox-thread__facts dd {
  margin: 0;
  font-size: 0.875rem;
}
.bcn-inbox-thread__scroll {
  min-block-size: 0;
  padding: var(--spacing-300);
  gap: var(--spacing-500);
  flex-direction: column;
  flex: 1;
  display: flex;
  overflow-y: auto;
}
.bcn-inbox-thread__grouphead {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-200);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  display: flex;
}
.bcn-inbox-thread__none {
  color: var(--bcn-content-muted);
  margin: 0;
  font-size: 0.875rem;
}
.bcn-inbox-obs {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-inbox-ob {
  padding: var(--spacing-250);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
}
.bcn-inbox-ob[data-urgency="now"] {
  background: var(--color-background-utility-danger-subtle, #fbeceb);
  border-color: var(--color-border-utility-danger, #e8bdb8);
}
.bcn-inbox-ob[data-urgency="aware"] {
  border-color: var(--color-border-subtle, var(--color-border-default));
}
.bcn-inbox-ob__cond {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.4;
}
.bcn-inbox-ob[data-urgency="now"] .bcn-inbox-ob__cond {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-inbox-ob[data-urgency="aware"] .bcn-inbox-ob__cond {
  color: var(--color-content-default-secondary);
  font-size: 0.875rem;
}
.bcn-inbox-ob__why {
  align-items: baseline;
  gap: var(--spacing-150);
  margin: var(--spacing-100) 0 0;
  color: var(--bcn-content-muted);
  flex-wrap: wrap;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-inbox-ob__clock {
  padding: 1px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised, #fff);
  border: 1px solid var(--color-border-utility-danger, #e8bdb8);
  color: var(--color-content-utility-danger, #a8342a);
  font-weight: var(--typography-font-weight-medium);
  font-size: 0.75rem;
}
.bcn-inbox-ob__drivers {
  margin: var(--spacing-200) 0 0;
  gap: var(--spacing-100);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-inbox-ob__drivers li {
  flex-direction: column;
  gap: 1px;
  display: flex;
}
.bcn-inbox-ob__code {
  font-variant-numeric: tabular-nums;
  color: var(--color-content-link);
  font-size: 0.75rem;
}
.bcn-inbox-ob__ctitle {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
  line-height: 1.35;
}
.bcn-inbox-ob__acts {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  margin: var(--spacing-200) 0 0;
  display: flex;
}
.bcn-inbox-ob__verb {
  align-items: center;
  gap: var(--spacing-200);
  margin-inline-start: auto;
  display: flex;
}
.bcn-inbox-ob__filewrap:not([hidden]) {
  display: inline-flex;
}
.bcn-inbox-ob__filed {
  padding: 1px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-utility-success-subtle, #eef5f4);
  color: var(--color-content-utility-success, #2e7571);
  font-size: 0.75rem;
  font-weight: var(--typography-font-weight-medium);
}
.bcn-inbox-ob[data-filed="1"] {
  border-color: var(--color-border-default);
  background: 0 0;
}
.bcn-inbox-ob[data-filed="1"] .bcn-inbox-ob__cond {
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-secondary);
}
.bcn-inbox-ob[data-filed="1"] .bcn-inbox-ob__clock {
  background: var(--color-background-elevation-sunken);
  border-color: var(--color-border-default);
  color: var(--bcn-content-muted);
}
.bcn-inbox-ob__link {
  color: var(--color-content-link);
  font-size: 0.8125rem;
}
.bcn-inbox-ob__id {
  font-variant-numeric: tabular-nums;
  color: var(--bcn-content-muted);
  font-size: 0.75rem;
}
.bcn-inbox-thread__foot {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-300);
  border-block-start: 1px solid var(--color-border-default);
  display: flex;
}
.bcn-inbox-thread__footnote {
  color: var(--bcn-content-muted);
  font-size: 0.8125rem;
}
.bcn-inbox-workspace {
  --_frame: 44rem;
}
.bcn-inbox-workspace__panes {
  --sidebar-width: 24rem;
  --sidebar-content-min: 52%;
  align-items: stretch;
}
.bcn-inbox-workspace__queue,
.bcn-inbox-workspace__thread {
  block-size: var(--_frame);
  background: var(--color-background-elevation-raised, #fff);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  min-block-size: 0;
  overflow: hidden;
}
.bcn-inbox-workspace__empty:not([hidden]) {
  block-size: 100%;
  padding: var(--spacing-500);
  place-items: center;
  display: grid;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.sidebar {
  --gap: var(--spacing-500, 1.5rem);
  --sidebar-width: 18rem;
  --sidebar-content-min: 60%;
  gap: var(--gap);
  flex-wrap: wrap;
  display: flex;
}
.sidebar > :first-child {
  flex-basis: var(--sidebar-width);
  flex-grow: 1;
}
.sidebar > :last-child {
  min-inline-size: var(--sidebar-content-min);
  flex-grow: 999;
  flex-basis: 0;
}
.sidebar[data-side="end"] > :first-child {
  order: 2;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #43608a _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-200`: #dcdcdc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-600`: #656565 _(component)_
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
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
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
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-subtle`: #efefef _(component)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
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
- `--spacing-800`: 4rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
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
