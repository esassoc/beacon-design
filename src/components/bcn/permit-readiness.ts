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
} from '../../data/permit-tracker';

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
  expectedValue: string;
  expectedLabel: string;
  vs: VsStart;
  startValue: string;
  startSub: string;
  /** Ids of permits expiring before construction start. */
  expiresBeforeStart: string[];
}

export function readinessView(projectId: string, start: string): ReadinessView {
  const s = scheduleOf(permitsOfProject(projectId), start);
  const startDays = daysBetween(TODAY, start);
  return {
    state: s.state,
    expectedValue: s.expectedAll ? fmtDate(s.expectedAll) : 'Not yet known',
    expectedLabel: s.allIssued ? 'All issued' : 'Expected all issued',
    vs: vsStart(s.gap),
    startValue: fmtDate(start),
    startSub: startDays > 0 ? `In ${plural(startDays, 'day')}` : startDays === 0 ? 'Today' : `${plural(-startDays, 'day')} ago`,
    expiresBeforeStart: s.expiresBeforeStart.map((p) => p.id),
  };
}

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
