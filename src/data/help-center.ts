// Help & Guidance content — the single dataset behind the Aldo guidance drawer
// and the Help & Guidance page. Articles are INVENTED prototype copy, grounded in
// Beacon's product documentation (esassoc/Beacon docs/product/) but written fresh:
// realistic vocabulary, fictional examples, nothing copied from client documents.
//
// Consumers:
//   - BcnGuidanceDrawer  — pre-renders every article; a client script shows the
//     set matching the current route (HELP_ROUTE_CONTEXTS, first match wins).
//   - BcnKbBrowser / BcnKbHero / BcnKbCategories — the full browsable page, with
//     an A-Z glossary view fed by glossaryArticles().
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

// Category order below IS the display order (General first, Settings &
// Configuration last). Glossary terms live in the functional category their term
// belongs to; General additionally holds the structural vocabulary shared across
// every zone.
export type HelpCategoryId =
  | 'general'
  | 'getting-started'
  | 'tracking'
  | 'monitoring'
  | 'reporting'
  | 'data-catalog'
  | 'settings-config';

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
  /** 'howto' = task guidance; 'glossary' = single-term definition. */
  kind: 'howto' | 'glossary';
  category: HelpCategoryId;
  /** How-to: a task phrase. Glossary: the bare product term ("Action", "Scope"). */
  title: string;
  /** One-liner shown in lists and search results. */
  summary: string;
  blocks: HelpBlock[];
  /** Related article ids. */
  related?: string[];
}

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: 'general',
    title: 'General',
    icon: 'book-open',
    description: 'App-wide structure and the vocabulary shared across every zone.',
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: 'compass',
    description: 'Orientation, navigation, and search — the first day in Beacon.',
  },
  {
    id: 'tracking',
    title: 'Tracking',
    icon: 'radar',
    description: 'Actions, implementations, components, and permits — how obligations become tracked work.',
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    icon: 'map-pinned',
    description: 'Daily reports, observations, surveys, and site clearance.',
  },
  {
    id: 'reporting',
    title: 'Reporting',
    icon: 'clipboard-list',
    description: 'Evidence of compliance and the reports assembled from it.',
  },
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    icon: 'database',
    description: 'Source documents, commitments, and requirements — how obligations are documented.',
  },
  {
    id: 'settings-config',
    title: 'Settings & Configuration',
    icon: 'settings',
    description: 'Tenant configuration, users, notifications, and feature flags.',
  },
];

export const HELP_ARTICLES: HelpArticle[] = [
  // ═══ General ═══
  {
    id: 'project-vs-component-scope',
    kind: 'glossary',
    category: 'general',
    title: 'Scope',
    summary: 'The setting that determines whether work is tracked once, or once per location.',
    blocks: [
      {
        kind: 'p',
        text: 'Scope determines how an action is distributed. A project-scoped action is performed once, centrally — for example, submitting the project-wide stormwater plan. A component-scoped action is performed independently at every applicable component — for example, installing exclusion fencing at each of 20 construction areas.',
      },
      {
        kind: 'figure',
        label: 'The scope multiplier',
        caption: 'One component-scoped action across 20 components produces 20 independently tracked implementations.',
      },
      {
        kind: 'callout',
        tone: 'note',
        text: 'Each implementation is tracked separately, with its own assignee, timeline, and evidence.',
      },
    ],
    related: ['what-is-a-component', 'actions-vs-implementations', 'work-area'],
  },
  {
    id: 'tenant',
    kind: 'glossary',
    category: 'general',
    title: 'Tenant',
    summary: 'The client organization a Beacon workspace, its data, and its configuration are scoped to.',
    blocks: [
      {
        kind: 'p',
        text: 'A Tenant is the organization a Beacon workspace belongs to. Beacon is multi-tenant: each tenant’s projects, documents, users, and configuration are isolated from every other tenant’s, and a user operates within a single tenant at a time.',
      },
      {
        kind: 'p',
        text: 'Tenant-level settings — display labels, enabled features, notification defaults, and user roles — apply uniformly across every project the tenant owns.',
      },
    ],
    related: ['managing-tenant-settings', 'feature-flag'],
  },
  {
    id: 'work-area',
    kind: 'glossary',
    category: 'general',
    title: 'Work Area',
    summary: 'The finest scope level — a subdivision of a component for field-level tracking.',
    blocks: [
      {
        kind: 'p',
        text: 'A Work Area is a subdivision of a component, used when field tracking requires finer grain than the component itself provides. Work areas form the most granular level of the Project → Component → Work Area scope hierarchy.',
      },
      {
        kind: 'p',
        text: 'Evidence of Compliance and monitoring records can be scoped to a work area, isolating activity to a specific portion of a component.',
      },
    ],
    related: ['what-is-a-component', 'project-vs-component-scope'],
  },

  // ═══ Getting Started ═══
  {
    id: 'five-minute-tour',
    kind: 'howto',
    category: 'getting-started',
    title: 'A five-minute tour of Beacon',
    summary: 'The four zones of the app and how a compliance obligation flows through them.',
    blocks: [
      {
        kind: 'p',
        text: 'Beacon turns a body of regulatory documents into a working compliance program. Everything in the app follows one flow: documents are cataloged, obligations are planned into actions, and completed work is proven with evidence.',
      },
      { kind: 'video', label: 'Watch: a quick tour of Beacon', duration: '4:32' },
      {
        kind: 'steps',
        items: [
          'The Data Catalog holds source documents and the commitments and requirements extracted from them.',
          'Tracking is where planned actions become day-to-day work, tracked per project or per component.',
          'Monitoring captures what happens in the field — daily reports, observations, and surveys.',
          'Reporting assembles evidence of compliance into the reports agencies expect.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'The side navigation mirrors these four zones. The project dashboard links into each zone and is the shortest path back to any of them.',
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
        text: 'Search reads the full text of everything in a project — including the body text of commitments and uploaded documents, not just titles.',
      },
      {
        kind: 'steps',
        items: [
          'Press / on any page, or click the search field in the top bar.',
          'Type a few words. Results group by type — commitments, requirements, actions, documents — with matching snippets highlighted.',
          'Press Enter on a result to open it, or choose “See all results” for the full page with filters.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'Searching a permit number or an agency name returns every obligation tied to it.',
      },
    ],
    related: ['five-minute-tour'],
  },

  // ═══ Tracking ═══
  {
    id: 'actions-vs-implementations',
    kind: 'glossary',
    category: 'tracking',
    title: 'Implementation',
    summary: 'A single execution of a published action — the record teams work day to day.',
    blocks: [
      {
        kind: 'p',
        text: 'An Implementation is the tracked execution of an action: its status, assignee, tasks, comments, and evidence. The action defines what must be done; the implementation records doing it. In daily use, implementations are what teams refer to as the actions.',
      },
      {
        kind: 'p',
        text: 'The number of implementations an action generates is determined by its scope and frequency. A one-time, project-scoped submission generates one implementation. A recurring, component-scoped inspection generates one per component, per occurrence.',
      },
    ],
    related: ['what-is-an-action', 'project-vs-component-scope'],
  },
  {
    id: 'what-is-a-component',
    kind: 'glossary',
    category: 'tracking',
    title: 'Component',
    summary: 'A distinct place or package of work within a project, tracked independently.',
    blocks: [
      {
        kind: 'p',
        text: 'A Component is a discrete location or work package within a project — a launch shaft, an intake site, a construction segment. Components exist because the same obligation frequently applies independently at each location.',
      },
      {
        kind: 'p',
        text: 'A component maps to the commitments that apply to it, may carry its own milestone dates, and receives its own implementations of component-scoped actions. A Work Area subdivides a component further when field tracking requires finer grain.',
      },
    ],
    related: ['project-vs-component-scope', 'starring-components', 'work-area'],
  },
  {
    id: 'permit',
    kind: 'glossary',
    category: 'tracking',
    title: 'Permit',
    summary: 'An agency authorization the project must obtain, tracked through the acquisition pipeline.',
    blocks: [
      {
        kind: 'p',
        text: 'A Permit is an authorization or approval a project must secure from a regulatory agency before or during construction. Beacon tracks each permit through its acquisition pipeline — from not yet applied, through agency review, to issued.',
      },
      {
        kind: 'p',
        text: 'An issued permit typically becomes a source document: its conditions are extracted as commitments and enter the catalog alongside every other obligation.',
      },
    ],
    related: ['reading-permit-tracking', 'what-is-a-source'],
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
        text: 'Permit Tracking lists every permit and approval a project needs, each with its current status in the acquisition pipeline — from not yet applied, through agency review, to issued.',
      },
      {
        kind: 'steps',
        items: [
          'Each row is one permit; the status lozenge shows where it sits in the pipeline.',
          'The date column shows the next deadline — a submittal window, an agency response due, or an expiration to renew.',
          'Open a permit to see its conditions, responsible contacts, and the source document it will become once issued.',
        ],
      },
      { kind: 'video', label: 'Watch: a permit’s life in Beacon', duration: '2:47' },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'An issued permit becomes a source document: its conditions are extracted as commitments and join the catalog like any other obligation.',
      },
    ],
    related: ['permit', 'what-is-a-source', 'what-is-a-commitment'],
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
        text: 'A project may have dozens of components, though most people work in a few. Starring pins a component to the project dashboard as a card showing its Tracking, Monitoring, and Reporting pulse — the entry point into that component’s own dashboard.',
      },
      {
        kind: 'steps',
        items: [
          'Open any component and click the star in its header.',
          'Starred components appear on the project dashboard in the Components section.',
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
    summary: 'Why an item earns a spot at the top of the dashboard.',
    blocks: [
      {
        kind: 'p',
        text: 'The dashboard’s critical surface is deliberately small. It elevates only items that are project-critical today — an overdue action on a critical-path component, a lapsed survey blocking ground disturbance, a report due to an agency this week.',
      },
      {
        kind: 'p',
        text: 'An item leaves the surface when its underlying condition clears — the work is completed, the report is filed, or a review resolves the block. There is nothing to configure; the surface reads the same signals shown in each zone.',
      },
    ],
    related: ['starring-components', 'site-clearance-go-no-go'],
  },

  // ═══ Monitoring ═══
  {
    id: 'what-is-a-dmr',
    kind: 'glossary',
    category: 'monitoring',
    title: 'Daily Monitoring Report',
    summary: 'The structured field record of one day on site, and a direct source of evidence.',
    blocks: [
      {
        kind: 'p',
        text: 'A Daily Monitoring Report (DMR) documents one day of field monitoring: the observer, site and weather conditions, construction activities underway, recorded observations, photographs, and narrative notes.',
      },
      {
        kind: 'p',
        text: 'DMRs connect field activity to compliance. When an obligation requires daily biological monitoring during construction, the DMRs documenting that monitoring constitute the evidence the obligation was met.',
      },
    ],
    related: ['what-is-an-observation', 'what-is-evidence'],
  },
  {
    id: 'what-is-an-observation',
    kind: 'glossary',
    category: 'monitoring',
    title: 'Observation',
    summary: 'One recorded field event — a species sighting, habitat condition, weather event, or BMP check.',
    blocks: [
      {
        kind: 'p',
        text: 'An Observation is a single recorded field event: two burrowing owls at the north staging area, an intact silt fence along the eastern boundary, or wind exceeding 25 mph with dust control activated. An observation typically belongs to a DMR and carries species data, location, time, and photographs.',
      },
      {
        kind: 'callout',
        tone: 'note',
        text: 'Observations with compliance consequences — an active nest inside a buffer, a failed BMP — surface in Monitoring as items requiring action, and may trigger review before work proceeds.',
      },
    ],
    related: ['what-is-a-dmr', 'site-clearance'],
  },
  {
    id: 'survey',
    kind: 'glossary',
    category: 'monitoring',
    title: 'Survey',
    summary: 'A field data record synced from a collection app, effective only after quality-control approval.',
    blocks: [
      {
        kind: 'p',
        text: 'A Survey is a structured field record — typically a species or habitat survey — collected in a field application such as Fulcrum or Survey123 and synced into Beacon. Surveys supply the dated evidence behind clearances and compliance countdowns.',
      },
      {
        kind: 'p',
        text: 'A survey record does not affect compliance until it passes quality-control review. Pending records are excluded from clearance and evidence calculations by default.',
      },
    ],
    related: ['qc-field-surveys', 'site-clearance'],
  },
  {
    id: 'site-clearance',
    kind: 'glossary',
    category: 'monitoring',
    title: 'Site Clearance',
    summary: 'The go/no-go determination of whether a site is clear for ground disturbance.',
    blocks: [
      {
        kind: 'p',
        text: 'Site Clearance is the determination of whether a specific site is clear to disturb ground on a given day. Beacon detects potential blocks — a lapsed nesting survey, an open wildlife buffer — and marks the site provisionally blocked until a qualified reviewer records a decision.',
      },
      {
        kind: 'p',
        text: 'Detections are advisory; reviews are authoritative. A site is clear only when no unresolved block remains and the governing reviews permit disturbance.',
      },
    ],
    related: ['site-clearance-go-no-go', 'what-is-an-observation'],
  },
  {
    id: 'monitoring-portal',
    kind: 'glossary',
    category: 'monitoring',
    title: 'Monitoring Portal',
    summary: 'The section that reports commitment compliance from field observations.',
    blocks: [
      {
        kind: 'p',
        text: 'The Monitoring Portal is the area of Beacon that reports commitment-level compliance against field activity. It identifies commitments that are out of compliance and the observations driving each result, matched by species and condition.',
      },
      {
        kind: 'p',
        text: 'The portal reads the same observation and survey records captured elsewhere in Monitoring; it holds no separate data of its own.',
      },
    ],
    related: ['what-is-an-observation', 'what-is-a-dmr'],
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
        text: 'Survey records flow in from field collection tools such as Fulcrum and Survey123. Before a record affects compliance — clearances, countdowns, evidence — it passes a quality-control review.',
      },
      {
        kind: 'steps',
        items: [
          'New records arrive with a pending-QC status in the Surveys grid.',
          'A reviewer checks species identification, coordinates, and required fields, then approves or returns the record.',
          'Views default to QC-approved records; toggle the filter to see pending ones.',
        ],
      },
    ],
    related: ['survey', 'what-is-an-observation', 'what-is-a-dmr'],
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
        text: 'Site Clearance answers one question per site: is it clear to disturb ground today? The system detects potential blocks — a lapsed nesting survey, an open wildlife buffer — and marks the site provisionally blocked until a qualified reviewer decides.',
      },
      {
        kind: 'steps',
        items: [
          'Green sites are clear; amber sites carry a provisional block awaiting review; red sites are blocked by a recorded decision.',
          'Open a site to see each discipline’s reviews, the detections behind them, and the required outcome.',
          'Reviews overrule detections: the system detects, a reviewer decides.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'The map and the review list present the same data in two views.',
      },
    ],
    related: ['site-clearance', 'what-is-an-observation', 'reading-critical-now'],
  },

  // ═══ Reporting ═══
  {
    id: 'what-is-evidence',
    kind: 'glossary',
    category: 'reporting',
    title: 'Evidence of Compliance',
    summary: 'The documented proof that an obligation was met — the artifact an auditor reviews.',
    blocks: [
      {
        kind: 'p',
        text: 'Evidence of Compliance is the terminal output of the compliance flow: the report, photograph, receipt, signed form, or monitoring record that proves an obligation was satisfied. It is the material presented to a regulatory agency during an audit.',
      },
      {
        kind: 'p',
        text: 'Evidence attaches to action implementations and may also link to checklist items that satisfy specific requirements per component. Field-sourced evidence can derive directly from Daily Monitoring Reports.',
      },
      {
        kind: 'callout',
        tone: 'note',
        text: 'Every evidence record retains its files, metadata, and timestamps — an auditable trail from source document to proof.',
      },
    ],
    related: ['what-is-a-dmr', 'actions-vs-implementations'],
  },
  {
    id: 'assembling-compliance-report',
    kind: 'howto',
    category: 'reporting',
    title: 'Assembling a compliance report',
    summary: 'Compile evidence of compliance into a report package for an agency.',
    blocks: [
      {
        kind: 'p',
        text: 'A compliance report presents the evidence behind a set of obligations in the format an agency expects. Reports are assembled from existing Evidence of Compliance records; they create no new evidence.',
      },
      {
        kind: 'steps',
        items: [
          'Open Reporting and choose the report template that matches the agency’s required format.',
          'Select the scope — project, component, or work area — and the reporting period.',
          'Beacon gathers the evidence records in scope; review the set and exclude any records that do not apply.',
          'Generate the package. The output lists each obligation, its status, and the linked evidence.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'A report reflects the evidence present at generation time. Regenerate after new evidence is attached to capture the current state.',
      },
    ],
    related: ['what-is-evidence', 'actions-vs-implementations'],
  },

  // ═══ Data Catalog ═══
  {
    id: 'what-is-a-source',
    kind: 'glossary',
    category: 'data-catalog',
    title: 'Source Document',
    summary: 'The regulatory document — permit, EIR, or agreement — that obligations are extracted from.',
    blocks: [
      {
        kind: 'p',
        text: 'A Source Document is a regulatory record attached to a project: a permit, an environmental impact report, an incidental take permit, a contract, or an agency agreement. Every obligation in Beacon originates from a source document.',
      },
      {
        kind: 'p',
        text: 'A project may carry dozens of source documents from multiple agencies, and a single source may contain anywhere from a few to several hundred discrete obligations. Uploading the original file makes its text available for search and assisted commitment extraction.',
      },
    ],
    related: ['what-is-a-commitment'],
  },
  {
    id: 'what-is-a-commitment',
    kind: 'glossary',
    category: 'data-catalog',
    title: 'Commitment',
    summary: 'One discrete obligation, recorded in its source document’s original language.',
    blocks: [
      {
        kind: 'p',
        text: 'A Commitment is a single obligation a project must satisfy, captured in the regulatory language of its source document. Each commitment carries structured attributes — type, resource category, phase, species, and season — that support filtering and planning.',
      },
      {
        kind: 'p',
        text: 'The same real-world obligation frequently appears across multiple documents. Each appearance is retained as a separate commitment; the overlap is resolved downstream, when requirements are consolidated into actions.',
      },
      {
        kind: 'callout',
        tone: 'note',
        text: 'When an agency amends a document, its commitments are revised rather than replaced. The original and updated language coexist with explicit lineage.',
      },
    ],
    related: ['what-is-a-source', 'what-is-a-requirement'],
  },
  {
    id: 'what-is-a-requirement',
    kind: 'glossary',
    category: 'data-catalog',
    title: 'Requirement',
    summary: 'A specific, actionable sub-obligation broken out of a commitment.',
    blocks: [
      {
        kind: 'p',
        text: 'A Requirement is one discrete unit of work contained within a commitment. A commitment stating “prior to grading, conduct protocol-level surveys for burrowing owl and submit results within 30 days” resolves to two requirements: conduct the survey, and submit the results.',
      },
      {
        kind: 'p',
        text: 'Each requirement carries its own type, scope, and frequency. The requirement is the unit consolidated into trackable actions.',
      },
    ],
    related: ['what-is-a-commitment', 'what-is-an-action'],
  },
  {
    id: 'what-is-an-action',
    kind: 'glossary',
    category: 'data-catalog',
    title: 'Action',
    summary: 'One trackable deliverable consolidating requirements that describe the same work.',
    blocks: [
      {
        kind: 'p',
        text: 'An Action is a planned unit of compliance work. It consolidates requirements — often drawn from many commitments — that describe the same underlying task. A requirement to submit the stormwater plan appearing across 44 commitments resolves to one action.',
      },
      {
        kind: 'figure',
        label: 'From documents to work',
        caption: 'Thousands of requirements across dozens of documents collapse into a few hundred actions — the minimum set of real work.',
      },
      {
        kind: 'p',
        text: 'Each action defines the work, the expected evidence, the schedule, and the responsible party. Actions begin as drafts and must be published before they generate trackable implementations.',
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
        text: 'Every requirement keeps its full ancestry: the commitment it came from, and the source document that commitment was extracted from. This is how a requirement is traced to the exact regulatory language behind it.',
      },
      {
        kind: 'steps',
        items: [
          'Open the requirement. The lineage strip at the top shows Source → Commitment → Requirement.',
          'Click the commitment to read the obligation in the document’s original words.',
          'Click the source to see the document’s details, agency, and attached file — with the cited passage highlighted.',
        ],
      },
    ],
    related: ['what-is-a-requirement', 'what-is-a-source'],
  },

  // ═══ Settings & Configuration ═══
  {
    id: 'feature-flag',
    kind: 'glossary',
    category: 'settings-config',
    title: 'Feature Flag',
    summary: 'A tenant-level switch that enables or disables a Beacon capability.',
    blocks: [
      {
        kind: 'p',
        text: 'A Feature Flag is a configuration switch that turns a Beacon capability on or off for a tenant. Flags allow a feature to be released to specific tenants independently, without a code change.',
      },
      {
        kind: 'p',
        text: 'Feature flags are administered in tenant settings. A disabled flag hides its feature from navigation and removes its surfaces from every project the tenant owns.',
      },
    ],
    related: ['managing-tenant-settings', 'tenant'],
  },
  {
    id: 'managing-tenant-settings',
    kind: 'howto',
    category: 'settings-config',
    title: 'Managing tenant settings',
    summary: 'Configure the display labels, defaults, and enabled features that apply across a tenant.',
    blocks: [
      {
        kind: 'p',
        text: 'Tenant settings control behavior shared across every project a tenant owns: display labels for core entities, default notification rules, enabled features, and the user roster. Changes apply tenant-wide.',
      },
      {
        kind: 'steps',
        items: [
          'Open Settings and select the tenant settings section (available to tenant administrators).',
          'Adjust display labels, defaults, or enabled features; each change is scoped to the current tenant only.',
          'Save. Tenant-wide changes take effect on the next page load for every user in the tenant.',
        ],
      },
      {
        kind: 'callout',
        tone: 'note',
        text: 'Entity label overrides — for example, renaming Actions to match an agency’s vocabulary — apply to navigation, headings, and search across the tenant.',
      },
    ],
    related: ['tenant', 'feature-flag', 'managing-users-roles'],
  },
  {
    id: 'managing-users-roles',
    kind: 'howto',
    category: 'settings-config',
    title: 'Managing users and roles',
    summary: 'Add users to a tenant and assign the roles that govern their access.',
    blocks: [
      {
        kind: 'p',
        text: 'Access in Beacon is governed by role. A role determines which zones a user can view and which records a user can create, edit, or approve. Users are added at the tenant level and assigned one or more roles.',
      },
      {
        kind: 'steps',
        items: [
          'Open Settings and select Users.',
          'Invite a user by email, or select an existing user to change their assignment.',
          'Assign roles — for example, viewer, contributor, or reviewer — and save.',
        ],
      },
      {
        kind: 'callout',
        tone: 'note',
        text: 'Approval actions, such as clearing a survey through quality control, require a role with review authority. A contributor role cannot approve its own records.',
      },
    ],
    related: ['managing-tenant-settings', 'qc-field-surveys'],
  },
  {
    id: 'configuring-notifications',
    kind: 'howto',
    category: 'settings-config',
    title: 'Configuring notifications',
    summary: 'Set which compliance events generate notifications, and how each user receives them.',
    blocks: [
      {
        kind: 'p',
        text: 'Notifications alert users to compliance events — an approaching deadline, a new provisional block, a returned survey. Defaults are set at the tenant level; each user may adjust their own delivery preferences within those defaults.',
      },
      {
        kind: 'steps',
        items: [
          'Open Settings and select Notifications to review the tenant’s default rules.',
          'Enable or disable notifications by event type, and set the delivery channel for each.',
          'Individual users adjust their personal preferences from the same section; tenant defaults apply where a user has made no choice.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'Scope notifications to the components a user has starred to keep alerts limited to their own work.',
      },
    ],
    related: ['managing-tenant-settings', 'starring-components'],
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
    terms: ['permit', 'what-is-a-source', 'what-is-a-commitment'],
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
    terms: ['site-clearance', 'what-is-an-observation'],
  },
  {
    pattern: '/prototypes/monitoring/surveys',
    page: 'Surveys',
    purpose: 'Field survey records synced from collection apps, quality-controlled before they count toward compliance.',
    howtos: ['qc-field-surveys'],
    terms: ['survey', 'what-is-an-observation', 'what-is-a-dmr'],
  },
  {
    pattern: '/prototypes/monitoring',
    page: 'Monitoring',
    purpose: 'What is happening in the field — daily reports, observations, surveys, and the compliance concerns they raise.',
    howtos: ['qc-field-surveys', 'site-clearance-go-no-go'],
    terms: ['what-is-a-dmr', 'what-is-an-observation', 'monitoring-portal'],
  },
  {
    pattern: '/prototypes/requirement-tracker',
    page: 'Requirement Tracker',
    purpose: 'Requirement-level status — what is satisfied, what is outstanding, and the evidence behind each answer.',
    howtos: ['tracing-lineage'],
    terms: ['what-is-a-requirement', 'what-is-evidence'],
  },
  {
    pattern: '/prototypes/release-notes',
    page: 'Release Notes',
    purpose: 'What changed in each Beacon release — headline features, per-area improvements, and fixes, newest first.',
    howtos: ['managing-tenant-settings'],
    terms: ['feature-flag'],
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
  /** esa-icon name — must exist in the shared icon registry. */
  icon: string;
  /** Release-page hash target — the `#anchor` for this entry's release on the release-notes page. */
  anchor: string;
}

// The top three Beacon 1.33 headline stories (released 2026-06-02); each links
// to that release on the release-notes page via its `#v1-33-0` anchor.
export const WHATS_NEW: WhatsNewEntry[] = [
  {
    date: '2026-06-02',
    title: 'Commitment Lists',
    blurb: 'Save a filtered view of commitments as a reusable, named List, then reopen it anytime to scope the grid to just its members.',
    icon: 'folder',
    anchor: 'v1-33-0',
  },
  {
    date: '2026-06-02',
    title: 'Evidence of Compliance',
    blurb: 'Every Evidence of Compliance record now lives in one Data Catalog grid with Project, Component, and Work Area scope selectors, instead of separate tabs on each page.',
    icon: 'file-text',
    anchor: 'v1-33-0',
  },
  {
    date: '2026-06-02',
    title: 'Commitment Compliance',
    blurb: 'A new Monitoring Portal section shows which commitments are out of compliance and the field observations driving it, matched by species.',
    icon: 'activity',
    anchor: 'v1-33-0',
  },
];

// ─── Small helpers (build-time) ──────────────────────────────────────────────

export function articlesByCategory(id: HelpCategoryId): HelpArticle[] {
  return HELP_ARTICLES.filter((a) => a.category === id);
}

export function getArticle(id: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((a) => a.id === id);
}

/** All glossary-kind articles, sorted A-Z by title — the Help page's A-Z glossary view. */
export function glossaryArticles(): HelpArticle[] {
  return HELP_ARTICLES
    .filter((a) => a.kind === 'glossary')
    .sort((a, b) => a.title.localeCompare(b.title));
}
