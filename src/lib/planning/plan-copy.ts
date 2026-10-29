// The sentences that explain draft first (2026-10-29, the consistency audit: five wordings of one idea). Kept here so
// every surface says it the same way, as prod keeps its PLAN_DRAFT_* strings in shared/planning/plan-draft.ts.

/** Live, for someone who can publish. */
export const DRAFT_FIRST = 'Changes go to your draft; Review and Publish takes them to Live.';
/** Live, for someone who can't (a Contributor). */
export const DRAFT_FIRST_ASK = 'Changes go to your draft; someone who can publish takes them to Live.';
/** Live, with Publish Now on offer (the drawer, the item's Edit). */
export const DRAFT_FIRST_NOW = 'Save to My Draft keeps it for later; Review and Publish shows this change, and anything it moves, before it goes to Live.';
/** Someone else's draft. */
export const DRAFT_READ_ONLY = (owner: string) => `${owner}’s draft is read-only. Copy to My Draft to change it.`;
