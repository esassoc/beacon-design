// Handoff spec for the /global-search prototype — the authored counterpart to the
// auto-derived capture. It declares which regions are inspectable sections (by
// selector), plus the design intent, decisions, gotchas, and acceptance a dev/Claude
// needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build; interactive states are
// reached with an `apply` recipe (the omnibox is opened, queries are typed).
//
// Context: cross-entity "search the whole project," modeled on the cb-fish omnibox and
// on esassoc/Beacon's Document Review "Commitment Search" (full-text body matching with
// highlighted snippets). It is a BESPOKE bcn- palette + results page over one shared
// index (src/data/global-search.ts), NOT the esa-entity-search lego — that lego is
// overlay-only, matches title/subtitle only, and hardcodes its position, none of which
// fit a centered, full-text, two-surface search.

/**
 * @typedef {Object} HandoffSection
 * @property {string} label     Chip label in the inspector.
 * @property {string} selector  What to slice out as this section (first match).
 * @property {object[]} [apply]  Op recipe (click / fill / clear / clickText / key) to drive a live state.
 * @property {string} [intent]  What this is and why it exists.
 * @property {string[]} [decisions] Key design/implementation decisions.
 * @property {string[]} [gotchas]   Traps to avoid when re-implementing.
 * @property {string[]} [acceptance] "Done when…" checks.
 */

/** @type {{ sections: HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Topbar search trigger',
      selector: '.bcn-search-trigger',
      intent:
        'The global-search affordance in the app bar: a button STYLED as a search input — leading magnifier, muted "Search…" placeholder, and a "/" keyboard-shortcut hint — centered in the topbar. It is a trigger, not a real field: clicking it (or pressing "/") opens the command palette.',
      decisions: [
        'It is a <button>, not an <input> — it submits nothing and owns no query; it only opens the overlay. Carry the semantics with aria-keyshortcuts="/".',
        'The open shortcut is "/" (a deliberate Beacon choice — NOT ⌘K). The single <kbd>/</kbd> hint advertises it.',
        'Centered in the topbar\'s center zone, max-width ~520px, so it reads like cb-fish\'s omnibox entry point rather than a utility icon.',
      ],
      gotchas: [
        'Do not wire it as a real text field — it is purely an affordance; the actual input lives in the palette.',
        'On a tight app bar the placeholder text collapses to icon + "/" hint only (it must not push the bar wide).',
        'No esa-* lego is an omnibox trigger field (esa-text-field is a real bordered/labelled input; esa-icon-button is icon-only) — this is the bcn-search-trigger component.',
      ],
      acceptance: [
        'Clicking the field or pressing "/" opens the palette; the trigger shows magnifier + "Search…" + a "/" hint and never submits a form.',
      ],
    },
    {
      label: 'Command palette (omnibox)',
      selector: '.bcn-omni__panel',
      apply: [{ click: '.bcn-search-trigger' }, { fill: ['[data-omni-input]', 'biologist'] }],
      intent:
        'The global-search command palette — a fixed overlay centered both vertically and horizontally. It searches all 8 scopes FULL-TEXT (titles + commitment/requirement body), with a left scope-facet rail, results grouped by scope with per-scope counts, highlighted hits, and an inline ghost-text typeahead in the input. ⌘/Ctrl+Enter forks to the full results page carrying the query + active scope.',
      decisions: [
        'NULL STATE shows a centered "Search Beacon" landing only (no recents); the scope rail is PRESENT but DISABLED with no counts until a query is typed, at which point its facets enable, show counts, and the active scope highlights.',
        'Scope facets are a left VERTICAL RAIL (not tabs); the active facet is solid --color-primary with white text.',
        'Inline ghost-text typeahead: a grey predicted completion sits after the caret (a transparent pad span occupies the typed text so the grey suffix lands exactly at the caret); Tab or → accepts it.',
        'Hit highlighting is highlighter-yellow (#fde047), dark text — louder than a tinted-primary mark.',
        'Result rows carry NO leading scope icon and NO subtitle. Commitments + requirements show a purple commitment-ID badge (--color-commitment) before the title; the body match renders as a one-line serif (--font-decorative) snippet of the matched document text.',
        'Keys: ↑/↓ navigate, ↵ select (navigates to the record), ⌘/Ctrl+↵ "see all" (→ results page), Tab complete (accept ghost), Esc close. Opens via [data-omni-trigger] or "/".',
      ],
      gotchas: [
        'This is a BESPOKE bcn- palette, NOT the esa-entity-search lego: that lego is overlay-only, hardcodes top:12% in shadow DOM with no centering hook, sizes by max-height, and matches/renders title+subtitle only (no full-text body match or snippet). Re-implement as a centered, fixed-size, full-text palette.',
        'The rail + rows are JS-injected (innerHTML), so their CSS cannot carry Astro\'s scope hash — it lives in a global <style is:global> block under .bcn-omni-*. In Angular this is component CSS, but keep the same contained prefix discipline.',
        'Every user-query path is HTML-escaped before innerHTML; the <mark> wrappers are the ONLY injected markup. Preserve that — never interpolate a raw query into innerHTML.',
        'The commitment ID is a structured `code` field on the record (folded into the searchable text), NOT parsed out of the title at render — the title is the clean name.',
      ],
      acceptance: [
        '"/" opens it centered; empty query shows the landing + a disabled rail; typing enables the rail with counts and shows grouped, highlighted results; Tab completes the ghost; ⌘↵ opens the results page with the query + scope.',
      ],
    },
    {
      label: 'Search results page',
      selector: '.bcn-sr',
      apply: [{ fill: ['#results-query', 'biologist'] }],
      intent:
        'The full-page results surface — the destination of the palette\'s ⌘+Enter "see all". Same index, two surfaces, so a record reads identically in the palette and here. A search field on top, then a [ scope-facet rail | results ] split with a vertical divider between them; results are grouped by scope with bordered count badges, and the URL\'s ?q / ?scope round-trip the state.',
      decisions: [
        'NULL STATE (empty query): no results are listed, the count line is hidden, the rail is present but DISABLED (muted, no counts), and an esa-empty-state "Search the project" landing fills the content column — it deliberately does NOT dump all records.',
        'A vertical divider (the main column\'s left border + padding) separates the rail from the results list.',
        'Rows echo the palette (purple commitment-ID badge + SEMIBOLD title, no icon, no subtitle) but DIVERGE on the body: a body-only hit shows the FULL matching document text (multi-line, serif, in a bordered card), echoing Beacon\'s Document Review commitment-search text block — not the palette\'s one-line snippet.',
        'Per-scope rail counts show query REACH (they ignore the active scope); the active scope only narrows which rows render.',
        'Server-renders every record grouped, then the client filters the DOM to ?q/?scope, highlights matches, and keeps counts + URL in sync.',
      ],
      gotchas: [
        'On entering the idle (empty-query) state the rail\'s active highlight is cleared; it must be RESTORED from activeScope when a query resumes, or the re-enabled rail shows nothing selected.',
        'Count badges update from the filter pass (query reach), not from the active-scope narrowing — keep the two concerns separate.',
        'No esa-* lego renders a server-rendered, on-page grouped result list with scope facets; esa-empty-state owns only the no-matches / landing states. This is the bcn-search-results component.',
      ],
      acceptance: [
        'No query → "Search the project" landing + disabled rail, no results; typing filters + highlights and re-enables the rail with counts; a body match shows the full serif text card; ?q/?scope round-trip in the URL.',
      ],
    },
    {
      label: 'Result row — ID badge, title & document-text card',
      selector: '.bcn-sr__row',
      apply: [{ fill: ['#results-query', 'biologist'] }],
      intent:
        'One result row: a head line of a purple commitment-ID badge + a semibold title, and — for a body-only hit — the FULL matching document text in a bordered serif card beneath it, with the search term highlighted. This is the unit that makes the results read like Beacon\'s commitment-text-card.',
      decisions: [
        'The commitment ID is a structured `code` field rendered as a purple badge (--color-commitment text on a 12% tint, 4px radius) — faithful to Beacon\'s commitment-id identity badge — NOT parsed from the title.',
        'Document text (a commitment/requirement body) is typeset in the serif --font-decorative (Besley); the text card is bordered, multi-line, and shows the WHOLE matched body.',
        'No leading scope icon; no subtitle line — the badge + title carry identity, the text card carries the match.',
      ],
      gotchas: [
        'Show the text card ONLY for body-ONLY matches (term hit the body, not the title/code) — otherwise the row is a plain title match and the card would be noise.',
        'Beacon\'s commitment-search hides only NON-matching paragraphs behind a "show N more" expander; our fixture bodies are single paragraphs, so the whole body shows. If real bodies are multi-paragraph, port the block-level collapse.',
        'The <mark> highlight is JS-injected, so its rule is authored :global (un-scoped); the highlight color is the same #fde047 as the palette.',
      ],
      acceptance: [
        'Commitments/requirements show the purple ID badge + semibold title; a body match renders the full serif text card with the term highlighted; title-only matches show no card.',
      ],
    },
  ],
};
