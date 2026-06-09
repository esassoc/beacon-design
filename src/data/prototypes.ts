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
      'Linear-infrastructure permitting — the CRUD workspace and the map-first status dashboard.',
    pages: [
      {
        slug: 'permit-tracking',
        title: 'Permit Tracking workspace',
        description:
          'The CRUD spine — Permits × Segments table with both pivots, and the reusable slide-in permit drawer (status, dates, segment applicability).',
        route: '/prototypes/permit-tracking',
        createdAt: '2026-06-05',
        ticket: 'BCN-1266',
        status: 'in-progress',
      },
      {
        slug: 'map-dashboard',
        title: 'Interactive Map Dashboard',
        description:
          'Segments colored by derived permitting status, footage-by-status burndown, per-segment clear-to-build date, click-to-drawer — the "where can I build" view.',
        route: '/prototypes/map-dashboard',
        createdAt: '2026-06-05',
        ticket: 'BCN-1267',
        status: 'in-progress',
      },
    ],
  },
];
