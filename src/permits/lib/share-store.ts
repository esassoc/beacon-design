// Permits — the browser-side store for each project's share-link choices (BcnShareProject).
// The shared page reads the same record so its preview matches what was chosen. Saved
// per PROJECT in localStorage, every read and write try/caught, so a private window
// still gets a working (unsaved) session.

export interface ShareSettings {
  /** 'link' = anyone with the link; 'invited' = only people invited by email. */
  audience: string;
  /** Show agency reference numbers. */
  refs: boolean;
  /** Show forecast dates for permits not yet submitted. */
  forecast: boolean;
  /** '30' | '90' days, or 'close' (when the project closes). */
  expiry: string;
}

const DEFAULTS: ShareSettings = { audience: 'link', refs: true, forecast: true, expiry: 'close' };
const key = (projectId: string) => `esa-permits:share:${projectId}`;
const memory = new Map<string, ShareSettings>();

export function loadShare(projectId: string): ShareSettings {
  const cached = memory.get(projectId);
  if (cached) return cached;
  let s = DEFAULTS;
  try {
    const raw = localStorage.getItem(key(projectId));
    if (raw) s = { ...DEFAULTS, ...(JSON.parse(raw) as Partial<ShareSettings>) };
  } catch {
    /* private window / blocked storage: the defaults */
  }
  memory.set(projectId, s);
  return s;
}

export function saveShare(projectId: string, s: ShareSettings) {
  memory.set(projectId, s);
  try {
    localStorage.setItem(key(projectId), JSON.stringify(s));
  } catch {
    /* unsaved session */
  }
}
