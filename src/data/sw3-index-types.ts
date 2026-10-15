// The Compliance Index as step 3 reads it: the book's back index compiled from every
// commitment's requirements (docs/setup-wizard-3-step-ci-brief.md). Prod's tables, flattened
// for the prototype: ComplianceIndexCategory › ComplianceIndexSubcategory › Action and
// Obligation, each Obligation's requirements (ObligationRequirement, with its Excerpt) as
// locators. sw3-index.json is written by scripts/build-index.mjs from Beacon's own index
// prompts (ProposeComplianceIndex v1, ExtractActionsAndObligations v3, FileItems v1,
// MergeObligations v1) over sw3-requirements.json.

/** Prod's ObligationClass. */
export type IndexClass = 'Adhere' | 'Monitor' | 'Notify' | 'Roster';
/** Prod's ObligationAudience: who reads the obligation in the field. */
export type IndexAudience = 'Crews' | 'Monitors' | 'Compliance staff';

/** A locator: the requirement an entry rests on, and the words the link rests on. */
export interface IndexLocator {
  /** Source file id in step 2's REVIEW_DOCS ('itp', 'mmrp'). */
  doc: string;
  /** Commitment code: 'COA 11.29', 'MM AES-1a'. */
  code: string;
  /** 1-based place of the requirement in its commitment (step 2's DisplayIndex): 11.29:3. */
  n: number;
  /** ObligationRequirement.Excerpt: verbatim words inside the requirement's passage. */
  excerpt: string;
}

export interface IndexAction {
  id: string;
  kind: 'action';
  /** Action.Name. */
  name: string;
  /** Who does it, when prod's extraction named one; empty means "Needs input". */
  responsibleParty: string;
  locators: IndexLocator[];
}

export interface IndexObligation {
  id: string;
  kind: 'obligation';
  /** Obligation.Title. */
  title: string;
  class: IndexClass;
  audience: IndexAudience;
  /** Obligation.TriggerText: "Applies when". Empty when it always applies. */
  trigger: string;
  /** Obligation.MonitorSigns: what a monitor looks for. */
  monitorSigns: string[];
  locators: IndexLocator[];
}

export type IndexEntry = IndexAction | IndexObligation;

export interface IndexSubcategory {
  id: string;
  name: string;
  /** Entries filed here as their home bin. */
  entryIds: string[];
  /** Entries whose home is elsewhere, also filed here (prod's "Also filed in"). */
  alsoIds: string[];
  /** The few requirements cited as the reason the bin exists (ComplianceIndexSubcategoryRequirement). */
  evidence: IndexLocator[];
}

export interface IndexCategory {
  id: string;
  name: string;
  subcategories: IndexSubcategory[];
}

/** Something File could not place (ExtractedItem.NoBinReason): the index is missing a bin. */
export interface IndexUnfiled {
  id: string;
  statement: string;
  reason: string;
  locators: IndexLocator[];
}

/** A merge Merge proposed but a person decides: entries that read as one duty. */
export interface IndexMergeProposal {
  id: string;
  subcategoryId: string;
  entryIds: string[];
  /** The merged entry's title as proposed. */
  title: string;
  reason: string;
}

export interface Sw3Index {
  /** Which prompts and when. */
  prompts: string;
  run: string;
  categories: IndexCategory[];
  entries: Record<string, IndexEntry>;
  unfiled: IndexUnfiled[];
  merges: IndexMergeProposal[];
}

export const CLASS_OPTIONS: { value: IndexClass; label: string }[] = [
  { value: 'Adhere', label: 'Adhere' },
  { value: 'Monitor', label: 'Monitor' },
  { value: 'Notify', label: 'Notify' },
  { value: 'Roster', label: 'Roster' },
];
export const AUDIENCE_OPTIONS: { value: IndexAudience; label: string }[] = [
  { value: 'Crews', label: 'Crews' },
  { value: 'Monitors', label: 'Monitors' },
  { value: 'Compliance staff', label: 'Compliance staff' },
];
