// setup-queue.client — behavior for <BcnSetupQueue>, Model B of Component setup.
//
// The component pre-renders EVERY undecided commitment twice: once as a full card in the
// queue (hidden) and once as a compact row in the summary pool (hidden). This module never
// builds markup — it filters the cards into a batch, toggles `hidden` one card at a time,
// and moves pooled rows into the summary's three lists. That is the data-*-panel idiom
// BcnProjectDataPanel and BcnGuidanceDrawer already use, and it keeps commitment prose out
// of the client bundle.
//
// The state it owns is small on purpose: the batch order, the cursor, and one decision per
// commitment (verdict + its own rationale). Nothing is shared between commitments, so a
// rationale can never be silently overwritten by the next card.
import { toast } from '../../lib/snackbar';

type Verdict = 'applied' | 'dismissed' | 'skipped';

interface Decision {
  verdict: Verdict;
  rationale: string;
  /** Actions this commitment would materialize on the component when applied. */
  actions: number;
}

/** Emitted on the host when a batch is started. */
export interface SetupQueueStartDetail {
  batch: string;
  label: string;
  count: number;
}

/** Emitted on the host when the batch summary is confirmed. */
export interface SetupQueueCommitDetail {
  batch: string;
  label: string;
  applied: string[];
  dismissed: string[];
  skipped: string[];
  /** Commitments in the batch the user never reached — they stay undecided. */
  notReached: number;
  actionsCreated: number;
}

type DialogEl = HTMLElement & { show(): void; close(): void; open: boolean };
type ValueEl = HTMLElement & { value: string };

const PANELS = ['chooser', 'queue', 'summary'] as const;
type Panel = (typeof PANELS)[number];

/**
 * Wire every <BcnSetupQueue> in `scope`. Idempotent per element.
 *
 * Openers: any element carrying `[data-setup-queue-open]` opens the drawer (its value may
 * name a specific queue id); the host also exposes the lego's own `show()` / `close()`.
 */
export function initSetupQueue(scope: ParentNode = document): void {
  for (const root of Array.from(scope.querySelectorAll<HTMLElement>('[data-sq]'))) {
    if (root.dataset.sqReady === 'true') continue;
    root.dataset.sqReady = 'true';
    wire(root);
  }
}

function wire(root: HTMLElement): void {
  const dialog = root as DialogEl;
  const componentName = root.dataset.sqComponent ?? 'this component';

  const panels = new Map<Panel, HTMLElement>();
  for (const el of Array.from(root.querySelectorAll<HTMLElement>('[data-sq-panel]'))) {
    panels.set(el.dataset.sqPanel as Panel, el);
  }

  const batchButtons = Array.from(root.querySelectorAll<HTMLElement>('[data-sq-batch]'));
  const allCards = Array.from(root.querySelectorAll<HTMLElement>('[data-sq-card]'));
  const cardsRegion = root.querySelector<HTMLElement>('[data-sq-cards]')!;
  const positionEl = root.querySelector<HTMLElement>('[data-sq-position]')!;
  const batchNameEl = root.querySelector<HTMLElement>('[data-sq-batch-name]')!;
  const barTrack = root.querySelector<HTMLElement>('[data-sq-bar] .esa-progress-bar__fill');
  const barRole = root.querySelector<HTMLElement>('[data-sq-bar] [role="progressbar"]');

  const srowPool = root.querySelector<HTMLElement>('[data-sq-srow-pool]')!;
  const srows = new Map<string, HTMLElement>();
  for (const row of Array.from(srowPool.querySelectorAll<HTMLElement>('[data-sq-srow]'))) {
    srows.set(row.dataset.sqSrow!, row);
  }
  const sumLists = new Map<Verdict, HTMLElement>();
  const sumGroups = new Map<Verdict, HTMLElement>();
  const sumCounts = new Map<Verdict, HTMLElement>();
  for (const v of ['applied', 'dismissed', 'skipped'] as Verdict[]) {
    sumLists.set(v, root.querySelector<HTMLElement>(`[data-sq-sum-list="${v}"]`)!);
    sumGroups.set(v, root.querySelector<HTMLElement>(`[data-sq-sum-group="${v}"]`)!);
    sumCounts.set(v, root.querySelector<HTMLElement>(`[data-sq-sum-count="${v}"]`)!);
  }
  const confirmBtn = root.querySelector<HTMLButtonElement>('[data-sq-confirm]');
  const sumLead = root.querySelector<HTMLElement>('[data-sq-sum-lead]')!;
  const sumActions = root.querySelector<HTMLElement>('[data-sq-sum-actions]')!;
  const sumEmpty = root.querySelector<HTMLElement>('[data-sq-sum-empty]')!;

  // ── state ────────────────────────────────────────────────────────────────────
  let batchKey = 'new';
  let batchLabel = '';
  let order: HTMLElement[] = [];
  let cursor = 0;
  const decisions = new Map<string, Decision>();

  // ── panels ───────────────────────────────────────────────────────────────────
  function showPanel(name: Panel): void {
    for (const [key, el] of panels) el.hidden = key !== name;
    for (const span of Array.from(root.querySelectorAll<HTMLElement>('[data-sq-foot]'))) {
      span.hidden = span.dataset.sqFoot !== name;
    }
  }

  // ── 1. the batch chooser ─────────────────────────────────────────────────────
  // The rows are ONE radiogroup with a roving tabindex: the chosen row is the only tab
  // stop, and the arrows move between them — the behaviour a radio group owes a keyboard.
  function selectBatch(btn: HTMLElement, focus = false): void {
    for (const b of batchButtons) {
      const chosen = b === btn;
      b.setAttribute('aria-checked', String(chosen));
      b.tabIndex = chosen ? 0 : -1;
    }
    batchKey = btn.dataset.sqBatch!;
    batchLabel = btn.dataset.sqBatchLabel ?? '';
    if (focus) btn.focus();
  }

  const ARROW_STEP: Record<string, number> = {
    ArrowDown: 1,
    ArrowRight: 1,
    ArrowUp: -1,
    ArrowLeft: -1,
  };

  for (const btn of batchButtons) {
    btn.addEventListener('click', () => selectBatch(btn));
    btn.addEventListener('keydown', (e) => {
      const step = ARROW_STEP[e.key];
      if (step) {
        e.preventDefault();
        const at = batchButtons.indexOf(btn);
        const next = (at + step + batchButtons.length) % batchButtons.length;
        selectBatch(batchButtons[next], true);
        return;
      }
      // Enter on a row starts straight away; Space only selects, as a radio should.
      if (e.key === 'Enter') {
        e.preventDefault();
        selectBatch(btn);
        startBatch();
      } else if (e.key === ' ') {
        e.preventDefault();
        selectBatch(btn);
      }
    });
  }
  const initial = batchButtons.find((b) => b.getAttribute('aria-checked') === 'true') ?? batchButtons[0];
  if (initial) selectBatch(initial);

  /** The batch filter — the whole point of the model: a finite, named set. */
  function inBatch(card: HTMLElement): boolean {
    if (batchKey === 'all') return true;
    if (batchKey === 'new') return card.dataset.sqNew === 'true';
    if (batchKey.startsWith('source:')) return card.dataset.sqSource === batchKey.slice(7);
    return true;
  }

  function startBatch(): void {
    order = allCards.filter(inBatch);
    cursor = 0;
    decisions.clear();
    if (!order.length) {
      // A batch with nothing in it is already finished — say so rather than open an
      // empty queue.
      buildSummary();
      showPanel('summary');
      return;
    }
    batchNameEl.textContent = batchLabel;
    showPanel('queue');
    showCard(0);
    root.dispatchEvent(
      new CustomEvent<SetupQueueStartDetail>('bcn-setup-queue:start', {
        detail: { batch: batchKey, label: batchLabel, count: order.length },
        bubbles: true,
        composed: true,
      }),
    );
  }

  // ── 2. the queue ─────────────────────────────────────────────────────────────
  function showCard(i: number): void {
    cursor = i;
    for (const card of allCards) card.hidden = card !== order[i];
    positionEl.textContent = `${i + 1} of ${order.length}`;
    const pct = Math.round((i / order.length) * 100);
    if (barTrack) barTrack.style.width = `${pct}%`;
    if (barRole) {
      barRole.setAttribute('aria-valuenow', String(pct));
      barRole.setAttribute('aria-label', `Reviewed ${i} of ${order.length} in this batch`);
    }
    cardsRegion.scrollTop = 0;
    // Focus moves to the card, so the change is announced and the ring is visible —
    // never to Apply, which would put a destructive-by-default action under Enter.
    order[i].focus();
  }

  function rationaleOf(card: HTMLElement): string {
    const field = card.querySelector<ValueEl>('[data-sq-rationale]');
    return (field?.value ?? '').trim();
  }

  function decide(verdict: Verdict): void {
    const card = order[cursor];
    if (!card) return;
    decisions.set(card.dataset.sqCard!, {
      verdict,
      rationale: verdict === 'skipped' ? '' : rationaleOf(card),
      actions: Number(card.dataset.sqActions ?? 0),
    });
    if (cursor + 1 < order.length) showCard(cursor + 1);
    else finish();
  }

  /** ← — step back one commitment and un-decide it, so nothing is stuck behind you. */
  function back(): void {
    if (cursor === 0) return;
    const previous = order[cursor - 1];
    decisions.delete(previous.dataset.sqCard!);
    showCard(cursor - 1);
  }

  root.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const decideBtn = target.closest<HTMLElement>('[data-sq-decide]');
    if (decideBtn && root.contains(decideBtn)) decide(decideBtn.dataset.sqDecide as Verdict);
  });

  // Keys are real, not a legend. Typing in the rationale never triggers them.
  root.addEventListener('keydown', (e) => {
    const panel = panels.get('queue');
    if (!panel || panel.hidden) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const target = e.target as HTMLElement | null;
    if (target?.closest('esa-textarea, textarea, input, [contenteditable="true"]')) return;
    const key = e.key.toLowerCase();
    if (key === 'a') {
      e.preventDefault();
      decide('applied');
    } else if (key === 'd') {
      e.preventDefault();
      decide('dismissed');
    } else if (key === 's') {
      e.preventDefault();
      decide('skipped');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      back();
    }
  });

  // ── 3. the summary — the end the current screen never has ────────────────────
  function buildSummary(): void {
    // Rows live in the pool between runs, so a second batch starts from a clean slate.
    for (const row of srows.values()) {
      const why = row.querySelector<HTMLElement>('[data-sq-srow-why]');
      if (why) {
        why.textContent = '';
        why.hidden = true;
      }
      srowPool.appendChild(row);
    }

    const buckets: Record<Verdict, string[]> = { applied: [], dismissed: [], skipped: [] };
    let actionsCreated = 0;

    for (const card of order) {
      const id = card.dataset.sqCard!;
      const decision = decisions.get(id);
      if (!decision) continue;
      buckets[decision.verdict].push(card.dataset.sqCode ?? id);
      const row = srows.get(id);
      if (row) {
        if (decision.rationale) {
          const why = row.querySelector<HTMLElement>('[data-sq-srow-why]');
          if (why) {
            why.textContent = decision.rationale;
            why.hidden = false;
          }
        }
        sumLists.get(decision.verdict)!.appendChild(row);
      }
      if (decision.verdict === 'applied') actionsCreated += decision.actions;
    }

    for (const v of ['applied', 'dismissed', 'skipped'] as Verdict[]) {
      const n = buckets[v].length;
      sumGroups.get(v)!.hidden = n === 0;
      sumCounts.get(v)!.textContent = n ? String(n) : '';
    }

    const decided = buckets.applied.length + buckets.dismissed.length;
    const notReached = order.length - decisions.size;
    sumLead.textContent = order.length
      ? `${batchLabel} — ${decided} of ${order.length} decided.`
      : `${batchLabel} — nothing left to review.`;

    const parts: string[] = [];
    parts.push(
      actionsCreated === 1
        ? `Saving creates 1 action on ${componentName}.`
        : `Saving creates ${actionsCreated} actions on ${componentName}.`,
    );
    if (buckets.skipped.length) {
      parts.push(
        `${buckets.skipped.length} skipped ${buckets.skipped.length === 1 ? 'commitment stays' : 'commitments stay'} undecided.`,
      );
    }
    if (notReached > 0) {
      parts.push(`${notReached} in this batch ${notReached === 1 ? 'was' : 'were'} not reached and stay undecided.`);
    }
    sumActions.textContent = parts.join(' ');
    sumEmpty.hidden = decided > 0;
    // Nothing to commit ⇒ nothing to confirm. esa-button carries its disabled LOOK on the
    // wrapper and its disabled BEHAVIOUR on the native control, so both move together.
    if (confirmBtn) {
      confirmBtn.disabled = decided === 0;
      confirmBtn.closest('.esa-button')?.classList.toggle('esa-button--disabled', decided === 0);
    }
  }

  function finish(): void {
    buildSummary();
    showPanel('summary');
  }

  function commit(): void {
    const buckets: Record<Verdict, string[]> = { applied: [], dismissed: [], skipped: [] };
    let actionsCreated = 0;
    for (const card of order) {
      const decision = decisions.get(card.dataset.sqCard!);
      if (!decision) continue;
      buckets[decision.verdict].push(card.dataset.sqCode ?? card.dataset.sqCard!);
      if (decision.verdict === 'applied') actionsCreated += decision.actions;
    }
    const detail: SetupQueueCommitDetail = {
      batch: batchKey,
      label: batchLabel,
      applied: buckets.applied,
      dismissed: buckets.dismissed,
      skipped: buckets.skipped,
      notReached: order.length - decisions.size,
      actionsCreated,
    };
    root.dispatchEvent(
      new CustomEvent<SetupQueueCommitDetail>('bcn-setup-queue:commit', {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
    const decided = buckets.applied.length + buckets.dismissed.length;
    toast(
      `${decided} ${decided === 1 ? 'decision' : 'decisions'} saved · ${actionsCreated} ${actionsCreated === 1 ? 'action' : 'actions'} created`,
      'success',
    );
    dialog.close();
  }

  // ── footer + step-back wiring ────────────────────────────────────────────────
  root.querySelector('[data-sq-start]')?.addEventListener('click', () => startBatch());
  root.querySelector('[data-sq-finish]')?.addEventListener('click', () => finish());
  root.querySelector('[data-sq-confirm]')?.addEventListener('click', () => commit());
  root.querySelector('[data-sq-change-batch]')?.addEventListener('click', () => reset());
  root.querySelector('[data-sq-back-to-queue]')?.addEventListener('click', () => {
    if (!order.length) {
      reset();
      return;
    }
    showPanel('queue');
    showCard(Math.min(cursor, order.length - 1));
  });
  root.querySelector<HTMLElement>('[data-sq-close]')?.addEventListener('click', () => dialog.close());

  /** Back to the chooser, everything cleared — the batch is the unit of work. */
  function reset(): void {
    order = [];
    cursor = 0;
    decisions.clear();
    for (const card of allCards) {
      card.hidden = true;
      const field = card.querySelector<ValueEl>('[data-sq-rationale]');
      if (field) field.value = '';
    }
    showPanel('chooser');
  }

  // Esc / backdrop / × all funnel through the lego's own close event.
  root.addEventListener('close', () => reset());

  // Openers: `[data-setup-queue-open]` — optionally naming a specific queue by id.
  document.addEventListener('click', (e) => {
    const trigger = (e.target as HTMLElement).closest<HTMLElement>('[data-setup-queue-open]');
    if (!trigger) return;
    const wanted = trigger.dataset.setupQueueOpen;
    if (wanted && wanted !== root.id) return;
    e.preventDefault();
    reset();
    dialog.show();
  });

  showPanel('chooser');
}
