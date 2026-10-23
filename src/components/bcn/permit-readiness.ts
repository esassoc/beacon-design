// Controller for <BcnPermitReadiness>: renders the project's not-yet-submitted
// permits, most ready first, each with its open submittal items. Reads the client
// store (so browser edits and added permits count) and repaints on
// `bcn-permit-updated` / `bcn-permit-added`.
//
// Markup is built here, so the component's CSS reaches it through :global() rules.
// The progress bar is the real esa-progress-bar: the component SSRs one instance in
// a <template>, and each item clones it (the clone keeps Astro's scope attribute, so
// the lego's own scoped CSS applies) and sets its width + aria-valuenow.
//
// bcn-lego-checked: string-built UI composes esa-checkbox (Lit) for the checkable
// requirements and the global bcn-status-chip markup; the bar is a cloned
// esa-progress-bar. No bespoke controls.
import { STATUS_META, TODAY, jurisdictionOf, personName, type Permit, type PermitStatus, type Requirement } from '../../data/internal-permits';
import {
  allPermits,
  getPermit,
  initFromIsland,
  openDependenciesLive,
  openPermit,
  toggleRequirement,
} from '../../lib/internal-permits-store';

/** Statuses this view lists: everything still before submittal. */
const PRE_SUBMITTAL: PermitStatus[] = ['not-started', 'in-preparation'];

const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** A requirement that is another permit's outcome is done when that permit is (same rule as the detail dialog). */
function reqDone(r: Requirement): boolean {
  if (!r.permitId) return r.done;
  const target = getPermit(r.permitId);
  return r.done || target?.status === 'issued' || target?.status === 'not-required';
}

const openCount = (p: Permit): number => p.requirements.filter((r) => !reqDone(r)).length + openDependenciesLive(p).length;

function byReadiness(a: Permit, b: Permit): number {
  const d = openCount(a) - openCount(b);
  if (d) return d;
  const ea = a.estimatedIssueDate ?? '9999-12-31';
  const eb = b.estimatedIssueDate ?? '9999-12-31';
  if (ea !== eb) return ea < eb ? -1 : 1;
  return a.name.localeCompare(b.name);
}

function statusChip(status: PermitStatus): string {
  const meta = STATUS_META[status];
  return `<span class="bcn-status-chip" data-status="${status}" style="--_chip: ${meta.tone}"><span class="bcn-status-chip__dot"></span><span class="bcn-status-chip__label">${esc(meta.label)}</span></span>`;
}

const permitLink = (p: Permit, cls: string): string =>
  `<a class="${cls}" href="#permit=${encodeURIComponent(p.id)}" data-open-permit="${esc(p.id)}">${esc(p.name)}</a>`;

export function setupPermitReadiness(root: HTMLElement): void {
  const list = root.querySelector<HTMLElement>('[data-bcn-permit-readiness-list]');
  const empty = root.querySelector<HTMLElement>('[data-bcn-permit-readiness-empty]');
  const count = root.querySelector<HTMLElement>('[data-bcn-permit-readiness-count] .bcn-count');
  const barTpl = root.querySelector<HTMLTemplateElement>('template[data-bcn-permit-readiness-bar]');
  const projectId = root.dataset.projectId ?? '';
  if (!list) return;

  initFromIsland();

  /** Items ticked here this session stay visible (checked) so the tick can be undone. */
  const justChecked = new Set<string>();
  let order: string[] = [];
  let holdOrder = false;
  /** The checkbox ticked here, re-focused after the repaint replaces it. */
  let refocus: { permitId: string; reqId: string } | null = null;

  function bar(p: Permit, ready: number, total: number): HTMLElement | null {
    const node = barTpl?.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined;
    if (!node) return null;
    const pct = total ? Math.round((ready / total) * 100) : 0;
    node.setAttribute('aria-valuenow', String(pct));
    node.setAttribute('aria-label', `${p.name} requirements ready`);
    node.classList.toggle('esa-progress-bar--primary', pct < 100);
    node.classList.toggle('esa-progress-bar--success', pct === 100);
    const fill = node.querySelector<HTMLElement>('.esa-progress-bar__fill');
    if (fill) fill.style.width = `${pct}%`;
    return node;
  }

  function item(p: Permit): HTMLLIElement {
    const li = document.createElement('li');
    li.className = 'bcn-permit-readiness__item';
    li.dataset.permitId = p.id;

    const total = p.requirements.length;
    const ready = p.requirements.filter(reqDone).length;
    const deps = openDependenciesLive(p);
    const depIds = new Set(deps.map((d) => d.permitId));
    const meta = [jurisdictionOf(p)?.short, p.assigneeId ? personName(p.assigneeId) : '']
      .filter(Boolean)
      .map((s) => `<span>${esc(s as string)}</span>`)
      .join('');

    const reqRows = p.requirements
      // A linked requirement whose permit is also an open dependency shows once, as its "Waits on" row.
      .filter((r) => !(r.permitId && depIds.has(r.permitId)))
      .filter((r) => !reqDone(r) || justChecked.has(`${p.id}::${r.id}`))
      .map((r) => {
        const linked = r.permitId ? getPermit(r.permitId) : undefined;
        if (linked) {
          return `<li class="bcn-permit-readiness__open bcn-permit-readiness__linked typography-body-md">${permitLink(linked, 'bcn-permit-readiness__dep-link')}${statusChip(linked.status)}</li>`;
        }
        return `<li class="bcn-permit-readiness__open"><esa-checkbox size="md" label="${esc(r.label)}" data-permit-id="${esc(p.id)}" data-req-id="${esc(r.id)}"${r.done ? ' checked' : ''}></esa-checkbox></li>`;
      });

    const depRows = deps.map((d) => {
      const target = getPermit(d.permitId);
      const name = target ? permitLink(target, 'bcn-permit-readiness__dep-link') : esc(d.permitId);
      return `<li class="bcn-permit-readiness__open bcn-permit-readiness__dep typography-body-md">Waits on ${name} to be ${d.needs}</li>`;
    });

    const nothingOpen = p.requirements.every(reqDone) && deps.length === 0;
    const rows = [...reqRows, ...depRows];

    li.innerHTML = `
      <div class="sidebar bcn-permit-readiness__layout" data-gap="lg">
        <div class="stack bcn-permit-readiness__summary" data-gap="xs">
          <div class="stack bcn-permit-readiness__head" data-gap="2xs">
            <h4 class="bcn-permit-readiness__name typography-label-md-strong">${permitLink(p, 'bcn-permit-readiness__name-link')}</h4>
            <div class="cluster" data-gap="xs">
              ${statusChip(p.status)}
              ${meta ? `<span class="bcn-permit-readiness__meta typography-body-sm cluster" data-gap="sm">${meta}</span>` : ''}
            </div>
          </div>
          ${total ? `<div class="cluster bcn-permit-readiness__progress" data-gap="sm"><span class="bcn-permit-readiness__count typography-body-sm">${ready} of ${total} ready</span><span class="bcn-permit-readiness__bar" data-bar></span></div>` : ''}
        </div>
        <div class="stack bcn-permit-readiness__items" data-gap="xs">
          ${rows.length ? `<ul class="stack bcn-permit-readiness__open-list" data-gap="xs" role="list">${rows.join('')}</ul>` : ''}
          ${nothingOpen ? `<span class="bcn-permit-readiness__ready typography-label-md-strong">Ready to submit</span>` : ''}
        </div>
      </div>`;

    const slot = li.querySelector('[data-bar]');
    const node = total ? bar(p, ready, total) : null;
    if (slot && node) slot.replaceWith(node);
    return li;
  }

  function render(): void {
    const listed = allPermits().filter((p) => p.projectId === projectId && PRE_SUBMITTAL.includes(p.status));
    const ids = new Set(listed.map((p) => p.id));
    const sameSet = order.length === ids.size && order.every((id) => ids.has(id));
    if (holdOrder && sameSet) {
      listed.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    } else {
      listed.sort(byReadiness);
      order = listed.map((p) => p.id);
    }
    holdOrder = false;

    list!.replaceChildren(...listed.map(item));
    list!.hidden = listed.length === 0;
    if (empty) empty.hidden = listed.length > 0;
    if (refocus) {
      const { permitId, reqId } = refocus;
      refocus = null;
      const box = [...list!.querySelectorAll<HTMLElement & { updateComplete?: Promise<unknown> }>('esa-checkbox[data-req-id]')].find(
        (el) => el.dataset.permitId === permitId && el.dataset.reqId === reqId,
      );
      void box?.updateComplete?.then(() => box?.shadowRoot?.querySelector<HTMLElement>('[tabindex]')?.focus());
    }
    if (count) {
      count.textContent = String(listed.length);
      count.setAttribute('aria-label', `${listed.length} ${listed.length === 1 ? 'permit' : 'permits'} not yet submitted`);
    }
  }

  list.addEventListener('change', (e) => {
    const box = (e.target as HTMLElement).closest<HTMLElement & { checked: boolean }>('esa-checkbox[data-req-id]');
    if (!box) return;
    const permitId = box.dataset.permitId ?? '';
    const reqId = box.dataset.reqId ?? '';
    const key = `${permitId}::${reqId}`;
    if (box.checked) justChecked.add(key);
    else justChecked.delete(key);
    holdOrder = true;
    refocus = { permitId, reqId };
    toggleRequirement(permitId, reqId, box.checked, TODAY);
  });

  list.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-open-permit]');
    if (!link) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    openPermit(link.dataset.openPermit ?? '');
  });

  document.addEventListener('bcn-permit-updated', render);
  document.addEventListener('bcn-permit-added', render);
  render();
}
