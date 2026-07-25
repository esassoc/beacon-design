/* bcn-lego-checked: this file ships NO UI — it is a build-time handoff spec (data only,
   consumed by scripts/gen-handoff.mjs) that DESCRIBES already-built components. Where it
   names an owned <textarea>, it is documenting BcnGuidanceDrawer's composer, whose lookup
   was already walked and recorded there: esa-textarea renders its border/focus/background
   ON the textarea, exposes no slot for an embedded send button, and auto-resizes with
   overflow:hidden (clips, no inner scroll) — the embedded composer needs the SHELL to own
   the border/ring and hold the send button. Checked Ecology + Beacon; bcn-guidance-drawer
   is the reusable home. */

// Handoff spec for the /prototypes/help route — the authored counterpart to the
// auto-derived capture. It declares which regions are inspectable sections (by
// selector), plus the design intent, decisions, gotchas, and acceptance a dev/Claude
// needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build; interactive states are
// reached with an `apply` recipe (the search is typed, the drawer is opened, a question
// is asked).
//
// Context: "Aldo" is Beacon's help mark — a compass in a circle, named for Aldo Leopold,
// rendered in Aldo green (--bcn-aldo). The feature is TWO surfaces over ONE dataset
// (src/data/help-center.ts): an app-wide floating help bar + route-aware guidance drawer
// that ride in the AppShell chrome on EVERY page, and this browsable knowledge base.
// Article prose is pre-rendered at build time and toggled in the DOM, so no article text
// ever enters the client bundle — that constraint shapes almost every decision below.
//
// Two sections of this feature are NOT capturable here because they live on a different
// route: the category page (/prototypes/help/<id>) and its bcn-kb-article-list. Their
// contract is documented under "Browse by category" instead.
//
// The What's-new popover and the drawer's curated route context are captured in the
// release-notes bundle (src/data/handoff/release-notes.mjs) — same components, the states
// that only that route produces.

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
      label: 'Search-first hero',
      selector: '.bcn-kb-hero',
      intent:
        'The front door to the knowledge base: the animated Aldo mark, the page title, a one-line lede, and a LARGE search field that is the page\'s primary action — plus a quiet "What\'s new in Beacon" doorway to the release notes. Search is the primary path into help; browsing is the fallback, which is why the field outweighs everything else on the surface.',
      decisions: [
        'The search control IS the esa-text-field lego at size="lg", scaled up by a SCOPED re-point of its public size tokens (--form-height-lg: 3.5rem, --form-font-size-lg, --form-padding-x-lg, --form-radius-lg) on the field\'s own class. This is the sanctioned component-token override — localized, nothing leaks globally.',
        'The lego\'s focus tokens default to Radix grass (an off-brand green ring); --form-border-color-focus and --focus-ring-color are re-pointed to --color-text-link, scoped to this one field.',
        'The leading magnifier is a decorative esa-icon overlay positioned in the gutter that the enlarged --form-padding-x-lg opens. The field still owns its own box — the icon is never inside it.',
        'The hero is deliberately COMPACT (no card, no surface of its own, modest padding) so the category grid sits near the fold.',
        'The "What\'s new" doorway is a quiet neutral link that only takes the house link color on hover — it is a doorway, not a second call to action.',
      ],
      gotchas: [
        'No esa-* lego is a page hero assembly: esa-page-header is a title/lede/actions row with no mark, search, or results panel; esa-command-palette is a modal overlay, not an in-page search-first hero. Only the FIELD and the ICON are legos — the assembly is bcn-kb-hero.',
        'The Aldo mark is a custom SVG, not a Lucide glyph — esa-button / esa-icon-button accept only a registry icon NAME, so any Aldo affordance is bespoke by necessity.',
        'The field carries role="combobox" + aria-controls + aria-expanded pointing at the results listbox; aria-expanded must be kept in sync by the controller, not left static.',
      ],
      acceptance: [
        'The mark, title, lede, search field, and "What\'s new" link render in one centered column; the field is visibly the largest control on the page and focuses with a house-colored ring, never a green one.',
      ],
    },
    {
      label: 'Live article search',
      selector: '.bcn-kb-hero__results',
      apply: [{ fill: ['[data-kb-search] input', 'evidence'] }],
      intent:
        'The results dropdown anchored under the search field: matching articles as two-line rows (title + category on one line, a terse summary beneath), with the matched substring highlighted, keyboard navigation, and a no-results message that echoes the query. Choosing a row routes into the reading pane via the #article-<id> hash.',
      decisions: [
        'PROGRESSIVE, NOT CLIENT-RENDERED: every article is server-rendered as a hidden row up front. The controller only shows/hides rows and wraps matches in <mark> — the article corpus never enters the JS bundle.',
        'Keyboard: ArrowUp/ArrowDown move the active row, Enter opens it, Esc closes the dropdown. The active row is mirrored into aria-activedescendant against each row\'s id.',
        'The active/hover row gets a quiet neutral sunken wash (--color-surface-sunken) and shifts the title to the link color — never a tint, never a colored left border.',
        'Match highlighting is a neutral translucent wash (color-mix of --color-text-primary at 12%), which reads on both white and the sunken active row.',
        'The category label and the summary are genuine meta, floored at 13px; the row title sits at 15px — a deliberate dense-list size with no type role that fits.',
      ],
      gotchas: [
        'The dropdown is absolutely positioned and overlays the content below it. It must own a z-index above the category grid, or rows render behind the cards.',
        'The <mark> wrappers are JS-injected, so their rule cannot carry Astro\'s scope hash — it is authored :global. In Angular this is component CSS, but keep the same containment discipline.',
        'The query is echoed into the no-results message — escape it. The <mark> wrappers are the only markup that may be injected around user input.',
        'The controller that drives this lives in kb-browser.ts and is mounted by <BcnKbBrowser>, NOT by the hero. The hero only advertises the [data-kb-search] hook and listens for the native `input` event, which is composed and retargets to the esa-text-field host — read e.target.value off the host, not off the shadow input.',
      ],
      acceptance: [
        'Typing reveals only matching rows with the matched substring highlighted; Arrow keys move the active row and Enter opens it in the reading pane; a query with no match shows the quoted no-results line; clearing the field hides the dropdown entirely.',
      ],
    },
    {
      label: 'Browse by category',
      selector: '.bcn-kbc',
      intent:
        'The curated browse surface: one spacious card per category (seven), each a PREVIEW rather than an inventory — the category title, its one-line description, two-to-three featured articles, the total article count, and a "View all →" link into that category\'s comprehensive page.',
      decisions: [
        'FEATURED is an owned, curated authored record — the editorial pick of what best orients someone new to each category, held in a FEATURED map keyed by category id and validated against the data at build time. Every other value on the card (title, description, count) derives from HELP_CATEGORIES + articlesByCategory, so the cards follow the data.',
        'Uniform 3-column grid on wide viewports (2-up medium, 1-up narrow). The seventh card orphaning on the last row is ACCEPTED and expected — symmetry and equal card widths win over orphan-avoidance. Do not stretch or feature a card to compensate.',
        'The card footer (count + "View all") is pinned to the bottom with margin-top:auto so a row of cards aligns regardless of how many featured links each holds.',
        'Two destinations, deliberately different: a featured link deep-links the reading pane ON THIS PAGE via #article-<id> (a quick inline read); "View all →" navigates to the category page (the full browse).',
        'The card is a CONTAINER, never itself a link — it holds several independent links.',
      ],
      gotchas: [
        'This is not esa-card: esa-card is a display:block title/body/footer shell whose body cannot stretch to pin a footer action, and the card is not a single link.',
        'The dense all-articles index that once lived on this page was cut — it read as overwhelming for a homepage. Keep the home a preview; the comprehensive per-category list belongs on the category page.',
        'NOT CAPTURED HERE (different route): the category page /prototypes/help/<id> is a static route per category (getStaticPaths over HELP_CATEGORIES) composed of bcn-kb-article-list (a quiet count, then every article as a title link over a one-line summary, rows divided by hairlines with NO outer border and no description lede) plus a bcn-kb-browser scoped to that category and landing on its first article. PageLayout supplies the breadcrumb back to the help home.',
        'Cards carry id="category-<id>" as a graceful-fallback anchor with scroll-margin-top to clear the topbar; #category-<id> otherwise redirects to the category page.',
      ],
      acceptance: [
        'Seven equal-width cards in a 3-column grid, footers aligned across each row; a featured link opens the article inline on this page; "View all →" leaves for the category page; counts match articlesByCategory.',
      ],
    },
    {
      label: 'A–Z glossary',
      selector: '.bcn-kbg',
      intent:
        'Every glossary-kind article as a bare term link, sorted A–Z and flowing into narrow text columns. It answers "what does Beacon mean by this word" without the ceremony of a card or a summary.',
      decisions: [
        'Deliberately spare: no cards, no summaries, no icons, no counts — just terms. The restraint is the design.',
        'CSS multi-column layout (columns: 12rem) rather than a grid, so the term list reflows naturally to the viewport with break-inside:avoid on each item.',
        'Each term deep-links the reading pane on the same page via #article-<id> — the same contract every other entry point uses.',
        'Terms come from glossaryArticles() (articles whose kind is glossary); glossary terms live in the functional category their term belongs to, so this section is the only place they appear alphabetically.',
      ],
      gotchas: [
        'No esa-* lego fits: esa-link-column is a titled card of links with card chrome, esa-pillbox is tag chips, esa-badge is a status token. A bare A–Z term index is bcn-kb-glossary.',
        'The interactive accent here is the house link color. An earlier revision used a light Aldo-green tint — light green is BANNED as an interactive accent across this feature; Aldo green is the mark\'s color, not a hover state.',
      ],
      acceptance: [
        'Terms render A–Z in flowing columns with no chrome beyond a hairline above; hovering underlines a term in the house link color; clicking one opens it in the reading pane.',
      ],
    },
    {
      label: 'Reading pane (hash-routed)',
      selector: '.bcn-kb__pane',
      apply: [{ click: '.bcn-kbc__featured-link' }],
      intent:
        'The article reader shared by the help home and every category page. It renders ONE article at a time and is hash-routed, so category cards, search results, glossary terms, the Aldo guidance drawer, and external links can all deep-link an exact article.',
      decisions: [
        'HARD CONTRACT: #article-<id> shows that article and scrolls the pane clear of the topbar. The guidance drawer and every article\'s "Related" links point at /prototypes/help#article-<id> — this hash shape cannot change without breaking them.',
        'No-hash behavior is a prop, not a branch in the controller: on the HOME the pane collapses to zero height (a deep-link target only, so the home reads calm); on a CATEGORY page it lands on that category\'s first article WITHOUT scrolling, so the list stays in view.',
        'The `articles` prop scopes the pane — the home passes every article so any external #article-<id> resolves; a category page passes only its own, scoping the reader to that category.',
        'Every article body is pre-rendered hidden; the controller toggles visibility off the light DOM, so the JS bundle carries no article content.',
        'The pane holds a generous min-height so switching articles never jumps the page, and the article body is held to a 70ch measure.',
      ],
      gotchas: [
        'The collapse is a :has() rule — the pane drops its min-height, padding, and top hairline only when no article child is visible. Without it the calm home shows an empty bordered dead zone.',
        'The pane must resolve the hash on BOTH initial load and hashchange; a deep link that arrives with the page is the common case.',
        'No esa-* lego models an article reader — esa-card is a bare box, esa-empty-state is a placeholder. Article bodies render through BcnHelpArticle (heading, prose, steps, callouts, placeholder media, related links).',
      ],
      acceptance: [
        'Landing on the home with no hash shows no pane at all; a featured link, glossary term, or search result expands the pane, scrolls it clear of the topbar, and shows exactly one article; a category page lands on its first article without scrolling.',
      ],
    },
    {
      label: 'Floating help bar (app-wide)',
      selector: '.bcn-help-bar',
      intent:
        "Aldo's home: a floating utility pill fixed to the bottom-center of the viewport on EVERY page — Figma-toolbar energy, a dark glass surface deliberately distinct from the white app chrome. Left to right: the primary Guidance affordance (Aldo mark + label), a hairline divider, an icon-only Search button, and a What's-new icon button carrying an unread dot.",
      decisions: [
        'Mounted once in the AppShell chrome, so in-context help is available from any route without per-page wiring.',
        'Composed BLIND against its siblings: the bar adds NO open behavior for the drawer or for search. It only advertises the hooks the siblings already listen on — [data-help-trigger] (the guidance drawer opens on clicks here, via a document-level delegated listener) and [data-omni-trigger] (the existing global omni-search palette).',
        'The only local state it owns is the What\'s-new unread dot: the first open writes the newest entry date to localStorage \'bcn-whats-new-seen\' and retires the dot for that browser.',
        'The What\'s-new trigger uses the notepad-text glyph — the same mark as the Release Notes page title. esa-icon-button forwards only a registry icon NAME (no custom paths passthrough), so that glyph was registered in the ecology icon registry rather than inlined here.',
        'Dark glass, but the popover it opens stays a white content surface — the bar is chrome, the panel is content.',
      ],
      gotchas: [
        'esa-app-bar is the fixed TOP chrome strip, not a detached floating toolbar — the pill shell is this component\'s own composition glue. Everything inside it that CAN be a lego is one: esa-icon-button for Search and What\'s new, esa-tooltip for the Search hint, esa-popover for the What\'s-new panel.',
        'The Guidance control is bespoke because it pairs the animated Aldo mark with a text label, and esa-button / esa-icon-button accept only a Lucide icon name — not a custom SVG mark.',
        'localStorage access is wrapped in try/catch: in private mode the dot simply stops persisting rather than throwing.',
        'The bar is fixed to the viewport bottom-center — it must clear any page content that also anchors to the bottom, and it sits above page content but below modal chrome.',
      ],
      acceptance: [
        'The pill floats bottom-center on every route; Guidance opens the drawer, Search opens the omni palette, What\'s new opens its popover above the bar; the unread dot disappears after the first open and stays gone on reload.',
      ],
    },
    {
      label: 'Guidance drawer — chat-first stream',
      selector: '.bcn-gd',
      apply: [
        { click: '[data-help-trigger]' },
        { fill: ['[data-gd-ask]', 'what is a component?'] },
        { key: 'Enter' },
        { click: '.bcn-gd__title' },
      ],
      intent:
        'The Aldo drawer, modeled as a CHAT-FIRST conversation rather than a help panel. The body is ONE continuous scroll stream: Aldo\'s opening message (the route\'s "You are here" / "On this page" / "Terms" guidance) leads, and every Q&A exchange appends below it — so the intro scrolls up like any older message. A ChatGPT-style composer is pinned in the footer and the stream scrolls behind it.',
      decisions: [
        'The intro is a MESSAGE, not a static header: it sits in the stream and scrolls away as the conversation grows. That is what makes the drawer read as a conversation rather than a panel with a chat bolted on.',
        'Ask Aldo is DETERMINISTIC, not generative: the question is tokenized, stopwords are dropped, and each article is scored — title match 4, summary match 2, body match 1 — with the top 3 returned. Ties keep HELP_ARTICLES order via a stable sort. So "what is a component" surfaces the titled article, not one that merely mentions the word.',
        'The searchable corpus is read from the pre-rendered article bodies via textContent — article prose never enters the JS bundle. Only the route map and the chat copy are imported.',
        'A ~300ms beat precedes each reply. It is feel, not fake typing — the content is fully deterministic and could render instantly.',
        'The composer sends on Enter, newlines on Shift+Enter, auto-grows to 5 rows and then scrolls internally, and keeps its send button disabled while the field is empty.',
        'One persistent "Browse all Help & Guidance" link sits above the composer — the escape hatch from conversation to the full knowledge base.',
      ],
      gotchas: [
        'esa-textarea was checked and rejected for the composer: it renders its border/focus/background ON the field itself, offers no slot for an embedded send button, and auto-resizes with overflow:hidden (it clips, with no inner scroll). The embedded composer needs the SHELL to own the border/ring and hold the button, and the field to inner-scroll at max — so the composer input is owned, and that is the one place in this feature where a form primitive is not a lego.',
        'The drawer FRAME is the esa-side-dialog lego (its own backdrop, focus trap, Esc/backdrop close, symmetric slide-out) — do not hand-roll a drawer.',
        'When re-pointing --side-dialog-inset for the stacked card-stack effect, the value MUST carry a unit. A unitless value silently kills the lego\'s width calc and the panel collapses.',
        'Every article is pre-rendered ONCE as a compact row into a hidden pool; the client MOVES the route\'s rows into the intro\'s two sections and leaves the rest hidden. Astro is compile-time and the drawer is route-agnostic at build, so this move is the mechanism that makes it route-aware.',
        'The article row is an owned two-line button — no lego renders one.',
      ],
      acceptance: [
        'Opening the drawer shows Aldo\'s intro at the top of the stream; typing a question and pressing Enter appends the question, then Aldo\'s reply with up to three ranked article links; the intro scrolls up as the exchange grows; the composer grows to 5 rows and then scrolls; Shift+Enter newlines instead of sending.',
      ],
    },
    {
      label: 'Article reader (stacked child dialog)',
      selector: '.bcn-gd-article',
      apply: [{ click: '[data-help-trigger]' }, { click: '.bcn-gd__rows .bcn-gd-row' }],
      intent:
        'A full article read WITHOUT leaving the conversation: a SECOND esa-side-dialog stacked above the drawer. A row in the intro — or a link in one of Aldo\'s replies — opens the article here; the parent drawer nudges back a step so the two read as a card stack, and Back returns to the conversation exactly where it was.',
      decisions: [
        'TWO STACKED DIALOGS, both the esa-side-dialog lego: the drawer is the parent and the reader is the child, layered above it. Reusing the lego twice beats inventing a second panel primitive.',
        'The parent steps back by re-pointing its --side-dialog-inset at runtime to 30px — a property the lego exposes and transitions, so the stack effect costs no bespoke animation.',
        'Every article BODY is pre-rendered once into this reader, hidden, and toggled one at a time by id — the same pre-render that feeds the chat corpus, so the content exists exactly once.',
        'Both a row and a reply link carry data-article-id, so one delegated handler on the drawer root opens the reader from either source.',
        'Bodies render through BcnHelpArticle — the same renderer the knowledge-base reading pane uses, so an article reads identically in the drawer and on the help page.',
      ],
      gotchas: [
        'The inset re-point is unitless-hostile — "30" instead of "30px" silently breaks the lego\'s width calc.',
        'Pool rows are hidden, so only the rows the controller PLACED into the intro sections and the links inside replies are clickable; a delegated handler that ignores visibility would open articles from the hidden pool.',
        'Closing the child must restore the parent\'s inset, or the drawer stays nudged back after the reader closes.',
        'Both dialogs must layer above the app topbar (z-index 1100) — the lego renders as a fixed overlay, so the child needs to sit above the parent explicitly.',
      ],
      acceptance: [
        'Clicking a row or a reply link slides the article in over the drawer and steps the drawer back; Back closes the child, restores the drawer inset, and leaves the conversation scrolled where it was; the article body matches the one rendered on the help page.',
      ],
    },
  ],
};
