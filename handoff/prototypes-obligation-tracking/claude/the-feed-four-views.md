# The feed — four views

Obligation Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/obligation-tracking/

![The feed — four views, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/the-feed-four-views.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/the-feed-four-views.phone.png

The working half of the page: one esa-tab-layout carrying All, Important, To-do and Pinned. NO tab carries a count; the panel below is the two-pane workspace and nothing else.

## Key decisions

- NO TEXT ABOUT THE PAGE. An earlier pass gave every view a byline, every pane a lede, and every rail row its count in words beside the badge that already carried it. All of it went: a view that needs a sentence explaining what it is has the wrong name, and a badge plus "54 duties" is two controls saying one thing.
- PANES ARE NOT CAPPED. Showing the first 25 of 70 meant the rail badge and the pane disagreed, patched with a sentence. The pane scrolls; 70 rows is not a problem worth a paragraph.
- EVERY VIEW IS TWO PANES: the timeline or list on the LEFT, the obligations related to the selected parent on the RIGHT. This geometry is the one part of the inbox that was always right and it is kept — it is what makes "why am I seeing this" structural rather than a sentence someone wrote. What a PARENT is varies with the pivot: an event in the by-event direction, a duty in the by-obligation one. One frame serves every view and both directions.
- THE VIEWS REPLACE THE OPEN / SEEN PIVOT. That pivot asked "have you filed this", which a feed of standing duties cannot answer. These ask ones that do have answers: what happened that I did not already know, what is owed, and what am I watching.
- THE FEED CARRIES WHAT YOU DID NOT ALREADY KNOW. This rule decides what reaches the timeline. An observation qualifies — nobody knew. A phase you entered does not: you already knew, so it never becomes a row.
- ALL GROUPS BY EVENT, NEVER BY DUTY. One sighting switches on several duties, so a flat list repeats the same sighting once per duty. Prod already returns this parent/children shape — ObservationComplianceDto is described in its own code as an observation together with the commitments it triggers.
- NO SEVERITY ORDERING. It appears nowhere in the source documents — we invented it and dropped it. A timeline sorts by time. To-do has nothing to sort on at all in this fixture, because no obligation carries a notice window.
- ALL FOUR VIEWS SHARE ONE SPINE, as of 2026-09-17. All, Important, To-do and Pinned are four cuts of the SAME event set — everything, my subject areas, what is owed, and what I pinned. Ongoing was the exception and it is gone. Important filtered the whole registry by subject and ignored events until 2026-09-16, which left one view that had plainly wandered in from another page. An event that raised nothing in the reader’s areas does not appear in Important at all.
- IMPORTANT IS PER-USER AND NOTHING ABOUT IT LANDS ON THE ENTITY — a saved filter, not a field. The saved areas are validated against the fixture at build time and THROW if one is missing. An earlier pass authored an area that did not exist and silently fell back to the largest, so the page named a filter it was not applying.
- PINNED REPLACED ONGOING (2026-09-17), and the swap is the point rather than a rename. Ongoing was the inventory — "what is on right now" — and to exist at all it had to AUTHOR which activities were under way, because nothing in the fixture records that an obligation is currently in force. Pinning does not close that gap, it stops pretending to: the reader says what they are watching, which is a claim the software can actually keep. THE COST, STATED PLAINLY: the page no longer answers "what is in force right now" for anybody, and that should be reversed the moment obligations carry in-effect conditions.
- THE PINS ARE AUTHORED AND THE PAGE SAYS SO. Beacon has no pin table and the fixture has no per-user state, so the six are a stand-in of the same kind as the saved subject areas. A pin is UI state rather than permit data, which is why authoring it is legitimate where inventing an observation type was not. They resolve BY TITLE and the resolution THROWS on a miss — a list of ULIDs is unreadable in source and fails silently when the fixture is redrafted.
- THE PIN SET SPANS THE FOUR CLASSES AND MIXES REACHED WITH UNREACHED — three of each. A pin with no history is the sharpest thing this page says: you chose to watch this, and in the whole event log nothing has ever touched it. The pane then names what WOULD move it, and for three of the four classes that is a topic Beacon does not publish.

## Gotchas

- EVERY PANEL RENDERS AT BUILD TIME — the rule inherited from the evidence inbox. Astro is compile-time; a panel assembled from a template literal bypasses the design system and no gate can see it. esa-tab-layout only reveals a panel that is already in the light DOM under slot="panel-N".
- esa-tab-layout takes `tabs` as an Array property. Passing it as a JSON string attribute works because Lit parses JSON for Array-typed attributes — do not try to build the tab list from markup.
- THE NOTIFY CLASS HAS THREE MEMBERS IN THIS FIXTURE, and none carries a notice window. To-do shows 4 rows across 4 events, all of them the same generic covered-species reporting duty raised by different sightings. An esa-alert-box under the rail states the shortfall rather than letting an empty view read as a bug.
- THE ROW LABEL IS THE TITLE, NEVER THE TRIGGER. Every duty carries a vivid trigger line and it is tempting to use it as the label. A list labelled with triggers reads as a list of ACCUSATIONS rather than duties in force. The trigger belongs on the record and in the event-driven views.
- A DUTY WRITTEN FOR ANY COVERED SPECIES CARRIES NO SPECIES LIST. A species-scoped predicate alone misses it, which is why To-do was empty on the first pass over this fixture. The covered-species predicate is what raises it.
- CLASS IS A CATEGORICAL FACET, NOT A STATUS — a quiet secondary badge at xs, the same idiom the wizard card uses. No colour carries meaning, and there is no status to carry.

## Done when

- Four tabs read All, Important, To-do and Pinned, none of them carrying a count.
- By event, the rails hold 6, 4, 4 and 5 parents and 20, 13, 12 and 8 duty rows.
- All lists the events in the rail, the giant garter snake sighting first; selecting one shows the duties it switched on in the right pane.
- Important lists the same events minus any that raised nothing in the saved subject areas.
- Pinned lists 6 duties by obligation, 3 of them with no events, and an alert box saying the pins are authored.
- To-do carries an alert box explaining that the fixture drafted three Notify duties and no notice windows.
- No status, verdict, severity, "seen" control or filing verb appears anywhere on the page.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `bcn-swoc` (spoke) · `src/components/bcn/BcnSwObligationCard.astro`
- `bcn-tev` (spoke) · `src/components/bcn/BcnTrackingEvent.astro`
- `bcn-tw` (spoke) · `src/components/bcn/BcnTrackingWorkspace.astro`
- `esa-alert-box` (hub) · `packages/ecology/src/components/esa-alert-box.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-tab-layout` (hub) · `packages/ecology/src/components/esa-tab-layout.ts`

## Markup and styles

_161 repeated elements are collapsed in the markup below; the comments say where._

- [the-feed-four-views.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/the-feed-four-views.markup-1.md) (47 KB)
- [the-feed-four-views.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/the-feed-four-views.markup-2.md) (46 KB)
- [the-feed-four-views.markup-3.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/the-feed-four-views.markup-3.md) (47 KB)
- [the-feed-four-views.markup-4.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/the-feed-four-views.markup-4.md) (2.7 KB)
- [the-feed-four-views.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/the-feed-four-views.styles.md) (23 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--alert-box-text-color` | `#525252` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-focus` | `#3e9b4f` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-utility-info` | `#acd8fc` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-info` | `#0d74ce` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-label-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-label-xs-font-weight` | `500` | semantic |
| `--typography-label-xs-letter-spacing` | `.01em` | semantic |
| `--typography-label-xs-line-height` | `1.6` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
