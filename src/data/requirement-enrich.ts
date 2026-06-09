// Conditional-trio enrichment (Species / Season / Construction activity) keyed by
// commitment ID — the generated FEIR fixture doesn't carry these, so this map drives
// the differential requirement metadata that BcnRequirementReference surfaces.
//
// Shared by the Requirement Tracker dialog AND the streamlined Data Catalog
// Requirements pages (BCN-1163 / BCN-1283): one source of truth so the same
// commitment shows the same species/season/activities everywhere.
import type { RequirementReference } from '../components/bcn/requirement-reference';
import type { ActionRow } from './tracker-fixture';

export const ENRICH: Record<string, Pick<RequirementReference, 'species' | 'season' | 'constructionActivities'>> = {
  'MM-BIO-1': { constructionActivities: ['Demolition', 'Site preparation'] },
  'MM-BIO-2': { species: ['Nesting raptors', 'Migratory birds'], season: 'Feb 1 – Aug 31', constructionActivities: ['Ground disturbance', 'Vegetation removal'] },
  'MM-BIO-3': { species: ['Roosting bats'], constructionActivities: ['Demolition', 'Tree removal'] },
  'SCA BIO-1': { species: ['Migratory birds'] },
  'SCA BIO-2': { season: 'Breeding season (Feb – Aug)', constructionActivities: ['Tree removal'] },
  'SCA BIO-3': { constructionActivities: ['Tree removal', 'Grading'] },
  'SCA AIR-1': { constructionActivities: ['Earthwork', 'Grading', 'Demolition'] },
  'SCA AIR-2': { constructionActivities: ['Earthwork', 'Hauling'] },
};

/** Map a fixture row → the component's RequirementReference (Frequency defaults to
 *  One-time inside the component under the streamlined config). */
export const toRequirement = (row: ActionRow): RequirementReference => ({
  text: row.requirementText,
  resourceCategory: row.resourceCategory,
  type: row.type,
  phase: row.phase,
  milestone: row.milestones || undefined,
  responsibleParty: row.responsibleParty,
  expectedEvidence: row.expectedEvidence,
  ...ENRICH[row.commitment],
});
