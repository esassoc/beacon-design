// Help & Guidance content — the single dataset behind the Aldo guidance drawer
// and the Help & Guidance page. Articles are INVENTED prototype copy, grounded in
// Beacon's product documentation (esassoc/Beacon docs/product/) but written fresh:
// realistic vocabulary, fictional examples, nothing copied from client documents.
//
// Consumers:
//   - BcnGuidanceDrawer  — pre-renders every article; a client script shows the
//     set matching the current route (HELP_ROUTE_CONTEXTS, first match wins).
//   - BcnKbBrowser / BcnKbHero / BcnKbCategories — the full browsable page.
//   - BcnHelpBar — WHATS_NEW feeds the "What's new" popover.
//
// Client scripts should import ONLY the small route/context exports — article
// bodies are rendered at build time and searched via the DOM, so the JS bundle
// never carries the full content.

/** One renderable chunk of an article body. */
export type HelpBlock =
  | { kind: 'p'; text: string }
  | { kind: 'steps'; items: string[] }
  | { kind: 'callout'; tone: 'tip' | 'note'; text: string }
  /** Placeholder graphic — rendered as a quiet labeled frame, no real asset. */
  | { kind: 'figure'; label: string; caption: string }
  /** Placeholder video — rendered as a thumb with a play affordance. */
  | { kind: 'video'; label: string; duration: string };

export type HelpCategoryId =
  | 'getting-started'
  | 'data-catalog'
  | 'tracking'
  | 'monitoring'
  | 'reporting';

export interface HelpCategory {
  id: HelpCategoryId;
  title: string;
  /** esa-icon name (must exist in the icon registry). */
  icon: string;
  description: string;
}

export interface HelpArticle {
  /** Kebab id — also the hash deep-link on the Help & Guidance page. */
  id: string;
  /** 'howto' = task guidance; 'glossary' = "what is a …" quick answer. */
  kind: 'howto' | 'glossary';
  category: HelpCategoryId;
  title: string;
  /** One-liner shown in lists and search results. */
  summary: string;
  blocks: HelpBlock[];
  /** Related article ids. */
  related?: string[];
}

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    icon: 'compass',
    description: 'Orientation, navigation, and search — the first day in Beacon.',
  },
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    icon: 'database',
    description: 'Sources, commitments, and requirements — how obligations are documented.',
  },
  {
    id: 'tracking',
    title: 'Tracking & actions',
    icon: 'radar',
    description: 'Actions, implementations, components, and scope — how work gets done.',
  },
  {
    id: 'monitoring',
    title: 'Monitoring & field work',
    icon: 'map-pinned',
    description: 'Daily reports, observations, surveys, and site clearance.',
  },
  {
    id: 'reporting',
    title: 'Reporting & evidence',
    icon: 'clipboard-list',
    description: 'Evidence of compliance and the reports built from it.',
  },
];

export const HELP_ARTICLES: HelpArticle[] = [
  // ═══ Getting started ═══
  {
    id: 'five-minute-tour',
    kind: 'howto',
    category: 'getting-started',
    title: 'A five-minute tour of Beacon',
    summary: 'The four zones of the app and how a compliance obligation flows through them.',
    blocks: [
      {
        kind: 'p',
        text: 'Beacon turns a shelf of regulatory documents into a working compliance program. Everything in the app follows one flow: documents are cataloged, obligations are planned into actions, and completed work is proven with evidence.',
      },
      { kind: 'video', label: 'Watch: a quick tour of Beacon', duration: '4:32' },
      {
        kind: 'steps',
        items: [
          'The Data Catalog holds your source documents and the commitments and requirements extracted from them.',
          'Tracking is where planned actions become day-to-day work, tracked per project or per component.',
          'Monitoring captures what happens in the field — daily reports, observations, and surveys.',
          'Reporting assembles evidence of compliance into the reports your agencies expect.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'The side navigation mirrors these four zones. If you are ever lost, start from your project dashboard — it links into each zone.',
      },
    ],
    related: ['global-search-tips', 'what-is-an-action'],
  },
  {
    id: 'global-search-tips',
    kind: 'howto',
    category: 'getting-started',
    title: 'Finding anything with search',
    summary: 'Press / anywhere to search commitments, requirements, actions, and documents.',
    blocks: [
      {
        kind: 'p',
        text: 'Search reads the full text of everything in your project — including the body text of commitments and uploaded documents, not just titles.',
      },
      {
        kind: 'steps',
        items: [
          'Press / on any page, or click the search field in the top bar.',
          'Type a few words — results group by type (commitments, requirements, actions, documents) with matching snippets highlighted.',
          'Press Enter on a result to jump straight to it, or choose “See all results” for the full page with filters.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'Searching a permit number or an agency name is often the fastest way to find every obligation tied to it.',
      },
    ],
    related: ['five-minute-tour'],
  },

  // ═══ Data Catalog ═══
  {
    id: 'what-is-a-source',
    kind: 'glossary',
    category: 'data-catalog',
    title: 'What is a Source Document?',
    summary: 'The regulatory document — permit, EIR, agreement — obligations are extracted from.',
    blocks: [
      {
        kind: 'p',
        text: 'A Source Document is a regulatory document attached to your project: a permit, an environmental impact report, an incidental take permit, a contract, or an agency agreement. It is where every obligation in Beacon originally comes from.',
      },
      {
        kind: 'p',
        text: 'A project may carry dozens of sources from different agencies, and each source may contain anywhere from a handful to hundreds of discrete obligations. Uploading the original PDF lets Beacon extract its text for search and assisted commitment extraction.',
      },
    ],
    related: ['what-is-a-commitment'],
  },
  {
    id: 'what-is-a-commitment',
    kind: 'glossary',
    category: 'data-catalog',
    title: 'What is a Commitment?',
    summary: 'One discrete obligation, in the document’s own words.',
    blocks: [
      {
        kind: 'p',
        text: 'A Commitment is a single “thing the project must do,” captured in the original regulatory language of its source document. Commitments carry structured details — type, resource category, phases, species, seasons — so they can be filtered and planned.',
      },
      {
        kind: 'p',
        text: 'The same real-world obligation often appears in several documents. Each appearance is kept as its own commitment; the overlap is resolved later, when requirements are consolidated into actions.',
      },
      {
        kind: 'callout',
        tone: 'note',
        text: 'When an agency amends a document, commitments are revised rather than replaced — the original and updated language coexist with clear lineage.',
      },
    ],
    related: ['what-is-a-source', 'what-is-a-requirement'],
  },
  {
    id: 'what-is-a-requirement',
    kind: 'glossary',
    category: 'data-catalog',
    title: 'What is a Requirement?',
    summary: 'A specific, actionable sub-obligation broken out of a commitment.',
    blocks: [
      {
        kind: 'p',
        text: 'A Requirement is one specific piece of work inside a commitment. A commitment stating “prior to grading, conduct protocol-level surveys for burrowing owl and submit results within 30 days” contains two requirements: conduct the survey, and submit the results.',
      },
      {
        kind: 'p',
        text: 'Requirements carry their own type, scope, and frequency, and are the unit that gets consolidated into trackable actions.',
      },
    ],
    related: ['what-is-a-commitment', 'what-is-an-action'],
  },
  {
    id: 'what-is-an-action',
    kind: 'glossary',
    category: 'data-catalog',
    title: 'What is an Action?',
    summary: 'One trackable deliverable consolidating requirements that describe the same work.',
    blocks: [
      {
        kind: 'p',
        text: 'An Action is a planned unit of compliance work. It consolidates requirements — often from many commitments — that describe the same underlying task. If “submit the stormwater plan” appears in 44 different commitments, it becomes one action.',
      },
      {
        kind: 'figure',
        label: 'From documents to work',
        caption: 'Thousands of requirements across dozens of documents collapse into a few hundred actions — the minimum set of real work.',
      },
      {
        kind: 'p',
        text: 'Each action defines the work, the evidence expected, the schedule, and the responsible party. Actions start as drafts and must be published before they generate trackable implementations.',
      },
    ],
    related: ['what-is-a-requirement', 'actions-vs-implementations', 'project-vs-component-scope'],
  },
  {
    id: 'tracing-lineage',
    kind: 'howto',
    category: 'data-catalog',
    title: 'Tracing a requirement back to its source',
    summary: 'Follow the lineage from any requirement up to the exact document language.',
    blocks: [
      {
        kind: 'p',
        text: 'Every requirement keeps its full ancestry: the commitment it came from, and the source document that commitment was extracted from. This is how you answer “why do we have to do this?” with the exact regulatory language.',
      },
      {
        kind: 'steps',
        items: [
          'Open the requirement — the lineage strip at the top shows Source → Commitment → Requirement.',
          'Click the commitment to read the obligation in the document’s original words.',
          'Click the source to see the document’s details, agency, and attached PDF — with the cited passage highlighted.',
        ],
      },
    ],
    related: ['what-is-a-requirement', 'what-is-a-source'],
  },

  // ═══ Tracking & actions ═══
  {
    id: 'actions-vs-implementations',
    kind: 'glossary',
    category: 'tracking',
    title: 'Actions vs. implementations',
    summary: 'The action is the plan; implementations are the work you actually do.',
    blocks: [
      {
        kind: 'p',
        text: 'An action defines what must be done. An implementation tracks actually doing it — status, assignee, tasks, comments, and evidence. Most teams simply call implementations “the actions,” and that is fine: they are the thing you interact with daily.',
      },
      {
        kind: 'p',
        text: 'How many implementations an action produces depends on its scope and frequency. A one-time, project-wide plan submission produces one. A recurring, component-scoped inspection produces one per component, per occurrence.',
      },
    ],
    related: ['what-is-an-action', 'project-vs-component-scope'],
  },
  {
    id: 'what-is-a-component',
    kind: 'glossary',
    category: 'tracking',
    title: 'What is a Component?',
    summary: 'A physical or logical subdivision of the project with its own compliance tracking.',
    blocks: [
      {
        kind: 'p',
        text: 'A Component is a distinct place or package of work within your project — a launch shaft, an intake site, a construction segment. Components matter because the same obligation often plays out independently at each location.',
      },
      {
        kind: 'p',
        text: 'Components map to the commitments that apply to them, can carry their own milestone dates, and receive their own implementations of component-scoped actions. Work Areas subdivide a component further when field tracking needs finer grain.',
      },
    ],
    related: ['project-vs-component-scope', 'starring-components'],
  },
  {
    id: 'project-vs-component-scope',
    kind: 'glossary',
    category: 'tracking',
    title: 'Project scope vs. component scope',
    summary: 'Scope decides whether work is tracked once, or once per location.',
    blocks: [
      {
        kind: 'p',
        text: 'Scope is one of Beacon’s most important switches. A project-scoped action is done once, centrally — “submit the project-wide stormwater plan.” A component-scoped action is done independently at every applicable component — “install exclusion fencing” at each of 20 construction areas.',
      },
      {
        kind: 'figure',
        label: 'The scope multiplier',
        caption: 'One component-scoped action across 20 components produces 20 independently tracked implementations.',
      },
      {
        kind: 'callout',
        tone: 'note',
        text: 'Each implementation is tracked on its own: different assignees, different timelines, different evidence.',
      },
    ],
    related: ['what-is-a-component', 'actions-vs-implementations'],
  },
  {
    id: 'reading-permit-tracking',
    kind: 'howto',
    category: 'tracking',
    title: 'Reading the Permit Tracking board',
    summary: 'Where each permit stands, what is blocking it, and what is due next.',
    blocks: [
      {
        kind: 'p',
        text: 'Permit Tracking shows every permit and approval your project needs, each with its current status in the acquisition pipeline — from “not yet applied” through agency review to “issued.”',
      },
      {
        kind: 'steps',
        items: [
          'Each row is one permit; the status lozenge shows where it sits in the pipeline right now.',
          'The date column shows the next deadline — a submittal window, an agency response due, or an expiration to renew.',
          'Open a permit to see its conditions, responsible contacts, and the source document it will arrive as once issued.',
        ],
      },
      { kind: 'video', label: 'Watch: a permit’s life in Beacon', duration: '2:47' },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'An issued permit usually becomes a new source document — its conditions are extracted as commitments and join the catalog like any other obligation.',
      },
    ],
    related: ['what-is-a-source', 'what-is-a-commitment'],
  },
  {
    id: 'starring-components',
    kind: 'howto',
    category: 'tracking',
    title: 'Starring components on your dashboard',
    summary: 'Pin the three-to-five components you actually work in.',
    blocks: [
      {
        kind: 'p',
        text: 'Large projects can have dozens of components, but most people work in a few. Starring pins a component to your project dashboard as a card with its Tracking, Monitoring, and Reporting pulse — your portal into that component’s own dashboard.',
      },
      {
        kind: 'steps',
        items: [
          'Open any component and click the star in its header.',
          'Starred components appear on your project dashboard in the Components section.',
          'Un-star from either place; the component itself is unaffected.',
        ],
      },
    ],
    related: ['what-is-a-component', 'reading-critical-now'],
  },
  {
    id: 'reading-critical-now',
    kind: 'howto',
    category: 'tracking',
    title: 'How “Most critical right now” is chosen',
    summary: 'Why an item earns a spot at the top of your dashboard.',
    blocks: [
      {
        kind: 'p',
        text: 'The dashboard’s critical surface is deliberately small: it elevates only items that are project-critical today — an overdue action on a critical-path component, a lapsed survey blocking ground disturbance, a report due to an agency this week.',
      },
      {
        kind: 'p',
        text: 'Items leave the surface when the underlying condition clears — completing the work, filing the report, or a review resolving the block. There is nothing to configure; it reads the same signals shown in each zone.',
      },
    ],
    related: ['starring-components', 'site-clearance-go-no-go'],
  },

  // ═══ Monitoring & field work ═══
  {
    id: 'what-is-a-dmr',
    kind: 'glossary',
    category: 'monitoring',
    title: 'What is a Daily Monitoring Report?',
    summary: 'The structured field report of a day on site — and a direct source of evidence.',
    blocks: [
      {
        kind: 'p',
        text: 'A Daily Monitoring Report (DMR) captures one day of field monitoring: who observed, site and weather conditions, construction activities underway, observations recorded, photos, and narrative notes.',
      },
      {
        kind: 'p',
        text: 'DMRs are a bridge to compliance: when an obligation says “conduct daily biological monitoring during construction,” the DMRs documenting that monitoring are the evidence the obligation was met.',
      },
    ],
    related: ['what-is-an-observation', 'what-is-evidence'],
  },
  {
    id: 'what-is-an-observation',
    kind: 'glossary',
    category: 'monitoring',
    title: 'What is an Observation?',
    summary: 'One recorded field event — a species sighting, habitat condition, weather event, or BMP check.',
    blocks: [
      {
        kind: 'p',
        text: 'An Observation is a single recorded event from the field: “two burrowing owls at the north staging area,” “silt fence along the eastern boundary intact,” “wind exceeded 25 mph, dust control activated.” Observations usually belong to a DMR and carry species data, location, time, and photos.',
      },
      {
        kind: 'callout',
        tone: 'note',
        text: 'Observations with compliance consequences — an active nest inside a buffer, a failed BMP — surface in Monitoring as items needing action, and can trigger review before work proceeds.',
      },
    ],
    related: ['what-is-a-dmr', 'site-clearance-go-no-go'],
  },
  {
    id: 'qc-field-surveys',
    kind: 'howto',
    category: 'monitoring',
    title: 'Reviewing field surveys before they count',
    summary: 'Surveys sync from field apps, but only QC-approved records drive compliance.',
    blocks: [
      {
        kind: 'p',
        text: 'Survey records flow in from field collection tools (Fulcrum, Survey123). Before a record affects compliance — clearances, countdowns, evidence — it passes a quality-control review.',
      },
      {
        kind: 'steps',
        items: [
          'New records land with a “pending QC” status in the Surveys grid.',
          'A reviewer checks species identification, coordinates, and required fields, then approves or returns the record.',
          'Views default to QC-approved records only; toggle the filter to see pending ones.',
        ],
      },
    ],
    related: ['what-is-an-observation', 'what-is-a-dmr'],
  },
  {
    id: 'site-clearance-go-no-go',
    kind: 'howto',
    category: 'monitoring',
    title: 'Using Site Clearance go/no-go',
    summary: 'Check whether a work site is clear for ground disturbance — and what is blocking it.',
    blocks: [
      {
        kind: 'p',
        text: 'Site Clearance answers one question per site: is it clear to disturb ground today? The system detects potential blocks — a lapsed nesting survey, an unclosed wildlife buffer — and marks the site provisionally blocked until a qualified reviewer decides.',
      },
      {
        kind: 'steps',
        items: [
          'Green sites are clear; amber sites carry a provisional block awaiting review; red sites are blocked by a recorded decision.',
          'Open a site to see each discipline’s reviews, the detections behind them, and the required outcome.',
          'Reviews overrule detections: the system detects, humans decide.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'The map and the review list are the same data — pick whichever view fits how you work.',
      },
    ],
    related: ['what-is-an-observation', 'reading-critical-now'],
  },

  // ═══ Reporting & evidence ═══
  {
    id: 'what-is-evidence',
    kind: 'glossary',
    category: 'reporting',
    title: 'What counts as Evidence of Compliance?',
    summary: 'The documented proof an obligation was met — the artifact an auditor sees.',
    blocks: [
      {
        kind: 'p',
        text: 'Evidence of Compliance is the end of the whole flow: the report, photo, receipt, signed form, or monitoring record that proves an obligation was met. It is what you present to a regulatory agency during an audit.',
      },
      {
        kind: 'p',
        text: 'Evidence attaches to action implementations, and can also link to checklist items to satisfy specific requirements per component. Field-sourced evidence can come straight from Daily Monitoring Reports.',
      },
      {
        kind: 'callout',
        tone: 'note',
        text: 'Every evidence record keeps its files, metadata, and timestamps — an auditable trail from source document to proof.',
      },
    ],
    related: ['what-is-a-dmr', 'actions-vs-implementations'],
  },
];

// ─── Route awareness ─────────────────────────────────────────────────────────

export interface HelpRouteContext {
  /** Pathname substring (base-agnostic). First match in array order wins. */
  pattern: string;
  /** Page name — shown in the drawer's "You are here" section. */
  page: string;
  /** One-line purpose of the page, in plain words — "You are here" body text. */
  purpose: string;
  /** Ordered how-to article ids — the “On this page” lead section. */
  howtos: string[];
  /** Glossary ids for “Terms on this page.” */
  terms: string[];
}

export const HELP_ROUTE_CONTEXTS: HelpRouteContext[] = [
  {
    pattern: '/prototypes/permit-tracking',
    page: 'Permit Tracking',
    purpose: 'Every permit and approval the project needs, tracked through the acquisition pipeline — what is in hand, in review, and due next.',
    howtos: ['reading-permit-tracking', 'global-search-tips'],
    terms: ['what-is-a-source', 'what-is-a-commitment'],
  },
  {
    pattern: '/prototypes/project-dashboard',
    page: 'Project Dashboard',
    purpose: 'Your project homepage — what is most critical right now, your starred components, and front doors into every zone of Beacon.',
    howtos: ['starring-components', 'reading-critical-now', 'five-minute-tour'],
    terms: ['what-is-a-component', 'what-is-an-action'],
  },
  {
    pattern: '/prototypes/data-catalog-source-document',
    page: 'Source Document',
    purpose: 'One regulatory document — its details, attached files, and the commitments extracted from it.',
    howtos: ['tracing-lineage'],
    terms: ['what-is-a-source', 'what-is-a-commitment'],
  },
  {
    pattern: '/prototypes/data-catalog-commitment',
    page: 'Commitment',
    purpose: 'One obligation in the document’s own words, with its structured details, applicability, and revision history.',
    howtos: ['tracing-lineage'],
    terms: ['what-is-a-commitment', 'what-is-a-requirement'],
  },
  {
    // Matches the requirement pages AND the requirements list (shared prefix).
    pattern: '/prototypes/data-catalog-requirement',
    page: 'Requirements',
    purpose: 'The specific, actionable sub-obligations broken out of commitments — each traceable back to its source language.',
    howtos: ['tracing-lineage'],
    terms: ['what-is-a-requirement', 'what-is-an-action', 'project-vs-component-scope'],
  },
  {
    pattern: '/prototypes/data-catalog-action',
    page: 'Actions',
    purpose: 'Consolidated, trackable units of compliance work — requirements that describe the same task, planned as one deliverable.',
    howtos: ['tracing-lineage'],
    terms: ['what-is-an-action', 'actions-vs-implementations', 'project-vs-component-scope'],
  },
  {
    pattern: '/prototypes/site-clearance',
    page: 'Site Clearance',
    purpose: 'Go/no-go for ground disturbance — which sites are clear today, and exactly what blocks the rest.',
    howtos: ['site-clearance-go-no-go'],
    terms: ['what-is-an-observation'],
  },
  {
    pattern: '/prototypes/monitoring/surveys',
    page: 'Surveys',
    purpose: 'Field survey records synced from collection apps, quality-controlled before they count toward compliance.',
    howtos: ['qc-field-surveys'],
    terms: ['what-is-an-observation', 'what-is-a-dmr'],
  },
  {
    pattern: '/prototypes/monitoring',
    page: 'Monitoring',
    purpose: 'What is happening in the field — daily reports, observations, surveys, and the compliance concerns they raise.',
    howtos: ['qc-field-surveys', 'site-clearance-go-no-go'],
    terms: ['what-is-a-dmr', 'what-is-an-observation'],
  },
  {
    pattern: '/prototypes/requirement-tracker',
    page: 'Requirement Tracker',
    purpose: 'Requirement-level status — what is satisfied, what is outstanding, and the evidence behind each answer.',
    howtos: ['tracing-lineage'],
    terms: ['what-is-a-requirement', 'what-is-evidence'],
  },
];

/** Fallback for any page without a curated context. */
export const HELP_GENERAL_CONTEXT: Omit<HelpRouteContext, 'pattern'> = {
  page: 'Beacon',
  purpose: 'Beacon turns a shelf of regulatory documents into a working compliance program — cataloged, planned, executed, and proven.',
  howtos: ['five-minute-tour', 'global-search-tips'],
  terms: ['what-is-an-action', 'what-is-a-commitment', 'what-is-a-component'],
};

// ─── Ask Aldo (drawer chat) ──────────────────────────────────────────────────
// The drawer's chat affordance is a DETERMINISTIC mock: it matches the question
// against article text and answers with links. This copy keeps Aldo's voice in
// one place. (The real deterministic search lives on the Help & Guidance page.)

export const ALDO_CHAT = {
  placeholder: 'Ask Aldo a question…',
  /** Reply intro when matches are found (links follow). */
  found: 'Here’s what I have on that:',
  /** Reply when nothing matches. */
  fallback:
    'I don’t have a good answer for that yet. Try different words, or browse all Help & Guidance — and this is exactly the kind of question the team wants to hear about.',
} as const;

// ─── What's new ──────────────────────────────────────────────────────────────

export interface WhatsNewEntry {
  /** ISO date, newest first. */
  date: string;
  title: string;
  blurb: string;
  /** esa-icon name (AppShell's LUCIDE map has paths for off-registry names). */
  icon: string;
}

export const WHATS_NEW: WhatsNewEntry[] = [
  {
    date: '2026-07-14',
    title: 'Project Dashboard',
    blurb: 'A new logged-in homepage: the most critical items, starred components, and front doors into every zone.',
    icon: 'layout-dashboard',
  },
  {
    date: '2026-07-02',
    title: 'Site Clearance go/no-go',
    blurb: 'Provisional blocks now show exactly which discipline reviews are outstanding before ground disturbance.',
    icon: 'map-pinned',
  },
  {
    date: '2026-06-19',
    title: 'Full-text search',
    blurb: 'Press / anywhere — search now reads commitment body text and documents, with highlighted snippets.',
    icon: 'search',
  },
];

// ─── Small helpers (build-time) ──────────────────────────────────────────────

export function articlesByCategory(id: HelpCategoryId): HelpArticle[] {
  return HELP_ARTICLES.filter((a) => a.category === id);
}

export function getArticle(id: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((a) => a.id === id);
}
