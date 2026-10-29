// The Activity module's runtime (2026-10-28): revisions that touched the element and records kept on it, as one
// timeline. See ./BcnElementActivity.astro; ./element-module.ts for the contract.

import { TRANSMITTAL_HREF, type ElementContext } from '../../lib/planning/element-context';
import { attributesAt, flattenPlan, signedShift, type ElementAttributes } from '../../lib/planning/plan-repo';
import { documentsFor, transmittalNumber, transmittalsFor, fileById } from '../../lib/planning/plan-records';
import { renderChangeLog, type ChangeLogDay, type ChangeLogEvent } from './change-log';
import { setModuleCount, type ElementModuleSetup } from './element-module';

const SHOWN = 10;
const day = (iso: string | null | undefined) => (iso ? new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : 'None');
const longDay = (iso: string) => new Date(iso).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
const clock = (iso: string) => new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
const localDay = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

type Dated = ChangeLogEvent & { at: string };

/** What a published revision did to one element: its dates, its owners, its flag and its fields. */
function revisionEvents(ctx: ElementContext, id: string): Dated[] {
  const out: Dated[] = [];
  const versions = ctx.repo.versions;
  const fieldLabel = new Map(ctx.config.fields.map((f) => [f.id, f.label]));
  for (let i = 0; i < versions.length; i++) {
    const v = versions[i];
    const now = flattenPlan(v.plan.Elements).find((x) => x.element.PlanElementID === id)?.element;
    const label = `Revision ${v.number}`;
    const base = { by: `${v.author}, ${clock(v.at)}`, at: v.at, emphasis: label };
    if (i === 0) {
      if (now) out.push({ ...base, text: 'In the plan from' });
      continue;
    }
    const prev = flattenPlan(versions[i - 1].plan.Elements).find((x) => x.element.PlanElementID === id)?.element;
    if (now && !prev) out.push({ ...base, text: 'Added in' });
    if (now && prev) {
      const s0 = prev.StartDate ?? null;
      const e0 = prev.EndDate ?? null;
      const s1 = now.StartDate ?? null;
      const e1 = now.EndDate ?? null;
      if (s0 !== s1 || e0 !== e1) {
        const shift = s0 !== s1 && s0 && s1 ? Math.round((Date.parse(s1) - Date.parse(s0)) / 86_400_000) : e0 && e1 ? Math.round((Date.parse(e1) - Date.parse(e0)) / 86_400_000) : 0;
        out.push({ ...base, text: `${s0 === s1 ? 'End moved' : 'Moved'} ${shift ? signedShift(shift) : ''} in`.replace(/\s+/g, ' '), change: { from: now.IsMilestone ? day(e0) : `${day(s0)} to ${day(e0)}`, to: now.IsMilestone ? day(e1) : `${day(s1)} to ${day(e1)}` } });
      }
      if (prev.PlanElementName !== now.PlanElementName) out.push({ ...base, text: 'Renamed in', change: { from: prev.PlanElementName ?? '', to: now.PlanElementName ?? '' } });
    }
    const a0: ElementAttributes = attributesAt(ctx.repo, versions[i - 1].number)[id] ?? {};
    const a1: ElementAttributes = attributesAt(ctx.repo, v.number)[id] ?? {};
    if (JSON.stringify(a0.owners ?? []) !== JSON.stringify(a1.owners ?? [])) out.push({ ...base, text: 'Owners changed in', change: { from: (a0.owners ?? []).join(', ') || 'None', to: (a1.owners ?? []).join(', ') || 'None' } });
    if (!!a0.deliverable !== !!a1.deliverable) out.push({ ...base, text: a1.deliverable ? 'Made a deliverable in' : 'No longer a deliverable in' });
    for (const key of new Set([...Object.keys(a0.values ?? {}), ...Object.keys(a1.values ?? {})])) {
      const was = a0.values?.[key];
      const is = a1.values?.[key];
      if (JSON.stringify(was ?? null) === JSON.stringify(is ?? null)) continue;
      const fmt = (x: unknown) => (x === null || x === undefined || x === '' ? 'Not set' : Array.isArray(x) ? x.join(', ') : String(x));
      out.push({ ...base, text: `${fieldLabel.get(key) ?? key} changed in`, change: { from: fmt(was), to: fmt(is) } });
    }
  }
  return out;
}

/** What was recorded on it: documents, sends, receipts, responses, completion, status and health. */
function recordEvents(ctx: ElementContext, id: string): Dated[] {
  const out: Dated[] = [];
  const r = ctx.records;
  const ev = (at: string, by: string, text: string, emphasis?: string, href?: string, extra: Partial<ChangeLogEvent> = {}): Dated => ({ at, by: `${by}, ${clock(at)}`, text, emphasis, href, ...extra });
  for (const d of documentsFor(r, id)) out.push(ev(d.link.addedAt, d.link.addedBy, `Added ${d.link.type === 'Correspondence' ? 'correspondence' : 'a document'}`, d.file.name));
  for (const t of transmittalsFor(r, id)) {
    const href = TRANSMITTAL_HREF(ctx.planID, t.id);
    const num = transmittalNumber(t);
    if (!t.sentAt) {
      out.push(ev(t.createdAt, t.createdBy, 'Drafted', num, href));
      continue;
    }
    const replaced = t.supersedes ? r.transmittals.find((x) => x.id === t.supersedes) : undefined;
    out.push(ev(t.sentAt, t.from, replaced ? `Resubmitted ${t.purpose.toLowerCase()} to ${t.to.join(', ')}, superseding ${transmittalNumber(replaced)}:` : `Sent ${t.purpose.toLowerCase()} to ${t.to.join(', ')}:`, num, href));
    for (const [name, rec] of Object.entries(t.receipts)) {
      if (rec.confirmedAt) out.push(ev(rec.confirmedAt, rec.recordedBy ?? name, rec.recordedBy ? `Recorded ${name}'s receipt of` : 'Confirmed receipt of', num, href));
      if (rec.remindedAt) out.push(ev(rec.remindedAt, t.from, `Reminded ${name} about`, num, href));
    }
    if (t.response) out.push(ev(t.response.at, t.response.by, t.response.outcome && t.response.outcome !== 'Comments Only' ? `Recorded ${t.response.outcome} on` : 'Recorded the response to', num, href));
    // A superseded one closed when its resubmittal went: that send is the event.
    if (t.closedAt && !t.supersededBy) out.push(ev(t.closedAt, t.from, 'Closed', num, href));
  }
  const c = r.completions[id];
  if (c) {
    const where = c.where.fileId ? fileById(r, c.where.fileId)?.name : c.where.label;
    out.push(ev(c.recordedAt, c.recordedBy, `Recorded completion: ${c.result}${where ? ', in' : ''}`, where ?? undefined));
  }
  const s = r.status[id];
  if (s && !c) out.push(ev(s.at, s.by, `Set status to ${s.status}`));
  const h = r.health[id];
  if (h) out.push(ev(h.at, h.by, `Set health to ${h.health}. ${h.note}`));
  return out;
}

export const setupActivityModule: ElementModuleSetup = (root) => {
  const log = root.querySelector<HTMLElement>('[data-eact-log]')!;
  const more = root.querySelector<HTMLElement>('[data-eact-more]')!;
  let all = false;
  let last: ElementContext | null = null;
  more.addEventListener('click', () => {
    all = !all;
    if (last) draw(last);
  });

  function draw(ctx: ElementContext): void {
    last = ctx;
    const id = ctx.element.PlanElementID ?? '';
    const events = [...revisionEvents(ctx, id), ...(ctx.inLive ? recordEvents(ctx, id) : [])].sort((a, b) => b.at.localeCompare(a.at));
    const shown = all ? events : events.slice(0, SHOWN);
    const days: ChangeLogDay[] = [];
    for (const e of shown) {
      const key = localDay(e.at);
      let d = days.at(-1);
      if (!d || d.datetime !== key) days.push((d = { date: longDay(e.at), datetime: key, events: [] }));
      const { at: _at, ...event } = e;
      d.events.push(event);
    }
    log.innerHTML = renderChangeLog(days);
    root.querySelector<HTMLElement>('[data-eact-empty]')!.hidden = events.length > 0;
    more.hidden = events.length <= SHOWN;
    const label = more.querySelector('button');
    if (label) label.lastChild!.textContent = all ? 'Show Fewer' : `Show All ${events.length}`;
    setModuleCount(root, null);
  }

  return { draw };
};
