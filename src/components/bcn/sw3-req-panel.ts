// Controller for <BcnSw3ReqPanel>. setupX shape: listens for the review's selection,
// fills the fields from sw3-store, and writes every edit back (an edit confirms).

import {
  initSw3,
  commitmentOf,
  requirementsOf,
  requirementOf,
  flagsOf,
  editRequirement,
  removeRequirement,
  keepRequirement,
  createRequirement,
  markNotBinding,
  resolveEntity,
  payload,
  LOW_CONFIDENCE,
} from './sw3-store';
import type { ReviewRequirement, ValueAnchor } from '../../data/setup-wizard-3-step';
import type { Selection } from './sw3-review';

type Field = HTMLElement & { value: string | string[]; options?: { value: string; label: string }[] };
const opt = (value: string, label = value) => ({ value, label });

export function setupReqPanel(root: HTMLElement): void {
  const D = initSw3();
  const L = D.labels!;
  const entities = D.entities ?? [];
  const f = (name: string) => root.querySelector<Field>(`[data-f="${name}"]`)!;
  const q = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  let sel: Selection | null = null;
  let filling = false;

  const kindOptions = (kind: string) => {
    const merged = new Set(D.merges.flatMap((m) => m.fromIds).filter((id) => resolveEntity(id) !== id));
    return entities.filter((e) => e.kind === kind && !merged.has(e.id)).map((e) => opt(e.id, e.name));
  };

  // Options are set once the elements are defined (they are properties, not attributes).
  Promise.all(['esa-select', 'esa-text-field'].map((t) => customElements.whenDefined(t))).then(() => {
    f('type').options = Object.entries(L.types).map(([v, l]) => opt(v, l));
    f('phases').options = L.phases.map((p) => opt(p));
    f('frequency').options = Object.entries(L.frequency).map(([v, l]) => opt(v, l));
    f('direction').options = [opt('', 'None'), opt('Before'), opt('After'), opt('Within')];
    f('activities').options = kindOptions('activity');
    refreshEntityOptions();
    render();
  });
  const refreshEntityOptions = () => {
    f('milestone').options = [opt('', 'None'), ...kindOptions('milestone')];
    f('species').options = kindOptions('species');
    f('seasons').options = kindOptions('season');
  };

  const emitSelect = (s: Selection | null) => document.dispatchEvent(new CustomEvent('sw3:select', { detail: s }));
  const emitLit = (d: { code: string; range: { start: number; end: number } } | null) =>
    document.dispatchEvent(new CustomEvent('sw3:lit', { detail: d }));

  // ── Edits: any change confirms ──────────────────────────────────────────────
  const arr = (v: string | string[]) => (Array.isArray(v) ? v : v ? String(v).split(',') : []);
  const onChange = (name: string, fn: (v: string | string[]) => Partial<ReviewRequirement>) =>
    f(name).addEventListener('change', () => {
      if (filling || !sel?.reqId) return;
      editRequirement(sel.reqId, fn(f(name).value));
    });
  onChange('name', (v) => ({ name: String(v) }));
  onChange('type', (v) => ({ type: String(v) as ReviewRequirement['type'], typeConfidence: 1 }));
  onChange('phases', (v) => ({ phases: arr(v) }));
  onChange('frequency', (v) => ({ timing: { frequency: String(v) } as ReviewRequirement['timing'] }));
  onChange('milestone', (v) => ({ timing: { milestoneId: String(v) || undefined } as ReviewRequirement['timing'] }));
  onChange('direction', (v) => ({ timing: { direction: (String(v) || undefined) as ReviewRequirement['timing']['direction'] } as ReviewRequirement['timing'] }));
  onChange('offset', (v) => ({ timing: { offset: String(v) } as ReviewRequirement['timing'] }));
  onChange('recurrence', (v) => ({ timing: { recurrence: String(v) } as ReviewRequirement['timing'] }));
  onChange('species', (v) => ({ speciesIds: arr(v) }));
  onChange('activities', (v) => ({ activityIds: arr(v) }));
  onChange('seasons', (v) => ({ seasonIds: arr(v) }));
  onChange('party', (v) => ({ responsibleParty: String(v) }));
  onChange('deliverable', (v) => ({ deliverable: String(v) }));

  // ── Hover lights the value's source words ───────────────────────────────────
  const anchorsFor = (r: ReviewRequirement, field: string): ValueAnchor[] => r.values.filter((v) => v.field === field);
  root.querySelectorAll<HTMLElement>('[data-anchor]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      if (!sel?.reqId) return;
      const r = requirementOf(sel.reqId);
      const a = r && anchorsFor(r, el.dataset.anchor!)[0];
      if (a) emitLit({ code: r!.code, range: { start: a.charStart, end: a.charEnd } });
    });
    el.addEventListener('mouseleave', () => emitLit(null));
  });

  // ── Actions ─────────────────────────────────────────────────────────────────
  q('[data-rp-remove]').addEventListener('click', () => {
    if (!sel?.reqId) return;
    const code = sel.code;
    removeRequirement(sel.reqId);
    emitSelect({ code });
  });
  q('[data-rp-fix]').addEventListener('click', () => {
    if (!sel?.reqId) return;
    const code = sel.code;
    const flag = currentFlag();
    if (flag?.kind === 'type') {
      editRequirement(sel.reqId, { typeConfidence: 1 });
      return;
    }
    removeRequirement(sel.reqId);
    emitSelect({ code, reqId: flag?.kind === 'duplicate' ? flag.otherId : undefined });
  });
  q('[data-rp-keep]').addEventListener('click', () => {
    if (sel?.reqId) keepRequirement(sel.reqId);
  });
  q('[data-rp-new]').addEventListener('click', () => {
    if (!sel?.gap) return;
    const id = createRequirement(sel.code, sel.gap);
    emitSelect({ code: sel.code, reqId: id });
  });
  q('[data-rp-notbinding]').addEventListener('click', () => {
    if (!sel?.gap) return;
    markNotBinding(sel.code, sel.gap.start);
    emitSelect({ code: sel.code });
  });
  q('[data-rp-reqs]').addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-req]');
    if (b && sel) emitSelect({ code: sel.code, reqId: b.dataset.req });
  });

  const currentFlag = () => (sel?.reqId ? flagsOf(sel.code).find((x) => x.reqId === sel!.reqId && x.kind !== 'merge') : undefined);

  // ── Render ──────────────────────────────────────────────────────────────────
  const setVal = (name: string, v: string | string[]) => {
    const el = f(name);
    const cur = el.value;
    if (JSON.stringify(Array.isArray(cur) ? cur : String(cur ?? '')) !== JSON.stringify(v)) el.value = v;
  };

  const render = () => {
    if (!sel) {
      root.dataset.mode = 'none';
      return;
    }
    const c = commitmentOf(sel.code);
    if (!c) return;

    if (sel.gap) {
      root.dataset.mode = 'gap';
      q('[data-rp-gapquote]').textContent = (c.text ?? '').slice(sel.gap.start, sel.gap.end);
      return;
    }

    const r = sel.reqId ? requirementOf(sel.reqId) : undefined;
    if (!r) {
      root.dataset.mode = 'commit';
      q('[data-rp-ctitle]').textContent = `${requirementsOf(sel.code).length} requirements in ${c.code.replace(/^COA\s+/, '')} ${c.title}`;
      const list = q('[data-rp-reqs]');
      list.replaceChildren(
        ...requirementsOf(sel.code).map((x) => {
          const li = document.createElement('li');
          const b = document.createElement('button');
          b.type = 'button';
          b.dataset.req = x.id;
          const name = document.createElement('span');
          name.className = 'typography-label-md';
          name.textContent = x.name;
          const type = document.createElement('span');
          type.className = 'bcn-sw3rp__rtype typography-microcopy-sm';
          type.textContent = L.types[x.type] ?? x.type;
          b.append(name, type);
          li.append(b);
          return li;
        }),
      );
      return;
    }

    root.dataset.mode = 'req';
    const flag = currentFlag();
    const flagEl = q('[data-rp-flag]');
    flagEl.hidden = !flag;
    if (flag) {
      const other = flag.otherId ? requirementOf(flag.otherId)?.name : '';
      const copy: Record<string, [string, string, string, string]> = {
        unanchored: ['Not in the source', `Beacon could not find this quote in the ITP: “${r.quote}”`, 'Remove', 'Keep'],
        duplicate: ['Likely duplicate', `Same words as “${other}”.`, 'Merge into it', 'Keep both'],
        type: ['Type unclear', `Beacon read this as ${L.types[r.type] ?? r.type} with low confidence.`, 'Confirm type', ''],
      };
      const [kind, text, fix, keep] = copy[flag.kind] ?? ['', '', '', ''];
      q('[data-rp-flagkind]').textContent = kind;
      q('[data-rp-flagtext]').textContent = text;
      const fixBtn = q('[data-rp-fix]');
      (fixBtn.querySelector('.esa-button__label') ?? fixBtn).textContent = fix;
      const keepBtn = q('[data-rp-keep]');
      (keepBtn.querySelector('.esa-button__label') ?? keepBtn).textContent = keep;
      ((keepBtn.closest('.esa-button') as HTMLElement | null) ?? keepBtn).style.display = keep ? '' : 'none';
    }

    const filing = q('[data-rp-filing]');
    filing.dataset.filing = r.filing;
    filing.textContent = r.filing === 'confirmed' ? 'Confirmed' : 'Suggested by Aldo';

    filling = true;
    refreshEntityOptions();
    setVal('name', r.name);
    setVal('type', r.type);
    f('type').setAttribute('help-text', r.typeConfidence < LOW_CONFIDENCE && r.filing === 'suggested' ? 'Low confidence' : '');
    setVal('phases', r.phases);
    setVal('frequency', r.timing.frequency);
    setVal('milestone', r.timing.milestoneId ?? '');
    setVal('direction', r.timing.direction ?? '');
    setVal('offset', r.timing.offset ?? '');
    setVal('recurrence', r.timing.recurrence ?? '');
    setVal('species', r.speciesIds);
    setVal('activities', r.activityIds);
    setVal('seasons', r.seasonIds);
    setVal('party', r.responsibleParty);
    setVal('deliverable', r.deliverable);
    filling = false;

    const stated = q('[data-anchor="stated"]');
    stated.hidden = !r.timing.stated;
    q('[data-rp-stated]').textContent = r.timing.stated ? `“${r.timing.stated}”` : '';
    root.querySelectorAll<HTMLElement>('[data-anchor]').forEach((el) =>
      el.toggleAttribute('data-has-anchor', anchorsFor(r, el.dataset.anchor!).length > 0),
    );
  };

  document.addEventListener('sw3:select', (e) => {
    sel = (e as CustomEvent<Selection | null>).detail;
    render();
  });
  document.addEventListener('sw3:change', () => {
    // A merge accepted elsewhere changes option lists and values.
    if (sel?.reqId && !requirementOf(sel.reqId)) sel = { code: sel.code };
    render();
  });
  void payload;
}
