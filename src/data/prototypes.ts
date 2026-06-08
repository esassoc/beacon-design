// The spoke's prototype registry — the single source of truth that drives the
// home page index table. Add a row here when you ship a new prototype.
//
// Mirrors the cb-fish-design pattern. Beacon's first prototypes come from the
// AWS Raul 2 engagement: Epic A (Permit Tracking / CRUD, BCN-1266) and Epic B
// (Interactive Map Dashboard, BCN-1267).

export type PrototypeStatus = 'live' | 'in-progress' | 'planned' | 'archived';

export interface Prototype {
  /** URL-safe id. */
  slug: string;
  title: string;
  description: string;
  /** Internal route, root-relative and base-less — wrap with withBase() at render. */
  route: string;
  /** ISO date (YYYY-MM-DD) the prototype was first built. */
  createdAt: string;
  /** Jira epic id, e.g. "BCN-1267". Optional. */
  ticket?: string;
  status: PrototypeStatus;
}

export const prototypes: Prototype[] = [
  {
    slug: 'requirement-tracker',
    title: 'Requirement Tracker (3600 Alameda)',
    description:
      'The Project Tracking workspace as an AG Grid — Grid / Kanban / Timeline toggle, Grid default. Real 3600 Alameda FEIR requirements (130 rows) with the Progress Report column set, Beacon grid theme, and the standard grid header (search + clear filters) and footer (download + record count).',
    route: '/prototypes/requirement-tracker',
    createdAt: '2026-06-08',
    ticket: 'BCN-1136',
    status: 'in-progress',
  },
  {
    slug: 'map-dashboard',
    title: 'Interactive Map Dashboard (AWS)',
    description:
      'Segments colored by derived permitting status, footage-by-status burndown, per-segment clear-to-build date, click-to-drawer. The Marco "where can I build" view.',
    route: '/prototypes/map-dashboard',
    createdAt: '2026-06-05',
    ticket: 'BCN-1267',
    status: 'in-progress',
  },
  {
    slug: 'permit-tracking',
    title: 'Permit Tracking workspace (AWS)',
    description:
      'The CRUD spine — Permits × Segments table with both pivots, and the reusable slide-in permit drawer (status, dates, segment applicability).',
    route: '/prototypes/permit-tracking',
    createdAt: '2026-06-05',
    ticket: 'BCN-1266',
    status: 'in-progress',
  },
];

/** Newest first — the order the index table renders. */
export const prototypesByNewest = (): Prototype[] =>
  [...prototypes].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
