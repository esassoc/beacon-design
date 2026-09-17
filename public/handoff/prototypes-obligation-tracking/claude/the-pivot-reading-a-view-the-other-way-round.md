# The pivot — reading a view the other way round

A two-option switch above every view: By event, or By obligation. It transposes the view — the same data with the parent and the child swapped. By event, a pane is a thing that happened and its children are the duties it raised. By obligation, a pane is a duty and its children are the events that reached it.

## Key decisions
- A PIVOT, NOT A FIFTH TAB. This is a transpose, not another subject. A tab says "here is a different thing"; a switch says "here is the same thing the other way round" — and the page already has two levels of tab, so a fifth inner tab under two outer ones would be the third nesting. Same lego and same wiring as the Registry tab’s By category / By commitment switch, so the two switches on this page read as one control.
- THE INDEX IS DERIVED, NEVER AUTHORED. It is built by walking the SAME EVENTS[].raised array the forward panes read, so the two directions cannot disagree. Authoring the inverse separately would repeat exactly the fault the one-fixture alignment fixed, where one page held two answers to the same question. Row totals match in both directions — 20, 13, 12 — which is the check that proves it.
- NOT STICKY, and that is a decision (Kim, 2026-09-17). Each view owns its own switch and every one starts on By event. A pivot that followed the reader between views would mean arriving at To-do in a direction chosen while reading All.
- IT PAYS FOR ITSELF MOST ON TO-DO. The same three Notify duties appear under four separate events, so the forward view spends 12 rows saying three things. Inverted it is three rows, each carrying its four triggers. Measured across the views: 6->9, 4->5, 4->3 and 5->6 parents, with the duty and event row totals agreeing in both directions (20, 13, 12, 8).
- PINNED IS THE ONE VIEW WHOSE BY-OBLIGATION SIDE IS NATIVE. The other three are lists of events that happen to reach duties, so their inverse is DERIVED from the event log and a duty with no events is simply not in them. Pinned is a list of duties that may or may not have been reached, so every pin appears whether or not anything has touched it — and THREE OF THE SIX HAVE NOTHING. Keeping those panes rather than dropping them is the whole value: it renders the missing event sources as something a reader finds by looking.

## Gotchas
- BOTH DIRECTIONS RENDER AT BUILD TIME and the switch only reveals, like everything else on this page.
- THE REVEAL SCRIPT IS SCOPED PER SIDE, not per workspace. Both directions put a rail and panes inside the same .bcn-tw; a workspace-wide query lets a click in one rail hide the other side’s pane and silently unselect its row.
- A DUTY WITH NO EVENTS GETS NO EMPTY-STATE COMPONENT. It is not a failed lookup, it is the answer — the pane’s own "Moved by" and "Events" facts state it in the structured band instead of as prose.
- THE "Moved by" FACT IS PER CLASS and is a statement about Beacon, not about this page: Notify is moved by a field event, Adhere by a breach, Monitor by evidence arriving, Roster by a change of staff — and only the first of those four is a topic Beacon actually publishes.

## Done when
- Every view has its own switch, all four start on By event, and switching one leaves the other three alone.
- Row totals agree in both directions for All, Important and To-do.
- Pinned by obligation shows 6 duties, 3 of them with no events and each naming what would move it.

## Markup
```html
<header class="bcn-tw__bar">
  <esa-button-toggle
    class="bcn-tw__switch"
    size="sm"
    value="event"
    aria-label="How to read events"
    data-tw-switch="true"
    data-options='[{"label":"By event","value":"event"},{"label":"By obligation","value":"obligation"}]'
  ></esa-button-toggle>
</header>
```

## Styles
```css
.bcn-tw__bar {
  justify-content: flex-end;
  padding-block-end: var(--spacing-200);
  display: flex;
}
```

## Tokens
- `--spacing-200`: .5rem _(primitive)_
