// LIST IMPLEMENTATIONS — the child rows of an action or obligation on a list page.
// Andy, 2026-09-23: "Instead of showing the requirements as child nodes, let's show the
// ActionImplementations/ObligationImplementations with their status, component name,
// and comment count." Prod's action list renders exactly this row (status pill, the
// component's name, "1 comment"); clicking one opens its upsert dialog, which the
// prototype does not build.
//
// The two kinds differ in what a row can say about progress. An ActionImplementation
// has a lifecycle (Not Started → Completed). An ObligationImplementation does not:
// obligations are conditional, as-needed and recurring, so "completed" means nothing.
// Andy, 2026-09-23: "for obligations, we can't have those badges. What we might be able
// to do is say how many evidence of compliance there are." So every record carries both
// a status and an evidence count, and <BcnListImplementations> shows the one its kind
// can honestly claim.
//
// INVENTED and DETERMINISTIC: a record is implemented on one to three of the DCP
// components the evidence drawer already scopes to, picked by a hash of its id, so
// every run renders the same rows and an action reads the same on every list.

import { COMPONENTS } from './evidence-drawer';

export type ImplStatus = 'not-started' | 'in-progress' | 'completed' | 'overdue' | 'on-hold';

/** In the order the Status filter offers them — the lifecycle, not the alphabet. */
export const IMPL_STATUSES: { value: ImplStatus; label: string }[] = [
  { value: 'not-started', label: 'Not Started' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'overdue', label: 'Overdue' },
  { value: 'on-hold', label: 'On Hold' },
  { value: 'completed', label: 'Completed' },
];
export const IMPL_STATUS_LABEL = Object.fromEntries(IMPL_STATUSES.map((s) => [s.value, s.label])) as Record<ImplStatus, string>;

export interface ListImplementation {
  id: string;
  component: string;
  status: ImplStatus;
  /** The status's label, carried on the record so a client stamp needs no lookup table. */
  label: string;
  comments: number;
  /** Evidence of compliance attached to this implementation. What an obligation row shows. */
  evidence: number;
}

// FNV-1a: small, stable, and good enough to scatter ids across a handful of buckets.
const hash = (s: string): number => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0x01000193) >>> 0;
  return h;
};

// Most work has not started; that is what a real DCP register looks like today.
const STATUS_WHEEL: ImplStatus[] = [
  'not-started', 'not-started', 'not-started', 'not-started', 'in-progress', 'in-progress',
  'in-progress', 'completed', 'completed', 'overdue', 'on-hold',
];

/** A record's implementations, one per component it applies to. */
export const implementationsOf = (recordId: string): ListImplementation[] => {
  const h = hash(recordId);
  const n = 1 + (h % 3);
  const start = (h >>> 3) % COMPONENTS.length;
  return Array.from({ length: Math.min(n, COMPONENTS.length) }, (_, i) => {
    const component = COMPONENTS[(start + i * 2) % COMPONENTS.length];
    const k = hash(`${recordId}|${component.id}`);
    const status = STATUS_WHEEL[k % STATUS_WHEEL.length];
    return {
      id: `${recordId}|${component.id}`,
      component: component.name,
      status,
      label: IMPL_STATUS_LABEL[status],
      comments: k % 5 === 0 ? 1 + ((k >>> 4) % 3) : 0,
      // Coherent with the status an action row shows: work not started has no evidence
      // yet, completed work has some. Otherwise about a third have none.
      evidence: status === 'not-started' ? 0
        : status !== 'completed' && (k >>> 8) % 3 === 0 ? 0
        : 1 + ((k >>> 12) % 6),
    };
  });
};
