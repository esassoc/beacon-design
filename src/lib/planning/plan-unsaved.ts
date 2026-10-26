// Unsaved changes: nothing typed is lost (new design, "Plan Editing: Proposed Direction" — Unsaved changes). When a
// drawer can't save — the version check refused it because someone else changed the plan since the form loaded — what
// the editor typed is kept. These are a safety net, not drafts: only the author sees them, they're recovered from that
// element's drawer, and they expire after UNSAVED_KEEP_DAYS, since they were never saved.
//
// APPROXIMATION: kept in this browser's localStorage under the current user, standing in for the server.

import type { PlanElementFormValue } from './plan-element';
import { currentUserName } from './plan-server';

const STORE_KEY = 'bcn-planning-unsaved-v1';
/** Open question 4: how long unsaved changes last. 30 days proposed. */
export const UNSAVED_KEEP_DAYS = 30;
/** From here on the drawer and marker warn: "Expires in 3 days". */
const EXPIRY_WARNING_DAYS = 5;
const DAY_MS = 86_400_000;

export interface PlanUnsavedChanges {
  PlanID: string;
  UserName: string;
  PlanElementID: string;
  PlanElementName: string;
  /** What the editor typed. */
  Values: PlanElementFormValue;
  /** The element as their form loaded it: anything that differs from it now, someone else changed. */
  Loaded: PlanElementFormValue;
  /** Who changed the plan under them, when the server said. */
  ConflictUserName: string | null;
  KeptAt: string;
  ExpiresAt: string;
}

const listeners = new Set<() => void>();

function read(): PlanUnsavedChanges[] {
  try {
    const all = JSON.parse(localStorage.getItem(STORE_KEY) ?? '[]') as PlanUnsavedChanges[];
    const now = Date.now();
    return all.filter((u) => new Date(u.ExpiresAt).getTime() > now);
  } catch {
    return [];
  }
}

function write(all: PlanUnsavedChanges[]): void {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(all));
  } catch {
    /* a blocked store keeps nothing */
  }
  listeners.forEach((listener) => listener());
}

/** The current user's unsaved changes on this plan, by element. */
export function planUnsavedChanges(planID: string): Map<string, PlanUnsavedChanges> {
  const me = currentUserName();
  return new Map(read().filter((u) => u.PlanID === planID && u.UserName === me).map((u) => [u.PlanElementID, u]));
}

export function keepPlanUnsavedChanges(entry: Omit<PlanUnsavedChanges, 'UserName' | 'KeptAt' | 'ExpiresAt'>, now = new Date()): PlanUnsavedChanges {
  const me = currentUserName();
  const kept: PlanUnsavedChanges = { ...entry, UserName: me, KeptAt: now.toISOString(), ExpiresAt: new Date(now.getTime() + UNSAVED_KEEP_DAYS * DAY_MS).toISOString() };
  write([...read().filter((u) => !(u.PlanID === entry.PlanID && u.UserName === me && u.PlanElementID === entry.PlanElementID)), kept]);
  return kept;
}

export function discardPlanUnsavedChanges(planID: string, planElementID: string): void {
  const me = currentUserName();
  const all = read();
  const next = all.filter((u) => !(u.PlanID === planID && u.UserName === me && u.PlanElementID === planElementID));
  if (next.length !== all.length) write(next);
}

export function onPlanUnsavedChanges(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** "Kept until Nov 18", then "Expires in 3 days" near the end. */
export function planUnsavedExpiryLabel(entry: PlanUnsavedChanges, now = new Date()): string {
  const expires = new Date(entry.ExpiresAt);
  const days = Math.ceil((expires.getTime() - now.getTime()) / DAY_MS);
  if (days <= EXPIRY_WARNING_DAYS) return days <= 1 ? 'Expires today' : `Expires in ${days} days`;
  return `Kept until ${expires.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
}

const FIELD_LABELS: Record<keyof PlanElementFormValue, string> = {
  PlanElementName: 'Name',
  LevelDepth: 'Level',
  StartDate: 'Start date',
  EndDate: 'End date',
  PlanDateType: 'Date type',
  IsMilestone: 'Milestone',
  Budget: 'Budget',
  Notes: 'Notes',
};

/** The fields that differ between two values of the form, in form order. */
export function planElementFieldsChanged(a: PlanElementFormValue, b: PlanElementFormValue): (keyof PlanElementFormValue)[] {
  return (Object.keys(FIELD_LABELS) as (keyof PlanElementFormValue)[]).filter((key) => (a[key] ?? '') !== (b[key] ?? ''));
}

export function planElementFieldLabel(key: keyof PlanElementFormValue): string {
  return FIELD_LABELS[key];
}
