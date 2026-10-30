// The construction-start-dependent words of <BcnPermitReadiness> and the Projects
// page's state badges. The build calls these with the fixture's construction start; the
// browser calls them again with the one saved in src/lib/project-store.ts, so both go
// through the same functions and an edited start re-dates everything.

import {
  TODAY,
  daysBetween,
  fmtDate,
  permitsOfProject,
  scheduleOf,
  type ReadinessState,
} from '../data/permit-tracker';

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/** Where the expected all-issued date falls against construction start. */
export interface VsStart {
  /** late = after start (warning icon, danger ink); early = on or before (check, success ink). */
  tone: 'late' | 'early' | 'none';
  text: string;
}

const vsStart = (gap: number | undefined, short = false): VsStart =>
  gap === undefined
    ? { tone: 'none', text: '' }
    : gap > 0
      ? { tone: 'late', text: `${plural(gap, 'day')} after ${short ? 'start' : 'construction start'}` }
      : gap < 0
        ? { tone: 'early', text: `${plural(-gap, 'day')} before ${short ? 'start' : 'construction start'}` }
        : { tone: 'early', text: 'On construction start' };

export interface ReadinessView {
  state: ReadinessState;
  /** The answer to "Ready to break ground?" in one sentence, so the state badge is
   *  never the only place the reason lives. */
  verdict: string;
  expectedValue: string;
  expectedLabel: string;
  vs: VsStart;
  startValue: string;
  startSub: string;
  /** Ids of permits expiring before construction start. */
  expiresBeforeStart: string[];
}

/**
 * The verdict sentence. It names the dates the badge is judged on, so a reader who
 * never looks below the fold still knows why: when the permits land, against when
 * construction starts, and (at risk) which of the two rules tripped.
 */
function verdictOf(s: ReturnType<typeof scheduleOf>, start: string): string {
  const startOn = fmtDate(start);
  const expiring = s.expiresBeforeStart.length;
  const expiryLine = expiring
    ? `${plural(expiring, 'permit')} ${expiring === 1 ? 'expires' : 'expire'} before construction starts on ${startOn}.`
    : '';
  if (s.allIssued) return expiryLine ? `Every permit is issued, but ${expiryLine.charAt(0).toLowerCase()}${expiryLine.slice(1)}` : `Every permit is issued. Construction can start on ${startOn}.`;
  if (s.gap !== undefined && s.gap > 0) {
    const late = `The last permit is expected ${fmtDate(s.expectedAll!)}, ${plural(s.gap, 'day')} after construction is set to start on ${startOn}.`;
    return expiryLine ? `${late} ${expiryLine}` : late;
  }
  if (expiryLine) return expiryLine;
  if (s.unforecast > 0)
    return `${plural(s.unforecast, 'permit')} ${s.unforecast === 1 ? 'has' : 'have'} no past timeline to forecast from, so the date can't be confirmed yet.`;
  const lead = s.gap === 0 ? 'on the day construction starts' : `${plural(-s.gap!, 'day')} before construction starts on ${startOn}`;
  return `Every permit is expected by ${fmtDate(s.expectedAll!)}, ${lead}.`;
}

export function readinessView(projectId: string, start: string): ReadinessView {
  const s = scheduleOf(permitsOfProject(projectId), start);
  const startDays = daysBetween(TODAY, start);
  return {
    state: s.state,
    verdict: verdictOf(s, start),
    expectedValue: s.expectedAll ? fmtDate(s.expectedAll) : 'Not yet known',
    expectedLabel: s.allIssued ? 'All issued' : 'Expected all issued',
    vs: vsStart(s.gap),
    startValue: fmtDate(start),
    startSub: startDays > 0 ? `In ${plural(startDays, 'day')}` : startDays === 0 ? 'Today' : `${plural(-startDays, 'day')} ago`,
    expiresBeforeStart: s.expiresBeforeStart.map((p) => p.id),
  };
}

// ── the permit mix (BcnPermitMix): where every permit is in its life ──────────

export type MixStage = 'issued' | 'review' | 'preparing' | 'not-started';

export const MIX_STAGES: { id: MixStage; label: string }[] = [
  { id: 'issued', label: 'Issued' },
  { id: 'review', label: 'In agency review' },
  { id: 'preparing', label: 'Preparing' },
  { id: 'not-started', label: 'Not started' },
];

/**
 * One permit's stage, from its backbone category plus whether the application is in:
 * Completed is issued; an In Progress permit that has been submitted is with the
 * agency, otherwise ESA is still preparing it.
 */
export const mixStage = (category: string, submitted: boolean): MixStage =>
  category === 'Completed' ? 'issued' : category === 'NotStarted' ? 'not-started' : submitted ? 'review' : 'preparing';

export interface SiteScheduleRow {
  /** The site's id; '' for the Project-wide row (not a site, so not editable). */
  id: string;
  name: string;
  location: string;
  issued: string;
  expected: string;
  vs: VsStart;
  state: ReadinessState;
}

/**
 * The Sites table: a Project-wide row (only the project-wide permits) when there are any,
 * then each site with its own permits plus the project-wide ones, since those gate every
 * site. A site added in the browser has only the project-wide permits. Shown on every
 * project, one site or many, so Add site lives in the same place everywhere.
 */
export function siteScheduleRows(projectId: string, start: string, sites: { id: string; name: string; location: string }[]): SiteScheduleRow[] {
  const permits = permitsOfProject(projectId);
  const wide = permits.filter((p) => !p.siteId);
  const groups = [
    ...(wide.length ? [{ id: '', name: 'Project-wide', location: 'Covers every site', permits: wide }] : []),
    ...sites.map((site) => ({ ...site, permits: permits.filter((p) => !p.siteId || p.siteId === site.id) })),
  ];
  return groups.map((site) => {
    const s = scheduleOf(site.permits, start);
    return {
      id: site.id,
      name: site.name,
      location: site.location,
      issued: `${s.issued} of ${s.total}`,
      expected: s.expectedAll ? fmtDate(s.expectedAll) : 'Not yet known',
      vs: vsStart(s.gap, true),
      state: s.state,
    };
  });
}

/** The project's overall state, for the Projects page's cards. */
export const projectState = (projectId: string, start: string): ReadinessState => scheduleOf(permitsOfProject(projectId), start).state;

export const mixCounts = (stages: MixStage[]): Record<MixStage, number> => {
  const out = { issued: 0, review: 0, preparing: 0, 'not-started': 0 } as Record<MixStage, number>;
  for (const s of stages) out[s] += 1;
  return out;
};

/** Browser: re-draw a <BcnPermitMix> in place with live counts. */
export function renderMix(root: Element, counts: Record<MixStage, number>) {
  const total = MIX_STAGES.reduce((n, s) => n + counts[s.id], 0);
  const label = root.querySelector('[data-mix-label]');
  if (label) label.textContent = `${counts.issued} of ${total} issued`;
  const bar = root.querySelector<HTMLElement>('[data-mix-bar]');
  bar?.setAttribute(
    'aria-label',
    MIX_STAGES.filter((s) => counts[s.id] > 0)
      .map((s) => `${counts[s.id]} ${s.label.toLowerCase()}`)
      .join(', '),
  );
  root.querySelectorAll<HTMLElement>('[data-stage]').forEach((el) => {
    const n = counts[el.dataset.stage as MixStage] ?? 0;
    el.hidden = n === 0;
    if (el.classList.contains('bcn-mix__seg')) el.style.flexGrow = String(n);
    const count = el.querySelector('[data-mix-count]');
    if (count) count.textContent = String(n);
  });
}
