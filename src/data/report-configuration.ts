// Report Configuration (epic BCN-2017) — the mock tenant's report types and report
// templates, in the shape the two tabs read on feature/report-config (BCN-2018): a type
// carries its scope and template count; a template its block count, how many reports use
// it, and when it was last edited. Names and numbers are invented; the contract is prod's
// ReportTypeDto / ReportTemplateDto.

export type ReportScope = 'Project' | 'Component' | 'Work Area';

export interface ReportType {
  id: string;
  name: string;
  scope: ReportScope;
}

export interface ReportTemplate {
  id: string;
  name: string;
  reportTypeId: string;
  blockCount: number;
  reportCount: number;
  /** ISO date of the last edit (UpdateDate, else CreateDate). */
  edited: string;
  /** Starred by the viewer: floats to the top of the Templates tab. New design, not in prod. */
  starred?: boolean;
}

export const REPORT_SCOPES: ReportScope[] = ['Project', 'Component', 'Work Area'];

/** In their hand-set order — the order reports offer them, and the template sections follow it. */
export const REPORT_TYPES: ReportType[] = [
  { id: 'daily-monitoring', name: 'Daily Monitoring Report', scope: 'Component' },
  { id: 'weekly-compliance', name: 'Weekly Compliance Summary', scope: 'Project' },
  { id: 'monthly-compliance', name: 'Monthly Compliance Report', scope: 'Project' },
  { id: 'component-completion', name: 'Component Completion Report', scope: 'Component' },
  { id: 'work-area-closeout', name: 'Work Area Closeout Report', scope: 'Work Area' },
  { id: 'annual-summary', name: 'Annual Mitigation Summary', scope: 'Project' },
];

export const REPORT_TEMPLATES: ReportTemplate[] = [
  { id: 'dmr-standard', name: 'Standard DMR', reportTypeId: 'daily-monitoring', blockCount: 7, reportCount: 46, edited: '2026-10-15', starred: true },
  { id: 'dmr-biological', name: 'Biological Monitor DMR', reportTypeId: 'daily-monitoring', blockCount: 9, reportCount: 12, edited: '2026-09-02' },
  { id: 'dmr-cultural', name: 'Cultural Resources DMR', reportTypeId: 'daily-monitoring', blockCount: 6, reportCount: 0, edited: '2026-10-28' },
  { id: 'dmr-paleo', name: 'Paleontological Monitor DMR', reportTypeId: 'daily-monitoring', blockCount: 6, reportCount: 8, edited: '2026-06-11' },
  { id: 'dmr-tribal', name: 'Tribal Monitor DMR', reportTypeId: 'daily-monitoring', blockCount: 5, reportCount: 4, edited: '2026-10-02' },
  { id: 'dmr-water', name: 'Water Quality DMR', reportTypeId: 'daily-monitoring', blockCount: 10, reportCount: 21, edited: '2026-10-30' },
  { id: 'wcs-standard', name: 'Weekly Summary', reportTypeId: 'weekly-compliance', blockCount: 5, reportCount: 6, edited: '2026-10-15' },
  { id: 'wcs-construction', name: 'Construction Lookahead', reportTypeId: 'weekly-compliance', blockCount: 4, reportCount: 14, edited: '2026-09-23' },
  { id: 'wcs-nesting', name: 'Nesting Bird Survey Summary', reportTypeId: 'weekly-compliance', blockCount: 6, reportCount: 0, edited: '2026-03-17' },
  { id: 'mcr-agency', name: 'Agency Monthly Report', reportTypeId: 'monthly-compliance', blockCount: 11, reportCount: 9, edited: '2025-12-04' },
  { id: 'mcr-internal', name: 'Internal Monthly Rollup', reportTypeId: 'monthly-compliance', blockCount: 4, reportCount: 0, edited: '2026-08-19' },
  { id: 'mcr-cdfw', name: 'CDFW Monthly Compliance', reportTypeId: 'monthly-compliance', blockCount: 12, reportCount: 7, edited: '2026-10-21', starred: true },
  { id: 'mcr-swrcb', name: 'Water Board Monthly Report', reportTypeId: 'monthly-compliance', blockCount: 9, reportCount: 5, edited: '2026-07-08' },
  { id: 'ccr-standard', name: 'Completion Report', reportTypeId: 'component-completion', blockCount: 8, reportCount: 3, edited: '2026-07-30' },
  { id: 'ccr-restoration', name: 'Habitat Restoration Completion', reportTypeId: 'component-completion', blockCount: 13, reportCount: 2, edited: '2026-05-26' },
  { id: 'ccr-revegetation', name: 'Revegetation As-Built', reportTypeId: 'component-completion', blockCount: 7, reportCount: 0, edited: '2026-10-09' },
  { id: 'wac-standard', name: 'Work Area Closeout', reportTypeId: 'work-area-closeout', blockCount: 6, reportCount: 11, edited: '2026-08-04' },
  { id: 'wac-preconstruction', name: 'Preconstruction Survey Clearance', reportTypeId: 'work-area-closeout', blockCount: 8, reportCount: 17, edited: '2026-10-24', starred: true },
  { id: 'wac-photo', name: 'Site Photo Log', reportTypeId: 'work-area-closeout', blockCount: 3, reportCount: 0, edited: '2026-01-13' },
];

const plural = (count: number, one: string, many: string) => `${count} ${count === 1 ? one : many}`;

/** Edited dates drop the year when it is this year, as prod's list does. */
export function editedOn(iso: string, today = new Date('2026-11-04')): string {
  const d = new Date(`${iso}T00:00:00`);
  const opts: Intl.DateTimeFormatOptions =
    d.getFullYear() === today.getFullYear() ? { month: 'short', day: 'numeric' } : { month: 'short', day: 'numeric', year: 'numeric' };
  return d.toLocaleDateString('en-US', opts);
}

/** "7 blocks · used by 6 reports · edited Oct 15" — prod's template meta line, as its three parts. */
export function templateMeta(t: ReportTemplate): string[] {
  return [
    plural(t.blockCount, 'block', 'blocks'),
    t.reportCount === 0 ? 'no reports yet' : `used by ${plural(t.reportCount, 'report', 'reports')}`,
    `edited ${editedOn(t.edited)}`,
  ];
}

/** Why Delete is held while reports use the template; null when it can go. */
export function templateDeleteHeld(t: ReportTemplate): string | null {
  return t.reportCount === 0 ? null : `${plural(t.reportCount, 'report uses', 'reports use')} this template, so it can't be deleted.`;
}

export function templatesOf(typeId: string): ReportTemplate[] {
  return REPORT_TEMPLATES.filter((t) => t.reportTypeId === typeId).sort((a, b) => a.name.localeCompare(b.name));
}

/** Why a type's Delete is held while templates use it; null when it can go. */
export function typeDeleteHeld(typeId: string): string | null {
  const n = templatesOf(typeId).length;
  return n === 0 ? null : `${plural(n, 'template uses', 'templates use')} this type, so it can't be deleted.`;
}

export const REPORT_CONFIGURATION_ROUTE = '/prototypes/report-configuration';
