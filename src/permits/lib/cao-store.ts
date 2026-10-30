// Permit Tracker — the browser-side store for what people (and AI) have done to the
// permit-type reference data:
//
//   rules     — per jurisdiction: the How review works / Wetland buffers / Stream buffers
//               sections, each with its AI suggestion, the current (possibly edited)
//               content, and who suggested, edited and validated it when.
//   ordinance — per jurisdiction: corrections to the index's ordinance (chapter, link,
//               last amended) from a person or from "Check for updates".
//   law       — per permit type: the governing law list, as edited.
//   checkedAt — when "Check for updates" last ran.
//
// In the product this is shared server data every user sees; the prototype has no server,
// so it lives in this browser's localStorage (try/caught, with an in-memory fallback).
// Every write fires CAO_EVENT on document so every surface on the page re-renders.
//
// Reads fall back to the seed (src/data/permit-rules.ts) when nothing is saved.

import {
  GOVERNING_LAW,
  caoOf,
  seedRules,
  type Authority,
  type JurisdictionRules,
  type Ordinance,
  type RuleSectionId,
} from '../data/permit-rules';
import { CURRENT_USER, TODAY, type PermitTypeId } from '../data/permit-tracker';

export const CAO_EVENT = 'cao:change';

const memory = new Map<string, string>();
const read = <T>(key: string): T | undefined => {
  let raw = memory.get(key);
  if (raw === undefined) {
    try {
      raw = localStorage.getItem(key) ?? undefined;
    } catch {
      /* private window: memory only */
    }
  }
  return raw === undefined ? undefined : (JSON.parse(raw) as T);
};
const write = (key: string, value: unknown, detail: Record<string, string>) => {
  const raw = JSON.stringify(value);
  memory.set(key, raw);
  try {
    localStorage.setItem(key, raw);
  } catch {
    /* unsaved session */
  }
  document.dispatchEvent(new CustomEvent(CAO_EVENT, { detail }));
};

const rulesKey = (id: string) => `esa-permits:cao-rules:${id}`;
const ordinanceKey = (id: string) => `esa-permits:cao-ordinance:${id}`;
const lawKey = (typeId: string) => `esa-permits:law:${typeId}`;
const CHECKED_KEY = 'esa-permits:cao-checked';

// ── rules ────────────────────────────────────────────────────────────────────

/** The jurisdiction's rules: saved, else the seed; undefined = not read yet. */
export const loadRules = (id: string): JurisdictionRules | undefined => read<JurisdictionRules>(rulesKey(id)) ?? seedRules(id);

export const saveRules = (id: string, rules: JurisdictionRules) => write(rulesKey(id), rules, { jurisdictionId: id });

/** A person's edit of one section. Validating at the same time marks it validated. */
export function editSection<K extends RuleSectionId>(id: string, key: K, content: JurisdictionRules[K]['current'], validate: boolean) {
  const rules = loadRules(id);
  if (!rules) return;
  const s = rules[key];
  s.current = content as never;
  s.editedAt = TODAY;
  s.editedBy = CURRENT_USER;
  if (validate) {
    s.status = 'validated';
    s.validatedAt = TODAY;
    s.validatedBy = CURRENT_USER;
  } else {
    s.status = 'edited';
    delete s.validatedAt;
    delete s.validatedBy;
  }
  saveRules(id, rules);
}

export function validateSection(id: string, key: RuleSectionId) {
  const rules = loadRules(id);
  if (!rules) return;
  Object.assign(rules[key], { status: 'validated', validatedAt: TODAY, validatedBy: CURRENT_USER });
  saveRules(id, rules);
}

/** Put a section back to what AI suggested (the edit is dropped, the suggestion kept). */
export function revertSection(id: string, key: RuleSectionId) {
  const rules = loadRules(id);
  if (!rules) return;
  const s = rules[key];
  s.current = structuredClone(s.ai) as never;
  s.status = 'suggested';
  for (const k of ['editedAt', 'editedBy', 'validatedAt', 'validatedBy'] as const) delete s[k];
  saveRules(id, rules);
}

// ── ordinance ────────────────────────────────────────────────────────────────

export type OrdinanceRecord = Ordinance & { checkedAt?: string };

export const loadOrdinance = (id: string): OrdinanceRecord | undefined => read<OrdinanceRecord>(ordinanceKey(id)) ?? caoOf(id)?.ordinance;

export const saveOrdinance = (id: string, o: OrdinanceRecord) => write(ordinanceKey(id), o, { jurisdictionId: id });

// ── governing law ────────────────────────────────────────────────────────────

export const loadLaw = (typeId: PermitTypeId): Authority[] => read<Authority[]>(lawKey(typeId)) ?? GOVERNING_LAW[typeId];

export const saveLaw = (typeId: PermitTypeId, law: Authority[]) => write(lawKey(typeId), law, { typeId });

// ── check for updates ────────────────────────────────────────────────────────

export const lastChecked = () => read<string>(CHECKED_KEY);

export const markChecked = (day: string) => write(CHECKED_KEY, day, {});

/** Many ordinances at once (Check for updates): one event, not one per jurisdiction. */
export function saveOrdinances(records: Record<string, OrdinanceRecord>) {
  const entries = Object.entries(records);
  entries.forEach(([id, o], i) => {
    const raw = JSON.stringify(o);
    memory.set(ordinanceKey(id), raw);
    try {
      localStorage.setItem(ordinanceKey(id), raw);
    } catch {
      /* unsaved session */
    }
    if (i === entries.length - 1) document.dispatchEvent(new CustomEvent(CAO_EVENT, { detail: {} }));
  });
}
