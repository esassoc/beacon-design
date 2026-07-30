// record-rows — behavior for <BcnRecordRows>: the section's one record modal, and the
// row actions that open or change a row.
//
// Self-mounting like setupFlagRows(): the component's <script> is hoisted and bundled
// ONCE per page no matter how many sections render, so this sweeps the document for
// every [data-record-rows] rather than being handed a root.
//
// ONE MODAL PER SECTION, populated by the row that opened it. Edit and Clone read the
// clicked row's own cells — the values on screen ARE the values in the dialog, so the two
// can't disagree and no per-record payload is shipped beside the markup. The card
// header's "Add …" action opens the same modal empty, under the section's add label.
//
// FIDELITY. Delete and Deactivate change the row on screen, so their confirmations are
// true: a deleted row is gone, a deactivated one is marked and quieted in place. Save is
// presentational — it closes and confirms, and nothing is written back or persisted; a
// reload restores every list. Nothing here survives the page.

import { toast } from '../../lib/snackbar';

/** The imperative slice of esa-dialog this module drives. */
interface RecordDialog extends HTMLElement {
  heading: string;
  show(): void;
  close(): void;
}

/** The imperative slice of esa-text-field this module drives. */
interface RecordField extends HTMLElement {
  value: string;
}

/** Every value the row shows, keyed by column — read straight off the rendered cells. */
function cellsOf(row: HTMLElement): Record<string, string> {
  const cells: Record<string, string> = {};
  for (const cell of row.querySelectorAll<HTMLElement>('[data-cell]')) {
    const key = cell.dataset.cell;
    if (key) cells[key] = (cell.textContent ?? '').trim();
  }
  return cells;
}

/** The row's lead cell — the record's name, and what every confirmation calls it. */
function nameOf(row: HTMLElement): string {
  const lead = row.querySelector<HTMLElement>('[data-cell]');
  return (lead?.textContent ?? '').trim();
}

export function setupRecordRows(): void {
  for (const mount of document.querySelectorAll<HTMLElement>('[data-record-rows]')) {
    const dialog = mount.querySelector<RecordDialog>('[data-record-dialog]');
    // A section renders its modal beside its rows; without one there is nothing to wire.
    if (dialog) wireSection(mount, dialog);
  }
}

/** Wire one slim-row section: its row actions, its add action, and its one modal. */
function wireSection(mount: HTMLElement, dialog: RecordDialog): void {
  const fields = [...mount.querySelectorAll<RecordField>('[data-record-field]')];
  const leadField = fields[0];

  /** Fill the modal from a row's cells, or empty it for a new record. */
  const open = (heading: string, cells?: Record<string, string>): void => {
    for (const field of fields) {
      const key = field.dataset.recordField ?? '';
      field.value = cells?.[key] ?? '';
    }
    dialog.heading = heading;
    dialog.show();
  };

  // One listener for every row in the section. The modal lives inside the same mount,
  // but its own controls carry different attributes, so nothing here catches them.
  mount.addEventListener('click', (event) => {
    const trigger = (event.target as HTMLElement).closest<HTMLElement>('[data-record-action]');
    if (!trigger) return;
    const row = trigger.closest<HTMLElement>('[data-record-row]');
    if (!row) return;

    const name = nameOf(row);

    switch (trigger.dataset.recordAction) {
      case 'edit':
        open(`Edit ${name}`, cellsOf(row));
        break;

      case 'clone':
        open(`Clone ${name}`, cellsOf(row));
        break;

      case 'deactivate': {
        row.dataset.deactivated = '';
        // The marker was rendered with the row and hidden; deactivating reveals it,
        // rather than this module authoring a badge in JS.
        const marker = row.querySelector<HTMLElement>('.bcn-record-rows__off');
        if (marker) marker.hidden = false;
        trigger.setAttribute('disabled', '');
        toast(`${name} deactivated`, 'info');
        break;
      }

      case 'delete':
        row.remove();
        toast(`${name} deleted`, 'info');
        break;
    }
  });

  // The add action sits in the card header, outside this mount. It is wired only where
  // the section left it to the modal — the Tenants page claims its own with a side
  // dialog, and marks the section `addFlow: 'page'` so no label reaches here.
  const addLabel = mount.dataset.addLabel;
  if (addLabel) {
    const sectionId = mount.dataset.recordRows;
    document
      .querySelector<HTMLButtonElement>(`[data-settings-add="${sectionId}"]`)
      ?.addEventListener('click', () => open(addLabel));
  }

  mount
    .querySelector<HTMLButtonElement>('[data-record-cancel]')
    ?.addEventListener('click', () => dialog.close());

  mount.querySelector<HTMLButtonElement>('[data-record-save]')?.addEventListener('click', () => {
    // The record is named by what the reader typed, which on an edit is the name it
    // already had and on a new record is the name it is being given.
    const name = (leadField?.value ?? '').trim();
    dialog.close();
    toast(name ? `${name} saved` : 'Saved', 'success');
  });
}
