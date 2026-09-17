// OBLIGATION TRACKING — the four views, on the same fixture as the setup wizard.
//
// This page and setup step 5 read one fixture: the ITP pass of 2026-09-14 — 854 requirements
// and the 333 obligations drafted from them, each carrying the requirements it came from.
//
// ─────────────────────────────────────────────────────────────────────────────────────
// HOW A DUTY REACHES THE FEED — TWO STAGES, and only the first is software
// ─────────────────────────────────────────────────────────────────────────────────────
//
// STAGE 1 — NARROW, deterministically. An incoming event carries structured facts; so does
// an obligation, through its requirements. Candidates are the duties that share one:
//
//     event species         ↔ RequirementSpecies
//     event activity        ↔ RequirementConstructionActivity
//     season / phase        ↔ RequirementSeason / RequirementPhase
//
// This is a real join to real entities. It is reproducible, and it can be explained to an
// agency: "this duty was raised because the observation named giant garter snake."
//
// STAGE 2 — RANK, with an AI relevance service. Narrowing gets the candidate set; it does not
// decide which duties a person should actually look at. That judgement lives in the
// obligation's TRIGGER — the permit's own sentence describing when the duty applies — and it
// cannot be done with string matching. Kim, 2026-09-16: the trigger stays a driving factor,
// but it needs something more sophisticated than text-to-text.
//
// WHY THE TRIGGER CANNOT BE MATCHED DIRECTLY. It is prose a regex scraped out of requirement
// text, present on 157 of 333 obligations, and the values look like this:
//     "if there are any…"
//     "upon Project operations"
//     "Upon mutual agreement, representatives from Reclamation, USFWS and NMFS may also attend"
// Software cannot evaluate those. A model reading them against an event's description can.
//
// THIS DOES NOT REVERSE THE AI-AT-AUTHORING-TIME DECISION (exploration notes §18.5). That
// decision was about DEADLINES: an agency asks "why was this due Thursday?", so offset and
// unit are extracted once, approved by a human, and the runtime does arithmetic. RELEVANCE is
// a different question — nothing legal turns on which duties an awareness feed surfaces, and
// there is no arithmetic that could answer it.
//
// WHAT IS SIMULATED HERE. Stage 1 runs for real against the fixture. Stage 2 does not — a
// build step cannot call a model — so every raised duty carries its trigger text as the
// reason, and the page says the ranking is not running. Do not read the ordering as a model's.
//
// ─────────────────────────────────────────────────────────────────────────────────────
// WHERE THE EVENTS COME FROM
// ─────────────────────────────────────────────────────────────────────────────────────
//
// Beacon already runs an EVENT HUB: Beacon.EventHubListener, Azure Event Hubs + Functions,
// with five live topics — `observations`, `dmrs`, `sitereports`, `surveys`,
// `processedreports`. The seeds below are shaped like ObservationEventDto, which carries
// ObservationType, a Concern flag, SiteName, ConstructionPackage, lat/long, photos, and an
// ObservationTypeMetadata block with Species and BufferDistanceFt. That is the matching side
// of stage 1, and it is why the seeds name species and activities rather than prose.
//
// NOT YET EVENTS, and both need building (2026-09-16 meeting notes):
//   · EVIDENCE OF COMPLIANCE added anywhere on the site. `EvidenceOfCompliance` is a real
//     table; there is no topic and no listener.
//   · SEASONS coming into effect. `ProjectSeason` is real, with start/end day and month and a
//     `Tracked` flag, and Beacon.API/Services/Scheduling/Jobs already runs scheduled jobs —
//     so a daily job has a home. The notes want lead-up events (7 days out, 1 day before,
//     day of) and ask whether that is configurable.
//   · CONSTRUCTION ACTIVITIES as a feed. No topic.
//
// WHAT EACH CLASS SHOULD REALLY RESPOND TO (2026-09-16). Class predicts the kind of event
// that moves a duty, and only one of the four is genuinely event-driven today:
//
//   Notify   3    a field event — report it. Event-driven.
//   Adhere   260  a standing rule. What is event-shaped is a BREACH, not a sighting —
//                 a turbidity exceedance against the turbidity limit.
//   Monitor  64   a standing cadence. The event is evidence arriving, or failing to.
//   Roster   6    a standing qualification. The event is a STAFF CHANGE.
//
// Roster is out of the timeline as of 2026-09-16. Adhere and Monitor are still raised by
// sightings, which is a placeholder: what they should answer to is a breach event and an
// evidence event, neither of which exists yet.
//
// STILL OPEN, carried from the meeting notes: Actions ↔ Obligations triggering each other —
// an action completing puts obligations into effect, and an obligation possibly creating or
// prioritising an action. Whether an obligation can trigger an action at all is unsettled
// while the trigger is a text field, and there is no obligation-instance concept.
//
// SEASONS AND PHASES ARE IN NEITHER THE TIMELINE NOR A VIEW, as of 2026-09-17. They lived in
// Ongoing until Pinned replaced it. The meeting notes list seasons under NEW FEEDS with their
// own lead-up events (7 days out, 1 day before, day of), which would make them timeline rows;
// that is unresolved. Phase was never a row and should not become one — "the project is in
// Construction" scopes 260 duties and says nothing about which are live.

import {
  OBLIGATION_CLASS_LABEL,
  OBLIGATION_FILING,
  OBLIGATION_NODES,
  OBLIGATION_TREE_TOTALS,
  type ObligationClass,
  type ObligationNode,
} from './setup-wizard';

/** Fixed, so the page never depends on the real clock. */
export const NOW = new Date('2026-09-16T09:20:00Z');

const majorOf = (o: ObligationNode) => OBLIGATION_FILING.get(o.id)?.catName ?? 'Unfiled';
const minorOf = (o: ObligationNode) => OBLIGATION_FILING.get(o.id)?.subName ?? 'Unfiled';

// ── The event log ────────────────────────────────────────────────────────────────────
//
// AUTHORED, and shaped like the Fulcrum payload Beacon already receives. Species and
// activity names are matched loosely because the fixture spells them inconsistently
// ("Giant Garter Snake" / "giant garter snake").

export type EventSource = 'observation' | 'site report' | 'dmr';

/**
 * THE REAL OBSERVATION TYPES — prod's own vocabulary, and there are only three.
 *
 * `Observation.ObservationType` is a plain VARCHAR(255) with no lookup table and no foreign
 * key: the string arrives from Fulcrum as-is. The vocabulary lives CLIENT-SIDE, in the Angular
 * app's `ObservationTypes` constant (observation-polling.service.ts), and the compliance view
 * and fledging-countdown gate are both computed off it — see ObservationComplianceDto's own
 * comment. So the set is enumerated in the app and unconstrained in the database: a fourth
 * string would store cleanly and classify as nothing.
 *
 * An earlier pass invented four types — "Species observation", "Injured wildlife", "Water
 * quality exceedance" — which read as plausible because they sound like the domain. They do
 * not exist. Kim caught it, 2026-09-16.
 *
 * WHAT THAT COSTS THE PAGE, and it is worth seeing rather than hiding: five events that looked
 * like five different kinds of thing collapse into three, and two of those three are the same
 * label. The incoming type tells a reader much less than the invented ones implied.
 *
 * SOURCE AND TYPE ARE DIFFERENT THINGS, and an earlier pass ran them together. SOURCE is the
 * Event Hub topic a record arrived on — `observations`, `sitereports`, `dmrs` — and those ARE
 * enumerated, by the listeners themselves. ObservationType is a field that exists only on
 * observations. A site report does not become an observation just because its own sub-type is
 * unenumerated; it is still a site report. (Kim, 2026-09-16.)
 *
 * So a row's kind is the ObservationType label for observations, and the source itself for
 * site reports and DMRs. `SiteReport.Type` is free text with no vocabulary anywhere, so it is
 * shown as a labelled detail and never dressed up as a classification.
 */
export const OBSERVATION_TYPES = {
  nestingBird: { key: 'Nesting Bird', label: 'Nesting Birds' },
  complianceConcern: { key: 'Compliance Concern', label: 'Compliance Concerns' },
  resource: { key: 'Resource', label: 'Biological Resources' },
} as const;

type ObservationTypeKey = (typeof OBSERVATION_TYPES)[keyof typeof OBSERVATION_TYPES]['key'];

interface EventSeed {
  id: string;
  /** ObservationEventDto.Title — what happened, in the reporter's words. */
  what: string;
  source: EventSource;
  /**
   * ObservationEventDto.ObservationType — one of prod's three. OBSERVATIONS ONLY; a site
   * report or DMR carries no such field.
   */
  type?: ObservationTypeKey;
  /**
   * SiteReport.Type — LEFT UNSET ON PURPOSE.
   *
   * The column is real: SiteReportListener does `siteReport.Type = eventDto.Type`, passing a
   * string straight through from Fulcrum. But there is no vocabulary for it anywhere — not a
   * lookup table, not a constant, not a frontend classification. (The ReportType entity in
   * Beacon.Web is a different thing entirely: the Report/ReportTemplate system, which has a
   * real ReportTypeID FK.)
   *
   * An earlier pass authored "Water quality monitoring" here and showed it as a subtitle,
   * which made an invented string look like a classification — the same mistake as the
   * invented observation types, one turn later. Kim caught both. Until somebody reads what
   * Fulcrum actually sends, a site report has a source and no sub-kind, and the row shows
   * exactly that.
   */
  reportType?: string;
  /** ObservationEventDto.SiteName. */
  where: string;
  reportedBy: string;
  /** ObservationEventDto.Concern — the field form's own "this is a problem" flag. */
  concern: boolean;
  at: string;
  /** ObservationTypeMetadata.Species. */
  species?: string[];
  /** ObservationTypeMetadata.BufferDistanceFt. */
  bufferFt?: number;
  /** Derived from ConstructionPackage / the activity under way. */
  activities?: string[];
  /** SiteReportEventDto.ConstructionActivity. Site reports only. */
  activity?: string;
  /** SiteReportEventDto.PersonnelOnsite. Site reports only. */
  personnel?: string[];
  /** DailyMonitoringReportEventDto.ConstructionPackage. DMRs only. */
  constructionPackage?: string;
  /** DailyMonitoringReportEventDto.WeatherConditions. DMRs only. */
  weather?: string;
  /** DailyMonitoringReportEventDto.AirTempCurrent, in degrees F. DMRs only. */
  airTempF?: number;
  /** DailyMonitoringReportEventDto.Precipitation, in inches. DMRs only. */
  precipitationIn?: number;
}

const SEEDS: EventSeed[] = [
  {
    id: 'obs-ggs',
    what: 'Giant garter snake seen in an irrigation canal at the work edge',
    source: 'observation',
    type: OBSERVATION_TYPES.resource.key,
    where: 'Reach 3 — canal crossing',
    reportedBy: 'A. Mendes, biological monitor',
    concern: true,
    at: '2026-09-16T08:35:00Z',
    species: ['giant garter snake'],
    bufferFt: 200,
  },
  {
    id: 'obs-hawk',
    what: "Injured Swainson's hawk recovered near a haul road",
    source: 'observation',
    // An injured listed bird is a problem, not an inventory entry — Concern is what the field
    // form flags, and Compliance Concern is the type that carries it.
    type: OBSERVATION_TYPES.complianceConcern.key,
    where: 'North haul road',
    reportedBy: 'R. Osei, biological monitor',
    concern: true,
    at: '2026-09-16T07:10:00Z',
    species: ["swainson's hawk"],
  },
  {
    id: 'obs-trbl',
    what: 'Active tricolored blackbird colony found in the staging buffer',
    source: 'observation',
    type: OBSERVATION_TYPES.nestingBird.key,
    where: 'Staging area 2',
    reportedBy: 'J. Whitfield, avian lead',
    concern: false,
    at: '2026-09-15T15:40:00Z',
    species: ['tricolored blackbird'],
    bufferFt: 1300,
  },
  {
    id: 'sr-turbid',
    what: 'Turbidity above the approved threshold downstream of dewatering',
    source: 'site report',
    activity: 'Dewatering and fish isolation',
    personnel: ['Water quality team', 'M. Okafor'],
    where: 'Compliance point 3',
    reportedBy: 'Water quality team',
    concern: true,
    at: '2026-09-15T11:25:00Z',
    activities: ['Water diversions and intake operations'],
  },
  {
    // THE THIRD LIVE TOPIC. Until now every seed was an observation, so the page had never
    // rendered a record whose payload lacks SiteName, species and a concern flag entirely — the
    // shape a DMR actually has. It reaches the feed through its construction activity.
    id: 'dmr-daily',
    what: 'Daily monitoring report — in-water work at the intake',
    source: 'dmr',
    where: 'Reach 2',
    reportedBy: 'D. Vance, field person',
    concern: false,
    at: '2026-09-15T17:05:00Z',
    activities: ['In-water and in-channel work'],
    constructionPackage: 'CP-2 Intake',
    weather: 'Overcast, light wind',
    airTempF: 68,
    precipitationIn: 0,
  },
  {
    id: 'obs-cts',
    what: 'California tiger salamander found inside exclusion fencing',
    source: 'observation',
    // Inside the fencing is a breach of the exclusion, not a sighting.
    type: OBSERVATION_TYPES.complianceConcern.key,
    where: 'Reach 1 — upland margin',
    reportedBy: 'Wildlife capture crew',
    concern: true,
    at: '2026-09-14T09:05:00Z',
    species: ['california tiger salamander'],
    activities: ['Wildlife capture, handling and relocation'],
  },
];

// ── Stage 1: narrow ──────────────────────────────────────────────────────────────────

/**
 * One fact that put a duty in front of the reader: the duty names the same species or
 * activity the event does, through its requirements. Both kinds are CONFIRMED and
 * defensible to an agency — nothing else reaches the feed.
 */
export interface MatchFact {
  kind: 'species' | 'activity' | 'any-species' | 'trigger';
  value: string;
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z]/g, '');

/**
 * SCOPE THAT STAGE 1 CANNOT RESOLVE — counted here, and deliberately NOT rendered as rows.
 *
 * Showing these as candidates put the SAME 32 rows under every species event and answered
 * nothing; Kim, 2026-09-16: "I don't understand the candidate... some of them seem
 * incomplete." Fair — a candidate set presented as content reads as noise. The count is the
 * useful artefact, and it is the clearest argument for stage 2 existing.
 *
 * 36 obligations carry no species list but talk about "Covered Species". Some really do apply
 * to all of them; others are scoped to a subset the prose names in passing. The worked
 * example, found by Kim on 2026-09-16:
 *
 *   "Permitted personnel for studies that may take Covered Fish Species"
 *   → "...all Covered Species Monitoring and Scientific Studies which may result in take of
 *      DS, LFS, CHNWR, CHNSR, and WS..."
 *
 * That is FISH — Delta smelt, longfin smelt, two Chinook runs, white sturgeon — and a giant
 * garter snake sighting was raising it.
 *
 * THE REGEX FIX DOES NOT EXIST. Tightening the phrase (reject "Covered <word> Species") drops
 * ZERO of the 36, because the plain phrase also appears in the same text. The scope lives in a
 * take list of abbreviations and in the title, not in a matchable pattern. Measured, not
 * assumed.
 *
 * So these stay candidates, marked UNVERIFIED rather than presented as matches. Deciding
 * whether the species is in scope is exactly the judgement stage 2 exists to make.
 */
const mentionsCoveredSpecies = (o: ObligationNode) =>
  o.species.length === 0 && /covered\s+species/i.test(`${o.title} ${o.description}`);

/**
 * THE NARROW RESTORATION (Kim, 2026-09-16), and why it is scoped to NOTIFY ALONE.
 *
 * Removing the blanket candidate path took the three Notify duties out of the feed entirely,
 * because none of them names a species or an activity — there is nothing for stage 1 to join
 * on. The result was absurd: "Covered Species Encounter Reporting to the Biologist", whose
 * requirement reads "inform the Designated Biologist… if they encounter any Covered Species",
 * could not be raised by a species encounter. Notify is the ONLY genuinely event-driven class,
 * so the feed could not reach the one class that most needs reaching.
 *
 * Restored for Notify only. All three were read individually and all three are universal in
 * scope; the duty that made the blanket rule indefensible — "Permitted personnel for studies
 * that may take Covered FISH Species" — is Roster, which no longer enters the feed at all.
 * Three rows per species event, under a heading a reader can judge, instead of thirty-two
 * across every class.
 *
 * THIS IS STILL A KEYWORD RULE AND STILL A PLACEHOLDER. It works because there are three of
 * them and a person read all three. It does not generalise, and it is exactly the judgement
 * stage 2 exists to make. Do not widen it to another class without reading that class's rows.
 */
const appliesToAnySpecies = (o: ObligationNode) => o.class === 'notify' && mentionsCoveredSpecies(o);

export const UNVERIFIED_SCOPE = {
  count: OBLIGATION_NODES.filter(mentionsCoveredSpecies).length,
};

/**
 * ROSTER DUTIES ARE NOT EVENT-DRIVEN. Kim, 2026-09-16: a roster obligation is a standing
 * qualification — "you must have a permitted handler" is true today whether or not anyone saw
 * anything. An observation does not create it; at most it makes it salient. What actually
 * changes one is A CHANGE IN STAFF: somebody joins, leaves, or their permit lapses.
 *
 * That is a fifth event source nobody has listed — not in the meeting notes, and not a Fulcrum
 * topic. Until it exists, a roster duty reaches a reader only because they pinned it — never
 * through the timeline.
 */
const isEventDriven = (o: ObligationNode) => o.class !== 'roster';

const factsFor = (e: EventSeed, o: ObligationNode): MatchFact[] => {
  if (!isEventDriven(o)) return [];
  const facts: MatchFact[] = [];
  for (const s of e.species ?? []) {
    const hit = o.species.find((os) => norm(os) === norm(s));
    // The EVENT's spelling, never the obligation's. The fixture writes the same animal three
    // ways ("Giant Garter Snake" / "giant garter snake" / "Giant garter snake"), and echoing
    // whichever the duty happened to use made one species look like three.
    if (hit) facts.push({ kind: 'species', value: s });
    else if (appliesToAnySpecies(o)) facts.push({ kind: 'any-species', value: 'any covered species' });
  }
  for (const a of e.activities ?? []) {
    if (o.activities.some((oa) => norm(oa) === norm(a))) facts.push({ kind: 'activity', value: a });
  }
  return facts;
};

// ── Stage 2: rank — NOT RUNNING ──────────────────────────────────────────────────────

/**
 * A duty raised by an event. `matchedOn` is stage 1 and is real. `trigger` is the permit's
 * own sentence for when this duty applies — it is what an AI relevance service would read to
 * decide whether the duty genuinely relates to this event, and it is shown to the reader as
 * the reason. No ranking has been applied.
 */
export interface RaisedDuty {
  obligation: ObligationNode;
  matchedOn: MatchFact[];
  trigger: string;
}

/**
 * STAGE 2, SIMULATED — the only duties on this page that arrive by TRIGGER.
 *
 * Everything else reaches the feed through a join: the duty's requirements name the species or
 * the activity the event named. That association is implicit and obvious, so the row says
 * nothing about it. A TRIGGER match is different and stronger: it is a duty whose permit text
 * describes THIS situation, found by reading rather than by joining — and the three below
 * cannot be reached any other way, because they carry no species and no activity at all.
 *
 * Kim, 2026-09-16: the trigger should outrank the implicit association, and the page needs an
 * example of a duty that arrives that way.
 *
 * AUTHORED. A build step cannot call a model, so these are the answers a relevance service
 * would be expected to return, written by hand against real trigger text. The trigger text
 * itself is real; the judgement that it matches the event is the simulated part.
 */
export const TRIGGER_MATCHES: Record<string, { id: string; why: string }[]> = {
  'obs-hawk': [
    {
      id: 'obl_01M2G6Y3K6F3VSR2GCE566TNFW', // Care of covered species injured by covered activities
      why: 'The duty is written for an injured covered species; this bird was recovered injured.',
    },
    {
      id: 'obl_01M2G6YKKH7P3XH3JHE4Y9KPEM', // Work Stoppage on Covered Species Encounter
      why: 'Work stops on encountering any covered species — a listed hawk on a haul road is one.',
    },
  ],
  'obs-ggs': [
    {
      id: 'obl_01M2G6YKKH7P3XH3JHE4Y9KPEM',
      why: 'Work stops on encountering any covered species, whatever the species is.',
    },
    {
      id: 'obl_01M2G6YKKH7P3XH3JHE4Y9KPEH', // Avoidance Measures in Unmapped Habitat
      why: 'A canal at the work edge is outside the modelled habitat, which is what this duty covers.',
    },
  ],
  'dmr-daily': [
    {
      id: 'obl_01M2G6Y3757AMQWDRRZPPRX5X5', // Dewatering pump shutdown
      why: 'The report logs in-water work with dewatering under way, which is when this duty applies.',
    },
    {
      id: 'obl_01M2G6Y3GTRYAK61ZHAYGX6G9X', // Watch for distressed or injured fish during pile driving
      why: 'In-water work at the intake is the condition this watch is written for.',
    },
  ],
  'sr-turbid': [
    {
      id: 'obl_01M2G6YKM0HYHZPHBXBXTP9J36', // Storm Onset Work Restriction
      why: 'Erosion and turbidity controls are what this duty governs; the threshold was exceeded downstream of dewatering.',
    },
  ],
  'obs-cts': [
    {
      id: 'obl_01M2G6YKKH7P3XH3JHE4Y9KPEM',
      why: 'Work stops on encountering any covered species; the animal was inside the exclusion.',
    },
  ],
};

export const RANKING = {
  running: false,
  withTrigger: OBLIGATION_NODES.filter((o) => o.trigger).length,
  total: OBLIGATION_NODES.length,
};

// ── All: the timeline ────────────────────────────────────────────────────────────────

export interface FeedEvent {
  id: string;
  what: string;
  source: EventSource;
  where: string;
  reportedBy: string;
  concern: boolean;
  at: string;
  when: string;
  /**
   * Present on OBSERVATIONS ONLY — site reports and DMRs carry no ObservationType, and neither
   * seed sets one. This was declared TWICE, once as a required `type: string` (the leftover from
   * when every event was assumed to be an observation) and once as this optional. TypeScript
   * calls that TS2300 and rejects it; esbuild strips types, so it compiled for a day.
   */
  type?: string;
  /** Present on site reports only. */
  reportType?: string;
  activity?: string;
  personnel?: string[];
  constructionPackage?: string;
  weather?: string;
  airTempF?: number;
  precipitationIn?: number;
  species: string[];
  bufferFt?: number;
  raised: RaisedDuty[];
}

const hoursSince = (iso: string) => (NOW.getTime() - new Date(iso).getTime()) / 3_600_000;

const relative = (iso: string) => {
  const h = hoursSince(iso);
  if (h < 1) return `${Math.max(1, Math.round(h * 60))}m ago`;
  if (h < 24) return `${Math.round(h)}h ago`;
  const d = Math.round(h / 24);
  return d === 1 ? 'Yesterday' : `${d}d ago`;
};

/**
 * WHAT AN EVENT ACTUALLY SURFACES — Notify duties and trigger matches, nothing else.
 *
 * A giant garter snake sighting matched 65 duties through the species join, and every one was a
 * real giant-garter-snake duty. They were still the wrong thing to show: 49 were ADHERE rules
 * already in force — burrow buffers, exclusion fencing, mowing patterns — that the sighting did
 * not switch on, and 16 were MONITOR cadences that run on a schedule regardless. Neither
 * becomes true because somebody saw a snake; the sighting only means they now bite in a
 * particular place.
 *
 * This is the same argument that moved Monitor out of To-do and Roster out of the timeline,
 * applied one level up. What an EVENT surfaces is what the
 * event made newly true:
 *
 *   · NOTIFY        somebody must report this, because this happened
 *   · TRIGGER match the permit text describes this situation
 *
 * That is 3-5 duties per event instead of 70, and every one of them is something a person acts
 * on today. (Kim, 2026-09-16: "the number of obligations in each tab" should be realistic.)
 *
 * THE COST, STATED: the association-matched duties are no longer reachable from the feed at
 * all. They are correct and they are real — the join is sound — but they are only in force when
 * their activity is under way. If a reader needs "everything this
 * species touches", that is a registry query, not a timeline.
 */
const surfaces = (r: RaisedDuty) =>
  r.obligation.class === 'notify' || r.matchedOn.some((m) => m.kind === 'trigger');

export const EVENTS: FeedEvent[] = SEEDS.map((e) => {
  const byTrigger = new Map((TRIGGER_MATCHES[e.id] ?? []).map((t) => [t.id, t.why]));
  const raised: RaisedDuty[] = [];
  for (const o of OBLIGATION_NODES) {
    const why = byTrigger.get(o.id);
    // A trigger match outranks a join and replaces it — the reason is the permit text, not
    // the fact that two records happen to name the same species.
    if (why) {
      raised.push({ obligation: o, matchedOn: [{ kind: 'trigger', value: why }], trigger: o.trigger });
      continue;
    }
    const matchedOn = factsFor(e, o);
    if (matchedOn.length) raised.push({ obligation: o, matchedOn, trigger: o.trigger });
  }
  const surfaced = raised.filter(surfaces);
  surfaced.sort(
    (a, b) =>
      Number(b.matchedOn.some((m) => m.kind === 'trigger')) -
      Number(a.matchedOn.some((m) => m.kind === 'trigger')),
  );
  return {
    id: e.id,
    what: e.what,
    source: e.source,
    where: e.where,
    reportedBy: e.reportedBy,
    concern: e.concern,
    at: e.at,
    when: relative(e.at),
    type: e.type,
    reportType: e.reportType,
    activity: e.activity,
    personnel: e.personnel,
    constructionPackage: e.constructionPackage,
    weather: e.weather,
    airTempF: e.airTempF,
    precipitationIn: e.precipitationIn,
    species: e.species ?? [],
    bufferFt: e.bufferFt,
    raised: surfaced,
  };
})
  .filter((e) => e.raised.length > 0)
  .sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime());

// ── To-do: duties that carry a follow-up ─────────────────────────────────────────────
//
// Kim, 2026-09-16: To-do is the view for obligations WITH A FOLLOW-UP — somebody must produce
// something — not "owed by a time". That is a property of the duty, which is what makes the
// view buildable at all: this fixture has no notice-window field.
//
// THE FOLLOW-UP IS NOTIFY ONLY (Kim, 2026-09-16, revising the same day).
//
// Monitor was included for one turn, because Notify alone had produced zero rows at the time
// and the view needed something in it. Two things changed. The any-species restoration means
// the three Notify duties now reach the feed on their own, so the view is no longer empty.
// And Kim's expected volume — "to-do would be more like 0-3" — only holds for Notify.
//
// The volume target is the smaller argument; the definition is the real one. A MONITOR duty is
// a standing cadence: somebody surveys on a schedule for as long as the duty holds. That is
// something that is ON, not something that is OWED. A NOTIFY duty
// is owed BECAUSE THIS EVENT HAPPENED, and stops being owed once it is done. Only the second
// is a to-do.
//
// Whether an obligation should spawn an actual Action is the open Actions ↔ Obligations
// question from the meeting notes, and it is not settled here.

const hasFollowUp = (o: ObligationNode) => o.class === 'notify';

export interface TodoRow {
  obligation: ObligationNode;
  matchedOn: MatchFact[];
  trigger: string;
  from: { id: string; what: string; when: string };
}

export const TODO: TodoRow[] = EVENTS.flatMap((e) =>
  e.raised
    .filter((r) => hasFollowUp(r.obligation))
    .map((r) => ({ ...r, from: { id: e.id, what: e.what, when: e.when } })),
);

export const TODO_SHORTFALL = {
  followUpInFixture: OBLIGATION_NODES.filter(hasFollowUp).length,
  notifyInFixture: OBLIGATION_NODES.filter((o) => o.class === 'notify').length,
  monitorInFixture: OBLIGATION_NODES.filter((o) => o.class === 'monitor').length,
  total: OBLIGATION_NODES.length,
};

// ── Pinned: the duties this reader is watching ───────────────────────────────────────
//
// REPLACES ONGOING (Kim, 2026-09-17). Ongoing was the inventory half — "what is in force right
// now" — built as Standing, removed, restored, and finally removed again because of what it had
// to invent to exist. It grouped duties by the condition that put them in force, and NOTHING IN
// THE FIXTURE RECORDS THAT CONDITION. Which activities are under way today was authored; the
// checkpoint's second open question is exactly this gap, and the page had been papering over it.
//
// PINNING DOES NOT SOLVE THAT GAP — IT STOPS PRETENDING TO. An in-effect condition is a real
// piece of missing domain data and no UI decision creates it. What changes is who answers the
// question: instead of the page asserting which duties are live, the reader says which ones they
// are watching. That claim the software can actually keep. "What am I tracking" is a smaller
// question than "what is in force", and it is one this system is in a position to answer
// honestly, which the other was not.
//
// WHAT WAS LOST, STATED PLAINLY. The activity groups derived their MEMBERSHIP from real data —
// the duties under "Dewatering and fish isolation" genuinely name that activity in their
// requirements. Only the claim that the activity was happening today was invented. So the page
// no longer answers "what is on right now" at all, for anybody. That is a deliberate subtraction,
// not an oversight, and it should come back the moment obligations carry in-effect conditions.
//
// THE PINS THEMSELVES ARE AUTHORED, and the page says so. Beacon has no pin table and the
// fixture has no per-user state, so this is the same kind of stand-in as IMPORTANT_AREAS: a
// plausible reader's selection, marked as such. A pin is UI state rather than permit data, which
// is why authoring it is legitimate where inventing an observation type was not.

/**
 * PINNED BY TITLE, NOT BY ID, and validated at module load.
 *
 * A list of ULIDs is unreadable in source and fails silently when the fixture is redrafted — the
 * pin simply vanishes and the view quietly shrinks. Titles are legible, and the resolution below
 * THROWS on a miss. That is §3's first lesson: a silent filter fallback is worse than a crash,
 * and it was learned when Important named a subject area that does not exist and fell back to
 * the largest category, so the page named a filter it was not applying.
 *
 * The selection spans the four classes and deliberately mixes duties that HAVE been reached with
 * duties that have not — three of each. A pin with no history is the sharpest thing this view
 * says: you chose to watch this, and in the whole event log nothing has ever touched it.
 */
const PINNED_TITLES = [
  'Covered Species Encounter Reporting to the Biologist',
  'Work Stoppage on Covered Species Encounter',
  'Dewatering pump shutdown',
  'Biologist present to salvage snakes during dewatering',
  'In-Water Work Window During Construction',
  'Approved Wildlife Handler',
] as const;

export const PINNED: ObligationNode[] = PINNED_TITLES.map((t) => {
  const found = OBLIGATION_NODES.find((o) => o.title === t);
  if (!found) {
    throw new Error(
      `PINNED_TITLES names "${t}", which is not in the fixture. A pin that cannot be resolved must fail loudly — see the Important-areas fallback in checkpoint §3.`,
    );
  }
  return found;
});

const isPinned = (o: ObligationNode) => PINNED.some((p) => p.id === o.id);

// ── Important: the reader's own slice of what is happening ───────────────────────────
//
// The SAME events as All, narrowed to the duties inside the reader's saved subject areas. An
// event that raised nothing in those areas does not appear. Per-user; nothing lands on the
// obligation.

/**
 * The saved areas must contain duties the feed ACTUALLY SURFACES. Once an event stopped raising
 * every association match, 'Amphibians and reptiles' and 'Birds' contained none of what was
 * left, and Important rendered empty — a filter naming categories that no longer had anything
 * in them. The surfaced duties sit in Habitat protection, Agency reporting and approvals, and
 * Mitigation and restoration, so those are the reader's areas.
 */
export const IMPORTANT_AREAS = ['Habitat protection', 'Agency reporting and approvals'] as const;

/** Fail loudly, never silently — an earlier pass named an area it was not applying. */
const KNOWN_AREAS = new Set(OBLIGATION_NODES.map(majorOf));
for (const a of IMPORTANT_AREAS) {
  if (!KNOWN_AREAS.has(a)) {
    throw new Error(
      `obligation-tracking: saved subject area "${a}" is not in the fixture. ` +
        `Known: ${[...KNOWN_AREAS].sort().join(', ')}`,
    );
  }
}

const isMine = (o: ObligationNode) => (IMPORTANT_AREAS as readonly string[]).includes(majorOf(o));

// ── The two-pane shape every view renders ────────────────────────────────────────────

export interface PaneDuty {
  obligation: ObligationNode;
  /** Where it is filed, and how many requirements it was drafted from. */
  detail: string;
  /** Stage-1 facts, when the duty was raised by an event. */
  matchedOn?: MatchFact[];
  /**
   * HOW this duty reached the reader, as short labels: Species, Activity, or both. These are
   * the only bases in play — NOTHING on this page arrives because of its trigger, because
   * stage 2 is not running.
   */
  basis?: string[];
  /** Retired — "has trigger text" was never a reason the row was here. */
  hasTrigger?: boolean;
  /** On trigger matches only: why the relevance service said this duty applies. */
  why?: string;
  /** The commitment codes of the requirements this duty was drafted from. */
  codes?: string[];
  /** The permit's own sentence for when this applies. Empty on most duties. */
  trigger?: string;
}

const CLASS_RANK: Record<ObligationClass, number> = { notify: 1, monitor: 2, adhere: 3, roster: 4 };

const ordered = (duties: PaneDuty[]): PaneDuty[] =>
  [...duties].sort(
    (a, b) =>
      Number((b.basis ?? []).length > 0) - Number((a.basis ?? []).length > 0) ||
      CLASS_RANK[a.obligation.class] - CLASS_RANK[b.obligation.class],
  );

/**
 * ONE LABELLED FACT in a pane's facts band, rendered as a `dt`/`dd` pair.
 *
 * THE BAND IS PER-SOURCE, so this carries no notion of which field it is — each source
 * contributes only the facts it actually has (see `eventDetails`). Observations have a species
 * and a buffer; a DMR has neither and has weather instead. Rendering one fixed list for all
 * three was a latent bug that only looked right because the single site report happened to use
 * the two fields every source shares.
 *
 * This interface was REFERENCED IN THREE PLACES AND DEFINED IN NONE until 2026-09-17 — one of
 * the declarations an index-splicing patch script dropped (§16). esbuild does not resolve
 * types, so it compiled for a day.
 */
export interface PaneDetail {
  label: string;
  value: string;
}

export interface TrackingPane {
  id: string;
  /** Inner SVG markup for the row's leading glyph. */
  glyph?: string;
  /** What kind of record this is. Shown in the details, never on the row. */
  kind: string;
  label: string;
  /**
   * RELATIVE TIME ONLY on the row. A feed is read by recency - "45m ago" is what a person scans
   * for, and the calendar date beside it doubled the line for a fact the details already carry.
   */
  when?: string;
  total: number;
  details: PaneDetail[];
  duties: PaneDuty[];
}

const detailOf = (o: ObligationNode): string => {
  const n = o.requirements.length;
  return `${majorOf(o)} › ${minorOf(o)} · from ${n} ${n === 1 ? 'requirement' : 'requirements'}`;
};

const codesOf = (o: ObligationNode) => [...new Set(o.requirements.map((r) => r.code))];

/**
 * Only a TRIGGER match is stated. If a duty is not here by trigger it is here because its
 * requirements name the species or activity the event named — which is implicit and obvious
 * from the event itself, and was cluttering every row with a label that never varied.
 */
const basisOf = (facts: MatchFact[]) => (facts.some((f) => f.kind === 'trigger') ? ['Trigger'] : []);

/** The model's stated reason, on trigger matches only. */
const triggerWhy = (facts: MatchFact[]) => facts.find((f) => f.kind === 'trigger')?.value ?? '';

// asDuties() lived here — a plain duty list with no event behind it. Its only caller was
// Ongoing's activity groups, and it went with them on 2026-09-17. Every pane now descends from
// an event or from a pin, and both carry more than a bare obligation.

/**
 * NO GROUP NOTES. Every one of them was removed by 2026-09-16.
 *
 * Three went early because they restated the class name ("Somebody must report this" under
 * Notify) or asserted something the record cannot support ("Evidence is expected while this
 * holds" under Monitor — obligations carry no evidence field or cadence).
 *
 * The last one, "Already in force — this event is where it bites" under Adhere, was kept for
 * a while because it carried a real finding: 49 of the 65 duties under a snake sighting are
 * standing rules that the sighting did not switch on. But the finding is already expressed
 * STRUCTURALLY — the groups run Notify, then Monitor, then Adhere, so what needs doing comes
 * first and the standing rules sit underneath. A sentence repeating that on fourteen panes is
 * the page explaining itself, which is the thing this design keeps having to remove.
 *
 * The finding lives in docs/obligation-tracking-checkpoint.md §9, where it belongs.
 */

/**
 * A row states WHY it is here only when that differs from the REST OF THE PANE.
 *
 * Every duty under the snake sighting matched on the snake; saying so 65 times is chrome. Every
 * duty under the turbidity report matched on the same activity; saying so 25 times is the same
 * chrome wearing a different word. What is worth a line is the row that got here some OTHER
 * way — matched on the activity where everything else matched on the species, or swept in as an
 * any-covered-species duty.
 *
 * So: find the fact the pane is built on (the one most rows share) and suppress it. In the
 * salamander pane that leaves 12 of 60 rows speaking; in the snake and turbidity panes, none.
 */
const asRaised = (rows: RaisedDuty[]): PaneDuty[] => {
  const tally = new Map<string, number>();
  for (const r of rows) {
    for (const m of r.matchedOn) {
      if (m.kind === 'any-species') continue;
      tally.set(m.value, (tally.get(m.value) ?? 0) + 1);
    }
  }
  const dominant = [...tally.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];

  return rows.map((r) => {
    const onDominant = r.matchedOn.some((m) => m.value === dominant);
    return {
      obligation: r.obligation,
      detail: detailOf(r.obligation),
      matchedOn: onDominant ? [] : r.matchedOn,
      basis: basisOf(r.matchedOn),
      why: triggerWhy(r.matchedOn),
      hasTrigger: false,
      codes: codesOf(r.obligation),
      trigger: r.trigger,
    };
  });
};

const DATE_FMT = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
const dateOf = (iso: string) => DATE_FMT.format(new Date(iso));

/**
 * THE SOURCE IS ALWAYS THE KIND. The sub-type text was dropped on 2026-09-16 (see EVENT_GLYPH).
 *
 * An earlier pass showed the type instead of the source for observations, which hid the thing
 * that is actually enumerated (the Event Hub topic) behind one that only some records carry.
 * A reader could not tell an observation from a site report at a glance. Source answers "what
 * kind of record is this", type answers "what kind of observation" — two questions, two lines.
 * (Kim, 2026-09-16.)
 */
/**
 * ONE GLYPH INSTEAD OF TWO TEXT LINES. The rail printed the source and the sub-type as stacked
 * labels above every title; an icon carries the same distinction in a fraction of the row.
 * Lucide inner markup, the idiom AppShell and STEP_GLYPH already use.
 */
export const EVENT_GLYPH: Record<string, string> = {
  Resource:
    '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  'Compliance Concern':
    '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  'Nesting Bird':
    '<path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"/>',
  'site report':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  dmr:
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/>',
};

const glyphOf = (e: FeedEvent) =>
  e.source === 'observation' ? (EVENT_GLYPH[e.type ?? ''] ?? EVENT_GLYPH.Resource) : EVENT_GLYPH[e.source];

const SOURCE_LABEL: Record<EventSource, string> = {
  observation: 'Observation',
  'site report': 'Site report',
  dmr: 'Daily monitoring report',
};

const kindOf = (e: FeedEvent) => SOURCE_LABEL[e.source];


/**
 * The closed row carries FOUR things: kind, what happened, how many duties, and when — both
 * relative and absolute, because "2h ago" is useless in a week. Everything else is a labelled
 * fact behind the disclosure. Kim, 2026-09-16: too much was being shown, and too little of it
 * was about the event itself.
 */
/**
 * FOUR FACTS, ALWAYS VISIBLE, IN COLUMNS. This was a seven-row disclosure a reader had to open.
 * What a person needs off an event is what, where, which species and who — read in about two
 * seconds, side by side. The rest (source key, report type, exact timestamp) was either already
 * carried by the glyph and the relative time, or provenance nobody scans a feed for. Concern
 * appears ONLY when true: "Flagged as a concern - No" is a row that exists to say nothing.
 * (Kim, 2026-09-16.)
 */
/**
 * THE DETAILS ARE PER-SOURCE, because the three payloads are not the same shape and pretending
 * otherwise was a latent bug. Kim, 2026-09-16: "are those fields consistent across observations,
 * site reports and dmrs?" They are not.
 *
 *   OBSERVATION   ObservationType, SiteName, Metadata.CreatedBy, and — only here —
 *                 ObservationTypeMetadata.Species / BufferDistanceFt and the Concern flag.
 *   SITE REPORT   SiteName and CreatedBy, plus ConstructionActivity and PersonnelOnsite.
 *                 NO Concern field, NO BufferDistanceFt. Species exists but as SelectSpecies,
 *                 a different shape from the observation's.
 *   DMR           NO SiteName at all — ProjectName and ConstructionPackage instead — and no
 *                 species, buffer or concern. What it does carry is what a daily report is
 *                 about: WeatherConditions, AirTemp, WindSpeed/Direction, Precipitation,
 *                 FieldPerson.
 *
 * The old list rendered the observation's six fields for every source. Nothing was visibly
 * wrong only because the one site report happened to use the two fields all three share; a DMR
 * would have shown a Site it does not have and hidden the weather it does.
 */
const eventDetails = (e: FeedEvent): PaneDetail[] => {
  const d: PaneDetail[] = [];

  if (e.source === 'observation') {
    d.push({ label: 'Type', value: e.type ?? 'Observation' });
    d.push({ label: 'Site', value: e.where });
    if (e.species.length) d.push({ label: 'Species', value: e.species.join(', ') });
    if (e.bufferFt) d.push({ label: 'Buffer', value: `${e.bufferFt} ft` });
    d.push({ label: 'Reported by', value: e.reportedBy });
    if (e.concern) d.push({ label: 'Flagged', value: 'Concern' });
    return d;
  }

  if (e.source === 'site report') {
    d.push({ label: 'Site', value: e.where });
    if (e.activity) d.push({ label: 'Activity', value: e.activity });
    if (e.personnel?.length) d.push({ label: 'On site', value: e.personnel.join(', ') });
    d.push({ label: 'Reported by', value: e.reportedBy });
    return d;
  }

  // DMR — no site, no species, no concern. Weather is the point of the record.
  if (e.constructionPackage) d.push({ label: 'Package', value: e.constructionPackage });
  if (e.weather) d.push({ label: 'Weather', value: e.weather });
  if (e.airTempF != null) d.push({ label: 'Air temp', value: `${e.airTempF}°F` });
  if (e.precipitationIn != null) {
    d.push({ label: 'Precipitation', value: e.precipitationIn === 0 ? 'None' : `${e.precipitationIn} in` });
  }
  d.push({ label: 'Field person', value: e.reportedBy });
  return d;
};

const allPanes: TrackingPane[] = EVENTS.map((e) => ({
  id: e.id,
  glyph: glyphOf(e),
  kind: kindOf(e),
  label: e.what,
  when: e.when,
  total: e.raised.length,
  details: eventDetails(e),
  duties: ordered(asRaised(e.raised)),
}));

const importantPanes: TrackingPane[] = EVENTS.map((e) => {
  const mine = e.raised.filter((r) => isMine(r.obligation));
  return {
    id: `imp-${e.id}`,
    glyph: glyphOf(e),
    kind: kindOf(e),
    label: e.what,
    when: e.when,
    total: mine.length,
    details: eventDetails(e),
    duties: ordered(asRaised(mine)),
  };
}).filter((p) => p.total > 0);

const todoPanes: TrackingPane[] = EVENTS.map((e) => {
  const rows = TODO.filter((t) => t.from.id === e.id);
  return {
    id: `todo-${e.id}`,
    glyph: glyphOf(e),
    kind: kindOf(e),
    label: e.what,
    when: e.when,
    total: rows.length,
    details: eventDetails(e),
    duties: ordered(
      asRaised(rows.map((t) => ({ obligation: t.obligation, matchedOn: t.matchedOn, trigger: t.trigger }))),
    ),
  };
}).filter((p) => p.total > 0);

/**
 * PINNED, BY EVENT — the same spine as All and Important, narrowed to the pinned duties.
 *
 * Ongoing had no by-event direction at all: its parents were reasons, so it shared nothing with
 * the other three views. Pinned rejoins them. A pin is a duty, so the by-obligation direction is
 * its NATIVE reading and this one is the transpose — the reverse of every other view, where the
 * event direction is native. Both are honest; only one is the obvious way in.
 */
const pinnedPanes: TrackingPane[] = EVENTS.map((e) => {
  const rows = e.raised.filter((r) => isPinned(r.obligation));
  return {
    id: `pin-${e.id}`,
    glyph: glyphOf(e),
    kind: kindOf(e),
    label: e.what,
    when: e.when,
    total: rows.length,
    details: eventDetails(e),
    duties: ordered(asRaised(rows)),
  };
}).filter((p) => p.total > 0);

export type TrackingViewId = 'all' | 'important' | 'todo' | 'pinned';

export const PANES: Record<TrackingViewId, TrackingPane[]> = {
  all: allPanes,
  important: importantPanes,
  todo: todoPanes,
  pinned: pinnedPanes,
};

/**
 * TITLE ONLY — esa-empty-state's `description` is contracted as ONE IMPERATIVE RECOVERY ACTION
 * (≤12 words), explicitly "not a description of the missing feature". None of these views has a
 * recovery action: the reader cannot make an event arrive, and the saved subject areas are not
 * editable on this page. Each old `message` was a restatement of its own heading anyway.
 *
 * These were passed as `heading` / `message` until 2026-09-17. The lego's props are `title` /
 * `description`, so EVERY empty state rendered with no text at all — Astro drops unknown props
 * silently and esbuild never checked the types.
 */
export const EMPTY: Record<TrackingViewId, string> = {
  all: 'Nothing has happened',
  important: 'Nothing in your areas',
  todo: 'No follow-up is owed',
  pinned: 'Nothing is pinned',
};

// ── The inverse: one duty, and every event that reached it ───────────────────────────
//
// THE SAME DATA READ THE OTHER WAY ROUND. Forward, a pane is an EVENT and its children are the
// duties it raised. Inverted, a pane is a DUTY and its children are the events that reached it.
// Nothing new is authored here — the index is built by walking `EVENTS[].raised`, the identical
// array the forward panes read, so the two directions CANNOT disagree. Authoring it separately
// would repeat exactly the mistake that the one-fixture alignment of 2026-09-15 fixed, where
// one page held two answers to the same question.
//
// WHY IT EARNS ITS PLACE, measured rather than assumed:
//
//   To-do    12 rows for 3 distinct duties. The same Notify duty appears under four separate
//            events, so the forward view spends four rows saying one thing. Inverted it is
//            three rows, each carrying its four triggers. This is the biggest win on the page.
//   All      20 rows -> 9 duties.   Important  13 rows -> 5 duties.
//   Ongoing  16 duties, and FIFTEEN OF THEM HAVE NO EVENTS AT ALL.
//
// THAT LAST NUMBER IS THE POINT, not a defect. Every Roster duty has zero events, both Monitor
// duties have zero, and seven of eight Adhere have zero — because the events that would move
// them do not exist in Beacon. §9 of the checkpoint worked this out as a table; inverting the
// view renders it as something a reader discovers by looking, which is worth more than a
// paragraph nobody opens. The empty pane states which source is missing.

/**
 * WHAT ACTUALLY MOVES A DUTY OF THIS CLASS — and, where nothing does, why.
 *
 * Adhere and Monitor duties ARE currently raised by sightings, and that is a placeholder: what
 * they should answer to is a breach event and an evidence event, neither of which Beacon
 * publishes. Roster is excluded from event matching altogether (it is a standing qualification;
 * a snake does not change who is permitted to handle one), which is why its panes are always
 * empty and why personnel changes are the fifth event source nobody has listed.
 */
const MOVED_BY: Record<ObligationClass, string> = {
  notify: 'A field event — the one class that is genuinely event-driven',
  adhere: 'A breach. Beacon publishes no breach event, so sightings stand in',
  monitor: 'Evidence arriving, or failing to. Beacon publishes no evidence event',
  roster: 'A change of staff. Beacon publishes no personnel event',
};

/** One event, as a CHILD of a duty rather than as the subject of its own pane. */
export interface PaneEvent {
  id: string;
  /** Inner SVG markup for the leading glyph — the Event Hub source. */
  glyph: string;
  /** The source label: Observation, Site report, DMR. */
  kind: string;
  label: string;
  /** "4h ago" — what a reader scans. */
  when: string;
  /**
   * "15 Sep 2026" — and here it is NOT redundant. §15 dropped the calendar date from the feed's
   * rail because a timeline is read by recency. A duty's history is read the other way: four
   * events spread over days, where "1d ago / 2d ago" stops being a date and starts being a
   * riddle. The absolute date earns its place in this direction and not in the other.
   */
  on: string;
  /** The per-source facts band — observations, site reports and DMRs carry different fields. */
  details: PaneDetail[];
  /** ['Trigger'] where the relevance service is what reached this duty; otherwise empty. */
  basis: string[];
  /** The model's stated reason, on trigger matches only. */
  why: string;
  /** The stage-1 joins that reached this duty from this event. */
  matchedOn: MatchFact[];
  /**
   * WHY THIS EVENT REACHED THIS DUTY, in one phrase, on the summary line rather than behind the
   * fold. It is the only thing that varies down a duty's history, so hiding it would leave a
   * list of four events with nothing to tell them apart.
   */
  reached: string;
}

/**
 * The join that reached the duty, named. 'Trigger' outranks the rest: where the relevance
 * service is the reason, no join was involved at all — those duties carry no species and no
 * activity, so nothing else could have found them.
 */
const reachedBy = (facts: MatchFact[]): string => {
  if (facts.some((f) => f.kind === 'trigger')) return 'Trigger';
  const species = facts.filter((f) => f.kind === 'species').map((f) => f.value);
  if (species.length > 0) return species.join(', ');
  if (facts.some((f) => f.kind === 'any-species')) return 'Any covered species';
  const activity = facts.find((f) => f.kind === 'activity')?.value;
  return activity ?? 'Named in this event';
};

/** One duty, with every event that reached it. The inverse of TrackingPane. */
export interface ObligationPane {
  id: string;
  kind: string;
  label: string;
  cls: ObligationClass;
  /** Most recent event, relative — absent when nothing has ever reached this duty. */
  when?: string;
  total: number;
  details: PaneDetail[];
  events: PaneEvent[];
}

/**
 * A ROW STATES ITS BASIS ONLY WHEN THE PANE'S EVENTS DISAGREE — the SAME rule as §11, applied
 * in the other direction rather than reversed.
 *
 * The first pass here asserted the opposite: that inverting the view makes the basis the whole
 * content of a row, since the pane is one duty and the events are what vary. Measured against
 * the fixture that is simply false. Of the nine duties in All, five have a single event and the
 * other four are UNIFORM — four rows of "Any covered species", three of "Trigger". **Not one
 * pane has a basis that varies.** So the per-row badge was 46 copies of 9 facts, which is the
 * identical noise §11 removed from the forward view.
 *
 * Where every event reached the duty the same way, the fact is hoisted to the pane and stated
 * ONCE. Where they genuinely differ the rows carry it, because then it is the thing that tells
 * them apart. Real data will produce the varied case; this fixture never does.
 */
const asEvent = (e: FeedEvent, r: RaisedDuty): PaneEvent => ({
  id: `${e.id}--${r.obligation.id}`,
  glyph: glyphOf(e),
  kind: kindOf(e),
  label: e.what,
  when: relative(e.at),
  on: dateOf(e.at),
  details: eventDetails(e),
  basis: basisOf(r.matchedOn),
  why: triggerWhy(r.matchedOn),
  matchedOn: r.matchedOn,
  reached: reachedBy(r.matchedOn),
});

/** obligation id -> the events that reached it, newest first. Derived, never authored. */
const EVENTS_BY_OBLIGATION = new Map<string, PaneEvent[]>();
for (const e of [...EVENTS].sort((a, b) => b.at.localeCompare(a.at))) {
  for (const r of e.raised) {
    const rows = EVENTS_BY_OBLIGATION.get(r.obligation.id) ?? [];
    rows.push(asEvent(e, r));
    EVENTS_BY_OBLIGATION.set(r.obligation.id, rows);
  }
}

/**
 * THE DUTY'S OWN FACTS, in the band the forward view gives the event.
 *
 * "Moved by" is the one that does work: on a pane with no events it is the whole answer, and it
 * is a statement about the DATA (which topics Beacon publishes), not a note about the page.
 * The trigger sits here too — §11 pruned it from 209 duty rows as the bulkiest, least useful
 * element on the page, but on a pane whose subject IS this duty it appears exactly once, which
 * is the case that was always worth making.
 */
const obligationDetails = (o: ObligationNode, events: PaneEvent[], shared: string): PaneDetail[] => {
  const d: PaneDetail[] = [
    { label: 'Class', value: OBLIGATION_CLASS_LABEL[o.class] },
    { label: 'Filed under', value: `${majorOf(o)} › ${minorOf(o)}` },
    { label: 'Drafted from', value: `${o.requirements.length} ${o.requirements.length === 1 ? 'requirement' : 'requirements'}` },
    { label: 'Moved by', value: MOVED_BY[o.class] },
  ];
  if (shared) d.push({ label: 'Reached by', value: shared });
  if (o.trigger) d.push({ label: 'Trigger', value: o.trigger });
  if (events.length === 0) d.push({ label: 'Events', value: 'None. Nothing has reached this duty' });
  return d;
};

const asObligationPane = (o: ObligationNode): ObligationPane => {
  const events = EVENTS_BY_OBLIGATION.get(o.id) ?? [];

  // ONE BASIS FOR THE WHOLE PANE, OR ONE PER ROW — never both. See reachedBy's note.
  const distinct = [...new Set(events.map((e) => e.reached))];
  const shared = events.length > 0 && distinct.length === 1 ? distinct[0] : '';

  return {
    id: `obl-${o.id}`,
    kind: OBLIGATION_CLASS_LABEL[o.class],
    label: o.title,
    cls: o.class,
    when: events[0]?.when,
    total: events.length,
    details: obligationDetails(o, events, shared),
    events: shared ? events.map((e) => ({ ...e, reached: '' })) : events,
  };
};

/** Duties with the most history first; duties with none keep their incoming order. */
const byHistory = (a: ObligationPane, b: ObligationPane) =>
  b.events.length - a.events.length || CLASS_RANK[a.cls] - CLASS_RANK[b.cls];

const touched = (pick: (o: ObligationNode) => boolean): ObligationPane[] => {
  const seen = new Map<string, ObligationNode>();
  for (const e of EVENTS) for (const r of e.raised) if (pick(r.obligation)) seen.set(r.obligation.id, r.obligation);
  return [...seen.values()].map(asObligationPane).sort(byHistory);
};

/**
 * PINNED INVERTS DIFFERENTLY — it is the one view whose BY-OBLIGATION side is the native one.
 *
 * The other three are lists of events that happen to reach duties, so `touched()` derives their
 * inverse from the event log and a duty with no events simply is not in them. Pinned is a list
 * of DUTIES that may or may not have been reached, so it is authored directly from PINNED and
 * every pin appears whether or not anything has ever touched it.
 *
 * KEEPING THE EMPTY PINS IS THE ENTIRE VALUE. Three of the six have no events at all, and a pin
 * with no history is the sharpest thing this page says: you chose to watch this, and in the whole
 * event log nothing has reached it. The pane then names what WOULD move it — a change of staff, a
 * breach, evidence arriving — and three of those four are topics Beacon does not publish.
 */
export const OBLIGATION_PANES: Record<TrackingViewId, ObligationPane[]> = {
  all: touched(() => true),
  important: touched(isMine),
  todo: touched(hasFollowUp),
  pinned: PINNED.map(asObligationPane).sort(byHistory),
};

/** Title only, for the same reason as EMPTY — there is no recovery action on any of these. */
export const EMPTY_BY_OBLIGATION: Record<TrackingViewId, string> = {
  all: 'No duty has been reached',
  important: 'No duty in your areas has been reached',
  todo: 'No duty owes a notice',
  pinned: 'Nothing is pinned',
};

/** The rail heading for each view's inverse — a parent is a DUTY in every one of them. */
export const RAIL_BY_OBLIGATION: Record<TrackingViewId, string> = {
  all: 'Duties reached',
  important: 'Your duties reached',
  todo: 'Duties owing a notice',
  pinned: 'Duties you are watching',
};

// ── View definitions ─────────────────────────────────────────────────────────────────

export interface TrackingView {
  id: TrackingViewId;
  label: string;
  /** Kept for the data layer; the tabs no longer render it (Kim, 2026-09-16). */
  /** EVERY tab counts the same unit: distinct obligations. Mixing units made Important
      read as larger than All, which it is a subset of. */
  count: number;
}

const distinctIn = (panes: TrackingPane[]) =>
  new Set(panes.flatMap((p) => p.duties.map((d) => d.obligation.id))).size;

export const VIEWS: TrackingView[] = [
  { id: 'all', label: 'All', count: distinctIn(allPanes) },
  { id: 'important', label: 'Important', count: distinctIn(importantPanes) },
  { id: 'todo', label: 'To-do', count: distinctIn(todoPanes) },
  { id: 'pinned', label: 'Pinned', count: distinctIn(pinnedPanes) },
];

export const TRACKING_TOTALS = {
  events: EVENTS.length,
  raised: distinctIn(allPanes),
  obligations: OBLIGATION_TREE_TOTALS.obligations,
  requirementLinks: OBLIGATION_TREE_TOTALS.requirementLinks,
};

export const classLabel = (c: ObligationClass): string => OBLIGATION_CLASS_LABEL[c];
