// Shared controller for <BcnEvidenceList> — the Evidence-of-Compliance card list.
// Imported by the dynamic host (the tracking dialog) to wire per-card behavior on a
// server-rendered list: expand/collapse, esa-file-list population, edit/delete/star.
// One source of truth so the card contract (data-* attrs, aria-labels) can't drift
// between the .astro markup and the JS that drives it.

/** The evidence facts carried on each card's data-* attributes. */
export interface EvidenceCardData {
  id: string;
  title: string;
  notes: string;
  tags: string[];
  files: string[];
}

export interface EvidenceListOptions {
  /** Host opens its own editor (esa-side-dialog) with the card's data. */
  onEdit?(data: EvidenceCardData): void;
}

// esa-file-list: files set as a property (never an attr); name + optional href.
type FileListEl = HTMLElement & { files: { name: string; href?: string }[]; removable: boolean; downloadable: boolean };

const toFiles = (csv: string | undefined, href?: string) =>
  (csv ?? '').split(',').filter(Boolean).map((name) => ({ name, ...(href ? { href } : {}) }));

const readCard = (item: HTMLElement): EvidenceCardData => ({
  id: item.id,
  title: item.dataset.title ?? '',
  notes: item.dataset.notes ?? '',
  tags: (item.dataset.tags ?? '').split(',').filter(Boolean),
  files: (item.dataset.files ?? '').split(',').filter(Boolean),
});

/**
 * Wire every .bcn-evidence-card inside `root`: lead-click expand toggle, esa-file-list
 * population (download-only), and the edit/delete/star action buttons. Buttons are
 * esa-icon-button (no class passthrough) → selected by aria-label.
 */
export function setupEvidenceList(root: HTMLElement, opts: EvidenceListOptions = {}): void {
  root.querySelectorAll<HTMLLIElement>('.bcn-evidence-card').forEach((item) => {
    const lead = item.querySelector<HTMLElement>('.bcn-evidence-card__lead')!;
    const fields = item.querySelector<HTMLElement>('.bcn-evidence-card__fields')!;
    lead.addEventListener('click', () => {
      const open = item.classList.toggle('is-expanded');
      fields.hidden = !open;
    });

    // Populate the card's esa-file-list (download-only) from data-files.
    const fileList = item.querySelector<FileListEl>('esa-file-list');
    if (fileList) fileList.files = toFiles(item.dataset.files, '#file');

    const byLabel = (label: string) => item.querySelector<HTMLElement>(`[aria-label="${label}"]`);
    byLabel('Edit evidence')?.addEventListener('click', () => opts.onEdit?.(readCard(item)));
    byLabel('Delete evidence')?.addEventListener('click', () => item.remove());

    const star = byLabel('Add to summary page');
    star?.addEventListener('click', () => {
      const on = star.getAttribute('aria-pressed') === 'true';
      star.setAttribute('aria-pressed', String(!on));
      star.classList.toggle('bcn-evidence-card__star--on', !on);
    });
  });
}
