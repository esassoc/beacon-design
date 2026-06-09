// Shared model + logic for <BcnRequirementReference> — imported by BOTH the .astro
// component (server render) and any dynamic host (the tracking dialog updates one
// rendered instance per grid row via applyRequirement). One source of truth so the
// field set, order, and presence rules can't drift between SSR and client.

/** The read-only requirement + collapsed-action facts the block surfaces. */
export interface RequirementReference {
  /** Full requirement (source) text — shown in the decorative serif. */
  text: string;
  resourceCategory: string;
  type: string;
  phase: string;
  /** Fixed "One-time" under the Prologis streamlined config; defaults to it. */
  frequency?: string;
  milestone?: string;
  // The conditional trio — clustered, rendered only when carried.
  species?: string[];
  season?: string;
  constructionActivities?: string[];
  responsibleParty: string;
  expectedEvidence: string;
}

/** A resolved metadata row: definition + the requirement's value + whether to show it. */
export interface ReqRefField {
  field: string;
  key: string;
  icon: string;
  value: string;
  present: boolean;
}

// Inline Lucide path markup for glyphs not in esa-icon's registry (esa-icon renders
// `paths` verbatim). Keyed so the .astro can look them up at render time.
export const ICON_PATHS: Record<string, string> = {
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  bird: '<path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  hardhat: '<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  paperclip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
};

interface FieldDef {
  field: string;
  key: string;
  icon: string;
  get: (r: RequirementReference) => string;
}

// Fixed order. Core fields (Resource Category → Frequency, Responsible party,
// Expected evidence) are always present; the conditional trio (Species / Season /
// Construction activity) and Milestone render only when the requirement carries them.
const FIELD_DEFS: FieldDef[] = [
  { field: 'resourceCategory', key: 'Resource Category', icon: 'layers', get: (r) => r.resourceCategory },
  { field: 'type', key: 'Type', icon: 'tag', get: (r) => r.type },
  { field: 'phase', key: 'Phase', icon: 'calendar', get: (r) => r.phase },
  { field: 'frequency', key: 'Frequency', icon: 'repeat', get: (r) => r.frequency || 'One-time' },
  { field: 'milestone', key: 'Milestone', icon: 'flag', get: (r) => r.milestone ?? '' },
  { field: 'species', key: 'Species', icon: 'bird', get: (r) => (r.species ?? []).join(', ') },
  { field: 'season', key: 'Season', icon: 'leaf', get: (r) => r.season ?? '' },
  { field: 'constructionActivities', key: 'Construction activity', icon: 'hardhat', get: (r) => (r.constructionActivities ?? []).join(', ') },
  { field: 'responsibleParty', key: 'Responsible party', icon: 'user', get: (r) => r.responsibleParty },
  { field: 'expectedEvidence', key: 'Expected evidence', icon: 'paperclip', get: (r) => r.expectedEvidence },
];

/** Resolve a requirement into the ordered field rows (value + presence). */
export function resolveFields(r: RequirementReference): ReqRefField[] {
  return FIELD_DEFS.map((d) => {
    const value = d.get(r);
    return { field: d.field, key: d.key, icon: d.icon, value, present: value.trim().length > 0 };
  });
}

/**
 * Client-only — update an already-rendered <BcnRequirementReference> instance for a
 * new requirement (the tracking dialog reuses one instance across grid rows). Sets
 * the source text + each value and hides absent rows; never rebuilds markup, so the
 * SSR'd esa-icons are reused untouched.
 */
export function applyRequirement(root: HTMLElement, r: RequirementReference): void {
  const textEl = root.querySelector('[data-bcn-text]');
  if (textEl) textEl.textContent = r.text;
  for (const f of resolveFields(r)) {
    const row = root.querySelector<HTMLElement>(`[data-field="${f.field}"]`);
    if (!row) continue;
    const val = row.querySelector('.bcn-reqref__val');
    if (val) val.textContent = f.value;
    row.hidden = !f.present;
  }
}
