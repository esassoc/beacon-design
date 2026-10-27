// <BcnPlanRepoIndex>'s runtime: seeds the sample history on a first visit, then draws one row per plan from
import { withBase } from '../../lib/base';
// plan-repo.ts — the latest version as a commit line, open drafts as child rows, the counts and a schedule miniature.

import { planIcon } from '../../lib/planning/icons';
import { currentUserName, ensureSeeded, listPlanSummaries, shortDate, timeAgo, type PlanSummary } from '../../lib/planning/plan-repo';
import { dayNumber } from '../../lib/planning/gantt-geometry';
import { planAvatar, planAvatarStack } from './plan-people';

type ToggleEl = HTMLElement & { options: { label: string; value: string }[]; value: string };
type FieldEl = HTMLElement & { value: string };

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Has drafts', value: 'drafts' },
  { label: 'Watching', value: 'watching' },
];

export const PLAN_HREF = (planID: string, extra = '') => withBase(`/prototypes/plans-repo/plan/?id=${encodeURIComponent(planID)}${extra}`);
export const REVISIONS_HREF = (planID: string, extra = '') => withBase(`/prototypes/plans-repo/revisions/?id=${encodeURIComponent(planID)}${extra}`);

export function fillGlyphs(root: ParentNode): void {
  root.querySelectorAll<HTMLElement>('[data-glyph]').forEach((el) => {
    if (!el.firstChild) el.innerHTML = planIcon(el.dataset.glyph!, 14);
  });
}

/** A miniature of the plan: each parent's span as a thin bar, the years ticked, today in amber. */
function miniature(summary: PlanSummary): string {
  const W = 288;
  const ROW = 7;
  const TOP = 14;
  const rows = summary.overview.slice(0, 9);
  const H = TOP + rows.length * ROW + 6;
  const s = dayNumber(summary.start);
  const e = dayNumber(summary.end);
  if (s === null || e === null || e <= s) return '';
  const x = (iso: string) => ((dayNumber(iso)! - s) / (e - s)) * W;
  const parts: string[] = [];
  const y0 = new Date(summary.start!).getUTCFullYear() + 1;
  const y1 = new Date(summary.end!).getUTCFullYear();
  for (let y = y0; y <= y1; y++) {
    const gx = x(`${y}-01-01`);
    parts.push(`<line class="mini-grid" x1="${gx}" x2="${gx}" y1="${TOP - 3}" y2="${H}"/>`);
    if (gx < W - 18) parts.push(`<text class="mini-axis" x="${gx + 2}" y="9">'${String(y).slice(2)}</text>`);
  }
  rows.forEach((row, i) => {
    const bx = x(row.start);
    parts.push(`<rect class="mini-bar mini-bar--${Math.min(row.depth, 2)}" x="${bx}" y="${TOP + i * ROW}" width="${Math.max(2, x(row.end) - bx)}" height="${ROW - 3}" rx="1.5"/>`);
  });
  const today = new Date().toISOString().slice(0, 10);
  if (today > summary.start! && today < summary.end!) parts.push(`<line class="mini-today" x1="${x(today)}" x2="${x(today)}" y1="${TOP - 4}" y2="${H}"/>`);
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Schedule, ${shortDate(summary.start!)} to ${shortDate(summary.end!)}">${parts.join('')}</svg>`;
}

const year = (iso: string | null) => (iso ? new Date(iso).getUTCFullYear() : '');

export async function setupPlanRepoIndex(root: HTMLElement): Promise<void> {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  const rowsEl = q<HTMLUListElement>('[data-pri-rows]');
  const loading = q<HTMLElement>('[data-pri-loading]');
  const find = q<FieldEl>('[data-pri-find]');
  const filter = q<ToggleEl>('[data-pri-filter]');
  const count = q<HTMLElement>('[data-pri-count]');
  const none = q<HTMLElement>('[data-pri-none]');
  const rowTpl = q<HTMLTemplateElement>('[data-pri-row]');
  const draftTpl = q<HTMLTemplateElement>('[data-pri-draft]');

  void customElements.whenDefined('esa-button-toggle').then(() => {
    filter.options = FILTERS;
    filter.value = 'all';
  });

  await ensureSeeded((text) => (q<HTMLElement>('[data-pri-progress]').textContent = text));
  const summaries = await listPlanSummaries();
  const me = currentUserName();
  loading.hidden = true;
  rowsEl.hidden = false;

  function draw(): void {
    const text = (find.value ?? '').trim().toLowerCase();
    const mode = filter.value || 'all';
    const shown = summaries.filter((s) => {
      if (text && !`${s.name} ${s.description}`.toLowerCase().includes(text)) return false;
      if (mode === 'drafts' && !s.repo.drafts.length) return false;
      if (mode === 'watching' && !s.repo.watchers.includes(me)) return false;
      return true;
    });
    count.textContent = `${shown.length} ${shown.length === 1 ? 'plan' : 'plans'}`;
    none.hidden = shown.length > 0;
    rowsEl.replaceChildren(...shown.map(row));
  }

  function row(s: PlanSummary): HTMLElement {
    const li = rowTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const r = <T extends Element>(sel: string) => li.querySelector<T>(sel)!;
    const href = PLAN_HREF(s.repo.planID);
    const name = r<HTMLAnchorElement>('[data-pri-name]');
    name.textContent = s.name;
    name.href = href;
    r<HTMLAnchorElement>('[data-pri-mini]').href = href;
    r<HTMLElement>('[data-pri-desc]').textContent = s.description;
    const labelled = [...s.repo.versions].reverse().find((v) => v.label);
    if (labelled) {
      r<HTMLElement>('[data-pri-label]').hidden = false;
      r<HTMLElement>('[data-pri-label-text]').textContent = `${labelled.label} · v${labelled.number}`;
    }
    r<HTMLElement>('[data-pri-avatar]').replaceWith(planAvatar(s.latest.author, 'xs'));
    r<HTMLElement>('[data-pri-author]').textContent = s.latest.author;
    r<HTMLElement>('[data-pri-message]').textContent = s.latest.message;
    const when = r<HTMLElement>('[data-pri-when]');
    when.textContent = `v${s.latest.number} · ${timeAgo(s.latest.at)}`;
    when.title = new Date(s.latest.at).toLocaleString();
    r<HTMLElement>('[data-pri-version]').textContent = `v${s.latest.number}`;
    const history = r<HTMLAnchorElement>('[data-pri-history]');
    history.href = REVISIONS_HREF(s.repo.planID);
    r<HTMLElement>('[data-pri-versions]').textContent = `${s.repo.versions.length} ${s.repo.versions.length === 1 ? 'version' : 'versions'}`;
    r<HTMLElement>('[data-pri-watch]').textContent = String(s.repo.watchers.length);
    r<HTMLElement>('[data-pri-stars]').textContent = String(s.repo.starredBy.length);
    r<HTMLElement>('[data-pri-span]').textContent = `${year(s.start)}–${year(s.end)} · ${s.elementCount} items`;
    r<HTMLElement>('[data-pri-people]').replaceWith(planAvatarStack(s.contributors, 5));
    const drafts = r<HTMLUListElement>('[data-pri-drafts]');
    // Yours first, then everyone else's, newest first.
    const ordered = [...s.repo.drafts].sort((a, b) => (a.owner === me ? -1 : b.owner === me ? 1 : 0) || (b.revisions.at(-1)?.at ?? b.createdAt).localeCompare(a.revisions.at(-1)?.at ?? a.createdAt));
    for (const d of ordered) {
      const item = draftTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
      item.querySelector('[data-pri-draft-avatar]')!.replaceWith(planAvatar(d.owner, 'xs'));
      const link = item.querySelector<HTMLAnchorElement>('[data-pri-draft-name]')!;
      link.textContent = d.owner === me ? `${d.name} (yours)` : d.name;
      link.href = PLAN_HREF(s.repo.planID, `&draft=${d.id}`);
      const behind = s.latest.number - d.baseVersion;
      const n = d.revisions.length;
      item.querySelector('[data-pri-draft-meta]')!.textContent =
        `${d.owner.split(' ')[0]} · ${n} ${n === 1 ? 'edit' : 'edits'} · ${timeAgo(d.revisions.at(-1)?.at ?? d.createdAt)}${behind > 0 ? ` · ${behind} ${behind === 1 ? 'version' : 'versions'} behind Live` : ''}`;
      drafts.append(item);
    }
    const mini = r<HTMLElement>('[data-pri-mini]');
    mini.innerHTML = miniature(s);
    fillGlyphs(li);
    return li;
  }

  find.addEventListener('input', draw);
  filter.addEventListener('change', draw);
  draw();
}
