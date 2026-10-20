/**
 * Aldo on a list (Andy, 2026-10-19: "I should be able to start a list and then explain what
 * I want and have that populate"). What Aldo reads: every record a list of this type can
 * hold, as one searchable line each, and where it files. The page's adapter
 * (src/components/bcn/list-aldo.ts) matches what the person says against it and proposes
 * the records; nothing lands until a key is pressed.
 *
 * Prod: one structured-output call per message, given the list, its members and these
 * candidates, returning the ids to add or remove and a reply (the Aldo kit's
 * { actions, reply } contract, src/data/aldo.ts). The prototype runs no model: it matches
 * words, with the synonyms a permit uses (list-aldo.ts).
 *
 * Also here: the empty list a new list opens on. "Create list" in the create dialog lands
 * on one of these, named from the dialog, with Aldo open.
 */
import { COMMITMENT_CHAIN, ITP, OBLIGATION_CLASS_LABEL, OBLIGATION_TREE, REQUIREMENT_TYPE_LABEL } from './setup-wizard';
import {
  complianceIndexTree,
  indexListTree,
  sectionOf,
  type ActionList,
  type CommitmentList,
  type ComplianceIndexList,
  type ListType,
  type ObligationList,
  type ProjectList,
} from './lists';

/** One record a list can hold, as Aldo reads it. */
export interface AldoCandidate {
  /** What the list holds it by: an obligation or action id, a commitment code, a
   *  canonical subcategory id (Compliance Index lists). */
  id: string;
  /** As the reply names it. */
  label: string;
  /** Where it files, as the reply groups it: "Birds › Nesting birds", an action type. */
  where: string;
  /** Lowercased: the label and where, which weigh more. */
  head: string;
  /** Lowercased: the body, which weighs less. */
  body: string;
}

const lc = (...s: (string | undefined)[]) => s.filter(Boolean).join(' ').toLowerCase();

const candidate = (id: string, label: string, where: string, body: string): AldoCandidate => ({
  id,
  label,
  where,
  head: lc(label, where),
  body: lc(body),
});

/** Every record a list of this type can hold. */
export function aldoCandidates(list: ProjectList): AldoCandidate[] {
  const type = list.type;
  if (type === 'obligation')
    return OBLIGATION_TREE.flatMap((cat) =>
      cat.subcategories.flatMap((sub) =>
        sub.obligations.map((o) =>
          candidate(o.id, o.title, `${cat.name} › ${sub.name}`, [o.description, o.trigger, OBLIGATION_CLASS_LABEL[o.class], ...o.species, ...o.activities].join(' ')),
        ),
      ),
    );
  if (type === 'action')
    return ITP.actions.map((a) =>
      candidate(a.id, a.name, REQUIREMENT_TYPE_LABEL[a.type] ?? a.type, [a.text, a.timing?.stated].join(' ')),
    );
  if (type === 'commitment')
    return COMMITMENT_CHAIN.map((c) =>
      candidate(c.code, `${c.code} ${c.title}`, sectionOf(c.code), c.requirements.map((r) => `${r.name} ${r.text}`).join(' ')),
    );
  // A Compliance Index list keeps or drops whole subcategories of its own outline, so its
  // candidates are those subcategories, read by their names and the items they hold.
  // Read by the titles this version shows, its own where it gave one.
  const index = list as ComplianceIndexList;
  return indexListTree(index).flatMap((cat) =>
    cat.subcategories.map((sub) =>
      candidate(sub.id, sub.name, cat.name, [
        ...sub.actions.map((a) => `${a.name} ${index.wording?.[a.id]?.title ?? ''}`),
        ...sub.obligations.map((o) => `${o.title} ${index.wording?.[o.id]?.title ?? ''}`),
      ].join(' ')),
    ),
  );
}

/** What the person might say first, as a Choice each. Examples, never instructions. */
export const ALDO_STARTERS: Record<ListType, { label: string; text: string }[]> = {
  obligation: [
    { label: 'Before ground disturbance', text: 'Everything a crew has to do before ground disturbance: training, fencing, nesting bird surveys' },
    { label: 'Dust, spills and fuel', text: 'Anything about dust, spills or refueling' },
  ],
  action: [
    { label: 'Agency reporting', text: 'Every report or notice we owe the agencies' },
    { label: 'Biologist surveys', text: 'Surveys the biologists run before and during construction' },
  ],
  commitment: [
    { label: 'Nesting birds and bats', text: 'Commitments about nesting birds and bats' },
    { label: 'Water quality', text: 'Commitments on water quality, dewatering and in-water work' },
  ],
  'compliance-index': [
    { label: 'Only fish and water', text: 'Keep only fish and water operations' },
    { label: 'Leave out funding', text: 'Take out mitigation funding and endowments' },
  ],
};

/* ── The empty list a new list opens on ─────────────────────────────────── */

const NEW_ON = '2026-10-19';

/**
 * One per type, each holding nothing (a Compliance Index list holds a copy of the canonical
 * index, which is where every version starts). The create dialog lands on the one for the
 * type it made, with the name and description it was given in the query string.
 */
export const NEW_LISTS: (ObligationList | ActionList | CommitmentList | ComplianceIndexList)[] = [
  {
    id: 'new-commitment-list', type: 'commitment', name: 'New Commitment List', description: '',
    createdAt: NEW_ON, updatedAt: NEW_ON, memberCount: 0, codes: [],
  },
  {
    id: 'new-action-list', type: 'action', name: 'New Action List', description: '',
    createdAt: NEW_ON, updatedAt: NEW_ON, memberCount: 0, actionIds: [],
  },
  {
    id: 'new-obligation-list', type: 'obligation', name: 'New Obligation List', description: '',
    createdAt: NEW_ON, updatedAt: NEW_ON, memberCount: 0, members: [], nameOverrides: {},
    // Fabricated, as every seeded credential in lists.ts is.
    publicId: '99999999-9999-4999-8999-999999999999',
    apiKey: '0e0e0e0e-0e0e-4e0e-8e0e-0e0e0e0e0e0e',
    apiKeyGeneratedAt: `${NEW_ON}T09:00:00`,
  },
  (() => {
    const canonical = complianceIndexTree();
    const list: ComplianceIndexList = {
      id: 'new-compliance-index-list', type: 'compliance-index', canonical: false,
      name: 'New Compliance Index List', description: '', createdAt: NEW_ON, updatedAt: NEW_ON,
      memberCount: canonical.reduce((n, c) => n + c.subcategories.reduce((m, s) => m + s.actions.length + s.obligations.length, 0), 0),
      categories: canonical.map((c) => ({
        id: c.id,
        name: c.name,
        subcategories: c.subcategories.map((s) => ({ id: s.id, name: s.name, from: [s.id] })),
      })),
    };
    return list;
  })(),
];

export const isNewList = (list: ProjectList): boolean => NEW_LISTS.some((l) => l.id === list.id);
export const newListHref = (type: ListType): string => `/prototypes/lists/new-${type}-list`;
