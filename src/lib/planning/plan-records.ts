// A plan's records (2026-10-28, decisions 1 to 8): what happened to its elements, as opposed to what's planned for
// them. Status, documents, transmittals and their receipts, completions, obligation links, comments, health
// overrides and deliverable weights. Records attach to the Live element directly and show read-only in any draft
// (decision 5: plans are drafted, records are not). The planned side (dates, budget, owners, the deliverable flag,
// field values) lives in plan-repo.ts, carried on revisions.
//
// Documents follow the tenant-wide file store's shape (BCN-1596): one immutable File, many thin associations, each
// association carrying its own date, type and relevance note, so one file can sit on several elements with a
// different note on each. A file's versions are saves; its revision label (Draft 1, Final) is what a transmittal
// records. Transmittals follow construction document control (Aconex, Autodesk Build, ProjectWise): one per send,
// final once sent, receipt per recipient confirmed while signed in (decision 3), and response kept apart from receipt.

import type { PlanDetailDto, PlanElementDto } from './model';
import { currentUserName } from './plan-server';

// ── Types ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export type ElementStatus = 'Not Started' | 'In Progress' | 'Complete' | 'Blocked';
export const STATUSES: ElementStatus[] = ['Not Started', 'In Progress', 'Blocked', 'Complete'];
export type Health = 'Upcoming' | 'On Track' | 'At Risk' | 'Late' | 'Complete' | 'Blocked';
/** The health choices an owner can override to, with a note. */
export const HEALTH_CHOICES: Health[] = ['On Track', 'At Risk', 'Late', 'Blocked'];

export interface StatusRecord {
  status: ElementStatus;
  by: string;
  at: string;
}
export interface HealthOverride {
  health: Health;
  note: string;
  by: string;
  at: string;
}

export interface FileVersion {
  number: number;
  at: string;
  by: string;
  size?: number;
}
/** A file (or a link) in the plan's store: immutable, with its saves as versions. */
export interface PlanFile {
  id: string;
  name: string;
  kind: 'file' | 'link';
  url?: string;
  /** What gets transmitted: Draft 1, Draft 2, Final. */
  revision?: string;
  versions: FileVersion[];
  addedBy: string;
  addedAt: string;
}
export interface Correspondence {
  agency: string;
  direction: 'Sent' | 'Received';
  /** The letter's own date, kept apart from the day it was added. */
  letterDate: string;
  /** One line, when the exchange settled something. */
  agreement?: string;
}
/** A file on one element: its type, its date, why it matters here. */
export interface DocLink {
  id: string;
  fileId: string;
  elementId: string;
  type: string;
  /** When it was written or received, not when it was uploaded. */
  date: string;
  note: string;
  correspondence?: Correspondence;
  addedBy: string;
  addedAt: string;
}
/** A document as an element shows it: the link and its file. */
export interface ElementDocument {
  link: DocLink;
  file: PlanFile;
  /** How many other elements the same file is on. */
  alsoOn: number;
}

export interface Receipt {
  openedAt?: string;
  confirmedAt?: string;
  /** Set when someone recorded receipt on the recipient's behalf (decision 2's fallback). */
  recordedBy?: string;
  evidenceFileId?: string;
  remindedAt?: string;
}
export type TransmittalStatus = 'Draft' | 'Sent' | 'Received' | 'Responded' | 'Closed';
export interface Transmittal {
  id: string;
  /** Per plan, in order: T-001. */
  number: number;
  elementId: string;
  subject: string;
  purpose: string;
  from: string;
  to: string[];
  cc: string[];
  memoFileId?: string;
  /** Pinned to the version and revision sent. */
  enclosures: { fileId: string; version: number; revision?: string }[];
  responseDue?: string;
  ackDue?: string;
  notes?: string;
  createdBy: string;
  createdAt: string;
  sentAt?: string;
  closedAt?: string;
  receipts: Record<string, Receipt>;
  response?: { at: string; by: string; note: string; fileId?: string };
}

export interface Completion {
  elementId: string;
  result: string;
  completedOn: string;
  where: { fileId?: string; url?: string; label?: string };
  acceptedBy: string;
  note: string;
  recordedBy: string;
  recordedAt: string;
}

export interface PlanComment {
  id: string;
  elementId: string;
  author: string;
  at: string;
  text: string;
  edited?: boolean;
}

export interface PlanRecords {
  planID: string;
  status: Record<string, StatusRecord>;
  health: Record<string, HealthOverride>;
  files: PlanFile[];
  links: DocLink[];
  transmittals: Transmittal[];
  completions: Record<string, Completion>;
  /** Element id to obligation registry ids. */
  obligations: Record<string, string[]>;
  comments: PlanComment[];
  /** A deliverable's or milestone's weight in its parents' percent complete; absent, 1. */
  weights: Record<string, number>;
}

// ── Store ──────────────────────────────────────────────────────────────────────────────────────────────────────────

const KEY = 'bcn-plan-records-v1';
interface Store {
  plans: PlanRecords[];
}
const empty = (planID: string): PlanRecords => ({ planID, status: {}, health: {}, files: [], links: [], transmittals: [], completions: {}, obligations: {}, comments: [], weights: {} });

function load(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Store;
  } catch {
    /* a blocked store starts empty */
  }
  return { plans: [] };
}
function save(store: Store): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* a full or blocked store keeps this tab's state only */
  }
  // Any page with the plan open redraws: the element page, the plan's views.
  try {
    window.dispatchEvent(new CustomEvent('bcn-plan-records'));
  } catch {
    /* no window */
  }
}

export function recordsFor(planID: string): PlanRecords {
  return load().plans.find((p) => p.planID === planID) ?? empty(planID);
}
/** Change a plan's records and save; the change function gets the live object. */
export function updateRecords<T>(planID: string, change: (r: PlanRecords) => T): T {
  const store = load();
  let rec = store.plans.find((p) => p.planID === planID);
  if (!rec) {
    rec = empty(planID);
    store.plans.push(rec);
  }
  const out = change(rec);
  save(store);
  return out;
}
export function clearPlanRecords(planID?: string): void {
  const store = load();
  store.plans = planID ? store.plans.filter((p) => p.planID !== planID) : [];
  save(store);
}

const uid = () => Math.random().toString(36).slice(2, 10);
const nowIso = () => new Date().toISOString();
export const todayIso = () => new Date().toISOString().slice(0, 10);
const addDays = (iso: string, days: number) => new Date(Date.parse(iso) + days * 86_400_000).toISOString();

// ── Status and health ──────────────────────────────────────────────────────────────────────────────────────────────

export function setStatus(planID: string, elementId: string, status: ElementStatus): void {
  updateRecords(planID, (r) => {
    r.status[elementId] = { status, by: currentUserName(), at: nowIso() };
  });
}
/** An owner's health, with a note; null goes back to the derived one. */
export function setHealth(planID: string, elementId: string, health: Health | null, note = ''): void {
  updateRecords(planID, (r) => {
    if (!health) delete r.health[elementId];
    else r.health[elementId] = { health, note, by: currentUserName(), at: nowIso() };
  });
}
export function setWeight(planID: string, elementId: string, weight: number): void {
  updateRecords(planID, (r) => {
    r.weights[elementId] = Math.max(0, weight);
  });
}

// ── Documents ──────────────────────────────────────────────────────────────────────────────────────────────────────

export function addFile(planID: string, file: { name: string; kind?: 'file' | 'link'; url?: string; size?: number; revision?: string }): PlanFile {
  return updateRecords(planID, (r) => {
    const f: PlanFile = { id: uid(), name: file.name, kind: file.kind ?? 'file', url: file.url, revision: file.revision, versions: file.kind === 'link' ? [] : [{ number: 1, at: nowIso(), by: currentUserName(), size: file.size }], addedBy: currentUserName(), addedAt: nowIso() };
    r.files.push(f);
    return f;
  });
}
/** A replaced file: a new version, and optionally a new revision label. */
export function addFileVersion(planID: string, fileId: string, size?: number, revision?: string): void {
  updateRecords(planID, (r) => {
    const f = r.files.find((x) => x.id === fileId);
    if (!f) return;
    f.versions.push({ number: (f.versions.at(-1)?.number ?? 0) + 1, at: nowIso(), by: currentUserName(), size });
    if (revision !== undefined) f.revision = revision;
  });
}
export function linkDocument(planID: string, link: Omit<DocLink, 'id' | 'addedBy' | 'addedAt'>): DocLink {
  return updateRecords(planID, (r) => {
    const l: DocLink = { ...link, id: uid(), addedBy: currentUserName(), addedAt: nowIso() };
    r.links.push(l);
    return l;
  });
}
export function updateDocLink(planID: string, linkId: string, patch: Partial<Omit<DocLink, 'id' | 'fileId' | 'elementId'>>): void {
  updateRecords(planID, (r) => {
    const l = r.links.find((x) => x.id === linkId);
    if (l) Object.assign(l, patch);
  });
}
/** Off this element. The file stays in the store (files are never deleted), and on any other element. */
export function unlinkDocument(planID: string, linkId: string): void {
  updateRecords(planID, (r) => {
    r.links = r.links.filter((x) => x.id !== linkId);
  });
}
export function documentsFor(rec: PlanRecords, elementId: string): ElementDocument[] {
  const files = new Map(rec.files.map((f) => [f.id, f]));
  return rec.links
    .filter((l) => l.elementId === elementId && files.has(l.fileId))
    .map((link) => ({ link, file: files.get(link.fileId)!, alsoOn: rec.links.filter((x) => x.fileId === link.fileId && x.elementId !== elementId).length }))
    .sort((a, b) => b.link.date.localeCompare(a.link.date));
}
export const fileById = (rec: PlanRecords, id: string | undefined) => (id ? rec.files.find((f) => f.id === id) : undefined);

// ── Transmittals ───────────────────────────────────────────────────────────────────────────────────────────────────

export const transmittalNumber = (t: Pick<Transmittal, 'number'>) => `T-${String(t.number).padStart(3, '0')}`;

export function transmittalStatus(t: Transmittal): TransmittalStatus {
  if (t.closedAt) return 'Closed';
  if (!t.sentAt) return 'Draft';
  if (t.response) return 'Responded';
  return t.to.every((n) => t.receipts[n]?.confirmedAt) ? 'Received' : 'Sent';
}
/** "2 of 3 Received". */
export function receiptCount(t: Transmittal): { confirmed: number; of: number } {
  return { confirmed: t.to.filter((n) => t.receipts[n]?.confirmedAt).length, of: t.to.length };
}
/** A To recipient past the acknowledgment due date without confirming. */
export const receiptOverdue = (t: Transmittal, name: string, today = todayIso()) => !!t.sentAt && !!t.ackDue && !t.receipts[name]?.confirmedAt && t.to.includes(name) && t.ackDue.slice(0, 10) < today;
export const responseOverdue = (t: Transmittal, today = todayIso()) => !!t.sentAt && !t.response && !t.closedAt && !!t.responseDue && t.responseDue < today;

export function transmittalsFor(rec: PlanRecords, elementId: string): Transmittal[] {
  return rec.transmittals.filter((t) => t.elementId === elementId).sort((a, b) => b.number - a.number);
}
/** Transmittals sent to someone, newest first: a guest's inbox. */
export function transmittalsTo(rec: PlanRecords, name: string): Transmittal[] {
  return rec.transmittals.filter((t) => t.sentAt && (t.to.includes(name) || t.cc.includes(name))).sort((a, b) => (b.sentAt ?? '').localeCompare(a.sentAt ?? ''));
}

export function newTransmittal(planID: string, draft: Omit<Transmittal, 'id' | 'number' | 'createdBy' | 'createdAt' | 'receipts'>): Transmittal {
  return updateRecords(planID, (r) => {
    const t: Transmittal = { ...draft, id: uid(), number: Math.max(0, ...r.transmittals.map((x) => x.number)) + 1, createdBy: currentUserName(), createdAt: nowIso(), receipts: {} };
    r.transmittals.push(t);
    return t;
  });
}
/** A draft transmittal changed. A sent one is final: a correction is a new transmittal. */
export function updateTransmittal(planID: string, id: string, patch: Partial<Transmittal>): void {
  updateRecords(planID, (r) => {
    const t = r.transmittals.find((x) => x.id === id);
    if (t && !t.sentAt) Object.assign(t, patch);
  });
}
export function deleteDraftTransmittal(planID: string, id: string): void {
  updateRecords(planID, (r) => {
    r.transmittals = r.transmittals.filter((x) => x.id !== id || !!x.sentAt);
  });
}
/** Send: the enclosures lock to the versions sent, and receipt falls due in the plan's acknowledgment days. */
export function sendTransmittal(planID: string, id: string, ackDays = 2): void {
  updateRecords(planID, (r) => {
    const t = r.transmittals.find((x) => x.id === id);
    if (!t || t.sentAt) return;
    t.sentAt = nowIso();
    t.ackDue = addDays(t.sentAt, ackDays).slice(0, 10);
    t.enclosures = t.enclosures.map((e) => {
      const f = r.files.find((x) => x.id === e.fileId);
      return { fileId: e.fileId, version: f?.versions.at(-1)?.number ?? e.version, revision: f?.revision ?? e.revision };
    });
    for (const n of [...t.to, ...t.cc]) t.receipts[n] = {};
  });
}
/** Opened while signed in: logged, but not receipt. */
export function openTransmittal(planID: string, id: string, name = currentUserName()): void {
  updateRecords(planID, (r) => {
    const t = r.transmittals.find((x) => x.id === id);
    if (!t?.sentAt || !(t.to.includes(name) || t.cc.includes(name))) return;
    const rc = (t.receipts[name] ??= {});
    rc.openedAt ??= nowIso();
  });
}
/** Confirm Receipt, by the signed-in recipient: the only thing that counts as receipt. */
export function confirmReceipt(planID: string, id: string, name = currentUserName()): void {
  updateRecords(planID, (r) => {
    const t = r.transmittals.find((x) => x.id === id);
    if (!t?.sentAt || !t.to.includes(name)) return;
    const rc = (t.receipts[name] ??= {});
    rc.openedAt ??= nowIso();
    rc.confirmedAt = nowIso();
    delete rc.recordedBy;
  });
}
/** Receipt recorded on a recipient's behalf (no account, or a reply by email), marked as such, with the email. */
export function recordReceiptFor(planID: string, id: string, name: string, evidenceFileId?: string): void {
  updateRecords(planID, (r) => {
    const t = r.transmittals.find((x) => x.id === id);
    if (!t?.sentAt) return;
    t.receipts[name] = { ...t.receipts[name], confirmedAt: nowIso(), recordedBy: currentUserName(), evidenceFileId };
  });
}
export function remindRecipient(planID: string, id: string, name: string): void {
  updateRecords(planID, (r) => {
    const t = r.transmittals.find((x) => x.id === id);
    if (t?.receipts[name]) t.receipts[name].remindedAt = nowIso();
  });
}
export function recordResponse(planID: string, id: string, note: string, fileId?: string): void {
  updateRecords(planID, (r) => {
    const t = r.transmittals.find((x) => x.id === id);
    if (t?.sentAt) t.response = { at: nowIso(), by: currentUserName(), note, fileId };
  });
}
export function closeTransmittal(planID: string, id: string): void {
  updateRecords(planID, (r) => {
    const t = r.transmittals.find((x) => x.id === id);
    if (t?.sentAt) t.closedAt = nowIso();
  });
}

// ── Completion, obligations, comments ──────────────────────────────────────────────────────────────────────────────

/** Completion recorded: the element is Complete. */
export function recordCompletion(planID: string, c: Omit<Completion, 'recordedBy' | 'recordedAt'>): void {
  updateRecords(planID, (r) => {
    r.completions[c.elementId] = { ...c, recordedBy: currentUserName(), recordedAt: nowIso() };
    r.status[c.elementId] = { status: 'Complete', by: currentUserName(), at: nowIso() };
  });
}
/** Completion withdrawn: back to In Progress. */
export function clearCompletion(planID: string, elementId: string): void {
  updateRecords(planID, (r) => {
    delete r.completions[elementId];
    r.status[elementId] = { status: 'In Progress', by: currentUserName(), at: nowIso() };
  });
}
export function linkObligation(planID: string, elementId: string, obligationId: string): void {
  updateRecords(planID, (r) => {
    const list = (r.obligations[elementId] ??= []);
    if (!list.includes(obligationId)) list.push(obligationId);
  });
}
export function unlinkObligation(planID: string, elementId: string, obligationId: string): void {
  updateRecords(planID, (r) => {
    r.obligations[elementId] = (r.obligations[elementId] ?? []).filter((x) => x !== obligationId);
  });
}
/** Every element linked to an obligation: the obligation's side of the join. */
export function elementsServing(rec: PlanRecords, obligationId: string): string[] {
  return Object.entries(rec.obligations).filter(([, ids]) => ids.includes(obligationId)).map(([id]) => id);
}
export function addComment(planID: string, elementId: string, text: string): void {
  updateRecords(planID, (r) => {
    r.comments.push({ id: uid(), elementId, author: currentUserName(), at: nowIso(), text });
  });
}
export function editComment(planID: string, id: string, text: string): void {
  updateRecords(planID, (r) => {
    const c = r.comments.find((x) => x.id === id);
    if (c) Object.assign(c, { text, edited: true });
  });
}
export function deleteComment(planID: string, id: string): void {
  updateRecords(planID, (r) => {
    r.comments = r.comments.filter((x) => x.id !== id);
  });
}
export const commentsFor = (rec: PlanRecords, elementId: string) => rec.comments.filter((c) => c.elementId === elementId).sort((a, b) => a.at.localeCompare(b.at));

// ── Derived: status, progress, health ──────────────────────────────────────────────────────────────────────────────

interface Tree {
  byId: Map<string, PlanElementDto>;
  children: Map<string, PlanElementDto[]>;
}
function treeOf(plan: PlanDetailDto): Tree {
  const byId = new Map<string, PlanElementDto>();
  const children = new Map<string, PlanElementDto[]>();
  const walk = (els: readonly PlanElementDto[] | null | undefined) => {
    for (const e of els ?? []) {
      byId.set(e.PlanElementID ?? '', e);
      children.set(e.PlanElementID ?? '', [...(e.Children ?? [])]);
      walk(e.Children);
    }
  };
  walk(plan.Elements);
  return { byId, children };
}
const leavesUnder = (tree: Tree, id: string): PlanElementDto[] => {
  const kids = tree.children.get(id) ?? [];
  return kids.length ? kids.flatMap((k) => leavesUnder(tree, k.PlanElementID ?? '')) : [tree.byId.get(id)!].filter(Boolean);
};
const endOf = (e: PlanElementDto) => (e.SpanEndDate ?? e.EndDate ?? e.StartDate ?? null);
const startOf = (e: PlanElementDto) => (e.SpanStartDate ?? e.StartDate ?? null);

/** A leaf's status is its owner's; a parent's is derived: Complete when every leaf is, Blocked when any is, In Progress
 *  when any has started. */
export function statusOf(rec: PlanRecords, plan: PlanDetailDto, id: string): ElementStatus {
  const tree = treeOf(plan);
  const leaves = leavesUnder(tree, id);
  const own = (leafId: string) => (rec.completions[leafId] ? 'Complete' : (rec.status[leafId]?.status ?? 'Not Started'));
  if ((tree.children.get(id) ?? []).length === 0) return own(id);
  const all = leaves.map((l) => own(l.PlanElementID ?? ''));
  if (all.length && all.every((s) => s === 'Complete')) return 'Complete';
  if (all.some((s) => s === 'Blocked')) return 'Blocked';
  if (all.some((s) => s === 'In Progress' || s === 'Complete')) return 'In Progress';
  return 'Not Started';
}

export interface Progress {
  /** Earned weight over total, 0 to 1. */
  earned: number;
  /** Where it should be by today on Live's dates, 0 to 1. */
  planned: number;
  /** What it counts: deliverables and milestones, or (with none under it) its tasks. */
  basis: 'deliverables' | 'tasks';
  counted: number;
  done: number;
  byStatus: Record<ElementStatus, number>;
}
/** Percent complete by weighted deliverables (decision 4): each deliverable and milestone earns 0 until complete, then
 *  its whole weight; a parent's percent is the earned weight over the total. With no deliverables under it, its tasks
 *  count equally. Planned is the weight due by today. */
export function progressOf(rec: PlanRecords, plan: PlanDetailDto, id: string, isDeliverable: (id: string) => boolean, today = todayIso()): Progress {
  const tree = treeOf(plan);
  const leaves = leavesUnder(tree, id);
  const marked = leaves.filter((l) => l.IsMilestone || isDeliverable(l.PlanElementID ?? ''));
  const counted = marked.length ? marked : leaves;
  const weight = (e: PlanElementDto) => (marked.length ? (rec.weights[e.PlanElementID ?? ''] ?? 1) : 1);
  const total = counted.reduce((s, e) => s + weight(e), 0) || 1;
  const done = counted.filter((e) => statusOf(rec, plan, e.PlanElementID ?? '') === 'Complete');
  const due = counted.filter((e) => (endOf(e) ?? '9999') <= today);
  const byStatus: Record<ElementStatus, number> = { 'Not Started': 0, 'In Progress': 0, Blocked: 0, Complete: 0 };
  for (const l of leaves) byStatus[statusOf(rec, plan, l.PlanElementID ?? '')]++;
  return {
    earned: done.reduce((s, e) => s + weight(e), 0) / total,
    planned: due.reduce((s, e) => s + weight(e), 0) / total,
    basis: marked.length ? 'deliverables' : 'tasks',
    counted: counted.length,
    done: done.length,
    byStatus,
  };
}

export interface HealthReading {
  health: Health;
  /** Set when an owner chose it: their note, who and when; stale after 30 days (Update Missing). */
  override?: HealthOverride;
  stale?: boolean;
  /** Why, in a phrase: "Due in 9 days, not started", "12% behind plan". */
  why: string;
}
/** Health, derived and overridable: Complete, Blocked, Late (past its end), At Risk (behind plan by more than 10
 *  points, or due within 14 days and not started), Upcoming (not yet begun), On Track. */
export function healthOf(rec: PlanRecords, plan: PlanDetailDto, id: string, isDeliverable: (id: string) => boolean, today = todayIso()): HealthReading {
  const tree = treeOf(plan);
  const el = tree.byId.get(id);
  const status = statusOf(rec, plan, id);
  const override = rec.health[id];
  const stale = !!override && Date.parse(today) - Date.parse(override.at) > 30 * 86_400_000;
  const derived = ((): Omit<HealthReading, 'override' | 'stale'> => {
    if (status === 'Complete') return { health: 'Complete', why: 'Complete' };
    if (status === 'Blocked') return { health: 'Blocked', why: 'Blocked' };
    const end = el ? endOf(el) : null;
    const start = el ? startOf(el) : null;
    if (end && end < today) return { health: 'Late', why: `Ended ${end}, not complete` };
    if ((tree.children.get(id) ?? []).length) {
      const p = progressOf(rec, plan, id, isDeliverable, today);
      const behind = Math.round((p.planned - p.earned) * 100);
      if (behind > 10) return { health: 'At Risk', why: `${behind} points behind plan` };
    } else if (end && status === 'Not Started') {
      const days = Math.round((Date.parse(end) - Date.parse(today)) / 86_400_000);
      if (days <= 14) return { health: 'At Risk', why: `Due in ${days} days, not started` };
    }
    if (start && start > today && status === 'Not Started') return { health: 'Upcoming', why: `Starts ${start}` };
    return { health: 'On Track', why: 'On plan' };
  })();
  return override ? { health: override.health, override, stale, why: override.note || derived.why } : { ...derived };
}

// ── The sample's records ───────────────────────────────────────────────────────────────────────────────────────────

/** The Fisheries plan's records, written against its elements by name: two finished memos with their sends, receipts
 *  and completions; the baseline study plan out for comment with one receipt outstanding; the permits' agency
 *  correspondence; comments; obligation links. Dates are absolute (the plan's are). */
export function seedPlanRecords(planID: string, plan: PlanDetailDto): void {
  const tree = treeOf(plan);
  const byName = (name: string) => [...tree.byId.values()].find((e) => e.PlanElementName?.startsWith(name))?.PlanElementID ?? '';
  const scoping = byName('Near-field study scoping memo');
  const feasibility = byName('Tag technology feasibility memo');
  const baseline = byName('Detailed baseline study plan');
  const permits = byName('Receiver-site encroachment');
  const program = byName('Fisheries Evaluation Studies');
  const migration = byName('Migration & Survival Study');
  const predation = byName('Predation Study');
  const nearField = byName('Near-field intake behavior');
  const at = (d: string, time = '10:12') => new Date(`${d}T${time}:00-07:00`).toISOString();

  const rec = empty(planID);
  let n = 0;
  const file = (name: string, by: string, day: string, revision?: string, opts: { kind?: 'file' | 'link'; url?: string; size?: number; versions?: number } = {}): PlanFile => {
    const f: PlanFile = {
      id: `f${++n}`,
      name,
      kind: opts.kind ?? 'file',
      url: opts.url,
      revision,
      versions: opts.kind === 'link' ? [] : Array.from({ length: opts.versions ?? 1 }, (_, i) => ({ number: i + 1, at: at(day, `0${9 + i}:30`.slice(-5)), by, size: opts.size ?? 240_000 + n * 9_131 })),
      addedBy: by,
      addedAt: at(day),
    };
    rec.files.push(f);
    return f;
  };
  const link = (f: PlanFile, elementId: string, type: string, date: string, note: string, by: string, correspondence?: Correspondence) =>
    elementId && rec.links.push({ id: `l${rec.links.length + 1}`, fileId: f.id, elementId, type, date, note, correspondence, addedBy: by, addedAt: at(date, '11:40') });

  // Program and studies.
  const itp = file('ITP Condition of Approval 10.19 excerpt.pdf', 'Jamie Quishenberry', '2026-07-01', 'Final');
  link(itp, program, 'Permit', '2026-07-01', 'The condition the fish studies answer', 'Jamie Quishenberry');
  const framework = file('Migration study framework.pptx', 'Alex Rivera', '2026-08-20', 'Final');
  link(framework, migration, 'Presentation', '2026-08-20', 'Shown at the August agency workshop', 'Alex Rivera');
  const workshop = file('Agency workshop summary, 2026-08-20.pdf', 'Priya Natarajan', '2026-08-24', 'Final');
  link(workshop, migration, 'Correspondence', '2026-08-24', 'CDFW and NMFS agreed on the two-study structure', 'Priya Natarajan', { agency: 'CDFW', direction: 'Sent', letterDate: '2026-08-24', agreement: 'Two studies: near-field and far-field, one receiver network' });
  link(workshop, predation, 'Correspondence', '2026-08-24', 'Predation scope set at the same workshop', 'Priya Natarajan', { agency: 'CDFW', direction: 'Sent', letterDate: '2026-08-24', agreement: 'Predation study starts after baseline surveys' });

  // The scoping memo: draft out for comment, comments back, final accepted.
  const smDraft = file('Near-field scoping memo, draft.docx', 'Alex Rivera', '2026-08-12', 'Draft 1', { versions: 2 });
  const smFinal = file('Near-field scoping memo, final.pdf', 'Alex Rivera', '2026-09-24', 'Final');
  const smComments = file('CDFW comments on scoping memo.pdf', 'Alex Rivera', '2026-09-11', 'Final');
  const smAccept = file('CDFW acceptance letter, scoping memo.pdf', 'Alex Rivera', '2026-10-09', 'Final');
  const detections = file('2025 Delta smolt detection summary.xlsx', 'Sam Okafor', '2026-07-22', 'Final', { size: 1_840_000 });
  const memoCover1 = file('T-001 cover letter.pdf', 'Alex Rivera', '2026-08-14', 'Final');
  const memoCover3 = file('T-003 cover letter.pdf', 'Alex Rivera', '2026-09-25', 'Final');
  link(smDraft, scoping, 'Memo', '2026-08-12', 'Sent to CDFW for comment', 'Alex Rivera');
  link(smComments, scoping, 'Correspondence', '2026-09-11', 'Eleven comments; two on receiver spacing', 'Alex Rivera', { agency: 'CDFW', direction: 'Received', letterDate: '2026-09-10', agreement: 'CDFW agreed to the three-site receiver layout' });
  link(smFinal, scoping, 'Memo', '2026-09-24', 'Final, comments addressed', 'Alex Rivera');
  link(smAccept, scoping, 'Correspondence', '2026-10-09', 'Acceptance', 'Alex Rivera', { agency: 'CDFW', direction: 'Received', letterDate: '2026-10-08', agreement: 'Scoping memo accepted; baseline plan may proceed' });
  link(detections, scoping, 'Data', '2025-12-15', 'Sets the expected detection rates', 'Sam Okafor');
  link(memoCover1, scoping, 'Correspondence', '2026-08-14', 'Cover letter for T-001', 'Alex Rivera', { agency: 'CDFW', direction: 'Sent', letterDate: '2026-08-14' });

  // The feasibility memo: reviewed by NMFS and CDFW, accepted with comments.
  const tfMemo = file('Tag technology feasibility memo.pdf', 'Sam Okafor', '2026-09-29', 'Final');
  const tfEmail = file('NMFS email on JSATS tag size.eml', 'Sam Okafor', '2026-09-04', 'Final', { size: 38_000 });
  const tfComments = file('NMFS and CDFW comments on feasibility memo.pdf', 'Sam Okafor', '2026-10-20', 'Final');
  const tfCover = file('T-002 cover letter.pdf', 'Sam Okafor', '2026-09-30', 'Final');
  const tfFolder = file('SharePoint: Tag technology working folder', 'Sam Okafor', '2026-07-15', undefined, { kind: 'link', url: 'https://esassoc.sharepoint.com/sites/DCP-Fish/Tag-Technology' });
  link(tfMemo, feasibility, 'Memo', '2026-09-29', 'Submitted for review', 'Sam Okafor');
  link(tfEmail, feasibility, 'Correspondence', '2026-09-04', 'Tag size for small fish', 'Sam Okafor', { agency: 'NMFS', direction: 'Received', letterDate: '2026-09-03', agreement: 'NMFS accepts 0.3 g JSATS tags for fish 80 mm and longer' });
  link(tfComments, feasibility, 'Correspondence', '2026-10-20', 'Accepted with three comments', 'Sam Okafor', { agency: 'NMFS', direction: 'Received', letterDate: '2026-10-19', agreement: 'Accepted with comments; comments carry into the baseline plan' });
  link(tfFolder, feasibility, 'Data', '2026-07-15', 'Vendor quotes and bench tests', 'Sam Okafor');
  link(detections, feasibility, 'Data', '2025-12-15', 'Detection range by tag type', 'Sam Okafor');

  // The baseline study plan: two drafts, the second out for comment now.
  const bpOutline = file('Baseline study plan outline.docx', 'Alex Rivera', '2026-10-02', 'Draft 1');
  const bpDraft = file('Baseline study plan, draft 2.docx', 'Alex Rivera', '2026-10-22', 'Draft 2', { versions: 3, size: 1_120_000 });
  const bpCover = file('T-004 cover letter.pdf', 'Alex Rivera', '2026-10-23', 'Final');
  const bpFolder = file('SharePoint: Baseline study plan working folder', 'Alex Rivera', '2026-07-20', undefined, { kind: 'link', url: 'https://esassoc.sharepoint.com/sites/DCP-Fish/Baseline-Plan' });
  link(bpOutline, baseline, 'Science Plan', '2026-10-02', 'Outline agreed internally', 'Alex Rivera');
  link(bpDraft, baseline, 'Science Plan', '2026-10-22', 'Out for agency comment (T-004)', 'Alex Rivera');
  link(bpFolder, baseline, 'Data', '2026-07-20', 'Working files and field forms', 'Alex Rivera');
  link(detections, baseline, 'Data', '2025-12-15', 'Baseline for the receiver array design', 'Sam Okafor');
  link(smFinal, baseline, 'Memo', '2026-09-24', 'The scope this plan builds on', 'Alex Rivera');

  // The permits: agency correspondence, ongoing.
  const usace = file('USACE pre-application meeting request.pdf', 'Sam Okafor', '2026-10-06', 'Final');
  const cslc = file('CSLC lease inquiry response.pdf', 'Sam Okafor', '2026-10-21', 'Final');
  link(usace, permits, 'Correspondence', '2026-10-06', 'Asked for a November meeting', 'Sam Okafor', { agency: 'USACE', direction: 'Sent', letterDate: '2026-10-06' });
  link(cslc, permits, 'Correspondence', '2026-10-21', 'Two of five receiver sites need a lease', 'Sam Okafor', { agency: 'CSLC', direction: 'Received', letterDate: '2026-10-20', agreement: 'Sites 3 and 4 fall under a general lease; no application needed' });

  // Transmittals.
  const rcpt = (opened: string, confirmed?: string) => ({ openedAt: at(opened, '09:20'), confirmedAt: confirmed ? at(confirmed, '09:24') : undefined });
  rec.transmittals.push(
    { id: 't1', number: 1, elementId: scoping, subject: 'Near-field scoping memo, draft', purpose: 'For Comment', from: 'Alex Rivera', to: ['Jordan Reyes', 'Casey Lin'], cc: ['Morgan Ellis'], memoFileId: memoCover1.id, enclosures: [{ fileId: smDraft.id, version: 2, revision: 'Draft 1' }], responseDue: '2026-09-14', ackDue: '2026-08-16', createdBy: 'Alex Rivera', createdAt: at('2026-08-13'), sentAt: at('2026-08-14', '15:05'), receipts: { 'Jordan Reyes': rcpt('2026-08-14', '2026-08-14'), 'Casey Lin': rcpt('2026-08-15', '2026-08-15'), 'Morgan Ellis': { openedAt: at('2026-08-17') } }, response: { at: at('2026-09-11'), by: 'Alex Rivera', note: 'CDFW comments received; eleven comments.', fileId: smComments.id } },
    { id: 't2', number: 2, elementId: feasibility, subject: 'Tag technology feasibility memo', purpose: 'For Review', from: 'Sam Okafor', to: ['Rowan Hale', 'Jordan Reyes'], cc: ['Morgan Ellis'], memoFileId: tfCover.id, enclosures: [{ fileId: tfMemo.id, version: 1, revision: 'Final' }], responseDue: '2026-10-30', ackDue: '2026-10-02', createdBy: 'Sam Okafor', createdAt: at('2026-09-29'), sentAt: at('2026-09-30', '13:40'), receipts: { 'Rowan Hale': rcpt('2026-10-01', '2026-10-01'), 'Jordan Reyes': rcpt('2026-09-30', '2026-09-30'), 'Morgan Ellis': {} }, response: { at: at('2026-10-20'), by: 'Sam Okafor', note: 'Accepted with three comments.', fileId: tfComments.id }, closedAt: at('2026-10-21') },
    { id: 't3', number: 3, elementId: scoping, subject: 'Near-field scoping memo, final', purpose: 'Final', from: 'Alex Rivera', to: ['Jordan Reyes', 'Casey Lin'], cc: ['Morgan Ellis'], memoFileId: memoCover3.id, enclosures: [{ fileId: smFinal.id, version: 1, revision: 'Final' }], ackDue: '2026-09-27', createdBy: 'Alex Rivera', createdAt: at('2026-09-24'), sentAt: at('2026-09-25', '10:02'), receipts: { 'Jordan Reyes': rcpt('2026-09-25', '2026-09-25'), 'Casey Lin': { ...rcpt('2026-09-29'), confirmedAt: at('2026-09-29', '16:10'), recordedBy: 'Alex Rivera' }, 'Morgan Ellis': { openedAt: at('2026-09-26') } }, response: { at: at('2026-10-09'), by: 'Alex Rivera', note: 'Accepted by CDFW.', fileId: smAccept.id }, closedAt: at('2026-10-09', '14:00') },
    { id: 't4', number: 4, elementId: baseline, subject: 'Baseline study plan, draft 2', purpose: 'For Comment', from: 'Alex Rivera', to: ['Jordan Reyes', 'Casey Lin', 'Rowan Hale'], cc: ['Morgan Ellis'], memoFileId: bpCover.id, enclosures: [{ fileId: bpDraft.id, version: 3, revision: 'Draft 2' }], responseDue: '2026-11-23', ackDue: '2026-10-25', createdBy: 'Alex Rivera', createdAt: at('2026-10-22'), sentAt: at('2026-10-23', '11:30'), receipts: { 'Jordan Reyes': rcpt('2026-10-23', '2026-10-23'), 'Casey Lin': rcpt('2026-10-26', '2026-10-26'), 'Rowan Hale': { remindedAt: at('2026-10-27', '08:00') }, 'Morgan Ellis': {} } },
    { id: 't5', number: 5, elementId: permits, subject: 'Encroachment permit application package', purpose: 'For Information', from: 'Sam Okafor', to: ['Morgan Ellis'], cc: [], enclosures: [{ fileId: cslc.id, version: 1, revision: 'Final' }], responseDue: undefined, createdBy: 'Sam Okafor', createdAt: at('2026-10-27', '16:00'), receipts: {} }
  );
  for (const f of [memoCover1, memoCover3, tfCover, bpCover]) void f;
  // Link the two later cover letters onto their elements too, so the memo is a document there.
  link(memoCover3, scoping, 'Correspondence', '2026-09-25', 'Cover letter for T-003', 'Alex Rivera', { agency: 'CDFW', direction: 'Sent', letterDate: '2026-09-25' });
  link(tfCover, feasibility, 'Correspondence', '2026-09-30', 'Cover letter for T-002', 'Sam Okafor', { agency: 'NMFS', direction: 'Sent', letterDate: '2026-09-30' });
  link(bpCover, baseline, 'Correspondence', '2026-10-23', 'Cover letter for T-004', 'Alex Rivera', { agency: 'CDFW', direction: 'Sent', letterDate: '2026-10-23' });

  // Completions and status.
  rec.completions[scoping] = { elementId: scoping, result: 'Accepted', completedOn: '2026-10-09', where: { fileId: smFinal.id }, acceptedBy: 'Jordan Reyes', note: 'CDFW acceptance letter of 2026-10-08.', recordedBy: 'Alex Rivera', recordedAt: at('2026-10-09', '14:05') };
  rec.completions[feasibility] = { elementId: feasibility, result: 'Accepted With Comments', completedOn: '2026-10-20', where: { url: 'https://esassoc.sharepoint.com/sites/DCP-Fish/Tag-Technology/Final', label: 'SharePoint: Tag technology final' }, acceptedBy: 'Rowan Hale', note: 'Three comments carry into the baseline study plan.', recordedBy: 'Sam Okafor', recordedAt: at('2026-10-21') };
  const status = (id: string, s: ElementStatus, by: string, day: string) => id && (rec.status[id] = { status: s, by, at: at(day) });
  status(scoping, 'Complete', 'Alex Rivera', '2026-10-09');
  status(feasibility, 'Complete', 'Sam Okafor', '2026-10-21');
  status(baseline, 'In Progress', 'Alex Rivera', '2026-09-28');
  status(permits, 'In Progress', 'Sam Okafor', '2026-10-01');
  if (permits) rec.health[permits] = { health: 'At Risk', note: 'USACE pre-application meeting slipped to December; two sites may need individual permits.', by: 'Sam Okafor', at: at('2026-10-22') };

  // Obligations (the DCP registry): the fish studies serve covered-fish monitoring and the survival criteria.
  for (const id of [program, migration, predation]) if (id) rec.obligations[id] = ['3-032'];
  if (migration) rec.obligations[migration].push('1-011');
  if (nearField) rec.obligations[nearField] = ['1-011'];
  if (baseline) rec.obligations[baseline] = ['3-032'];

  // Weights: the baseline study plan counts double in its parents' progress.
  if (baseline) rec.weights[baseline] = 2;

  // Comments.
  const comment = (elementId: string, author: string, day: string, time: string, text: string) => elementId && rec.comments.push({ id: `c${rec.comments.length + 1}`, elementId, author, at: at(day, time), text });
  comment(baseline, 'Alex Rivera', '2026-10-22', '16:40', 'Draft 2 folds in the NMFS comments on tag size. Section 4 is still thin on receiver retrieval.');
  comment(baseline, 'Priya Natarajan', '2026-10-23', '09:05', 'Sent as T-004. I nudged Rowan on the 27th; NMFS is short a reviewer this month.');
  comment(baseline, 'Jamie Quishenberry', '2026-10-27', '14:22', 'If NMFS needs more time, the response date can slip a week without moving the procurement start.');
  comment(permits, 'Sam Okafor', '2026-10-22', '10:30', 'USACE moved our pre-application meeting to December. Flagged At Risk until it is on the calendar.');
  comment(scoping, 'Alex Rivera', '2026-10-09', '14:10', 'Accepted. Closing this out; the final is in Documents.');

  updateRecords(planID, (r) => Object.assign(r, rec));
}
