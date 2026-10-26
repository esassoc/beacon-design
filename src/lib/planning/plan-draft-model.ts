// The draft and conflict DTOs the replica's mock API speaks (plan-server.ts). New design, not ported: Beacon has no
// drafts yet. They follow the proposal "Plan Editing: Proposed Direction" (2026-10-19): a draft is a set of date
// overrides on the live plan — the planner's own edits only — and its cascade is recomputed on every read, never stored.

import type { PlanDateTypeEnum, PlanDetailDto, PlanScheduleChangeSetDto } from './model';

/**
 * One element a draft touched: the dates it loaded from the live plan the first time the draft touched it, and the
 * dates the planner gave it. `Cascade` is how the edit was made: true pushes its dependents (today's drag), false moves
 * only the element and lets a broken dependency show on the chart (the move-only variant, open question 6).
 */
export interface PlanDraftOverrideDto {
  PlanElementID: string;
  LoadedStartDate: string | null;
  LoadedEndDate: string | null;
  LoadedPlanDateType: PlanDateTypeEnum;
  StartDate: string | null;
  EndDate: string | null;
  PlanDateType: PlanDateTypeEnum;
  Cascade: boolean;
}

/**
 * A draft. `Name` null is the planner's scratch copy: private, one per planner per plan, saved only so a closed tab
 * loses nothing, and never in the Drafts list. A named draft is kept and visible (view-only) to every editor.
 */
export interface PlanDraftDto {
  PlanDraftID: string;
  PlanID: string;
  OwnerUserName: string;
  Name: string | null;
  /** In the order they were made: a later edit wins over an earlier edit's cascade. */
  Overrides: PlanDraftOverrideDto[];
  CreateDate: string;
  UpdateDate: string;
}

/** A draft in the Drafts list. */
export interface PlanDraftSimpleDto {
  PlanDraftID: string;
  OwnerUserName: string;
  Name: string | null;
  ChangeCount: number;
  UpdateDate: string;
}

/** Why an element's dates differ from the live plan in a draft. */
export type PlanDraftChangeCause = 'own' | 'cascade';

export interface PlanDraftChangeDto {
  PlanElementID: string;
  PlanElementName: string;
  Cause: PlanDraftChangeCause;
  /** For a cascade: the planner-moved element whose edit pushed it (the last one, when several did). */
  CausedByPlanElementID?: string;
  CausedByPlanElementName?: string;
  LiveStartDate?: string;
  LiveEndDate?: string;
  DraftStartDate?: string;
  DraftEndDate?: string;
  LivePlanDateType: PlanDateTypeEnum;
  DraftPlanDateType: PlanDateTypeEnum;
}

/** An override whose element's live dates changed after the draft first touched it, or that no longer applies. */
export interface PlanDraftStaleDto {
  PlanElementID: string;
  PlanElementName: string;
  /** The element was deleted from the live plan; the override is skipped. */
  Missing: boolean;
  LoadedStartDate: string | null;
  LoadedEndDate: string | null;
  LiveStartDate?: string;
  LiveEndDate?: string;
  DraftStartDate: string | null;
  DraftEndDate: string | null;
}

/** A finish-to-start link the plan's dates break, as it stands — not as one change caused it (BCN-1906). */
export interface PlanConflictDto {
  PlanElementDependencyID: string;
  PredecessorPlanElementID: string;
  PredecessorPlanElementName: string;
  SuccessorPlanElementID: string;
  SuccessorPlanElementName: string;
  /** How many days too early the successor starts. */
  DaysEarly: number;
}

/** A draft as the chart draws it: the live plan with the overrides applied and the cascade rerun. */
export interface PlanDraftViewDto {
  /** The plan as the draft has it. VersionToken is the LIVE plan's: a draft never moves the plan's version. */
  Plan: PlanDetailDto;
  /** Every element whose dates or date type differ from the live plan, in tree order. */
  Changes: PlanDraftChangeDto[];
  Stale: PlanDraftStaleDto[];
  Conflicts: PlanConflictDto[];
  /** What the scheduler flagged while replaying the draft (Scheduled elements a cascade held, missed cut-offs). */
  Flags: PlanScheduleChangeSetDto['Flags'];
}

/** Publish: the stale overrides to drop in favour of the live dates; the rest apply. */
export interface PlanDraftPublishDto {
  KeepLivePlanElementIDs: string[];
  /** Take a snapshot of the live plan first, under this name (open question 10: offered, not automatic). */
  SnapshotName?: string;
}

/** Someone with a drawer open on part of the plan (presence, in place of edit locks — open question 8). */
export interface PlanPresenceDto {
  UserName: string;
  /** The program the drawer edits; null for plan settings. */
  ProgramPlanElementID: string | null;
  ProgramName: string | null;
  /** What they have open, for the notice ("editing Fabricate array"). */
  Subject: string;
}
