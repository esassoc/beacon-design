// The spoke's prototype registry — the single source of truth that drives the
// home page index. Two MAJOR prototypes (engagement-scale efforts), each with
// the sub-pages built as part of it. Add a page row to its group when you ship
// a new screen; add a group only for a genuinely new engagement.
//
// Naming rule: NO tenant names (Prologis, AWS, …) in titles or descriptions —
// prototypes are described by the platform capability they exercise.

export type PrototypeStatus = 'live' | 'in-progress' | 'planned' | 'archived';

/** The tenant an effort was built for. 'platform' = ships to every tenant. */
export type PrototypeTenant = 'dcp' | 'prologis' | 'aws' | 'platform';

/** Display labels for the tenant facet. 'platform' borrows the product's own phrase. */
export const TENANT_LABEL: Record<PrototypeTenant, string> = {
  dcp: 'Delta Conveyance',
  prologis: 'Prologis',
  aws: 'AWS',
  platform: 'All tenants',
};

export interface PrototypePage {
  /** URL-safe id. */
  slug: string;
  title: string;
  /** ONE line — rendered in the index table. */
  description: string;
  /** Internal route, root-relative and base-less — wrap with withBase() at render. */
  route: string;
  /** ISO date (YYYY-MM-DD) the page was first built. */
  createdAt: string;
  /** Jira id, e.g. "BCN-1317". Optional. */
  ticket?: string;
  status: PrototypeStatus;
  /** Override the group's tenant. Only when a page diverges from its effort. */
  tenant?: PrototypeTenant;
}

export interface PrototypeGroup {
  slug: string;
  title: string;
  /** One-liner under the group heading. */
  description: string;
  /** The tenant this EFFORT was built for — an engagement has one client. A page
      may override it, but that is the exception; the group carries the fact. */
  tenant: PrototypeTenant;
  pages: PrototypePage[];
}

/** One page with its tenant resolved from the effort it belongs to. */
export interface PrototypePageRow extends PrototypePage {
  tenant: PrototypeTenant;
}

/** An effort and its pages — the unit the index lists. */
export interface PrototypeEffort {
  slug: string;
  title: string;
  tenant: PrototypeTenant;
  pages: PrototypePageRow[];
  /** The newest page in the effort — when it was last worked on, and its sort key. */
  latest: string;
}

/**
 * Every EFFORT, newest first, with its pages newest first inside it.
 *
 * An effort has no build date of its own, so it takes its newest page's: "when was this
 * last touched" is the fact that orders the index. Ties fall back to title so the order
 * is stable across builds (several pages share a date).
 */
export function allPrototypeEfforts(): PrototypeEffort[] {
  return prototypeGroups
    .map((g) => {
      const pages = g.pages
        .map((p) => ({ ...p, tenant: p.tenant ?? g.tenant }))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt) || a.title.localeCompare(b.title));
      return {
        slug: g.slug,
        title: g.title,
        tenant: g.tenant,
        pages,
        latest: pages.reduce((max, p) => (p.createdAt > max ? p.createdAt : max), ''),
      };
    })
    .sort((a, b) => b.latest.localeCompare(a.latest) || a.title.localeCompare(b.title));
}

export const prototypeGroups: PrototypeGroup[] = [
  {
    slug: 'marketing-site',
    tenant: 'platform',
    title: 'Marketing Site',
    description:
      'The public face of the product: pre-login pages that explain what Beacon is, who it serves, and why spreadsheets fail — marketing chrome (photo hero, serif display voice, tone bands), not app chrome.',
    pages: [
      {
        slug: 'homepage',
        title: 'Homepage',
        description:
          'The public landing page: photo hero, compliance-scale stats, the six client questions, Without/With Beacon, Catalog → Plan → Execute, market cards, the interactive California project dot map, and the three get-started doors.',
        route: '/prototypes/homepage',
        createdAt: '2026-08-03',
        status: 'live',
      },
    ],
  },
  {
    slug: 'settings',
    tenant: 'platform',
    title: 'Unified Settings',
    description:
      'One settings framework spanning ESA and tenant administration: the two split admin surfaces reconceived as zones of a single place, where an ESA-only page sits beside its tenant-admin neighbors under one nav and one search — rather than living in a separate application. /settings has no landing page of its own; the rail is the index, so the route lands on the first page the user can reach.',
    pages: [
      {
        slug: 'settings-page',
        title: 'Settings page',
        description:
          'The capturable exemplar for all 20 standard pages that share one route shape: the registry’s section array IS the page, rendered as setting rows, record collections, or term pairs. Every control commits itself and the row confirms it — no page Save anywhere in settings.',
        route: '/prototypes/settings/terminology',
        createdAt: '2026-07-29',
        status: 'live',
      },
      {
        slug: 'settings-feature-flags',
        title: 'Feature Flags',
        description:
          'Flags split by lifecycle — capability, rollout, default preference — with every row self-describing, self-saving, and carrying the date it last changed. No page-wide Save.',
        route: '/prototypes/settings/feature-flags',
        createdAt: '2026-07-29',
        status: 'live',
      },
      {
        slug: 'settings-operations',
        title: 'Operations',
        description:
          'Maintenance jobs as a console: reach stated before the run, and confirmation in place with a typed-name gate for platform-wide jobs. Prod fires four of these from an anchor with no href and no confirm.',
        route: '/prototypes/settings/operations',
        createdAt: '2026-07-29',
        status: 'live',
      },
      {
        slug: 'settings-tenants',
        title: 'Tenants',
        description:
          'Every tenant on the platform with its subdomain, modules, and user count, plus the drawer that provisions a new one from the baseline configuration.',
        route: '/prototypes/settings/tenants',
        createdAt: '2026-07-29',
        status: 'live',
      },
    ],
  },
  {
    slug: 'project-dashboard',
    tenant: 'dcp',
    title: 'Project Dashboard',
    description:
      'The logged-in project HOMEPAGE — a profile-style landing that answers "where am I, and what should I do next?" and acts as a front door to the app, with detail pushed down to the component dashboards.',
    pages: [
      {
        slug: 'project-dashboard',
        title: 'Project Dashboard',
        description:
          'The project homepage, built on ACTIONS AS THE SPINE: a profile-style header (cover band, org seal, project name, phase) with inline cover/logo editing; a 30/60/90-day timeline of action due dates, season windows, and milestones; Tracking · Monitoring · Reporting modules that each carry their own overdue and due-soon actions (criticality lives in the module that owns the work); a project-scope row leading the starred component cards; a slim four-step Setup Wizard card; and a rail with project-data side panels, the project boundary map, and project details. Revised against the 2026-08-04 product-meeting review.',
        route: '/prototypes/project-dashboard',
        createdAt: '2026-07-14',
        status: 'in-progress',
      },
    ],
  },
  {
    slug: 'component-dashboard',
    tenant: 'dcp',
    title: 'Component Dashboard',
    description:
      'The follow-up to the Project Dashboard, one level down the tree: a component index that exists to route, and a per-component homepage that scopes tracking, monitoring, reporting, work areas, and setup to the one part of the project a person is actually working on.',
    pages: [
      {
        slug: 'component-dashboard',
        title: 'Component Dashboard',
        description:
          'The per-component homepage — the project dashboard slimmed to one component. A white identity bar carrying a glyph-and-color mark instead of a cover photo, a timeline and Tracking · Monitoring · Reporting modules scoped to this component, the work-areas grid lifted off its retired tab complete with bulk import and delete, a footprint map drawn from the work areas\' real coordinates, and a deliberately thin data rail — because a component owns almost nothing of its own but its milestone overrides.',
        route: '/prototypes/component-dashboard',
        createdAt: '2026-08-13',
        ticket: 'BCN-1412',
        status: 'in-progress',
      },
      {
        slug: 'components',
        title: 'Components (index)',
        description:
          'The middle of the tree, whose whole job is getting you to one component: a grid carrying each component\'s identity mark and a colored status so two dozen rows stay scannable, and a map of their footprints along the project alignment — with project-wide component health rolled up into a summary band above.',
        route: '/prototypes/components',
        createdAt: '2026-07-16',
        ticket: 'BCN-1412',
        status: 'in-progress',
      },
    ],
  },
  {
    slug: 'global-search',
    tenant: 'dcp',
    title: 'Global Search',
    description:
      'Cross-entity search for the whole project — the "/" omnibox (mounted app-wide in the chrome) and the full results page.',
    pages: [
      {
        slug: 'global-search',
        title: 'Global Search',
        description:
          'A centered command palette (bcn-omni-search, opened by the topbar search field or "/") + full results page, scoped across Source Documents, Commitments, Requirements, Actions, Components, Evidence of Compliance, Work Areas, and Observations. Inline ghost-text typeahead; a null-state landing + Recents that gives way to a scope-facet rail once you type. Full-text search of commitment/requirement body text with highlighted snippets (Beacon Commitment-Search style); grouped results, per-scope counts; ⌘+Enter forks to the results page carrying the query + active scope.',
        route: '/prototypes/global-search',
        createdAt: '2026-06-29',
        status: 'in-progress',
      },
    ],
  },
  {
    slug: 'tracking-improvements',
    tenant: 'prologis',
    title: 'Tracking Improvements',
    description:
      'Requirement-centric compliance tracking — the Tracker grid, the Data Catalog detail/editing surfaces, and the streamlined-workflow variants.',
    pages: [
      {
        slug: 'requirement-tracker',
        title: 'Requirement Tracker',
        description:
          'Project Tracking as an AG Grid — Grid / Kanban / Timeline toggle, 130 real FEIR requirements, full tracking dialog (reference, discussion, evidence).',
        route: '/prototypes/requirement-tracker',
        createdAt: '2026-06-08',
        ticket: 'BCN-1136',
        status: 'in-progress',
      },
      {
        slug: 'data-catalog-actions',
        title: 'Actions list (Data Catalog)',
        description:
          'Enables the disabled Actions catalog entry — teal Beacon grid, config-only columns, row click to the Action detail.',
        route: '/prototypes/data-catalog-actions',
        createdAt: '2026-06-09',
        ticket: 'BCN-1317',
        status: 'in-progress',
      },
      {
        slug: 'data-catalog-action',
        title: 'Action detail (Data Catalog)',
        description:
          'Read-only view of the whole Action plus the fixed-size upsert modal (two-pane requirements assignment | Details/Timing/Evidence/Notifications tabs).',
        route: '/prototypes/data-catalog-action',
        createdAt: '2026-06-09',
        ticket: 'BCN-1317',
        status: 'in-progress',
      },
      {
        slug: 'data-catalog-source-document',
        title: 'Source Document detail (Data Catalog)',
        description:
          'The document home — description, commitments roster with per-commitment requirement counts, files, agency reference details, two-node lineage; single-pane upsert (prod field set) + in-app PDF viewer.',
        route: '/prototypes/data-catalog-source-document',
        createdAt: '2026-06-10',
        status: 'in-progress',
      },
      {
        slug: 'data-catalog-commitment',
        title: 'Commitment detail (Data Catalog)',
        description:
          'The parent entity — serif parsed commitment text, requirements grouped by the six builder phases with counts/Add/empty states, rolled-up Related Data, version timeline, components, lineage; single-pane upsert (prod field set).',
        route: '/prototypes/data-catalog-commitment',
        createdAt: '2026-06-10',
        status: 'in-progress',
      },
      {
        slug: 'data-catalog-requirement',
        title: 'Requirement detail — standard (Data Catalog)',
        description:
          'The first first-class Requirement detail page (regular workflow) — requirement-owned reference data + applicability, the one linked Action as jump-off; single-pane upsert with no timing/evidence/notifications (those live on the Action).',
        route: '/prototypes/data-catalog-requirement',
        createdAt: '2026-06-10',
        status: 'in-progress',
      },
      {
        slug: 'data-catalog-requirements-streamlined',
        title: 'Requirements list — streamlined (Data Catalog)',
        description:
          'The aliased Actions catalog under the streamlined workflow — requirement-centric columns including Species and Construction Activities; the native entity survives as "Terms".',
        route: '/prototypes/data-catalog-requirements-streamlined',
        createdAt: '2026-06-09',
        ticket: 'BCN-1163',
        status: 'in-progress',
      },
      {
        slug: 'data-catalog-requirement-streamlined',
        title: 'Requirement detail — streamlined (Data Catalog)',
        description:
          'The merged Requirement (1:1:1 collapse): reference data integrated in read + edit, one-time Timing, zero tracking leakage — "Track this Requirement" deep-links to the Tracker.',
        route: '/prototypes/data-catalog-requirement-streamlined',
        createdAt: '2026-06-09',
        ticket: 'BCN-1163',
        status: 'in-progress',
      },
    ],
  },
  {
    slug: 'permit-tracking',
    tenant: 'aws',
    title: 'Permit Tracking',
    description:
      'Linear-infrastructure permitting as ONE feature (Tracking → Permit Tracking): the map-first dashboard and the CRUD workspace are tabs of a single page (BCN-1266 / BCN-1267).',
    pages: [
      {
        slug: 'permit-tracking',
        title: 'Permit Tracking',
        description:
          'Map tab (default): the four real Phase-1 paths colored by derived permit status (cartographic readiness ramp), Path + Status filters, mileage strip + insight cards. Data tab: Permits × Segments AG Grids with the editable permit drawer — saves repaint the map.',
        route: '/prototypes/permit-tracking',
        createdAt: '2026-06-05',
        ticket: 'BCN-1266',
        status: 'in-progress',
      },
    ],
  },
  {
    slug: 'site-clearance',
    tenant: 'dcp',
    title: 'Site Clearance',
    description:
      'Monitoring Portal decision support — clearance surveys + observation buffers derive a go/no-go status per work area (map-first), with the clearance drawer as the write surface.',
    pages: [
      {
        slug: 'site-clearance',
        title: 'Site Clearance',
        description:
          'Map tab: 231 work areas colored by derived clearance status (zoom-adaptive markers), observation buffers, view presets (All/Cleared/Blocked/Scheduled/Unscheduled) + Status/Planned-start filters, readiness strip. Data tab: Work Areas × Observations grids. Timeline tab: Work starts / Clearance visits / Blocks-lift swimlanes on one TODAY-marked axis. Activity tab: date-grouped feed + Upcoming sidebar. Work-area drawer is the approved Decision-first v2: always-visible dates band, 2-second decision block (Confirm block on provisionals), 2×2 disciplines board whose cells open a STACKED discipline drawer with the full review history — clearance surveys, re-surveys, management determinations; the latest completed review sets each discipline status, scheduled reviews ride the history — plus add/edit review forms that re-derive and repaint everywhere on save.',
        route: '/prototypes/site-clearance',
        createdAt: '2026-06-11',
        status: 'in-progress',
      },
      {
        slug: 'work-area-drawer-specimen',
        title: 'Work Area drawer — 3 structure options (specimen)',
        description:
          'Decision-first v2 deep dive (client-selected): always-visible date band, 2-second confirm line, discipline cells opening a stacked child drawer with per-discipline review history (June → September re-survey) — round-1 three-option exploration kept below as reference.',
        route: '/prototypes/work-area-drawer-specimen',
        createdAt: '2026-06-11',
        status: 'in-progress',
      },
      {
        slug: 'site-clearance-simple',
        title: 'Site Clearance — simplified model',
        description:
          'Side-by-side comparison variant: the DIRECT status-per-discipline model. Each discipline lead SETS their own clearance status (one status select) instead of it being derived from a review history; surveys, field notes, and relocations attach as an append-only EVIDENCE LOG that justifies the status without deriving it. Same work areas, palette, rollup, and blocked-until math as the rich page — scoped to the work-area list + drawer + discipline editor so the model contrast is unmistakable. For weighing whether the survey-derivation complexity is worth it.',
        route: '/prototypes/site-clearance-simple',
        createdAt: '2026-06-17',
        status: 'in-progress',
      },
      {
        slug: 'site-clearance-bio',
        title: 'Site Clearance — Biological',
        description:
          'The full Site Clearance prototype (Map / Data / Timeline / Activity tabs, the Decision-first review-history model) narrowed to the BIOLOGICAL gate only — for Leah/DWR’s bio team, since the broader DCA team isn’t ready to converge on Beacon as the cross-discipline (Bio/Cultural/Noise/Geology) surface. No 2×2 discipline board and no stacked child drawer: a work area’s status IS its biological clearance status, and the bio review history (clearance surveys, re-surveys, management determinations; the latest completed review sets the status, scheduled reviews ride the history) is inlined directly in the work-area drawer with add/edit review forms that re-derive and repaint everywhere on save. Same 231 KMZ sites, SWHA buffer / provisional-block model, palette, and blocked-until math.',
        route: '/prototypes/site-clearance-bio',
        createdAt: '2026-06-30',
        status: 'in-progress',
      },
    ],
  },
  {
    slug: 'monitoring-portal',
    tenant: 'dcp',
    title: 'Monitoring Portal',
    description:
      'The field-monitoring command center — the tabs-to-sidebar nav refactor, the commitment-compliance dashboard explored as three switchable variants, and survey documents (Fulcrum / Survey123 / CASP) brought in as a grid.',
    pages: [
      {
        slug: 'monitoring-dashboard',
        title: 'Dashboard',
        description:
          'The portal dashboard: observation stat cards + the Commitment Compliance feature with three switchable variants (phase list / per-find dossier / triage board), built on the shipped flat observation→commitment model.',
        route: '/prototypes/monitoring/dashboard',
        createdAt: '2026-06-16',
        ticket: 'BCN-1315',
        status: 'in-progress',
      },
      {
        slug: 'monitoring-surveys',
        title: 'Surveys',
        description:
          'Survey documents as an AG Grid (date, surveyor, type, species, work area) with a draft/QC/final status column, a "QC’d only" default filter that hides un-QC’d drafts, and a not-in-compliance warning chip.',
        route: '/prototypes/monitoring/surveys',
        createdAt: '2026-06-16',
        ticket: 'BCN-1265',
        status: 'in-progress',
      },
      {
        slug: 'monitoring-compliance-dashboard',
        title: 'Compliance Dashboard',
        description:
          'A differently-configured Monitoring Portal dashboard for projects where the firm holds a third-party compliance-inspection role over a separate field inspector: the prior day’s inspection sweep as a clickable severity donut (in-compliance / needs-attention / non-compliance) alongside needs-attention and non-compliance category bar charts, a needs-attention panel with a map inset plus spreadsheet/KMZ export, and a 90-day opened-vs-resolved trend — demonstrating the portal’s per-project widget configurability.',
        route: '/prototypes/monitoring/compliance-dashboard',
        createdAt: '2026-08-05',
        status: 'in-progress',
        tenant: 'platform',
      },
      {
        slug: 'monitoring-compliance-observations',
        title: 'Compliance Dashboard — Observations',
        description:
          'The filterable list/map companion to the Compliance Dashboard: severity, category, and status facets, a List ↔ Map toggle, and a read-only detail panel per observation — the drill-down target for the dashboard’s donut segments and outstanding-item rows.',
        route: '/prototypes/monitoring/compliance-observations',
        createdAt: '2026-08-05',
        status: 'in-progress',
        tenant: 'platform',
      },
      {
        slug: 'monitoring-daily-reports',
        title: 'Daily Reports',
        description:
          'Fieldstone Environmental Monitoring’s field-inspector activity, one row per site visit, with a real downloadable report document per row — matching the Monitoring Portal’s existing Daily Reports grid.',
        route: '/prototypes/monitoring/daily-reports',
        createdAt: '2026-08-05',
        status: 'in-progress',
        tenant: 'platform',
      },
    ],
  },
  {
    slug: 'fish-studies',
    tenant: 'dcp',
    title: 'Fish Studies',
    description:
      'Science-plan project management — one COA-keyed study dataset projected as the crosswalk grid, a water-year gantt, and the narrative sketch + CDFW review-comment cycle, with on-demand document outputs (the single-source-of-truth pitch for Aaron/Paul).',
    pages: [
      {
        slug: 'fish-studies',
        title: 'Science Plan (studies index)',
        description:
          'The crosswalk projection: 36 ITP studies as a filterable AG Grid (Category / Lead / Plan Status / Phase / Species) with a Grid ↔ Timeline view toggle, derived stats, and a "Generate outputs" picker (Word / Excel / Excel / PDF) from one dataset. Row → study detail.',
        route: '/prototypes/fish-studies',
        createdAt: '2026-06-15',
        status: 'in-progress',
      },
      {
        slug: 'fish-study',
        title: 'Study detail / sketch',
        description:
          'The narrative projection: the 9-field science-plan sketch (focal species, objectives + research questions, components → methods/metrics, reporting) + the CDFW review-comment cycle pinned per field, with details / dependencies / deliverables / RACI roles / planning in the rail. One static page per COA; flagship studies (10.19.1, 10.26, 10.18.3, 10.21.10) are deep-filled.',
        route: '/prototypes/fish-study/10.19.1',
        createdAt: '2026-06-15',
        status: 'in-progress',
      },
      {
        slug: 'fish-gantt',
        title: 'Study Planning (work breakdown)',
        description:
          'The four-tier work breakdown — Program → Study → Sub-study → Task — that socializes the recursive data model. Stable type-prefixed IDs (PRG/STY/SUB/TSK) are identity, the COA dot-number a secondary reference; the Task is the schedulable month unit whose status, funding, and span roll up to the parents. Add / rename / reparent / delete at every tier; the row drawer is the per-node EDIT surface (Name, ID, date range, per-water-year budget, add-child / delete), with the full record on the node details page.',
        route: '/prototypes/fish-gantt',
        createdAt: '2026-07-15',
        status: 'in-progress',
      },
      {
        slug: 'fish-node',
        title: 'Node details (work breakdown)',
        description:
          'The per-node details page behind the Study Planning drawer — the full record for any ?id= (PRG/STY/SUB/TSK): identity with COA reference + parent, timing with water years + field seasons, the funding plan, the status roll-up meter, and constraints/notes. The drawer keeps only the slim edit surface.',
        route: '/prototypes/fish-node',
        createdAt: '2026-07-16',
        status: 'in-progress',
      },
      {
        slug: 'fish-model-map',
        title: 'Data model map',
        description:
          'The architecture diagram of the Study Planning feature: regulatory sources (Commitment/COA in the Data Catalog, Milestone anchors) → the stored four-tier work-breakdown with its satellites (RoleAssignment, FundingEntry, PlanAssumption, StudyProfile) → the render-time derivations (NodeRollUp, Readiness chains) → the five projected surfaces (Gantt, Roles, Readiness, Exports, Detail pages). Stored vs computed vs external, on one screen.',
        route: '/prototypes/fish-model-map',
        createdAt: '2026-07-21',
        status: 'in-progress',
      },
      {
        slug: 'fish-detail',
        title: 'Record detail pages (work breakdown)',
        description:
          'The unified per-node detail page — one static route per Program / Study / Sub-study / Task. Read-only on landing: lineage rail (data-catalog spine), identity / timing / funding as key-values, children + sibling records, assignments; study tier adds the authored science-plan sketch, the CDFW review thread, and the crosswalk facts rail. All editing happens in side drawers (Edit record, Edit assignments) with live roll-up recompute. Supersedes fish-node and the fish-study pages.',
        route: '/prototypes/fish-detail/STY-014',
        createdAt: '2026-07-21',
        status: 'in-progress',
      },
      {
        slug: 'fish-science-plan',
        title: 'Science Plan reader',
        description:
          'The draft science plan as a document surface: the fixed Feb-2026 outline with per-section COA chips linking to the study detail pages, and section-anchored CDFW comment threads (comment → response, intent, status). Search / status / intent / COA filters with a derived open-addressed-resolved tally; comment STATUS is the one live datum of the fixed corpus. Closes the brief’s science-plan linking + comment-tracking bullet.',
        route: '/prototypes/fish-science-plan',
        createdAt: '2026-07-21',
        status: 'in-progress',
      },
    ],
  },
  {
    slug: 'evidence',
    tenant: 'dcp',
    title: 'Evidence',
    description:
      'Connecting evidence of compliance to the actions it proves — a global workspace instead of a filing cabinet you have to navigate into.',
    pages: [
      {
        slug: 'evidence-drawer',
        title: 'Attach Evidence of Compliance',
        description:
          'A new drawer pattern: a global workspace that rises from the BOTTOM of the viewport at 96 × 92 and layers above dialogs, joining evidence on the left to actions on the right. Files dropped together stay one piece of evidence (the container is never named); the action list is hard-scoped to one component with no null state, remembered across sessions; and a Find-matches utility drops suggested actions into the same list you search, each with the reason it was picked and a dismiss. Four entry points: cold from the bottom bar, from one action, from a bulk selection, and from evidence already in Beacon.',
        route: '/prototypes/evidence-drawer',
        createdAt: '2026-08-06',
        status: 'in-progress',
      },
      {
        slug: 'evidence-triage',
        title: 'Evidence Inbox',
        description:
          'The inbox for evidence that arrives without anyone attaching it — synced surveys, daily monitoring reports, finalized Beacon reports and drop-box submissions, which land in the evidence table today with nothing connecting them to an action. A two-pane surface: a queue grouped into relative buckets (Today, Yesterday, Earlier this week, Last week) whose rows report source, file count, component and a suggestion count but carry no verbs, and a review panel where the record is decided — its facts, a collapsed file list, the suggested actions with their commitment code and facets, and a collapsed section for attaching it to an action you pick yourself. Filter by source, component and match strength; unread is tracked per user and shown as a dot plus a header count; clear the queue and it says so.',
        route: '/prototypes/evidence-triage',
        createdAt: '2026-08-14',
        status: 'in-progress',
      },
    ],
  },
  {
    slug: 'help-guidance',
    tenant: 'platform',
    title: 'Help & Guidance',
    description:
      'In-context help on every page — a floating utility bar (the Aldo compass mark) opens a route-aware guidance drawer, backed by one browsable knowledge base.',
    pages: [
      {
        slug: 'help',
        title: 'Help & Guidance',
        description:
          'The knowledge base: searchable hero, browse-by-category tiles, and a hash-routed article browser (18 articles grounded in the product docs). The same dataset powers the app-wide floating help bar + guidance drawer — open ANY prototype page and the drawer shows guidance for that page.',
        route: '/prototypes/help',
        createdAt: '2026-07-16',
        status: 'in-progress',
      },
      {
        slug: 'help-category',
        title: 'Help category page',
        description:
          'The comprehensive per-category surface the home’s cards link into — one static route per help category, shown here as Tracking. A breadcrumb back to the help home, the category’s full article list (title over a one-line summary, hairline-divided), and a reading pane scoped to that category which lands on its first article. Registered as the capturable exemplar for all seven categories; they share one route shape.',
        route: '/prototypes/help/tracking',
        createdAt: '2026-07-22',
        status: 'in-progress',
      },
      {
        slug: 'release-notes',
        title: 'Release Notes',
        description:
          'Every Beacon release in one reverse-chronological stream — the changelog pattern in Beacon’s chrome, fed by the real 1.31–1.33 notes. Three tiers per release (headline stories, area-grouped entries with feature-flag notes, a collapsed fixes list), a sticky scroll-spy version rail, and monochrome serif typesetting. The help bar’s What’s-new popover deep-links into each release anchor.',
        route: '/prototypes/release-notes',
        createdAt: '2026-07-22',
        status: 'in-progress',
      },
    ],
  },
];
