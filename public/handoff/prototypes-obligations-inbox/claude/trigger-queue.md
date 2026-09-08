# Trigger queue

The left pane: every trigger that has fired, grouped into relative date buckets (Today / Yesterday / Earlier this week / Older) and sorted by urgency then recency. A row states what happened, where, when, how many notices it owes and how many obligations it raised.

## Key decisions
- A TRIGGER IS THE ROW, NOT AN OBLIGATION. Eight triggers stand in front of 180 distinct obligations. The alternative — one row per obligation — is how an inbox becomes a registry with a different heading.
- THE ROW REPORTS, IT DOES NOT ACT. There is no dismiss on the queue, which is the rule the Evidence Inbox set: a one-click clear off a list is the fastest way to close something without reading why it was raised. Verbs live in the thread.
- URGENCY IS DERIVED AND IT DECAYS. Two signals, both named by the team and both computable from the registry: a strict notice deadline (26 of the 50 Notify rows are owed in a day or less) and take or injury (20 rows). A trigger inherits the strongest signal among the obligations it raised — but only while the clock is still running. Without the decay all eight triggers ranked "now" and the signal carried nothing.
- Only the row with an open clock gets the heavier title. Selection is a filled row, never a coloured left border — the house design principles ban that as a status device, and here it would compete with the urgency weight.
- Bucket headings are sticky so the date context survives scrolling, and a bucket hides with its last row rather than leaving a heading floating over nothing.

## Gotchas
- THE OPEN / SEEN PIVOT AND THE RESTORE VERB. Seen is where a trigger goes when it is marked as seen, so nothing ever leaves without somewhere to find it again. "Move back to open" is the one verb allowed on a row, and only in the Seen view: undoing a filing decides nothing, and forcing someone to open a thread to undo a mis-click punishes the mistake.
- BOTH EMPTY STATES ARE VIEW-AWARE and both are server-rendered. An empty Open list means the work is done; an empty Seen list means nothing has been filed yet. Sharing one message told people "every trigger has been seen" while the inbox was still full.
- KEYBOARD: ArrowUp/ArrowDown (and j/k) move between rows, e marks the open thread seen, and the shortcuts are printed in the queue head because an inbox nobody knows is keyboard-navigable is one nobody navigates with the keyboard. Two traps here — the event target is NOT always an Element (a keypress with nothing focused targets the document, and calling closest() on it throws, which silently kills every shortcut), and excluding the view toggle from the handler killed navigation permanently after any pivot click, because focus stays inside that control. Only TEXT ENTRY is excluded.
- Three kinds of trigger — observation, season, milestone — and only observations have a reporter and a place. The row falls back to the kind label when there is no location, rather than rendering an empty line.
- The counts are per trigger, not per obligation: "5 notices owed · 30 obligations raised" on the owl means five of its thirty children have a clock. Summing the badges across rows double-counts, because one obligation can be raised by more than one trigger.

## Done when
- Eight triggers appear across four date buckets, with the burrowing owl sighting first.
- The three triggers inside 24 hours read "now" (heavier title, notices-owed badge); pile driving and turbidity read as recent; the two seasons and the plan approval read as background.
- Clicking a row shows that trigger's thread and fills the row; nothing can be dismissed from the queue.

## Markup
```html
<div class="bcn-inbox-queue">
  <div class="bcn-inbox-queue__head">
    <esa-button-toggle data-inbox-view="true" value="open" size="sm"></esa-button-toggle>
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
              ><span class="bcn-inbox-row__what">Burrowing owl seen on the alignment</span
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
                >Turbidity above the approved threshold downstream of dewatering</span
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
```

## Styles
```css
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #43608a _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-content-muted`: #7c7c7c _(component)_
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
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
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
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 350 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
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
