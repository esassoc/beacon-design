// Saved plan templates (2026-10-28, the proposal's "Save as Template"): a plan's configuration (fields, page layouts per
// level, the modules' lists) and its level names, kept under a name so the next plan can start from it. "When Leah's
// compensatory mitigation plan starts, it begins from his configuration, not a blank one." The built-in templates are
// plan-config.ts's TEMPLATES; these are the ones people save, in this browser (localStorage `bcn-plan-templates-v1`).
// A template carries no elements, dates, money or people: a saved plan configuration, nothing else.

import { TEMPLATES, clonePlanConfig, type PlanConfig } from './plan-config';
import type { PlanLevelCreateDto } from './model';

const STORE_KEY = 'bcn-plan-templates-v1';

export interface SavedTemplate {
  name: string;
  config: PlanConfig;
  /** The levels top down, when the template was saved from a plan (New Plan prefills them). */
  levels?: Required<PlanLevelCreateDto>[];
  savedBy: string;
  savedAt: string;
}

function load(): SavedTemplate[] {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    const parsed = raw ? (JSON.parse(raw) as SavedTemplate[]) : [];
    return Array.isArray(parsed) ? parsed.filter((t) => t && typeof t.name === 'string' && t.config) : [];
  } catch {
    return [];
  }
}

function store(templates: SavedTemplate[]): void {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(templates));
  } catch {
    /* a blocked store keeps nothing; the plan itself is unaffected */
  }
}

/** The templates people have saved, newest first. */
export function savedTemplates(): SavedTemplate[] {
  return load().sort((a, b) => b.savedAt.localeCompare(a.savedAt));
}

/** Whether a name is taken (a built-in template's, or a saved one's), ignoring case. */
export function templateNameTaken(name: string): 'built-in' | 'saved' | null {
  const n = name.trim().toLowerCase();
  if (Object.keys(TEMPLATES).some((k) => k.toLowerCase() === n)) return 'built-in';
  return load().some((t) => t.name.toLowerCase() === n) ? 'saved' : null;
}

/** Saves a configuration as a template; a saved template of the same name is replaced. The config is copied, and its
 *  `template` set to the new name, so a plan made from it says where it came from. */
export function saveTemplate(name: string, config: PlanConfig, levels?: Required<PlanLevelCreateDto>[], savedBy = ''): SavedTemplate {
  const trimmed = name.trim();
  const copy = clonePlanConfig(config);
  copy.template = trimmed;
  const template: SavedTemplate = { name: trimmed, config: copy, levels: levels?.map((l) => ({ ...l })), savedBy, savedAt: new Date().toISOString() };
  store([...load().filter((t) => t.name.toLowerCase() !== trimmed.toLowerCase()), template]);
  return template;
}

export function deleteTemplate(name: string): void {
  store(load().filter((t) => t.name.toLowerCase() !== name.trim().toLowerCase()));
}

/** Every template New Plan can offer: the built-in ones, then the saved ones. `config()` returns a fresh copy. */
export function templateChoices(): { name: string; builtIn: boolean; levels?: Required<PlanLevelCreateDto>[]; config: () => PlanConfig }[] {
  return [
    ...Object.entries(TEMPLATES).map(([name, make]) => ({ name, builtIn: true, config: make })),
    ...savedTemplates().map((t) => ({ name: t.name, builtIn: false, levels: t.levels, config: () => clonePlanConfig(t.config) })),
  ];
}
