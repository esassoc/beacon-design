// The tenant's custom rich text, keyed as prod keys it (CustomRichTextTypeEnum). Tenant
// admins edit these in prod. Mocked here as DWR's values.
//
// ActionLists is the box prod shows at the top of the Lists index
// (Beacon.Web pages/lists/lists.component.html:5). Its DWR wording on QA is unverified;
// this is the sentence prod's prototype carried. Round 13 (2026-10-21) moved it into the
// Lists page's You Are Here card and the empty state, both read from here.

export type CustomRichTextKey = 'ActionLists';

export const CUSTOM_RICH_TEXT: Record<CustomRichTextKey, string> = {
  ActionLists:
    'Lists are sets of commitments, actions or obligations you want to track and report on together. A commitment can sit on more than one list.',
};
