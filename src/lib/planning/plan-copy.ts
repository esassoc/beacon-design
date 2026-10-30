// The sentences that explain draft first (2026-10-29, the consistency audit: five wordings of one idea). Kept here so
// every surface says it the same way, as prod keeps its PLAN_DRAFT_* strings in shared/planning/plan-draft.ts.

/** Live, for someone who can publish. */
export const DRAFT_FIRST = 'Changes go to your draft; Review and Publish takes them to Live.';
/** Live, for someone who can't (a Contributor). */
export const DRAFT_FIRST_ASK = 'Changes go to your draft; someone who can publish takes them to Live.';
/** Live, with Publish Now on offer (the drawer, the item's Edit). */
export const DRAFT_FIRST_NOW = 'Save to My Draft keeps it for later; Review and Publish shows this change, and anything it moves, before it goes to Live.';
/** Someone else's draft. */
export const DRAFT_READ_ONLY = (owner: string) => `${owner}’s draft is read-only. Copy to My Drafts to change it.`;

// ── Several drafts per person (2026-10-29): every sentence that said "your draft" names which one ──

/** A draft's name as a sentence quotes it (it's what its owner typed). */
export const quoted = (name: string) => `“${name}”`;

/** The open drafts that also change an item, as the start of a sentence: "Alex’s draft also changes", "Your other
 *  draft, “Weekly updates”, also changes", "2 of your other drafts also change", "3 open drafts also change". */
export function alsoChange(drafts: readonly { owner: string; name: string }[], me: string): string {
  if (drafts.length === 1) {
    const d = drafts[0];
    return d.owner === me ? `Your other draft, ${quoted(d.name)}, also changes` : `${d.owner.split(' ')[0]}’s draft also changes`;
  }
  return drafts.every((d) => d.owner === me) ? `${drafts.length} of your other drafts also change` : `${drafts.length} open drafts also change`;
}

/** Where an edit begun on Live lands, said before it's saved: your current draft, or a new one. */
export function goesInto(draft: { name: string; revisions: readonly unknown[]; publishRequestedAt?: string } | null, nextName: string): string {
  if (!draft) return `Starts a new draft, ${quoted(nextName)}.`;
  const n = draft.revisions.length;
  return `Goes into ${quoted(draft.name)} (${n} other ${n === 1 ? 'edit' : 'edits'}${draft.publishRequestedAt ? ', publish requested: this withdraws the request' : ''}).`;
}

/** The Save button on Live names the draft it goes to (2026-10-30, Andy: "When you click Save to My Draft... which
 *  draft?"): the one picked in Saves To, or a new one. A long name is cut short; Saves To shows it whole. */
export function saveToLabel(draft: { name: string } | null): string {
  if (!draft) return 'Save to a New Draft';
  const name = draft.name.trim();
  return `Save to ${name.length > 22 ? `${name.slice(0, 21).trimEnd()}…` : name}`;
}

/** Said once an edit begun on Live is in a draft, naming it. */
export const savedTo = (name: string, canPublish: boolean) => `Saved to your draft ${quoted(name)}. ${canPublish ? 'Review and Publish' : 'Ask to Publish'} when it’s ready.`;
