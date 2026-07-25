// Handoff spec for the help CATEGORY route — the authored counterpart to the
// auto-derived capture. It declares which regions are inspectable sections (by
// selector), plus the design intent, decisions, gotchas, and acceptance a dev/Claude
// needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build; the article-renderer
// section reaches a rich body with an `apply` recipe (a how-to row is clicked).
//
// Context: this is the COMPREHENSIVE half of the knowledge base. The help home
// (src/data/handoff/help.mjs) only PREVIEWS each category as a card with two-to-three
// featured picks; "View all →" lands here, where the category's full article list lives.
// One static route per category via getStaticPaths over HELP_CATEGORIES — /prototypes/
// help/tracking is captured as the exemplar because Tracking holds the dataset's richest
// article body (steps + video + callout). All seven categories share this route shape,
// so a fix here applies to every one.
//
// The two components below that this route does NOT own — the app-wide help bar and the
// guidance drawer — are captured in the help and release-notes bundles.

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
      label: 'Breadcrumb (nested help route)',
      selector: '.page-layout__breadcrumbs',
      intent:
        'The way back up. A category page is the only nested route in the knowledge base, so it is the only place the help feature shows a breadcrumb: "Help & Guidance / <Category>", with the category as the current page.',
      decisions: [
        'The breadcrumb comes from PageLayout, which ports Beacon\'s prod page-layout + breadcrumbs components (home glyph, chevron separators) — the page passes a breadcrumbs array and owns nothing about the chrome.',
        'The category title is the page H1, supplied through the same PageLayout prop — the category name is stated once as the heading, not repeated as a lede.',
        'The last crumb is a span carrying aria-current="page", not a link; earlier crumbs are anchors.',
        'The help home deliberately has NO breadcrumb (it is a top-level destination); only the category level adds one.',
      ],
      gotchas: [
        'The crumb back to the help home must go through withBase — a bare /prototypes/help breaks under the deployed base path.',
        'Do not add a description lede under the title. An earlier revision had one and it was cut: the category description already does that work on the home\'s card, and repeating it here pushed the article list down for no gain.',
      ],
      acceptance: [
        'The page shows "Help & Guidance / Tracking" above a "Tracking" H1; the first crumb navigates to the help home under any base path; the last crumb is inert and marked as the current page.',
      ],
    },
    {
      label: 'Category article list (full browse)',
      selector: '.bcn-kbl',
      intent:
        "The comprehensive list for one category: a quiet article count, then EVERY article in the category as a title link over a terse one-line summary. This is the full browse — denser than the home's curated preview cards, and the reason \"View all →\" exists.",
      decisions: [
        'Rows are divided by hairlines with NO outer border — the list reads as a continuous index rather than a boxed table. Andy\'s call in the category-page polish pass.',
        'A bare count sits alone above the list. No lede, no filters, no sort control — the category is already the filter.',
        'Every row deep-links the reading pane on the SAME page via #article-<id> — the same hash contract every other entry point in the feature uses, so a row here and a search result on the home behave identically.',
        'The title is a link and the summary is plain text beside it; the row is not itself a link, matching the container-not-link discipline used on the home\'s cards.',
        'The list is held to a 60rem measure so long summaries do not run the full content column.',
      ],
      gotchas: [
        'No esa-* lego fits: esa-card is card chrome, esa-link-column is a card of bare links with no summaries, and esa-sidebar-nav renders ornamental micro-label group headers plus filled-badge hints. A dense titled article list is bcn-kb-article-list.',
        'The count is derived from the articles passed in, not stored — it must match articlesByCategory for the route, or the home\'s card count and this page disagree.',
        'Rows come from getStaticPaths props, so the list is fully server-rendered; nothing here needs client JS.',
      ],
      acceptance: [
        'The count matches the number of rows and the count on the home\'s card for this category; every article in the category appears exactly once as a title link over a summary; rows are separated by hairlines with no box around the list; clicking a row opens it in the pane below.',
      ],
    },
    {
      label: 'Category-scoped reading pane',
      selector: '.bcn-kb__pane',
      intent:
        'The same reading pane the help home uses, but SCOPED to this category and landing on its first article — so a category page is readable the moment it loads rather than showing an empty reader.',
      decisions: [
        'ONE component, two behaviors, chosen by props — not two components. bcn-kb-browser takes `articles` (scoping the reader to this category\'s subset) and `defaultOnLoad` (true here, false on the home).',
        'With no hash, the category page lands on its FIRST article and does NOT scroll — the list must stay in view, because the list is the point of this page. The home, by contrast, collapses the pane to nothing.',
        'The default article id is resolved at build time into data-kb-default, so the controller reads a value rather than re-deriving the default.',
        'Scoping is genuine: only this category\'s articles are pre-rendered here, so a stray #article-<id> from another category does not resolve on this route — that is the home\'s job, and the home passes every article precisely so external deep links always land somewhere.',
      ],
      gotchas: [
        'The home is the ONLY page that can resolve any #article-<id>. Drawer rows and article "Related" links therefore point at /prototypes/help#article-<id>, never at a category route — keep that contract when porting, or related links break depending on which page the user is on.',
        'Landing on the first article must not scroll. Reusing the home\'s scroll-into-view behavior here pushes the list off screen on load, which reads as a broken page.',
        'The pane\'s empty-collapse :has() rule still applies, but on this route it should never trigger — if it does, defaultOnLoad or the default id is not reaching the controller.',
      ],
      acceptance: [
        'Loading the route with no hash shows the category\'s first article with the list still visible above it; clicking any row swaps the pane to that article; an #article-<id> from a different category does not resolve here.',
      ],
    },
    {
      label: 'Article renderer (how-to: steps, video, callout)',
      selector: '.bcn-kb__article:not([hidden]) .bcn-help-article',
      apply: [{ click: 'a[href="#article-reading-permit-tracking"]' }],
      intent:
        'The shared renderer for ONE article, captured on the dataset\'s richest body so every block type is visible at once: the title with its kind badge, numbered steps, a placeholder video frame, a callout, and the trailing "Related" row. Both the knowledge base and the Aldo drawer render articles through this component, so help content looks identical everywhere.',
      decisions: [
        'ONE renderer, three chrome flags: headingLevel (h2 on the page, h3 in the drawer), hideTitle (when the host owns the title), and compact (tighter rhythm for the drawer). Two consumers sharing one look is what justifies the component.',
        'The body is a BLOCK UNION rendered in order — p | steps | callout | figure | video — driven entirely by article.blocks. Same block model the release-notes stream uses.',
        'Steps are an ordered list with quiet round NUMBERED MARKERS drawn by a CSS counter (counter-increment + ::before), on a neutral gray fill. Never a colored left border.',
        'Callouts carry a tone (note | tip) that changes only the glyph and the label — "Note" with an info glyph, "Tip" with a lightbulb. Both use the neutral sunken treatment: gray fill, neutral ink.',
        'Figures and videos are calm PLACEHOLDER frames — a glyph, a label, and a caption. No real assets ship; the frame states what would go there. The video frame carries its duration as an esa-badge.',
        'Off-registry glyphs (lightbulb, image, play) go through esa-icon\'s documented `paths` fallback rather than forking the shared icon registry.',
        'The "Related" row is suppressed for glossary articles — a term definition ends at the definition; only how-tos carry onward links.',
        'Related ids resolve through getArticle and unresolvable ids are silently dropped, so a stale id degrades to one fewer link rather than a broken href.',
        'The article root carries id="article-<id>", which is what makes every #article-<id> deep link in the feature resolve.',
      ],
      gotchas: [
        'The light Aldo tint is BANNED as a surface or accent here — callouts and step markers are neutral sunken gray. The saturated Aldo mark glyph is the only place the accent color survives in this feature.',
        'Read the semantic token layer only (--color-*, --spacing-*), never the raw --bcn-gray-* ramp.',
        'No esa-* lego renders a rich article body; esa-icon and esa-badge are composed INSIDE it. esa-card is a bare container and esa-empty-state is a placeholder — neither models article content.',
        'Every article is pre-rendered for both the pane and the drawer, so this renderer runs 29 times per page in the home\'s case. Keep it presentational and client-JS-free or that cost compounds.',
        'Paragraph text is primary ink, never grayed — graying body prose to look calm makes long articles harder to read.',
      ],
      acceptance: [
        'The how-to shows its title with a "How-to" badge, numbered steps with round neutral markers, a placeholder video frame with a duration badge, a labeled callout, and a "Related" row; the same article rendered in the drawer looks identical apart from heading level and spacing; a glossary article shows a "Glossary" badge and no "Related" row.',
      ],
    },
  ],
};
