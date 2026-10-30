// Permit Tracker — the browser-side store for a project's own details: client, project
// no., project manager, construction start and its sites.
//
// Each project starts from the fixture (getProject / sitesOf). Once anyone saves the Edit
// project drawer, the project's whole record is saved here and read back instead. Saved
// per PROJECT in localStorage, every read and write try/caught, so a private window still
// gets a working (unsaved) session. Every write fires PROJECT_EVENT on document; the
// project page and the Projects page re-run scheduleOf() with the saved construction start.
//
// Sites keep their ids, so the fixture's permits stay attached; a new site has no permits.
// A site with permits can't be removed (the drawer only offers Remove on empty sites).

import { getProject, sitesOf } from '../data/permit-tracker';

export const PROJECT_EVENT = 'project:change';

export interface SiteRecord {
  id: string;
  name: string;
  location: string;
}

export interface ProjectRecord {
  client: string;
  number: string;
  manager: string;
  constructionStart: string;
  sites: SiteRecord[];
}

const key = (projectId: string) => `esa-permits:project:${projectId}`;
const memory = new Map<string, ProjectRecord>();

/** The fixture's record, before any edits. */
export function fixtureProject(projectId: string): ProjectRecord {
  const p = getProject(projectId);
  return {
    client: p.client,
    number: p.number,
    manager: p.manager,
    constructionStart: p.constructionStart,
    sites: sitesOf(projectId).map(({ id, name, location }) => ({ id, name, location })),
  };
}

export function loadProject(projectId: string): ProjectRecord {
  const cached = memory.get(projectId);
  if (cached) return structuredClone(cached);
  let record = fixtureProject(projectId);
  try {
    const raw = localStorage.getItem(key(projectId));
    if (raw) record = JSON.parse(raw) as ProjectRecord;
    // Records saved before sites lost their agency still carry one; drop it.
    record.sites = record.sites.map(({ id, name, location }) => ({ id, name, location }));
  } catch {
    /* private window / blocked storage — the fixture */
  }
  memory.set(projectId, record);
  return structuredClone(record);
}

export function saveProject(projectId: string, record: ProjectRecord) {
  memory.set(projectId, structuredClone(record));
  try {
    localStorage.setItem(key(projectId), JSON.stringify(record));
  } catch {
    /* unsaved session */
  }
  document.dispatchEvent(new CustomEvent(PROJECT_EVENT, { detail: { projectId } }));
}

/** A new site's id, unique within the project. */
export const newSiteId = (projectId: string) => `${projectId}-s${Date.now().toString(36)}`;
