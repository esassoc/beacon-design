// applicability-store — the one client-side record of this component's setup and
// its commitment decisions, shared by the setup dialog, the Applicable Commitments
// drawer and the dashboard card. Each of them READS from here and WRITES through
// here; none keeps a copy. A write notifies every subscriber, so the card's figures,
// the drawer's lists and the setup's tally always describe the same state.
//
// It stands in for three prod endpoints:
//   · PATCH components/{id}/commitments/decisions  (decide / undo, written on click)
//   · PUT   components/{id}/setup                   (saveSetup)
//   · GET   components/{id}/commitments             (scoped, recommendationFor)
//
// In memory only: a reload is a clean slate, which is what a demo wants.
import {
  APPLY_FALLBACK,
  COMPONENT_DATES,
  CURRENT_USER,
  effectsOf,
  SETUP_COMMITMENTS,
  SOURCE_REASON,
  TODAY_ISO,
  fmtDate,
  habitatHits,
  inSourceScope,
  recommend,
  type ApplicableCommitment,
  type ComponentSetup,
  type Decision,
  type DecisionEffects,
  type DecisionOrigin,
  type HabitatHit,
  type Recommendation,
} from '../../data/component-commitments';

export interface DecisionRecord {
  decision: Decision | null;
  origin?: DecisionOrigin;
  rationale?: string;
  /** The decision date. It moves whenever the reason changes. */
  date?: string;
  /** Who moved the row, for a Moved by Hand decision. */
  by?: string;
  /** The reasons a setup dismissal was accepted for. */
  reasons?: string[];
  /** Set when a setup dismissal returned to Needs a decision because the setup changed. */
  reopened?: { date: string; was: string[] };
}

export interface SetupSaveResult {
  /** Setup dismissals whose reason no longer holds — now back to Needs a decision. */
  reopened: string[];
  /** Hand decisions the new setup would have recommended differently — kept as they are. */
  keptByHand: string[];
}

type Listener = () => void;

/**
 * The one line that says why a decision stands, the same in the drawer row, its
 * preview and the setup review. Setup decisions carry their reasons; an apply from
 * setup with no tag behind it says so; a hand decision says it was set by hand, when,
 * and the person's own rationale if they gave one.
 */
export function rationaleText(rec: DecisionRecord): string {
  if (rec.decision === null) return '';
  if (rec.origin === 'setup') return rec.rationale || (rec.decision === 'applied' ? APPLY_FALLBACK : '');
  const who = rec.origin === 'moved' ? ['Moved by Hand', rec.by ?? ''] : ['Set by Hand'];
  return [...who, rec.date ? fmtDate(rec.date) : '', rec.rationale ?? ''].filter(Boolean).join(' · ');
}
export const isSourceDismissal = (rec: DecisionRecord): boolean =>
  rec.decision === 'dismissed' && rec.origin === 'setup' && rec.reasons?.[0] === SOURCE_REASON;


class ApplicabilityStore {
  private setup: ComponentSetup | null = null;
  /** Component.StartDate / ExpectedEndDate. Setup's Dates step and Edit Component both write these. */
  private dates = { ...COMPONENT_DATES };
  private habitat: HabitatHit[] = [];
  private records = new Map<string, DecisionRecord>(
    SETUP_COMMITMENTS.map((c) => [
      c.id,
      { decision: c.decision, origin: c.origin, rationale: c.rationale, date: c.decisionDate },
    ]),
  );
  private listeners = new Set<Listener>();

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
  private emit(): void {
    this.listeners.forEach((fn) => fn());
  }

  getSetup(): ComponentSetup | null {
    return this.setup;
  }
  getDates(): { startDate: string; endDate: string } {
    return { ...this.dates };
  }
  getHabitat(): HabitatHit[] {
    return this.habitat;
  }
  record(id: string): DecisionRecord {
    return this.records.get(id) ?? { decision: null };
  }

  /**
   * In the component's list: its selected sources' commitments (every source while
   * nothing is selected), plus anything decided, which stays visible whatever the
   * selection. A commitment from an unselected source is decided on save (Source
   * document not applicable), so after setup the list is every commitment.
   */
  inScope(c: ApplicableCommitment): boolean {
    return inSourceScope(c, this.setup) || this.record(c.id).decision !== null;
  }
  scoped(): ApplicableCommitment[] {
    return SETUP_COMMITMENTS.filter((c) => this.inScope(c));
  }

  /** A recommendation exists only for an undecided, in-scope commitment on a component with setup. */
  recommendationFor(c: ApplicableCommitment): Recommendation | null {
    if (!this.setup || this.record(c.id).decision !== null || !this.inScope(c)) return null;
    return recommend(c, { setup: this.setup, habitat: this.habitat });
  }
  recommended(): ApplicableCommitment[] {
    return this.scoped().filter((c) => this.recommendationFor(c));
  }

  /** Preview a setup without saving it: what it would recommend out of the in-scope, undecided set. */
  preview(setup: ComponentSetup, habitat: HabitatHit[]): { scope: ApplicableCommitment[]; out: { c: ApplicableCommitment; rec: Recommendation }[] } {
    const scope = SETUP_COMMITMENTS.filter((c) => {
      const rec = this.record(c.id);
      return inSourceScope(c, setup) || (rec.decision !== null && rec.origin !== 'setup');
    });
    const out = scope
      .map((c) => {
        const rec = this.record(c.id);
        // A setup dismissal is re-evaluated, so it counts as open here.
        if (rec.decision !== null && rec.origin !== 'setup') return null;
        const r = recommend(c, { setup, habitat });
        return r ? { c, rec: r } : null;
      })
      .filter((x): x is { c: ApplicableCommitment; rec: Recommendation } => !!x);
    return { scope, out };
  }

  /**
   * Save the setup and re-check every decision it made. Setup's dates are the
   * component's own, so saving them writes the component's dates too.
   */
  saveSetup(setup: ComponentSetup, habitat: HabitatHit[]): SetupSaveResult {
    this.setup = setup;
    this.habitat = habitat;
    this.dates = { startDate: setup.startDate, endDate: setup.endDate };
    const result = this.recheck();
    this.emit();
    return result;
  }

  /**
   * Edit Component's dates. With a setup on record they re-check its decisions, the
   * same as a setup edit would: a dismissal whose season no longer holds comes back.
   */
  setComponentDates(startDate: string, endDate: string): SetupSaveResult {
    this.dates = { startDate, endDate };
    if (!this.setup) {
      this.emit();
      return { reopened: [], keptByHand: [] };
    }
    this.setup = { ...this.setup, startDate, endDate };
    const result = this.recheck();
    this.emit();
    return result;
  }

  /**
   * Re-check every setup decision against the current setup. A setup dismissal whose
   * reason no longer holds goes back to Needs a decision; one that still holds keeps its
   * decision and takes the new reason, with a new date when the reason changed. Setup
   * applies stay (nowSaysOut flags them). A hand decision is never touched.
   */
  private recheck(): SetupSaveResult {
    const setup = this.setup!;
    const habitat = this.habitat;
    const reopened: string[] = [];
    const keptByHand: string[] = [];
    for (const c of SETUP_COMMITMENTS) {
      const rec = this.record(c.id);
      if (rec.decision === null) continue;
      const r = recommend(c, { setup, habitat });
      if (rec.origin === 'setup') {
        if (rec.decision === 'applied') continue;
        if (!inSourceScope(c, setup)) {
          if (!isSourceDismissal(rec)) this.records.set(c.id, { ...rec, date: TODAY_ISO, reasons: [SOURCE_REASON], rationale: SOURCE_REASON });
        } else if (!r || isSourceDismissal(rec)) {
          // A document selected again reopens its commitments, so a person sees them fresh.
          this.records.set(c.id, { decision: null, reopened: { date: TODAY_ISO, was: rec.reasons ?? [] } });
          reopened.push(c.id);
        } else {
          const rationale = r.reasons.join(' · ');
          if (rationale !== rec.rationale) this.records.set(c.id, { ...rec, date: TODAY_ISO, reasons: r.reasons, rationale });
        }
      } else if (inSourceScope(c, setup) && (rec.decision === 'dismissed') === !r) {
        keptByHand.push(c.id);
      }
    }
    return { reopened, keptByHand };
  }

  /** What moving these commitments to `to` would do on the component, counted as prod does. */
  effects(changes: { id: string; to: Decision | null }[]): DecisionEffects {
    return effectsOf(
      changes
        .map(({ id, to }) => ({ c: SETUP_COMMITMENTS.find((x) => x.id === id)!, from: this.record(id).decision, to }))
        .filter((x) => x.c),
    );
  }

  /** Record commitments from unselected source documents as not applicable, as setup's decision. */
  dismissForSource(ids: string[]): void {
    for (const id of ids)
      this.records.set(id, { decision: 'dismissed', origin: 'setup', date: TODAY_ISO, reasons: [SOURCE_REASON], rationale: SOURCE_REASON });
    this.emit();
  }

  /** Apply what setup's review placed in Will Apply, each with the reason that speaks for it. */
  applyFromSetup(items: { id: string; reason: string | null }[]): void {
    for (const { id, reason } of items)
      this.records.set(id, { decision: 'applied', origin: 'setup', date: TODAY_ISO, rationale: reason ?? APPLY_FALLBACK });
    this.emit();
  }

  /** Apply or dismiss, written immediately (prod's click-to-write). */
  decide(ids: string[], decision: Decision, rationale: string, origin: DecisionOrigin = 'person'): void {
    for (const id of ids) {
      const c = SETUP_COMMITMENTS.find((x) => x.id === id);
      const reasons = origin === 'setup' && c ? this.recommendationFor(c)?.reasons : undefined;
      this.records.set(id, {
        decision,
        origin,
        date: TODAY_ISO,
        by: origin === 'moved' ? CURRENT_USER : undefined,
        reasons,
        rationale: rationale || (reasons ? reasons.join(' · ') : undefined),
      });
    }
    this.emit();
  }

  /**
   * A setup apply the current setup would now recommend out. The apply stands, with its
   * actions; this is the flag that lets a person dismiss it. Hand applies are never flagged.
   */
  nowSaysOut(c: ApplicableCommitment): Recommendation | null {
    const rec = this.record(c.id);
    if (!this.setup || rec.decision !== 'applied' || rec.origin !== 'setup') return null;
    return recommend(c, { setup: this.setup, habitat: this.habitat });
  }

  /** Dismiss a flagged setup apply with the reasons setup now gives. */
  dismissFlagged(id: string): void {
    const c = SETUP_COMMITMENTS.find((x) => x.id === id);
    const r = c ? this.nowSaysOut(c) : null;
    if (!r) return;
    this.records.set(id, { decision: 'dismissed', origin: 'setup', date: TODAY_ISO, reasons: r.reasons, rationale: r.reasons.join(' · ') });
    this.emit();
  }

  /** Clear a decision — the commitment goes back to Needs a decision. */
  undo(ids: string[]): void {
    for (const id of ids) this.records.set(id, { decision: null });
    this.emit();
  }

  /** Accept every current recommendation (or the given subset) as a setup dismissal. */
  acceptRecommendations(ids?: string[]): string[] {
    const pick = this.recommended().filter((c) => !ids || ids.includes(c.id));
    for (const c of pick) {
      const r = this.recommendationFor(c)!;
      this.records.set(c.id, {
        decision: 'dismissed',
        origin: 'setup',
        date: TODAY_ISO,
        reasons: r.reasons,
        rationale: r.reasons.join(' · '),
      });
    }
    this.emit();
    return pick.map((c) => c.id);
  }

  /** The figures the card and the drawer lead with, counted off the scoped list. */
  figures(): { total: number; decided: number; undecided: number; recommended: number; actionsWaiting: number; percent: number } {
    const scope = this.scoped();
    const undecided = scope.filter((c) => this.record(c.id).decision === null);
    const decided = scope.length - undecided.length;
    return {
      total: scope.length,
      decided,
      undecided: undecided.length,
      recommended: undecided.filter((c) => this.recommendationFor(c)).length,
      actionsWaiting: undecided.reduce((n, c) => n + c.actions.length, 0),
      percent: scope.length ? Math.round((decided / scope.length) * 100) : 0,
    };
  }
}

/** One store per page. Every surface imports this same instance. */
export const applicability = ((globalThis as Record<string, unknown>).__bcnApplicability ??=
  new ApplicabilityStore()) as ApplicabilityStore;

export { habitatHits };
