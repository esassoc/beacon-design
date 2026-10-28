// Permit Tracker — the browser-side store for who is on each project's team.
//
// A team starts as teamOf() (the project manager plus everyone assigned a permit). Once
// anyone adds or removes a person, the project's whole list is saved here and read back
// instead. Saved per PROJECT in localStorage, every read and write try/caught, so a
// private window still gets a working (unsaved) session. Every write fires TEAM_EVENT.
// The project manager (from project-store, so an edited manager counts) is always on
// the team and cannot be removed.

import { teamOf } from '../data/permit-tracker';
import { loadProject } from './project-store';

export const TEAM_EVENT = 'project-team:change';

const key = (projectId: string) => `permit-tracker:team:${projectId}`;
const memory = new Map<string, string[]>();

export function loadTeam(projectId: string): string[] {
  const cached = memory.get(projectId);
  if (cached) return withManager(projectId, cached);
  let team = teamOf(projectId);
  try {
    const raw = localStorage.getItem(key(projectId));
    if (raw) team = JSON.parse(raw) as string[];
  } catch {
    /* private window / blocked storage — the fixture */
  }
  memory.set(projectId, team);
  return withManager(projectId, team);
}

/** The project manager leads the list, whoever it is now. */
function withManager(projectId: string, team: string[]) {
  const { manager } = loadProject(projectId);
  return [manager, ...team.filter((p) => p !== manager)];
}

function save(projectId: string, team: string[]) {
  memory.set(projectId, team);
  try {
    localStorage.setItem(key(projectId), JSON.stringify(team));
  } catch {
    /* unsaved session */
  }
  document.dispatchEvent(new CustomEvent(TEAM_EVENT, { detail: { projectId } }));
}

export const isOnTeam = (projectId: string, person: string) => loadTeam(projectId).includes(person);

export function addTeamMember(projectId: string, person: string) {
  const team = loadTeam(projectId);
  if (!team.includes(person)) save(projectId, [...team, person]);
}

export function removeTeamMember(projectId: string, person: string) {
  if (person === loadProject(projectId).manager) return;
  save(projectId, loadTeam(projectId).filter((p) => p !== person));
}
