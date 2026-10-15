// Controller for <BcnSw3Attributes>. setupX shape: show(code, selected) repaints the rail
// from sw3-store for one commitment; the host decides what hovering and selecting do.

import { requirementsOf, requirementRef, flagsOf, payload, mergeProposed, mergeState, acceptMerge, dismissMerge, resolveEntity, LOW_CONFIDENCE } from './sw3-store';
import { REQUIREMENT_TYPE_LABEL } from '../../data/setup-wizard';
import { INKS } from './anchored-text-paint';

export interface AttrHover {
  reqIds: string[];
  /** Entity ids whose words to light. */
  valueKeys: string[];
}

interface Handlers {
  onSelect: (reqId: string | null) => void;
  onHover: (h: AttrHover | null) => void;
  onEdit: (reqId: string) => void;
}

type Kind = 'species' | 'milestone' | 'phase' | 'activity' | 'season';

export function setupSw3Attributes(root: HTMLElement, { onSelect, onHover, onEdit }: Handlers) {
  const tpl = (name: string) => (root.querySelector<HTMLTemplateElement>(`[data-at-tpl="${name}"]`)!.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
  const setCount = (sec: HTMLElement, n: number) => {
    const t = sec.querySelector('[data-at-count] .esa-badge__text');
    if (t) t.textContent = String(n);
  };
  const entities = () => new Map((payload().entities ?? []).map((e) => [e.id, e]));

  let sig = '';
  let selected: string | null = null;

  const hoverOn = (el: HTMLElement, h: AttrHover) => {
    el.addEventListener('pointerenter', () => onHover(h));
    el.addEventListener('pointerleave', () => onHover(null));
    el.addEventListener('focusin', () => onHover(h));
    el.addEventListener('focusout', () => onHover(null));
  };

  const show = (code: string, sel: string | null) => {
    const reqs = requirementsOf(code);
    const flags = flagsOf(code);
    const next = JSON.stringify([code, reqs, flags.filter((f) => f.kind === 'merge')]);
    selected = sel;
    if (next !== sig) {
      sig = next;
      paint(code);
    }
    // Selection only dims: nothing is rebuilt.
    root.querySelectorAll<HTMLElement>('[data-req]').forEach((el) => {
      el.toggleAttribute('data-selected', el.dataset.req === sel);
      el.setAttribute('aria-pressed', String(el.dataset.req === sel));
    });
    root.querySelectorAll<HTMLElement>('[data-uses]').forEach((el) => el.toggleAttribute('data-dim', !!sel && !el.dataset.uses!.split(' ').includes(sel)));
  };

  const paint = (code: string) => {
    const reqs = requirementsOf(code);
    const ents = entities();
    const order = new Map(reqs.map((r, i) => [r.id, i]));
    // The ink each is highlighted in: the painter's turn, among those in the text.
    const inkOf = new Map(reqs.filter((r) => r.anchor).map((r, i) => [r.id, (i % INKS) + 1]));

    // Requirements.
    const reqSec = root.querySelector<HTMLElement>('[data-at-sec="req"]')!;
    setCount(reqSec, reqs.length);
    reqSec.querySelector('[data-at-reqs]')!.replaceChildren(
      ...reqs.map((r, i) => {
        const li = document.createElement('li');
        li.className = 'bcn-sw3at__req';
        li.dataset.req = r.id;
        li.tabIndex = 0;
        li.setAttribute('role', 'button');
        const n = document.createElement('span');
        n.className = 'bcn-sw3at__n';
        if (inkOf.has(r.id)) n.dataset.ink = String(inkOf.get(r.id));
        n.toggleAttribute('data-suggested', r.filing === 'suggested');
        n.setAttribute('aria-hidden', 'true');
        const text = document.createElement('span');
        text.className = 'bcn-sw3at__reqtext';
        const name = document.createElement('span');
        name.className = 'bcn-sw3at__reqname';
        const ref = document.createElement('span');
        ref.className = 'bcn-sw3at__reqid';
        ref.textContent = requirementRef(code, r.id);
        name.append(ref, r.name);
        const type = document.createElement('span');
        type.className = 'bcn-sw3at__reqtype';
        type.textContent = [REQUIREMENT_TYPE_LABEL[r.type], r.anchor ? '' : 'not in the text'].filter(Boolean).join(', ');
        type.toggleAttribute('data-unsure', r.typeConfidence < LOW_CONFIDENCE && r.filing === 'suggested');
        text.append(name, type);
        const edit = tpl('edit');
        edit.addEventListener('click', (e) => (e.stopPropagation(), onEdit(r.id)));
        li.append(n, text, edit);
        li.addEventListener('click', () => onSelect(selected === r.id ? null : r.id));
        li.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') (e.preventDefault(), onSelect(selected === r.id ? null : r.id));
        });
        hoverOn(li, { reqIds: [r.id], valueKeys: [] });
        return li;
      }),
    );

    // What they link to, by kind. Each thing lists the requirements naming it.
    const linked = (k: Kind): Map<string, string[]> => {
      const m = new Map<string, string[]>();
      for (const r of reqs) {
        const ids =
          k === 'species' ? r.speciesIds : k === 'season' ? r.seasonIds : k === 'activity' ? r.activityIds : k === 'milestone' ? (r.milestoneIds ?? []) : r.phases;
        for (const id of ids) m.set(id, [...(m.get(id) ?? []), r.id]);
      }
      return m;
    };
    const merges = payload().merges.filter((m) => mergeProposed(m.id) && !mergeState(m.id));
    for (const k of ['species', 'milestone', 'phase', 'activity', 'season'] as Kind[]) {
      const sec = root.querySelector<HTMLElement>(`[data-at-sec="${k}"]`)!;
      const m = linked(k);
      setCount(sec, m.size);
      sec.querySelector<HTMLElement>('[data-at-none]')!.hidden = m.size > 0;
      const rows = [...m.entries()]
        .map(([id, uses]) => ({ id, uses, name: k === 'phase' ? id : (ents.get(id)?.name ?? id) }))
        .sort((a, b) => order.get(a.uses[0])! - order.get(b.uses[0])! || a.name.localeCompare(b.name));
      sec.querySelector(`[data-at-list="${k}"]`)!.replaceChildren(
        ...rows.map((row) => {
          const li = document.createElement('li');
          li.className = 'bcn-sw3at__item';
          li.dataset.uses = row.uses.join(' ');
          const name = document.createElement('span');
          name.className = 'bcn-sw3at__name';
          name.textContent = row.name;
          li.append(name);
          // A phrasing Beacon would fold into another: decided here, for the whole project.
          const merge = merges.find((x) => x.fromIds.includes(row.id) || (x.intoId === row.id && x.fromIds.some((f) => m.has(f))));
          if (merge && k !== 'phase' && merge.fromIds.includes(row.id)) {
            const box = document.createElement('div');
            box.className = 'bcn-sw3at__merge';
            const say = document.createElement('span');
            say.textContent = `Same as ${ents.get(merge.intoId)?.name ?? merge.intoId}?`;
            const yes = tpl('merge');
            yes.addEventListener('click', () => acceptMerge(merge.id));
            const no = tpl('keep');
            no.addEventListener('click', () => dismissMerge(merge.id));
            box.append(say, yes, no);
            li.append(box);
          }
          hoverOn(li, { reqIds: row.uses, valueKeys: k === 'phase' ? [] : [resolveEntity(row.id)] });
          return li;
        }),
      );
    }
  };

  return { show };
}
