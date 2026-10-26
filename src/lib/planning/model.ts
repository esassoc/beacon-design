// The planning DTOs, as Beacon's generated client declares them (Beacon.Web/src/app/shared/generated/model/plan-*.ts),
// written as interfaces: the mock server hands out plain objects.

export interface PlanCreateDto { 
    PlanName?: string;
    Description?: string;
    Levels?: Array<PlanLevelCreateDto>;
}

export const PlanDateTypeEnum = {
    Estimated: 'Estimated',
    Scheduled: 'Scheduled'
} as const;
export type PlanDateTypeEnum = typeof PlanDateTypeEnum[keyof typeof PlanDateTypeEnum];

export interface PlanDetailDto { 
    PlanID?: string;
    ProjectID?: string;
    PlanName?: string;
    Description?: string;
    VersionToken?: string;
    Levels?: Array<PlanLevelDto>;
    Elements?: Array<PlanElementDto>;
    Dependencies?: Array<PlanElementDependencyDto>;
    Landmarks?: Array<PlanLandmarkDto>;
}

export interface PlanElementCreateDto { 
    ParentPlanElementID?: string;
    LevelDepth?: number;
    PlanElementName?: string;
    SortOrder?: number;
    StartDate?: string;
    EndDate?: string;
    PlanDateType?: PlanDateTypeEnum;
    IsMilestone?: boolean;
    /** New (2026-10-21): the element's budget in whole dollars; null when unset. A milestone has none. */
    Budget?: number | null;
    /** New (2026-10-21): free-text notes; null when unset. */
    Notes?: string | null;
}

export interface PlanElementDependencyCreateDto { 
    PredecessorPlanElementID?: string;
    SuccessorPlanElementID?: string;
    PlanElementDependencyType?: PlanElementDependencyTypeEnum;
    LagDays?: number;
}

export interface PlanElementDependencyDto { 
    PlanElementDependencyID?: string;
    PredecessorPlanElementID?: string;
    SuccessorPlanElementID?: string;
    PlanElementDependencyType?: PlanElementDependencyTypeEnum;
    LagDays?: number;
}

export const PlanElementDependencyTypeEnum = {
    FinishToStart: 'FinishToStart'
} as const;
export type PlanElementDependencyTypeEnum = typeof PlanElementDependencyTypeEnum[keyof typeof PlanElementDependencyTypeEnum];

export interface PlanElementDependencyUpdateDto { 
    LagDays?: number;
}

export interface PlanElementDto { 
    PlanElementID?: string;
    ParentPlanElementID?: string;
    PlanElementName?: string;
    SortOrder?: number;
    LevelDepth?: number;
    LevelSingularName?: string;
    LevelPluralName?: string;
    TreeDepth?: number;
    IsMilestone?: boolean;
    PlanDateType?: PlanDateTypeEnum;
    StartDate?: string;
    EndDate?: string;
    SpanStartDate?: string;
    SpanEndDate?: string;
    /** New (2026-10-21): the element's budget in whole dollars; null when unset. A milestone has none. */
    Budget?: number | null;
    /** New (2026-10-21): free-text notes; null when unset. */
    Notes?: string | null;
    Children?: Array<PlanElementDto>;
}

export interface PlanElementMoveDto { 
    ParentPlanElementID?: string;
}

export interface PlanElementScheduleChangeDto { 
    Mode?: PlanScheduleChangeModeEnum;
    PlanElementName?: string;
    LevelDepth?: number;
    StartDate?: string;
    EndDate?: string;
    PlanDateType?: PlanDateTypeEnum;
    IsMilestone?: boolean;
}

export interface PlanElementSortOrderDto { 
    Index?: number;
}

export interface PlanElementUpdateDto { 
    PlanElementName?: string;
    LevelDepth?: number;
    StartDate?: string;
    EndDate?: string;
    PlanDateType?: PlanDateTypeEnum;
    IsMilestone?: boolean;
    /** New (2026-10-21): the element's budget in whole dollars; null when unset. A milestone has none. */
    Budget?: number | null;
    /** New (2026-10-21): free-text notes; null when unset. */
    Notes?: string | null;
}

export interface PlanElementsShiftDto { 
    PlanElementIDs?: Array<string>;
    Days?: number;
}

export interface PlanLandmarkDto { 
    PlanLandmarkID?: string;
    PlanLandmarkName?: string;
    LandmarkDate?: string;
    SortOrder?: number;
}

export interface PlanLandmarkUpsertDto { 
    PlanLandmarkName?: string;
    LandmarkDate?: string;
}

export interface PlanLevelCreateDto { 
    SingularName?: string;
    PluralName?: string;
}

export interface PlanLevelDto { 
    Depth?: number;
    SingularName?: string;
    PluralName?: string;
}

export interface PlanLinkCandidateDto { 
    PlanElementID?: string;
    PlanElementName?: string;
    LevelDepth?: number;
    LevelSingularName?: string;
    IsMilestone?: boolean;
    TreeDepth?: number;
    AncestorNames?: Array<string>;
}

export interface PlanProgramStatusDto { 
    PlanElementID?: string;
    PlanElementName?: string;
    UpdateDate?: string;
    UpdateUserName?: string;
}

export interface PlanRulesDto { 
    MaxLevels?: number;
    MinDate?: string;
    MaxDate?: string;
    MaxShiftDays?: number;
}

export interface PlanScheduleChangeDto { 
    PlanElementID?: string;
    PlanElementName?: string;
    OldStartDate?: string;
    OldEndDate?: string;
    NewStartDate?: string;
    NewEndDate?: string;
}

export const PlanScheduleChangeModeEnum = {
    ThisItemOnly: 'ThisItemOnly',
    ThisItemAndEverythingUnderIt: 'ThisItemAndEverythingUnderIt'
} as const;
export type PlanScheduleChangeModeEnum = typeof PlanScheduleChangeModeEnum[keyof typeof PlanScheduleChangeModeEnum];

export interface PlanScheduleChangeSetDto { 
    Changes?: Array<PlanScheduleChangeDto>;
    Flags?: Array<PlanScheduleFlagDto>;
}

export interface PlanScheduleFlagDto { 
    PlanElementID?: string;
    PlanElementName?: string;
    Reason?: PlanScheduleFlagReasonEnum;
    RequestedStartDate?: string;
    RequestedEndDate?: string;
    RelatedPlanElementID?: string;
    RelatedPlanElementName?: string;
    RelatedIsParent?: boolean;
    LagDays?: number;
}

export const PlanScheduleFlagReasonEnum = {
    ScheduledNotMoved: 'ScheduledNotMoved',
    ScheduledStartMissed: 'ScheduledStartMissed',
    PastScheduledCutOff: 'PastScheduledCutOff',
    DependencyLoop: 'DependencyLoop',
    StartsBeforePredecessor: 'StartsBeforePredecessor',
    BeforeScheduledCutOff: 'BeforeScheduledCutOff'
} as const;
export type PlanScheduleFlagReasonEnum = typeof PlanScheduleFlagReasonEnum[keyof typeof PlanScheduleFlagReasonEnum];

export interface PlanShiftDto { 
    Days?: number;
    NewStartDate?: string;
}

export interface PlanSimpleDto { 
    PlanID?: string;
    ProjectID?: string;
    PlanName?: string;
    Description?: string;
    ElementCount?: number;
}

export interface PlanStatusDto { 
    VersionToken?: string;
    PlanUpdateDate?: string;
    PlanUpdateUserName?: string;
    Programs?: Array<PlanProgramStatusDto>;
}

export interface PlanUpdateDto { 
    PlanName?: string;
    Description?: string;
}

export interface PlanVersionConflictDto { 
    UpdateUserName?: string;
}

export interface PlannerProjectSummaryDto { 
    ProjectID?: string;
    Name?: string;
    StartDate?: string;
    EndDate?: string;
    Description?: string;
}

export interface PlannerSummaryDto { 
    Projects?: Array<PlannerProjectSummaryDto>;
}

/** Beacon's ui-button-toggle option shape (ui-button-toggle.component.ts). */
export interface UiButtonToggleOption<T> {
    value: T;
    displayValue: string;
}

/** global-search-shared.ts escapeHtml, which plan-version.ts reaches for. */
export function escapeHtml(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
