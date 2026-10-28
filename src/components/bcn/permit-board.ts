// Shared client logic for the Permit Tracker's status board (BcnPermitBoard) and its
// "Configure statuses" dialog (BcnPermitStatusConfig). Kept beside the components
// rather than in src/lib/permit-status-store.ts, which is owned elsewhere: this is
// the PLACEMENT rule both surfaces must agree on, plus the open-dialog contract.

import type { PermitWorkflow, StatusColumn } from '../../data/permit-tracker';

/**
 * Where a permit sits on one workflow's board. resolveStatus() answers against the
 * whole workflow set, so a permit whose type was moved to another workflow can still
 * point at a column of its OLD workflow. On the new board it lands in the first column
 * of the same backbone category (a "Submitted" land-use permit is still in progress on
 * the agency board), and only falls back to the first column if that category is gone.
 */
export const placeIn = (wf: PermitWorkflow, col: StatusColumn): StatusColumn =>
  wf.columns.find((c) => c.id === col.id) ?? wf.columns.find((c) => c.category === col.category) ?? wf.columns[0];

/** Fired on document to open the Configure statuses dialog. */
export const CONFIGURE_EVENT = 'permit-status:configure';

export interface ConfigureDetail {
  projectId: string;
  /** The workflow to open on; the dialog falls back to the first. */
  workflowId?: string;
}

/** Open the Configure statuses dialog for a project (a BcnPermitStatusConfig must be on the page). */
export const openPermitStatusConfig = (projectId: string, workflowId?: string) =>
  document.dispatchEvent(new CustomEvent<ConfigureDetail>(CONFIGURE_EVENT, { detail: { projectId, workflowId } }));
