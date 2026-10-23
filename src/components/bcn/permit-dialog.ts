// Controller for <BcnPermitDialog> — the permit record. ONE pre-rendered esa-dialog
// shell (header, section headings, the dropzone, the comment composer); this fills the
// variable parts from the client store whenever a permit is opened, and repaints them
// on every `bcn-permit-updated`.
//
// Opens on `bcn-permit-open` ({ permitId }) and on a `#permit=<id>` hash (page load +
// hashchange). While open the hash names the permit (history.replaceState, so no extra
// history entries); closing clears it.
//
// Markup built here uses global-scoped `bcn-permit-dialog__*` classes (scoped CSS
// cannot reach injected nodes), Lit legos for controls (esa-checkbox), the global
// BcnStatusChip markup, and <template> clones of BcnKeyValue / EsaBadge so those keep
// their own scoped-CSS attribute. Links are plain anchors (`#permit=<id>`, which the
// hashchange listener turns into an open).
//
// bcn-lego-checked: the status chip string is BcnStatusChip's own documented markup
// (its CSS is is:global for exactly this runtime case; esa-badge cannot take a
// value-driven color). The quiet "Expires in N days" flag IS esa-badge, cloned from a
// <template>; requirement controls ARE esa-checkbox. The review-history ladder, file
// rows and comment rows are this component's own list markup — no esa-* lego renders a
// dated step ladder or a file-trail row (checked esa-file-list: it lists picked File
// objects with a remove button, not a stored trail with dates and kinds).
//
// Every permit read goes through the store (getPermit, dependencyMetLive,
// blockedByLive), never the fixture, so browser-added and edited permits show.

import {
  CURRENT_USER_ID,
  STATUS_META,
  TODAY,
  catalogById,
  daysBetween,
  fileLabel,
  formatDate,
  formatMonths,
  jurisdictionOf,
  levelOf,
  personName,
  submittedDate,
  turnaroundFor,
  type Permit,
  type PermitStatus,
} from '../../data/internal-permits';
import {
  addComment,
  blockedByLive,
  dependencyMetLive,
  getPermit,
  initFromIsland,
  toggleRequirement,
  updatePermit,
} from '../../lib/internal-permits-store';

interface DialogEl extends HTMLElement {
  open: boolean;
  heading: string;
  show(): void;
  close(): void;
}

interface Step {
  label: string;
  date?: string;
  state: 'done' | 'current' | 'upcoming';
}

const HASH_RE = /^#permit=(.+)$/;
const EXPIRING_DAYS = 90;

const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const isOpen = (p: Permit): boolean => p.status !== 'issued' && p.status !== 'not-required';

/** BcnStatusChip markup (its CSS is global). */
function chipHtml(status: PermitStatus): string {
  return `<span class="bcn-status-chip" data-status="${status}" style="--_chip: ${STATUS_META[status].tone}"><span class="bcn-status-chip__dot"></span><span class="bcn-status-chip__label">${esc(STATUS_META[status].label)}</span></span>`;
}

const permitLink = (p: Permit): string => `<a href="#permit=${encodeURIComponent(p.id)}">${esc(p.name)}</a>`;

/** Review History: the rounds as a ladder, uncapped. */
function ladder(p: Permit): Step[] {
  const steps: Step[] = [];
  if (!p.rounds.length) steps.push({ label: 'Submitted', state: 'upcoming' });
  p.rounds.forEach((r, i) => {
    const n = i + 1;
    steps.push({ label: n === 1 ? 'Submitted' : `Resubmitted (Round ${n})`, date: r.sent, state: 'done' });
    if (!r.returned) {
      steps.push({ label: `With agency for ${daysBetween(r.sent, TODAY)} days`, state: 'current' });
    } else if (r.outcome === 'comments') {
      steps.push({ label: `Round ${n} comments back`, date: r.returned, state: 'done' });
    }
  });
  const decided = p.rounds.find((r) => r.outcome === 'decision')?.returned;
  const issued = p.issuedDate ?? (p.status === 'issued' ? decided : undefined);
  if (issued) {
    steps.push({ label: 'Issued', date: issued, state: 'done' });
    if (p.expiresDate) {
      const past = p.expiresDate < TODAY;
      steps.push({ label: past ? 'Expired' : 'Expires', date: p.expiresDate, state: past ? 'done' : 'upcoming' });
    }
  } else if (isOpen(p) && p.estimatedIssueDate) {
    steps.push({ label: 'Expected', date: p.estimatedIssueDate, state: 'upcoming' });
  }
  return steps;
}

export function setupPermitDialog(root: HTMLElement): void {
  const dialog = root as DialogEl;
  const q = <T extends Element = HTMLElement>(sel: string): T => root.querySelector(sel) as T;
  const slot = (name: string): HTMLElement => q(`[data-pd="${name}"]`);
  const section = (name: string): HTMLElement => q(`[data-pd-section="${name}"]`);
  const factTpl = q<HTMLTemplateElement>('template[data-pd-tpl="fact"]');
  const badgeTpl = q<HTMLTemplateElement>('template[data-pd-tpl="badge"]');
  const turnaroundHref = root.dataset.turnaroundHref ?? '#';

  let openId: string | null = null;
  /** Set while this dialog is the writer, so a checkbox tick doesn't rebuild its own list. */
  let selfWrite: 'req' | null = null;

  initFromIsland();

  // ── Builders ────────────────────────────────────────────────────────────────

  function badge(text: string): HTMLElement {
    const node = badgeTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const t = node.querySelector('.esa-badge__text');
    if (t) t.textContent = text;
    return node;
  }

  function fact(label: string, valueHtml: string, extra?: HTMLElement): HTMLElement {
    const node = factTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const key = node.querySelector('.bcn-key-value__key');
    const val = node.querySelector('.bcn-key-value__val');
    if (key) key.textContent = label;
    if (val) {
      val.innerHTML = valueHtml;
      if (extra) val.append(' ', extra);
    }
    return node;
  }

  function renderHeader(p: Permit): void {
    dialog.heading = p.name;
    slot('name').textContent = p.name;
    slot('status').innerHTML = chipHtml(p.status);
  }

  function renderTrigger(p: Permit): void {
    slot('trigger').textContent = p.trigger;
    section('trigger').hidden = !p.trigger;
  }

  function renderHistory(p: Permit): void {
    section('history').hidden = p.status === 'not-required' && !p.rounds.length;
    slot('history').innerHTML = ladder(p)
      .map(
        (s) => `<li class="bcn-permit-dialog__step" data-state="${s.state}">
          <span class="bcn-permit-dialog__node" aria-hidden="true"></span>
          <span class="bcn-permit-dialog__step-label">${esc(s.label)}</span>
          ${s.date ? `<span class="bcn-permit-dialog__step-date typography-meta">${formatDate(s.date)}</span>` : ''}
        </li>`,
      )
      .join('');
  }

  const reqDone = (p: Permit, reqId: string): boolean => {
    const r = p.requirements.find((x) => x.id === reqId);
    if (!r) return false;
    if (!r.permitId) return r.done;
    const target = getPermit(r.permitId);
    return r.done || target?.status === 'issued' || target?.status === 'not-required';
  };

  function renderReqCount(p: Permit): void {
    const done = p.requirements.filter((r) => reqDone(p, r.id)).length;
    slot('req-count').textContent = `${done} of ${p.requirements.length} done`;
  }

  function renderRequirements(p: Permit): void {
    section('requirements').hidden = !p.requirements.length;
    renderReqCount(p);
    slot('requirements').innerHTML = p.requirements
      .map((r) => {
        const target = r.permitId ? getPermit(r.permitId) : undefined;
        if (target) {
          return `<li class="bcn-permit-dialog__req" data-linked>${permitLink(target)}${chipHtml(target.status)}</li>`;
        }
        return `<li class="bcn-permit-dialog__req"><esa-checkbox data-req-id="${esc(r.id)}" label="${esc(r.label)}"${r.done ? ' checked' : ''}></esa-checkbox></li>`;
      })
      .join('');
    const entry = catalogById(p.catalogId);
    slot('req-source').textContent = entry ? `From ${entry.sourceRef}` : '';
    slot('req-source').hidden = !entry;
  }

  function renderDependencies(p: Permit): void {
    const waits = p.dependsOn.map((d) => ({ d, target: getPermit(d.permitId) })).filter((x) => x.target);
    const holds = blockedByLive(p).filter((o) => o.id !== p.id);
    section('dependencies').hidden = !waits.length && !holds.length;
    q('[data-pd-side="waits"]').hidden = !waits.length;
    q('[data-pd-side="holds"]').hidden = !holds.length;
    slot('waits').innerHTML = waits
      .map(({ d, target }) => {
        const met = dependencyMetLive(d);
        return `<li class="bcn-permit-dialog__dep">
          ${permitLink(target!)}
          <span class="bcn-permit-dialog__dep-needs typography-meta">Needs ${d.needs === 'issued' ? 'Issued' : 'Submitted'}</span>
          <span class="bcn-permit-dialog__dep-state" data-met="${met}">${met ? 'Met' : 'Not Met'}</span>
        </li>`;
      })
      .join('');
    slot('holds').innerHTML = holds.map((o) => `<li class="bcn-permit-dialog__dep">${permitLink(o)}${chipHtml(o.status)}</li>`).join('');
  }

  function renderConditions(p: Permit): void {
    const n = p.conditionsCount;
    slot('conditions').textContent =
      p.conditions === true ? (n ? `${n} ${n === 1 ? 'condition' : 'conditions'}` : 'Yes') : p.conditions === false ? 'No' : 'Not known until issued';
    slot('tracked').hidden = !(p.conditions === true && p.conditionsInBeacon);
    slot('track').hidden = !(p.conditions === true && !p.conditionsInBeacon);
  }

  function renderFiles(p: Permit): void {
    const files = p.files.map((f, i) => ({ f, i })).sort((a, b) => (a.f.date === b.f.date ? b.i - a.i : a.f.date < b.f.date ? 1 : -1));
    slot('files').hidden = !files.length;
    slot('files').innerHTML = files
      .map(
        ({ f }) => `<li class="bcn-permit-dialog__file">
          <span class="bcn-permit-dialog__file-label">${esc(fileLabel(f))}</span>
          <span class="bcn-permit-dialog__file-date typography-meta">${formatDate(f.date)}</span>
          <span class="bcn-permit-dialog__file-original typography-meta">${esc(f.original)}</span>
        </li>`,
      )
      .join('');
  }

  function renderComments(p: Permit): void {
    slot('comments').hidden = !p.comments.length;
    slot('comments').innerHTML = p.comments
      .map(
        (c) => `<li class="bcn-permit-dialog__comment">
          <span class="bcn-permit-dialog__comment-meta"><span class="bcn-permit-dialog__comment-author">${esc(personName(c.authorId))}</span><span class="typography-meta">${formatDate(c.date)}</span></span>
          <p class="bcn-permit-dialog__comment-text">${esc(c.text)}</p>
        </li>`,
      )
      .join('');
  }

  function renderFacts(p: Permit): void {
    const out: HTMLElement[] = [];
    const add = (label: string, value: string | undefined, html = false, extra?: HTMLElement): void => {
      if (value) out.push(fact(label, html ? value : esc(value), extra));
    };
    const entry = catalogById(p.catalogId);
    const j = jurisdictionOf(p);
    add('Status', chipHtml(p.status), true);
    add('Assignee', p.assigneeId ? personName(p.assigneeId) : '—');
    add('Agency', j?.name);
    add('Level', levelOf(p));
    if (entry) {
      const local = entry.localName !== entry.type ? `<span class="bcn-permit-dialog__fact-sub">${esc(entry.localName)}</span>` : '';
      add('Permit Type', `${esc(entry.type)}${local}`, true);
    }
    add('Reference No.', p.referenceNumber || '—');
    add('Agency Contact', p.agencyContact);
    add('Site', p.site);
    add('Submitted', submittedDate(p) ? formatDate(submittedDate(p)) : undefined);
    if (isOpen(p)) add('Estimated Issue', p.estimatedIssueDate ? formatDate(p.estimatedIssueDate) : undefined);
    add('Issued', p.issuedDate ? formatDate(p.issuedDate) : undefined);
    if (p.expiresDate) {
      const left = daysBetween(TODAY, p.expiresDate);
      const soon = p.status === 'issued' && left >= 0 && left <= EXPIRING_DAYS;
      add('Expires', formatDate(p.expiresDate), false, soon ? badge(`Expires in ${left} ${left === 1 ? 'day' : 'days'}`) : undefined);
    }
    const t = turnaroundFor(p.catalogId);
    if (t && t.spans.length) {
      add('Turnaround Here', `<a href="${esc(turnaroundHref)}">Median ${formatMonths(t.median)} across ${t.spans.length} issued</a>`, true);
    }
    slot('facts').replaceChildren(...out);
  }

  function render(p: Permit, opts: { keepRequirements?: boolean } = {}): void {
    renderHeader(p);
    renderTrigger(p);
    renderHistory(p);
    if (opts.keepRequirements) renderReqCount(p);
    else renderRequirements(p);
    renderDependencies(p);
    renderConditions(p);
    renderFiles(p);
    renderComments(p);
    renderFacts(p);
  }

  /** A fresh dropzone per permit, so one record's pending files never show on the next. */
  function resetUpload(): void {
    const old = q('esa-file-upload');
    if (!old) return;
    const fresh = document.createElement('esa-file-upload');
    for (const a of Array.from(old.attributes)) fresh.setAttribute(a.name, a.value);
    old.replaceWith(fresh);
  }

  function scrollTop(): void {
    dialog.shadowRoot?.querySelector('.esa-dialog__body')?.scrollTo(0, 0);
  }

  // ── Open / close ────────────────────────────────────────────────────────────

  function open(id: string): void {
    const p = getPermit(id);
    if (!p) return;
    const switching = openId !== id;
    openId = id;
    render(p);
    if (switching) {
      resetUpload();
      const ta = q<HTMLElement & { value: string }>('esa-textarea');
      if (ta) ta.value = '';
    }
    if (!dialog.open) dialog.show();
    if (switching) requestAnimationFrame(scrollTop);
    const hash = `#permit=${encodeURIComponent(id)}`;
    if (location.hash !== hash) history.replaceState(history.state, '', hash);
  }

  function fromHash(): void {
    const m = location.hash.match(HASH_RE);
    if (m) open(decodeURIComponent(m[1]));
  }

  dialog.addEventListener('close', (e) => {
    if (e.target !== dialog) return;
    openId = null;
    if (HASH_RE.test(location.hash)) history.replaceState(history.state, '', location.pathname + location.search);
  });

  document.addEventListener('bcn-permit-open', (e) => {
    const id = (e as CustomEvent<{ permitId: string }>).detail?.permitId;
    if (id) open(id);
  });

  document.addEventListener('bcn-permit-updated', () => {
    if (!openId) return;
    const p = getPermit(openId);
    if (!p) return;
    render(p, { keepRequirements: selfWrite === 'req' });
  });

  window.addEventListener('hashchange', fromHash);

  // ── Actions inside the record ───────────────────────────────────────────────

  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (!openId) return;
    if (t.closest('[data-pd="tracked"]')) {
      // Placeholder href: keep #permit=<id> in the URL rather than jumping to "#".
      e.preventDefault();
    } else if (t.closest('[data-pd-edit]')) {
      document.dispatchEvent(new CustomEvent('bcn-permit-edit', { detail: { permitId: openId } }));
    } else if (t.closest('[data-pd-track]')) {
      updatePermit(openId, { conditionsInBeacon: true });
    } else if (t.closest('[data-pd-post]')) {
      const ta = q<HTMLElement & { value: string }>('esa-textarea');
      const text = (ta?.value ?? '').trim();
      if (!text) return;
      addComment(openId, { authorId: CURRENT_USER_ID, date: TODAY, text });
      if (ta) ta.value = '';
    }
  });

  slot('requirements').addEventListener('change', (e) => {
    const box = (e.target as HTMLElement).closest<HTMLElement>('esa-checkbox[data-req-id]');
    if (!box || !openId) return;
    const checked = Boolean((e as CustomEvent<{ checked: boolean }>).detail?.checked);
    selfWrite = 'req';
    try {
      toggleRequirement(openId, box.dataset.reqId!, checked, TODAY);
    } finally {
      selfWrite = null;
    }
  });

  fromHash();
}
