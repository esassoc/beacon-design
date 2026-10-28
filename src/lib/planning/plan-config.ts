// A plan's configuration (2026-10-28, Andy approved the proposal's decisions 1 to 8): per level, which fields its
// elements carry and which modules their detail page shows, plus the lists the modules offer (document types,
// completion results, transmittal purposes, agencies). Settings, like a repository's: changing them makes no revision.
// The monitoring portal's model moved from the dashboard to the record: a module catalog (its widget registry), a
// layout per level (its saved layout), and a Configure screen with a live preview.
//
// Field definitions here stand in for Beacon's Custom Field Definitions with a Plan Element entity type and a
// plan-and-level join table (decision 7): one definitions table, one assignment table.

/** The value types a field can hold (Beacon's custom field types, plus the tag-like list and link in BCN-1778/1779). */
export type FieldType = 'text' | 'longtext' | 'number' | 'money' | 'date' | 'select' | 'multiselect' | 'yesno' | 'person' | 'link';

export const FIELD_TYPES: { value: FieldType; label: string }[] = [
  { value: 'text', label: 'Text' },
  { value: 'longtext', label: 'Long Text' },
  { value: 'number', label: 'Number' },
  { value: 'money', label: 'Money' },
  { value: 'date', label: 'Date' },
  { value: 'select', label: 'Choice' },
  { value: 'multiselect', label: 'Choices' },
  { value: 'yesno', label: 'Yes or No' },
  { value: 'person', label: 'Person' },
  { value: 'link', label: 'Link' },
];

export interface FieldDef {
  id: string;
  label: string;
  type: FieldType;
  /** For Choice and Choices. */
  options?: string[];
  help?: string;
}

/** Where a field shows, beyond the detail page (the Gantt's display columns are day-one configuration, 2026-09-28). */
export type FieldSurface = 'page' | 'drawer' | 'gantt' | 'sheet' | 'export';
export const FIELD_SURFACES: { value: FieldSurface; label: string }[] = [
  { value: 'page', label: 'Page' },
  { value: 'drawer', label: 'Drawer' },
  { value: 'gantt', label: 'Gantt Column' },
  { value: 'sheet', label: 'Sheet Column' },
  { value: 'export', label: 'Exports' },
];

/** A field assigned to a level (the join table): required to complete, never to create; where it shows. */
export interface LevelField {
  fieldId: string;
  requiredToComplete: boolean;
  shownIn: FieldSurface[];
}

export type ModuleKey = 'details' | 'schedule' | 'progress' | 'budget' | 'documents' | 'transmittals' | 'completion' | 'obligations' | 'comments' | 'activity';
/** Core and shared modules are on every page (they move, they don't go); optional ones are a level's choice;
 *  deliverable ones show on a deliverable at any level; parents ones only on elements with children. */
export type ModuleKind = 'core' | 'optional' | 'deliverable' | 'parents' | 'shared';

export interface ModuleMeta {
  key: ModuleKey;
  title: string;
  /** A spoke or registry icon name (planIcon / EsaIcon). */
  icon: string;
  kind: ModuleKind;
  /** One line for the Configure screen. */
  blurb: string;
}

export const MODULES: Record<ModuleKey, ModuleMeta> = {
  details: { key: 'details', title: 'Details', icon: 'file-text', kind: 'core', blurb: 'Status, owners, notes and the level’s fields' },
  schedule: { key: 'schedule', title: 'Schedule', icon: 'calendar', kind: 'core', blurb: 'Dates, what it waits on and what it blocks' },
  progress: { key: 'progress', title: 'Progress', icon: 'gauge', kind: 'parents', blurb: 'Deliverables earned against planned, health, what’s due' },
  budget: { key: 'budget', title: 'Budget', icon: 'sheet', kind: 'optional', blurb: 'Money by fiscal year, from the sheet' },
  documents: { key: 'documents', title: 'Documents', icon: 'files', kind: 'optional', blurb: 'Files and links, each with a date, type and note' },
  transmittals: { key: 'transmittals', title: 'Transmittals', icon: 'send', kind: 'deliverable', blurb: 'Every send, with receipt per recipient' },
  completion: { key: 'completion', title: 'Completion', icon: 'circle-check', kind: 'deliverable', blurb: 'Result, date, where it lives, who accepted' },
  obligations: { key: 'obligations', title: 'Obligations', icon: 'link', kind: 'optional', blurb: 'The obligations and commitments it serves' },
  comments: { key: 'comments', title: 'Comments', icon: 'message-square', kind: 'shared', blurb: 'Discussion' },
  activity: { key: 'activity', title: 'Activity', icon: 'history', kind: 'shared', blurb: 'Revisions, sends, receipts, completion' },
};

/** A module on a level's page: which column, on or off, and its options. */
export interface ModulePlacement {
  key: ModuleKey;
  column: 'main' | 'side';
  on: boolean;
  settings?: ModuleSettings;
}

export interface ModuleSettings {
  /** Budget: who sees it (WS4, role-based visibility). */
  visibleTo?: 'everyone' | 'editors';
  /** Documents: which types this level offers (empty: all of the plan's). */
  documentTypes?: string[];
  /** Schedule: a parent's children on a mini timeline. */
  childTimeline?: boolean;
}

export interface LevelConfig {
  fields: LevelField[];
  modules: ModulePlacement[];
  /** Any element at this level can be flagged a deliverable (decision 1: a flag, not a level). */
  canBeDeliverable: boolean;
}

export interface PlanConfig {
  /** The plan's field definitions. */
  fields: FieldDef[];
  /** Fields on every level, defined once. */
  allLevels: LevelField[];
  /** By level depth (1 is the top). */
  levels: Record<number, LevelConfig>;
  documentTypes: string[];
  /** Completion results. */
  results: string[];
  /** Transmittal purposes. */
  purposes: string[];
  agencies: string[];
  /** Days a To recipient has to confirm receipt (ProjectWise's default is 2). */
  ackDays: number;
  /** The template it came from, for the Configure screen's header. */
  template?: string;
}

/** The order a level's page lists its modules in, when a config doesn't say. */
export const MODULE_ORDER: ModuleKey[] = ['transmittals', 'progress', 'documents', 'schedule', 'comments', 'details', 'completion', 'obligations', 'budget', 'activity'];

const place = (key: ModuleKey, column: 'main' | 'side', on = true, settings?: ModuleSettings): ModulePlacement => ({ key, column, on, settings });
const field = (fieldId: string, requiredToComplete = false, shownIn: FieldSurface[] = ['page', 'drawer']): LevelField => ({ fieldId, requiredToComplete, shownIn });

/** The layout a parent level gets: progress and the children's timeline lead. */
function parentLayout(): ModulePlacement[] {
  return [
    place('progress', 'main'),
    place('schedule', 'main', true, { childTimeline: true }),
    place('documents', 'main'),
    place('comments', 'main'),
    place('details', 'side'),
    place('obligations', 'side'),
    place('budget', 'side', true, { visibleTo: 'editors' }),
    place('activity', 'side'),
    place('transmittals', 'main', false),
    place('completion', 'side', false),
  ];
}
/** The layout a task level gets: what it sends and holds lead. */
function taskLayout(): ModulePlacement[] {
  return [
    place('transmittals', 'main'),
    place('documents', 'main'),
    place('schedule', 'main'),
    place('comments', 'main'),
    place('details', 'side'),
    place('completion', 'side'),
    place('obligations', 'side'),
    place('budget', 'side', true, { visibleTo: 'editors' }),
    place('activity', 'side'),
    place('progress', 'side', false),
  ];
}

/** Templates: a saved plan configuration. "Study Program" is Aaron's, from the proposal's walkthrough. */
export const TEMPLATES: Record<string, () => PlanConfig> = {
  'Study Program': () => ({
    template: 'Study Program',
    fields: [
      { id: 'lead-agency', label: 'Lead Agency', type: 'select', options: ['CDFW', 'NMFS', 'USFWS', 'DWR'], help: 'The agency whose review this work answers to' },
      { id: 'authorization', label: 'Authorization', type: 'select', options: ['ITP (CESA 2081)', 'Federal BiOp', 'Both'] },
      { id: 'science-plan-status', label: 'Science Plan Status', type: 'select', options: ['Not Started', 'Draft', 'Agency Review', 'Final'] },
      { id: 'field-season', label: 'Field Season', type: 'select', options: ['Winter', 'Spring', 'Summer', 'Fall', 'Year-Round'] },
      { id: 'sampling-method', label: 'Sampling Method', type: 'text' },
      { id: 'deliverable-type', label: 'Deliverable Type', type: 'select', options: ['Science Plan', 'Technical Memo', 'Data Report', 'Presentation', 'Permit Application'] },
      { id: 'review-period', label: 'Review Period', type: 'number', help: 'Days the agency has to respond' },
      { id: 'agency-reviewer', label: 'Agency Reviewer', type: 'person' },
    ],
    allLevels: [field('lead-agency', false, ['page', 'drawer', 'gantt', 'export'])],
    levels: {
      1: { fields: [field('authorization')], modules: parentLayout(), canBeDeliverable: false },
      2: { fields: [field('science-plan-status', false, ['page', 'drawer', 'export'])], modules: parentLayout(), canBeDeliverable: false },
      3: { fields: [field('field-season'), field('sampling-method')], modules: parentLayout(), canBeDeliverable: true },
      4: {
        fields: [field('deliverable-type', true, ['page', 'drawer', 'export']), field('review-period'), field('agency-reviewer', true)],
        modules: taskLayout(),
        canBeDeliverable: true,
      },
    },
    documentTypes: ['Science Plan', 'Memo', 'Report', 'Presentation', 'Correspondence', 'Data', 'Permit'],
    results: ['Accepted', 'Accepted With Comments', 'Superseded', 'Withdrawn'],
    purposes: ['For Information', 'For Comment', 'For Review', 'For Approval', 'Final'],
    agencies: ['CDFW', 'NMFS', 'USFWS', 'DWR', 'USACE', 'CSLC'],
    ackDays: 2,
  }),
  Blank: () => ({
    template: 'Blank',
    fields: [],
    allLevels: [],
    levels: {},
    documentTypes: ['Memo', 'Report', 'Correspondence', 'Data'],
    results: ['Accepted', 'Accepted With Comments', 'Superseded', 'Withdrawn'],
    purposes: ['For Information', 'For Comment', 'For Review', 'For Approval', 'Final'],
    agencies: [],
    ackDays: 2,
  }),
};

/** A level's config, made up when the plan has none for that depth: the top levels as parents, the bottom as tasks. */
export function levelConfig(config: PlanConfig, depth: number, deepest: number): LevelConfig {
  return config.levels[depth] ?? { fields: [], modules: depth >= deepest ? taskLayout() : parentLayout(), canBeDeliverable: depth >= deepest };
}

/** The fields an element at a level carries: All Levels first, then the level's own. */
export function fieldsFor(config: PlanConfig, depth: number, deepest: number): { def: FieldDef; assign: LevelField }[] {
  const byId = new Map(config.fields.map((f) => [f.id, f]));
  return [...config.allLevels, ...levelConfig(config, depth, deepest).fields]
    .map((assign) => ({ def: byId.get(assign.fieldId)!, assign }))
    .filter((x) => !!x.def);
}

/** Every module, placed: the level's placements, then any module it doesn't mention, off, in the default order. */
export function modulesFor(config: PlanConfig, depth: number, deepest: number): ModulePlacement[] {
  const placed = levelConfig(config, depth, deepest).modules;
  const missing = MODULE_ORDER.filter((k) => !placed.some((p) => p.key === k)).map((k) => place(k, MODULES[k].kind === 'deliverable' || k === 'details' || k === 'activity' || k === 'budget' || k === 'obligations' ? 'side' : 'main', MODULES[k].kind === 'core' || MODULES[k].kind === 'shared'));
  return [...placed, ...missing];
}

export const clonePlanConfig = (config: PlanConfig): PlanConfig => JSON.parse(JSON.stringify(config)) as PlanConfig;
