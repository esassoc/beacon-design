// Controller for <BcnRolesRepeater> — ACF-repeater-style RACI editing.
//
// The component SSRs an empty rows container + a <template> row + an Add button;
// this controller clones rows, seeds their legos (selects need .options set
// post-insert; the switch needs .checked), wires per-row delete, and collects the
// rows back into RoleAssignment-shaped records on save. Rows with no org are
// dropped on collect; duplicate work-streams keep the LAST row (repeater
// semantics — the visible order is the user's intent).
import type { RoleAssignment, WorkstreamKey } from '../../data/fish-model';

export interface RepeaterVocab {
  workstreams: { value: string; label: string }[];
  orgs: { value: string; label: string }[];
}

export interface RolesRepeaterController {
  setRows(roles: RoleAssignment[]): void;
  getRows(): RoleAssignment[];
}

type SelectEl = HTMLElement & { options: { value: string; label: string }[]; value: string };
type FieldEl = HTMLElement & { value: string };
type SwitchEl = HTMLElement & { checked: boolean };

export function setupRolesRepeater(root: HTMLElement, vocab: RepeaterVocab): RolesRepeaterController {
  const list = root.querySelector<HTMLElement>('[data-rr-list]')!;
  const tpl = root.querySelector<HTMLTemplateElement>('template[data-rr-row]')!;
  const addBtn = root.querySelector<HTMLElement>('[data-rr-add]')!;

  function addRow(seed?: RoleAssignment): void {
    const row = (tpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
    list.appendChild(row);
    const ws = row.querySelector('[data-rr-ws]') as SelectEl;
    const org = row.querySelector('[data-rr-org]') as SelectEl;
    const person = row.querySelector('[data-rr-person]') as FieldEl;
    const tent = row.querySelector('[data-rr-tent]') as SwitchEl;
    // Custom elements upgrade on insert; seed after the definitions resolve.
    Promise.all([customElements.whenDefined('esa-select'), customElements.whenDefined('esa-switch-toggle')]).then(() => {
      ws.options = vocab.workstreams;
      org.options = vocab.orgs;
      ws.value = seed?.workstream ?? '';
      org.value = seed?.org ?? '';
      person.value = seed?.person ?? '';
      tent.checked = seed?.tentative ?? false;
    });
  }

  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('[data-rr-del]')) t.closest('[data-rr-item]')?.remove();
    else if (t.closest('[data-rr-add]')) addRow();
  });
  void addBtn; // wired via the delegated listener above

  return {
    setRows(roles) {
      list.innerHTML = '';
      roles.forEach((r) => addRow(r));
    },
    getRows() {
      const out = new Map<string, RoleAssignment>();
      list.querySelectorAll<HTMLElement>('[data-rr-item]').forEach((row) => {
        const wsVal = (row.querySelector('[data-rr-ws]') as SelectEl | null)?.value ?? '';
        const orgVal = (row.querySelector('[data-rr-org]') as SelectEl | null)?.value ?? '';
        if (!wsVal || !orgVal) return;
        const personVal = ((row.querySelector('[data-rr-person]') as FieldEl | null)?.value ?? '').trim();
        const tentVal = (row.querySelector('[data-rr-tent]') as SwitchEl | null)?.checked ?? false;
        out.set(wsVal, {
          workstream: wsVal as WorkstreamKey,
          org: orgVal,
          ...(personVal ? { person: personVal } : {}),
          ...(tentVal ? { tentative: true } : {}),
        });
      });
      return [...out.values()];
    },
  };
}
