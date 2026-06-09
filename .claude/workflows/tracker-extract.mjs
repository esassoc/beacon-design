export const meta = {
  name: 'tracker-extract',
  description: 'Extract requirement-tracker bespoke blocks into reusable bcn- components against frozen contracts',
  phases: [{ title: 'Extract', detail: 'one agent per new component file + token-fix on existing bcn components' }],
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED RULES — prepended to every agent. This is a verbatim EXTRACTION, not a
// redesign. The page already renders correctly; we are MOVING blocks into files.
// ─────────────────────────────────────────────────────────────────────────────
const RULES = `
You are refactoring an Astro spoke of @esa/ecology. You are EXTRACTING an existing,
working UI block from src/pages/prototypes/requirement-tracker.astro into a NEW,
reusable bcn- component file. This is a MECHANICAL MOVE — the rendered output must be
pixel-identical. Do NOT redesign, restyle, re-order, or "improve" anything beyond the
explicit token fixes below.

PROCESS:
1. Read src/pages/prototypes/requirement-tracker.astro to find the EXACT current
   markup, scoped CSS rules, and (if any) <script> JS for your block. Move them verbatim.
2. Read src/components/bcn/BcnRequirementReference.astro and BcnDiscussion.astro — these
   are the canonical pattern for header comment, scoped <style>, :global() for esa-*
   children, and co-located .ts (setupX/applyX). Match that house style exactly.
3. Write ONLY your new file(s). Do not edit the page or any other file.

CLASS RENAMING: every bespoke class you move gets a bcn- prefix per the names given in
your contract. You NEVER author an esa- class (those belong to hub legos).

TOKEN FIXES (apply while moving — these are the ONLY value changes allowed):
- NEVER read the raw --bcn-gray-* ramp. The theme contract says components read the
  SEMANTIC layer only. Replace:
    --bcn-gray-50  -> --color-background
    --bcn-gray-100 -> --color-border-light   (when used as a border)
    --bcn-gray-100 -> --color-surface-sunken (when used as a fill / background)
    --bcn-gray-200 -> --color-border
    --bcn-gray-300 -> --color-border-strong
  (--bcn-status-* and --color-* are FINE — only the gray ramp is off-limits.)
- Strip redundant/misleading fallbacks: var(--token, fallback) -> var(--token). Every
  --spacing-*, --radius-*, --shadow-*, --type-size-*, --font-weight-*, --color-*,
  --form-* token resolves; the fallback is noise (and some lie, e.g. --form-radius-md is
  4px in Beacon not the 8px some fallbacks claim). Keep fallbacks ONLY for component-local
  --_ custom props.
- var(--accent, #f9a134) -> var(--color-accent).

GLOBAL DESIGN RULES: 16px base minimum (genuine meta like timestamps may be smaller);
never style labels as uppercase+micro+letterspaced+gray; no colored left-border status
indicators (timeline spines are fine).

HOOK REQUIREMENT: a PreToolUse hook BLOCKS writing bespoke UI to .astro unless the file
contains a 'bcn-lego-checked:' comment. Your contract gives you the exact reason string —
include it as an HTML comment near the top of the component.

TYPESCRIPT: define the Props interface explicitly (types-first).

RETURN: only the structured summary object (your final text IS data, not prose).
`

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['files', 'exportSignatures', 'classRoot', 'legoChecked', 'deviations'],
  properties: {
    files: { type: 'array', items: { type: 'string' }, description: 'absolute or repo-relative paths written' },
    exportSignatures: { type: 'string', description: 'exact TS signatures exported by the .ts (or "none — presentational")' },
    classRoot: { type: 'string', description: 'the root bcn- class name' },
    legoChecked: { type: 'boolean', description: 'true if a bcn-lego-checked comment was included' },
    deviations: { type: 'string', description: 'anything you could NOT move verbatim, or "none"' },
  },
}

const TASKS = [
  {
    label: 'BcnStatusSelect',
    prompt: `${RULES}

CONTRACT — BcnStatusSelect (BEHAVIORAL: BcnStatusSelect.astro + status-select.ts)

Replaces the Status control in the dialog's Tracking section: the .rd-trackfield label +
the entire .rd-statusdd trigger/menu markup, ALL related CSS (.rd-trackfield, .rd-fieldlabel,
.rd-statusdd*, .rd-statusdot, .rd-statusdd__opt etc.), and the status-dropdown JS in the
page <script> (STATUS_DOT, STATUS_LABEL, setStatus, openStatusMenu, the trigger/option/
outside-click listeners).

Props (BcnStatusSelect.astro):
  interface Props { id?: string; label?: string; value?: 'not-started'|'in-progress'|'completed' }
  defaults: label='Status', value='not-started'
Three options ONLY: not-started / in-progress / completed (Not Started / In Progress / Completed).

ADOPT STATUS TOKENS for the dots (this is the one approved value change beyond RULES):
  not-started -> --bcn-status-not-started
  in-progress -> --bcn-status-in-progress
  completed   -> --bcn-status-completed
Drive ALL dot color through CSS keyed off a data-value attribute on the root (e.g.
.bcn-status-select[data-value="in-progress"] .bcn-status-select__dot--trigger { background: var(--bcn-status-in-progress) }
and each menu option's dot likewise). Carry ZERO hex in the JS — the controller only sets
root.dataset.value + aria + text + open state.

Class names (root: bcn-status-select): __label, __dd, __trigger, __dot, __value, __chev,
__menu, __opt. Preserve listbox a11y (role=listbox/option, aria-haspopup, aria-expanded,
aria-selected) exactly as the original.

status-select.ts MUST export EXACTLY:
  export type StatusValue = 'not-started' | 'in-progress' | 'completed';
  export interface StatusSelectController { readonly value: StatusValue; setValue(v: StatusValue): void; element: HTMLElement; }
  export function setupStatusSelect(root: HTMLElement): StatusSelectController;
Behavior: trigger toggles the menu; option click sets value (updates dataset.value, label
text, aria-selected) and closes; outside-click closes; on user selection dispatch
  root.dispatchEvent(new CustomEvent('change', { detail: { value }, bubbles: true }))
setValue(v) updates the UI WITHOUT firing 'change'. The component renders its own initial
value via the Props value (set data-value in the markup).

bcn-lego-checked reason (include verbatim-ish):
"bcn-lego-checked: no esa-* models a status select whose trigger shows the live status
color; esa-select cannot render a value-driven color dot in its own trigger. Checked
Ecology (esa-select, esa-dropdown-menu) and Beacon (status pill). bcn-status-select is the
reusable home; dots are token-driven (--bcn-status-*)."`,
  },
  {
    label: 'BcnFieldSection',
    prompt: `${RULES}

CONTRACT — BcnFieldSection (PRESENTATIONAL, no JS): BcnFieldSection.astro

Replaces the .rd-acc native <details> accordion used for the dialog's sidebar sections
(Tracking, Lists, Notifications, Change Log, Details). Move ALL .rd-acc* CSS
(.rd-acc, .rd-acc__summary, the ::after caret, ::-webkit-details-marker, the summary
:global(.esa-icon) color, .rd-acc__body).

Props:
  interface Props { icon: string; iconPaths?: string; title: string; open?: boolean }
Markup shape:
  <details class="bcn-field-section" open={open}>
    <summary class="bcn-field-section__summary">
      <EsaIcon name={icon} paths={iconPaths} size="sm" />
      <span class="bcn-field-section__title">{title}</span>
    </summary>
    <div class="bcn-field-section__body"><slot /></div>
  </details>
Import EsaIcon from '@esa/ecology/esa-icon.astro'. Keep the caret + marker-hiding behavior
identical. Class root: bcn-field-section.

bcn-lego-checked reason:
"bcn-lego-checked: no esa-* accordion/collapsible lego exists (checked the Ecology catalog —
none; Beacon uses native <details>). bcn-field-section wraps native <details> with the
standard icon+title summary and a body slot; reused across the tracking dialog's sections."`,
  },
  {
    label: 'BcnKeyValue',
    prompt: `${RULES}

CONTRACT — BcnKeyValue (PRESENTATIONAL, no JS): BcnKeyValue.astro

Replaces the .rd-kv read-only key/value/hint tier. Move .rd-kv, .rd-kv__key, .rd-kv__val,
.rd-kv__hint CSS verbatim (note: .rd-kv__key intentionally matches esa-select's field label
sizing — preserve that).

Props:
  interface Props { label: string; value?: string; hint?: string }
Markup:
  <div class="bcn-key-value">
    <span class="bcn-key-value__key">{label}</span>
    {value && <span class="bcn-key-value__val">{value}</span>}
    <slot />            {/* lets a host pass rich value content */}
    {hint && <span class="bcn-key-value__hint">{hint}</span>}
  </div>
Class root: bcn-key-value.

bcn-lego-checked reason:
"bcn-lego-checked: no esa-* key/value (description-list) lego — checked Ecology and Beacon.
bcn-key-value codifies the label -> value -> hint tier used in the dialog's Details and
Notifications sections."`,
  },
  {
    label: 'BcnChangeLog',
    prompt: `${RULES}

CONTRACT — BcnChangeLog (PRESENTATIONAL, no JS): BcnChangeLog.astro

Replaces the .rd-log date-grouped vertical timeline. Move ALL .rd-log* CSS verbatim. The
left border is the timeline SPINE (a rail), not a status indicator — keep it.

Props (turn the current hardcoded markup into this data shape):
  interface ChangeLogEvent { text: string; emphasis?: string; by: string }
  interface ChangeLogDay { date: string; events: ChangeLogEvent[] }
  interface Props { days: ChangeLogDay[] }
Each event renders: <span class="bcn-change-log__text">{text} {emphasis && <strong>{emphasis}</strong>}</span>
then <span class="bcn-change-log__by">{by}</span>. (Original examples: text "Status set to",
emphasis "In Progress", by "James Okafor · 9:12 AM".)
Class root: bcn-change-log (with __day, __date, __events, __event, __text, __by).

bcn-lego-checked reason:
"bcn-lego-checked: no esa-* timeline/changelog lego — checked Ecology and Beacon.
bcn-change-log is a date-grouped vertical timeline; the spine is a rail, not a status
left-border."`,
  },
  {
    label: 'BcnNotifications',
    prompt: `${RULES}

CONTRACT — BcnNotifications (PRESENTATIONAL, no JS): BcnNotifications.astro

Replaces the Notifications block body (.rd-notif and children). Move .rd-notif* CSS. It
composes legos: EsaBadge (dot warning) for the next-notification marker, EsaPill for
recipients, EsaIconLink for the "Edit recipients & triggers" link. The field labels in the
original reuse .rd-kv__key — give BcnNotifications its OWN label class (copy that sizing)
to avoid cross-component coupling; do NOT import BcnKeyValue.

Props:
  interface NotifTrigger { name: string; detail: string; on: boolean }
  interface Props {
    lead?: string; editHref?: string;
    recipients: string[]; triggers: NotifTrigger[];
  }
The "Next notification" date is set by the HOST at runtime — render it as
  <span data-bcn-notif-due>—</span>
so the page can query [data-bcn-notif-due] and set textContent. Defaults: editHref
'#data-catalog-action'. Import EsaBadge, EsaPill from '@esa/ecology/esa-badge.astro' /
'@esa/ecology/esa-pill.astro' and EsaIconLink from '@esa/ecology/esa-icon-link.astro'.
Class root: bcn-notifications (with __lead, __field, __label, __next, __recipients,
__triggers, __trigger, __trigger-name, __trigger-detail, and is-on/is-off modifiers — port
the .rd-notif-type.is-on / .is-off behavior verbatim).

bcn-lego-checked reason:
"bcn-lego-checked: no esa-* notification-settings lego — checked Ecology and Beacon.
bcn-notifications composes esa-pill / esa-badge / esa-icon-link into the per-action
notification summary."`,
  },
  {
    label: 'BcnEvidenceList',
    prompt: `${RULES}

CONTRACT — BcnEvidenceList (BEHAVIORAL: BcnEvidenceList.astro + evidence-list.ts)

Replaces the Evidence-of-Compliance card list: the <ul class="evi-list"> ... </ul> of
esa-card rows PLUS the .rd-row-actions ("Add New Evidence" / "Add Existing Evidence") that
follows it. Move ALL .evi-* CSS (.evi-list, .evi-item, .evi__head/__lead/__name/__actions/
__fields/__field/__label/__text/__pills, the esa-card :global overrides, the dense
icon-button sizing, the .evi-starred rule) and the evidence-card JS from the page <script>
(the document.querySelectorAll('.evi-item').forEach block: expand toggle, file-list
population, edit/delete/star).

Do NOT move the slide-up SHEET wrapper, its header (title/expected/download-all/close), or
the drawer geometry — those stay in the page. You own only the LIST + the row actions.

Props:
  interface EvidenceItem { id: string; title: string; notes: string; tags: string[]; files: string[] }
  interface Props { items: EvidenceItem[] }
Render each item as an <li class="bcn-evidence-card" data-... > wrapping <EsaCard padding="none">
exactly as the original (chevron lead, name, star/download/pencil/trash esa-icon-buttons,
collapsible __fields with Notes / Tags (EsaPill) / Files (EsaBadge count + <esa-file-list>)).
Keep data-title/data-notes/data-tags/data-files on the card for the controller. The star
"on" color uses var(--color-accent) (the --accent fix). Class root: bcn-evidence-list;
card root: bcn-evidence-card (expanded modifier: is-expanded; star-on: bcn-evidence-card__star--on).
Import EsaCard, EsaIcon, EsaIconButton, EsaPill, EsaBadge from their @esa/ecology paths.

evidence-list.ts MUST export EXACTLY:
  export interface EvidenceCardData { id: string; title: string; notes: string; tags: string[]; files: string[] }
  export interface EvidenceListOptions { onEdit?(data: EvidenceCardData): void }
  export function setupEvidenceList(root: HTMLElement, opts?: EvidenceListOptions): void;
Behavior (port verbatim from the page): per-card lead click toggles is-expanded + body
hidden; populate each card's <esa-file-list> from data-files via files property
(name + href '#file', download-only); edit button (aria-label "Edit evidence") calls
opts.onEdit(<data read from the card's data-* attrs>); delete (aria-label "Delete evidence")
removes the card; star (aria-label "Add to summary page") toggles aria-pressed +
bcn-evidence-card__star--on. Select icon-buttons by aria-label (esa-icon-button drops
classes), same as the original.

bcn-lego-checked reason:
"bcn-lego-checked: esa-card IS the lego (one per row); the collapsible list, dense action
rail, and esa-file-list population are composition with no single esa-* equivalent. Checked
Ecology and Beacon. bcn-evidence-list is the reusable Evidence-of-Compliance list."`,
  },
  {
    label: 'fix-existing-bcn-tokens',
    prompt: `${RULES}

CONTRACT — token fixes to the TWO EXISTING bcn components (EDIT in place, do NOT create files):
  src/components/bcn/BcnRequirementReference.astro
  src/components/bcn/BcnDiscussion.astro

These already render correctly and already carry bcn-lego-checked comments. Make ONLY these
changes, nothing else (no class renames, no layout changes):
1. Replace every raw --bcn-gray-* read with its semantic equivalent per the RULES map:
   - BcnRequirementReference: --bcn-gray-50 (background fill) -> --color-background;
     --bcn-gray-200 (borders) -> --color-border; --bcn-gray-100 (borders) -> --color-border-light.
   - BcnDiscussion: --bcn-gray-200 (the timeline spine background) -> --color-border.
   Verify each by its USE (fill vs border) before choosing surface-sunken vs border-light.
2. Strip redundant token fallbacks: var(--radius-300, 0.5rem) -> var(--radius-300);
   var(--type-size-100, 0.875rem) -> var(--type-size-100); var(--type-size-200, 1rem) ->
   var(--type-size-200); var(--spacing-600, 2rem) -> var(--spacing-600); and any similar
   load-bearing-looking fallback on a real token. Keep --_ local-var fallbacks.
Return files=[the two paths], exportSignatures="none — token edits", classRoot="n/a",
legoChecked=true, deviations=anything you intentionally left.`,
  },
]

phase('Extract')
const results = await parallel(
  TASKS.map((t) => () => agent(t.prompt, { label: t.label, phase: 'Extract', schema: SCHEMA })),
)

return TASKS.map((t, i) => ({ task: t.label, ...(results[i] || { failed: true }) }))
