// The Obligations module's runtime (2026-10-28): the obligations an element serves, linked and unlinked on Live, and
// the ones it serves through its parents. See ./BcnElementObligations.astro; ./element-module.ts for the contract.

import '@esa/ecology/esa-combobox';
import { OBLIGATION_HREF, type ElementContext } from '../../lib/planning/element-context';
import { linkObligation, unlinkObligation } from '../../lib/planning/plan-records';
import { BY_ID, CLASS_META, OBLIGATIONS } from '../../data/obligations';
import { fillIcons } from '../../lib/planning/icons';
import { setModuleCount, type ElementModuleSetup } from './element-module';

type Combo = HTMLElement & { value: unknown; options: { value: string; label: string }[] };
const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text = '') => Object.assign(document.createElement(tag), { className, textContent: text });

export const setupObligationsModule: ElementModuleSetup = (root, host) => {
  const q = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const picker = q('[data-eobl-picker]');
  const combo = q<Combo>('[data-eobl-combobox]');
  fillIcons(root);

  const row = (ctx: ElementContext, oid: string, unlink: boolean, via?: string) => {
    const o = BY_ID.get(oid);
    const li = el('li');
    const text = el('span', 'bcn-eobl__text');
    const line = el('span', 'bcn-eobl__line');
    const a = el('a', '', o?.title ?? oid);
    a.href = OBLIGATION_HREF(oid);
    line.append(el('span', 'bcn-eobl__id', oid), a);
    text.append(line);
    const meta = [o ? CLASS_META[o.cls].label : '', o?.commitments.slice(0, 3).join(', ') ?? '', via ? `Through ${via}` : ''].filter(Boolean).join('. ');
    if (meta) text.append(el('span', 'bcn-eobl__meta', meta));
    li.append(text);
    if (unlink) {
      const b = q<HTMLTemplateElement>('[data-eobl-tpl="unlink"]').content.firstElementChild!.cloneNode(true) as HTMLElement;
      b.querySelector('button')?.setAttribute('aria-label', `Unlink ${oid}`);
      b.addEventListener('click', async () => {
        const ok = await host.confirm({ heading: `Unlink ${oid}?`, message: `${ctx.element.PlanElementName} will no longer be listed as serving ${o?.title ?? oid}.`, confirmLabel: 'Unlink' });
        if (!ok) return;
        unlinkObligation(ctx.planID, ctx.element.PlanElementID ?? '', oid);
        host.toast(`Unlinked ${oid}.`);
      });
      li.append(b);
    }
    return li;
  };

  function draw(ctx: ElementContext): void {
    const id = ctx.element.PlanElementID ?? '';
    const own = ctx.records.obligations[id] ?? [];
    q('[data-eobl-list]').replaceChildren(...own.map((oid) => row(ctx, oid, ctx.canRecord)));
    q('[data-eobl-empty]').hidden = own.length > 0;
    setModuleCount(root, own.length || null);
    q('[data-eobl-add]').hidden = !ctx.canRecord;
    if (!ctx.canRecord) picker.hidden = true;

    // Through its parents: what an ancestor serves that this doesn't itself.
    const seen = new Set(own);
    const inherited: { oid: string; via: string }[] = [];
    for (const a of [...ctx.ancestors].reverse()) {
      for (const oid of ctx.records.obligations[a.PlanElementID ?? ''] ?? []) {
        if (seen.has(oid)) continue;
        seen.add(oid);
        inherited.push({ oid, via: a.PlanElementName ?? '' });
      }
    }
    q('[data-eobl-inherited]').hidden = !inherited.length;
    q('[data-eobl-inherited-list]').replaceChildren(...inherited.map((x) => row(ctx, x.oid, false, x.via)));
    if (inherited.length && !own.length) q('[data-eobl-empty]').hidden = true;
  }

  q('[data-eobl-add]').addEventListener('click', () => {
    picker.hidden = !picker.hidden;
    if (picker.hidden) return;
    const ctx = host.ctx();
    const own = new Set(ctx.records.obligations[ctx.element.PlanElementID ?? ''] ?? []);
    void customElements.whenDefined('esa-combobox').then(() => {
      combo.options = OBLIGATIONS.filter((o) => !own.has(o.id)).map((o) => ({ value: o.id, label: `${o.id} ${o.title}` }));
      requestAnimationFrame(() => (combo.shadowRoot?.querySelector('input') as HTMLInputElement | null)?.focus());
    });
  });
  combo.addEventListener('change', () => {
    const oid = String(combo.value ?? '');
    if (!oid) return;
    const ctx = host.ctx();
    linkObligation(ctx.planID, ctx.element.PlanElementID ?? '', oid);
    picker.hidden = true;
    requestAnimationFrame(() => (combo.value = ''));
    host.toast(`Linked ${oid}.`);
  });

  return { draw };
};
