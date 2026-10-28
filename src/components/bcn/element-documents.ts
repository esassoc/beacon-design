// The Documents module's runtime (2026-10-28): the element's documents, newest document date first, and the ways in
// and out (Add New, Add Existing, Add Link; per row Edit Details, Upload New Version, Remove From This Item). See
// ./BcnElementDocuments.astro for what a row says and why; ./element-module.ts for the contract.
//
// Records attach to the Live element (decision 5): the actions show only while the context can record, and never in a
// draft or the Configure screen's preview, where the card says once that documents are kept on Live.

import '@esa/ecology/esa-dropdown-menu';
import '@esa/ecology/esa-filter-dropdown';
import '@esa/ecology/esa-popover';
import type { EsaMenuItem } from '@esa/ecology/esa-dropdown-menu';
import type { ElementContext } from '../../lib/planning/element-context';
import type { ModuleSettings, PlanConfig } from '../../lib/planning/plan-config';
import { documentsFor, unlinkDocument, type ElementDocument, type PlanFile } from '../../lib/planning/plan-records';
import { fillIcons, planIcon } from '../../lib/planning/icons';
import { badge } from './badge-bank';
import { setupDocumentDialog, type DocumentDialogMode } from './document-dialog';
import { day, setModuleCount, setModuleNote, type ElementModuleSetup } from './element-module';

const CORRESPONDENCE = 'Correspondence';
/** Past this many documents, the card offers a type filter. */
const FILTER_FROM = 7;

/** The types an element offers: the plan's, narrowed by the level's Documents settings when it names any. */
export function documentTypesFor(config: PlanConfig, settings: ModuleSettings | undefined): string[] {
  const narrowed = (settings?.documentTypes ?? []).filter((t) => config.documentTypes.includes(t));
  return narrowed.length ? narrowed : [...config.documentTypes];
}

/** A file's glyph: a link, a letter, or a file. */
export const documentGlyph = (file: Pick<PlanFile, 'kind'>, type?: string) => (file.kind === 'link' ? 'link' : type === CORRESPONDENCE ? 'mail' : 'file-text');

/** "Draft 2, 3 Versions": what goes out, and how many saves when there's more than one. */
export function revisionText(file: PlanFile): string {
  if (file.kind === 'link') return '';
  const parts = [file.revision ?? ''];
  if (file.versions.length > 1) parts.push(`${file.versions.length} Versions`);
  return parts.filter(Boolean).join(', ');
}

/** "Received from CDFW" or "Sent to NMFS", with the letter's own date when it isn't the document's. */
export function correspondenceText(doc: Pick<ElementDocument['link'], 'date' | 'correspondence'>): string {
  const c = doc.correspondence;
  if (!c) return '';
  const who = c.direction === 'Sent' ? `Sent to ${c.agency}` : `Received from ${c.agency}`;
  return c.letterDate && c.letterDate !== doc.date ? `${who} on ${day(c.letterDate)}` : who;
}

const ROW_MENU = { edit: 'edit', version: 'version', remove: 'remove' } as const;

export const setupDocumentsModule: ElementModuleSetup = (root, host) => {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const list = q<HTMLElement>('[data-edocs-list]');
  const empty = q<HTMLElement>('[data-edocs-empty]');
  const filterWrap = q<HTMLElement>('[data-edocs-filter-wrap]');
  const filter = q<HTMLElement & { options: { value: string; label: string }[]; _selected: string[] }>('[data-edocs-filter]');
  const addWrap = q<HTMLElement>('[data-edocs-add-wrap]');
  const emptyAdd = q<HTMLElement>('[data-edocs-empty-add]');
  const rowTpl = q<HTMLTemplateElement>('template[data-edocs-tpl="row"]');
  const alsoTpl = q<HTMLTemplateElement>('template[data-edocs-tpl="also-item"]');
  fillIcons(root);

  // The modal lives at the page's foot: the page moves this card between its columns on every draw, and an open
  // <dialog> taken out of the document closes.
  const dialogRoot = q<HTMLElement>('[data-bcn-document-dialog]');
  document.body.append(dialogRoot);
  const dialog = setupDocumentDialog(dialogRoot);

  let ctx: ElementContext | null = null;
  let types: string[] = [];
  let typeFilter = '';

  async function open(mode: DocumentDialogMode, doc?: ElementDocument): Promise<void> {
    const c = host.ctx();
    const said = await dialog.open({
      mode,
      planID: c.planID,
      elementId: c.element.PlanElementID ?? '',
      elementName: c.element.PlanElementName ?? 'this item',
      records: c.records,
      types,
      agencies: c.config.agencies,
      nameOf: (id) => c.elementById(id)?.PlanElementName ?? 'another item',
      link: doc?.link,
      confirm: host.confirm,
    });
    if (!said) return;
    host.toast(said);
    await host.refresh();
  }

  async function remove(doc: ElementDocument): Promise<void> {
    const c = host.ctx();
    const where = doc.alsoOn ? ` It stays on the ${doc.alsoOn === 1 ? 'other item' : `${doc.alsoOn} other items`} it’s on, and in the plan’s files.` : ' The file stays in the plan’s files.';
    const ok = await host.confirm({
      heading: 'Remove From This Item?',
      message: `${doc.file.name} comes off ${c.element.PlanElementName ?? 'this item'}.${where}`,
      confirmLabel: 'Remove',
      danger: true,
    });
    if (!ok) return;
    unlinkDocument(c.planID, doc.link.id);
    host.toast('Removed from this item.');
    await host.refresh();
  }

  // Add: the three ways in, from the header and from the empty state.
  root.querySelectorAll<HTMLElement & { items: EsaMenuItem[] }>('[data-edocs-add]').forEach((menu) => {
    menu.addEventListener('menu-action', (e) => void open((e as CustomEvent<string>).detail as DocumentDialogMode));
  });
  const setAddItems = (hasExisting: boolean) =>
    root.querySelectorAll<HTMLElement & { items: EsaMenuItem[] }>('[data-edocs-add]').forEach((menu) => {
      menu.items = [
        { label: 'Add New', action: 'new' },
        { label: 'Add Existing', action: 'existing', disabled: !hasExisting },
        { label: 'Add Link', action: 'link' },
      ];
    });

  filter.addEventListener('selection-change', (e) => {
    typeFilter = String((e as CustomEvent<{ value?: string }>).detail?.value ?? '');
    if (ctx) drawRows(ctx, editable(ctx));
  });

  /** Records keep only on Live, by someone who can record. */
  const editable = (c: ElementContext) => c.canRecord && c.mode === 'live';

  function rowFor(c: ElementContext, doc: ElementDocument, canEdit: boolean): HTMLElement {
    const { link, file } = doc;
    const row = document.importNode(rowTpl.content.firstElementChild!, true) as HTMLElement;
    const part = <T extends HTMLElement = HTMLElement>(name: string) => row.querySelector<T>(`[data-row-${name}]`)!;
    row.dataset.linkId = link.id;
    part('glyph').innerHTML = planIcon(documentGlyph(file, link.type), 16);

    // The name: a link opens where it points; a file says what goes out and how many saves.
    if (file.kind === 'link' && file.url) {
      const a = part<HTMLAnchorElement>('link');
      a.hidden = false;
      a.href = file.url;
      a.title = file.url;
      a.textContent = file.name;
      a.insertAdjacentHTML('beforeend', planIcon('external-link', 12));
      part('name').remove();
    } else {
      part('name').textContent = file.name;
      part('link').remove();
    }
    const rev = revisionText(file);
    part('rev').textContent = rev;
    if (!rev) part('rev').remove();

    part('type').replaceWith(badge(link.type, 'neutral', 'xs'));
    // A letter says who and which way first, in the default ink; its note follows as the next sentence.
    const corr = correspondenceText(link);
    if (corr) {
      part('corr').hidden = false;
      part('corr').textContent = link.note ? `${corr}.` : corr;
    }
    part('note').textContent = link.note;
    part('date').textContent = day(link.date);
    part('date').title = 'Document date';

    if (link.correspondence?.agreement) {
      part('agreement').hidden = false;
      part('agreement-glyph').innerHTML = planIcon('circle-check', 14);
      part('agreement-text').textContent = link.correspondence.agreement;
    }

    // Also on: the other items with the same file, each with its own note there.
    if (doc.alsoOn) {
      part('also').hidden = false;
      part('also-label').textContent = `Also on ${doc.alsoOn} ${doc.alsoOn === 1 ? 'Item' : 'Items'}`;
      const others = c.records.links.filter((l) => l.fileId === file.id && l.elementId !== link.elementId).sort((a, b) => b.date.localeCompare(a.date));
      part('also-list').replaceChildren(
        ...others.map((o) => {
          const li = document.importNode(alsoTpl.content.firstElementChild!, true) as HTMLElement;
          const a = li.querySelector<HTMLAnchorElement>('[data-also-link]')!;
          a.textContent = c.elementById(o.elementId)?.PlanElementName ?? 'An item not in this view';
          a.href = c.hrefOf(o.elementId);
          li.querySelector('[data-also-note]')!.textContent = [o.type, o.note].filter(Boolean).join(': ');
          return li;
        })
      );
    }

    // The row's actions.
    const menuWrap = part('menu-wrap');
    if (!canEdit) menuWrap.remove();
    else {
      const menu = part<HTMLElement & { items: EsaMenuItem[] }>('menu');
      const items: EsaMenuItem[] = [{ label: 'Edit Details', action: ROW_MENU.edit }];
      if (file.kind !== 'link') items.push({ label: 'Upload New Version', action: ROW_MENU.version });
      items.push({ label: '', divider: true }, { label: 'Remove From This Item', action: ROW_MENU.remove, variant: 'danger' });
      menu.items = items;
      menu.querySelector('button')?.setAttribute('aria-label', `Actions for ${file.name}`);
      menu.addEventListener('menu-action', (e) => {
        const action = (e as CustomEvent<string>).detail;
        if (action === ROW_MENU.edit) void open('edit', doc);
        else if (action === ROW_MENU.version) void open('version', doc);
        else if (action === ROW_MENU.remove) void remove(doc);
      });
      fillIcons(row);
    }
    return row;
  }

  function drawRows(c: ElementContext, canEdit: boolean): void {
    const docs = documentsFor(c.records, c.element.PlanElementID ?? '');
    const shown = typeFilter ? docs.filter((d) => d.link.type === typeFilter) : docs;
    list.toggleAttribute('data-readonly', !canEdit);
    list.replaceChildren(...shown.map((d) => rowFor(c, d, canEdit)));
  }

  return {
    draw(c, settings) {
      ctx = c;
      types = documentTypesFor(c.config, settings);
      const canEdit = editable(c);
      // Records come from Live: an element only in a draft has none yet.
      const docs = c.inLive ? documentsFor(c.records, c.element.PlanElementID ?? '') : [];
      setModuleCount(root, docs.length || null);
      setModuleNote(root, c.mode === 'own' || c.mode === 'view' ? 'Documents are kept on Live, so they’re read-only in a draft.' : null);

      // The type filter, only when the list is long enough to want one; a type that's gone drops the filter.
      const present = [...new Set(docs.map((d) => d.link.type))].sort();
      if (typeFilter && !present.includes(typeFilter)) {
        typeFilter = '';
        filter._selected = [];
      }
      filterWrap.hidden = docs.length < FILTER_FROM;
      filter.options = present.map((t) => ({ value: t, label: t }));

      const here = new Set(docs.map((d) => d.file.id));
      setAddItems(c.records.files.some((f) => !here.has(f.id)));
      addWrap.hidden = !canEdit || !docs.length;
      emptyAdd.hidden = !canEdit;
      empty.hidden = docs.length > 0;
      const desc = empty.querySelector<HTMLElement>('.esa-empty-state__description');
      if (desc) desc.textContent = canEdit ? 'Add a file or a link, with its date and why it matters.' : !c.inLive ? 'This item is new in the draft. Documents attach once it’s on Live.' : c.mode === 'customize' ? 'Its documents will be listed here.' : 'Documents are added on the Live plan.';
      drawRows(c, canEdit);
    },
  };
};
