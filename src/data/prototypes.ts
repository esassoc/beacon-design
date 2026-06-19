// The spoke's prototype registry — the single source of truth that drives the
// home page index. Two MAJOR prototypes (engagement-scale efforts), each with
// the sub-pages built as part of it. Add a page row to its group when you ship
// a new screen; add a group only for a genuinely new engagement.
//
// Naming rule: NO tenant names (Prologis, AWS, …) in titles or descriptions —
// prototypes are described by the platform capability they exercise.

export type PrototypeStatus = 'live' | 'in-progress' | 'planned' | 'archived';

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
}

export interface PrototypeGroup {
  slug: string;
  title: string;
  /** One-liner under the group heading. */
  description: string;
  pages: PrototypePage[];
}

export const prototypeGroups: PrototypeGroup[] = [
  {
    slug: 'tracking-improvements',
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
    ],
  },
  {
    slug: 'monitoring-portal',
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
    ],
  },
  {
    slug: 'fish-studies',
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
    ],
  },
];
