// Presence, in place of edit locks (new design, "Plan Editing: Proposed Direction" — open question 8, recommended).
// Editors see who else is working in a program; nothing is locked. A drawer checks in when it opens and again on each
// 10-second beat while its tab is visible, so a drawer left open in a background tab lapses on its own; the page polls
// who else is in and hands it to every listener (the toolbar line, an open drawer's notice). The version check still
// protects the plan: a stale save is refused, and the drawer keeps the editor's values (plan-unsaved.ts).

import type { PlanPresenceDto } from './plan-draft-model';
import { planApi } from './plan-server';

const BEAT_MS = 10_000;

let current: PlanPresenceDto[] = [];
const listeners = new Set<(presence: readonly PlanPresenceDto[]) => void>();

export function planPresence(): readonly PlanPresenceDto[] {
  return current;
}

export function setPlanPresence(presence: PlanPresenceDto[]): void {
  current = presence;
  listeners.forEach((listener) => listener(current));
}

export function onPlanPresence(listener: (presence: readonly PlanPresenceDto[]) => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Who else is in this program (or in plan settings, which spans every program): "Sam is editing Fabricate array". */
export function planPresenceSentence(presence: readonly PlanPresenceDto[], programPlanElementID: string | null): string | null {
  const here = presence.filter((p) => programPlanElementID === null || p.ProgramPlanElementID === null || p.ProgramPlanElementID === programPlanElementID);
  if (!here.length) return null;
  const people = [...new Map(here.map((p) => [p.UserName, p])).values()];
  const named = people.map((p) => `${p.UserName} is editing ${p.Subject}`).join('; ');
  return `${named}. Nothing is locked: if you both change the same thing, the second save is refused and its changes are kept for the editor.`;
}

/** A drawer's check-in for as long as it is open. Returns the check-out. */
export function startPlanPresence(planID: string, programPlanElementID: string | null, subject: string): () => void {
  const sessionID = crypto.randomUUID ? crypto.randomUUID() : `s-${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
  let stopped = false;
  const beat = () => {
    if (stopped || document.hidden) return;
    void planApi.checkIn(planID, sessionID, programPlanElementID, subject).catch(() => undefined);
  };
  beat();
  const timer = setInterval(beat, BEAT_MS);
  document.addEventListener('visibilitychange', beat);
  return () => {
    stopped = true;
    clearInterval(timer);
    document.removeEventListener('visibilitychange', beat);
    void planApi.checkOut(sessionID).catch(() => undefined);
  };
}
