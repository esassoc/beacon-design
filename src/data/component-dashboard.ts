// Component Dashboard fixtures — the reimagined "All Components" surface for a
// Beacon project. Each component is a compliance-tracking unit (requirements,
// actions, work areas, monitoring), not just a grid row. Data-shaped to mirror
// the real entity (esassoc/Beacon Component.cs dependent collections), so the
// Astro page binds the way a live page eventually will.

export type ComponentStatus = 'not-started' | 'in-progress' | 'on-hold' | 'complete';

export interface ComponentStatusMeta {
  label: string;
  /** Lifecycle color — value-driven, fed to BcnStatusChip and the summary viz. */
  hex: string;
}

/** The lifecycle palette for this surface: quiet gray → amber → gray → green. */
export const STATUS_META: Record<ComponentStatus, ComponentStatusMeta> = {
  'not-started': { label: 'Not started', hex: '#bdbdbd' },
  'in-progress': { label: 'In progress', hex: '#f59e0b' },
  'on-hold': { label: 'On hold', hex: '#656565' },
  complete: { label: 'Complete', hex: '#22c55e' },
};

/** Fixed display order for the breakdown bar + legend. */
export const STATUS_ORDER: ComponentStatus[] = ['not-started', 'in-progress', 'on-hold', 'complete'];

export interface ProjectComponent {
  name: string;
  /** Short classifier line under the name (e.g. "Forebay · Byron Tract"). */
  type: string;
  status: ComponentStatus;
  desc: string;
  requirements: { met: number; total: number };
  actions: { complete: number; total: number };
  openActions: number;
  overdueActions: number;
  workAreas: number;
  /** Short date of the last monitoring activity, or null when none yet. */
  lastMonitoring: string | null;
  /** Monitoring records in the past 30 days. */
  monitoring30d: number;
  updated: string;
}

export interface StatusBreakdownEntry {
  status: ComponentStatus;
  label: string;
  hex: string;
  count: number;
}

export interface AttentionEntry {
  name: string;
  overdue: number;
}

export interface ComponentSummary {
  total: number;
  breakdown: StatusBreakdownEntry[];
  /** Components with overdue actions, most-overdue first. */
  attention: AttentionEntry[];
  attentionCount: number;
}

/** Roll a component list up into the summary band's counts + attention lane. */
export function summarize(components: ProjectComponent[]): ComponentSummary {
  const breakdown: StatusBreakdownEntry[] = STATUS_ORDER.map((status) => ({
    status,
    label: STATUS_META[status].label,
    hex: STATUS_META[status].hex,
    count: components.filter((c) => c.status === status).length,
  }));
  const attention: AttentionEntry[] = components
    .filter((c) => c.overdueActions > 0)
    .sort((a, b) => b.overdueActions - a.overdueActions)
    .map((c) => ({ name: c.name, overdue: c.overdueActions }));
  return { total: components.length, breakdown, attention, attentionCount: attention.length };
}

/** Board order: overdue components lead (needs-attention first), most-overdue on top. */
export function byNeedsAttention(components: ProjectComponent[]): ProjectComponent[] {
  return [...components].sort((a, b) => b.overdueActions - a.overdueActions);
}

// ── Populated project — a realistic DCP-shaped set, mixed statuses/rollups ──
export const POPULATED: ProjectComponent[] = [
  {
    name: 'Southern Forebay & Pumping Plant',
    type: 'Forebay · Byron Tract',
    status: 'in-progress',
    desc: 'Regulating forebay and pumping plant at the southern terminus of the conveyance tunnel, feeding Bethany Reservoir.',
    requirements: { met: 11, total: 14 },
    actions: { complete: 22, total: 30 },
    openActions: 6,
    overdueActions: 3,
    workAreas: 7,
    lastMonitoring: 'Jul 2',
    monitoring30d: 11,
    updated: '2 days ago',
  },
  {
    name: 'Intake B — North Delta',
    type: 'Screened intake · Sacramento River',
    status: 'in-progress',
    desc: 'Two-bay cylindrical-tee screened intake on the Sacramento River near Hood, with fish-screen and sediment facilities.',
    requirements: { met: 8, total: 12 },
    actions: { complete: 15, total: 28 },
    openActions: 9,
    overdueActions: 2,
    workAreas: 5,
    lastMonitoring: 'Jun 28',
    monitoring30d: 6,
    updated: '4 days ago',
  },
  {
    name: 'Twin Cities Complex',
    type: 'Tunnel shaft · Staging',
    status: 'on-hold',
    desc: 'Maintenance shaft and reusable tunnel material staging complex; work paused pending revised haul-route agreement.',
    requirements: { met: 4, total: 10 },
    actions: { complete: 7, total: 18 },
    openActions: 5,
    overdueActions: 1,
    workAreas: 3,
    lastMonitoring: 'Jun 12',
    monitoring30d: 2,
    updated: '3 weeks ago',
  },
  {
    name: 'Intake C — North Delta',
    type: 'Screened intake · Sacramento River',
    status: 'in-progress',
    desc: 'Third North Delta diversion intake, sited downstream of Intake B; screens under fabrication.',
    requirements: { met: 6, total: 12 },
    actions: { complete: 10, total: 26 },
    openActions: 12,
    overdueActions: 0,
    workAreas: 5,
    lastMonitoring: 'Jun 30',
    monitoring30d: 8,
    updated: '5 days ago',
  },
  {
    name: 'Bouldin Island Launch Shaft',
    type: 'Tunnel launch shaft',
    status: 'complete',
    desc: 'Tunnel boring machine launch shaft on Bouldin Island; construction complete, in post-construction monitoring.',
    requirements: { met: 9, total: 9 },
    actions: { complete: 20, total: 20 },
    openActions: 0,
    overdueActions: 0,
    workAreas: 4,
    lastMonitoring: 'Jul 1',
    monitoring30d: 4,
    updated: '1 week ago',
  },
  {
    name: 'Bethany Reservoir Aqueduct',
    type: 'Aqueduct · Alameda County',
    status: 'not-started',
    desc: 'Aqueduct connecting the Southern Complex to Bethany Reservoir; requirements imported, field work not yet begun.',
    requirements: { met: 0, total: 9 },
    actions: { complete: 0, total: 14 },
    openActions: 0,
    overdueActions: 0,
    workAreas: 2,
    lastMonitoring: null,
    monitoring30d: 0,
    updated: '2 weeks ago',
  },
  {
    name: 'Byron Tract Forebay',
    type: 'Forebay · Contra Costa County',
    status: 'not-started',
    desc: 'Secondary forebay component; scoping in progress, no active requirements or monitoring yet.',
    requirements: { met: 0, total: 7 },
    actions: { complete: 0, total: 11 },
    openActions: 0,
    overdueActions: 0,
    workAreas: 1,
    lastMonitoring: null,
    monitoring30d: 0,
    updated: '1 month ago',
  },
];

// ── Dense / stress test — long names + more rows to prove scan-ability holds ──
export const DENSE: ProjectComponent[] = [
  ...POPULATED,
  {
    name: 'Southern Tunnel Reach — King Island to Bethany Complex Launch Shaft Transition Zone',
    type: 'Tunnel reach · San Joaquin County',
    status: 'in-progress',
    desc: 'Long-bore tunnel reach transitioning from the King Island intermediate shaft to the Bethany Complex launch shaft, crossing multiple leveed islands and sensitive habitat corridors.',
    requirements: { met: 13, total: 24 },
    actions: { complete: 31, total: 58 },
    openActions: 19,
    overdueActions: 6,
    workAreas: 12,
    lastMonitoring: 'Jul 3',
    monitoring30d: 22,
    updated: '1 day ago',
  },
  {
    name: 'Union Island Reusable Tunnel Material Storage & Rehandling Area',
    type: 'Staging · Reusable tunnel material',
    status: 'in-progress',
    desc: 'Temporary storage and rehandling area for reusable tunnel material excavated along the southern reaches.',
    requirements: { met: 5, total: 11 },
    actions: { complete: 9, total: 21 },
    openActions: 8,
    overdueActions: 0,
    workAreas: 6,
    lastMonitoring: 'Jun 26',
    monitoring30d: 5,
    updated: '6 days ago',
  },
  {
    name: 'Lower Roberts Island Maintenance Shaft & Ventilation Structure',
    type: 'Tunnel shaft · San Joaquin County',
    status: 'in-progress',
    desc: 'Permanent maintenance and ventilation shaft on Lower Roberts Island with associated access road improvements.',
    requirements: { met: 7, total: 15 },
    actions: { complete: 12, total: 27 },
    openActions: 10,
    overdueActions: 0,
    workAreas: 8,
    lastMonitoring: 'Jun 29',
    monitoring30d: 9,
    updated: '3 days ago',
  },
  {
    name: 'Rio Vista Field Office & Environmental Staging Yard',
    type: 'Field office · Solano County',
    status: 'complete',
    desc: 'Compliance field office and environmental staging yard supporting the northern reaches.',
    requirements: { met: 6, total: 6 },
    actions: { complete: 14, total: 14 },
    openActions: 0,
    overdueActions: 0,
    workAreas: 2,
    lastMonitoring: 'Jun 20',
    monitoring30d: 1,
    updated: '2 weeks ago',
  },
  {
    name: 'Central Tunnel Reach',
    type: 'Tunnel reach · Sacramento County',
    status: 'on-hold',
    desc: 'Central segment of the main conveyance tunnel; geotechnical re-evaluation underway before mobilization.',
    requirements: { met: 3, total: 18 },
    actions: { complete: 4, total: 33 },
    openActions: 4,
    overdueActions: 0,
    workAreas: 9,
    lastMonitoring: 'May 30',
    monitoring30d: 0,
    updated: '5 weeks ago',
  },
  {
    name: 'Turner Cut Barge Landing',
    type: 'Barge landing · Waterway access',
    status: 'not-started',
    desc: 'Temporary barge landing for waterborne material delivery; permitting in early stage.',
    requirements: { met: 0, total: 8 },
    actions: { complete: 0, total: 12 },
    openActions: 0,
    overdueActions: 0,
    workAreas: 2,
    lastMonitoring: null,
    monitoring30d: 0,
    updated: '3 weeks ago',
  },
  {
    name: 'King Island Intermediate Shaft',
    type: 'Tunnel shaft · San Joaquin County',
    status: 'not-started',
    desc: 'Intermediate tunnel shaft supporting the southern reaches; requirements loaded, field work pending.',
    requirements: { met: 0, total: 13 },
    actions: { complete: 0, total: 19 },
    openActions: 0,
    overdueActions: 0,
    workAreas: 4,
    lastMonitoring: null,
    monitoring30d: 0,
    updated: '2 weeks ago',
  },
  {
    name: 'Bethany Reservoir Complex — Discharge Structure',
    type: 'Discharge structure · Alameda County',
    status: 'complete',
    desc: 'Terminal discharge structure delivering conveyed water into Bethany Reservoir; construction complete.',
    requirements: { met: 11, total: 11 },
    actions: { complete: 26, total: 26 },
    openActions: 0,
    overdueActions: 0,
    workAreas: 5,
    lastMonitoring: 'Jun 24',
    monitoring30d: 3,
    updated: '10 days ago',
  },
  {
    name: 'Mandeville Island Tunnel Material Reuse Site',
    type: 'Reuse site · San Joaquin County',
    status: 'in-progress',
    desc: 'Placement and grading site for reusable tunnel material from the central reaches, with erosion-control monitoring.',
    requirements: { met: 4, total: 12 },
    actions: { complete: 8, total: 22 },
    openActions: 7,
    overdueActions: 1,
    workAreas: 5,
    lastMonitoring: 'Jun 27',
    monitoring30d: 4,
    updated: '4 days ago',
  },
];
