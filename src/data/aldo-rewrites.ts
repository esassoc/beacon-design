// Mock data: what Aldo writes when asked to rewrite part of a response. The prototype
// runs no model, so the demo response (r-04) carries a rewrite of each of its sentences
// in three directions. A selection that is whole sentences of r-04 (one, several, or a
// paragraph) is rewritten sentence by sentence from here; anything else falls back to
// the bubble's phrasing rules. An empty rewrite drops the sentence (shorter only).
// Invented prose, written to the response's own facts.

export type RewriteIntent = 'shorter' | 'plainer' | 'warmer';

export const ALDO_REWRITES: Record<string, Record<RewriteIntent, string>> = {
  "The study team has received many comments about overnight flights over central Seattle, including repeated awakenings between midnight and 5 a.m., and about whether the airport's Late Night Noise Limitation Program is working.": {
    shorter: 'Many comments describe overnight flights over central Seattle waking people between midnight and 5 a.m., and question whether the Late Night Noise Limitation Program works.',
    plainer: "Many of you told us that overnight flights over central Seattle wake you between midnight and 5 a.m. Many also asked whether the airport's Late Night Noise Limitation Program is working.",
    warmer: 'We heard from many of you about overnight flights over central Seattle, and about nights broken by aircraft between midnight and 5 a.m. We also heard real doubt that the Late Night Noise Limitation Program is working.',
  },
  'We have read each of these comments, and they are a major focus of the Noise Compatibility Program analysis.': {
    shorter: 'These comments are a major focus of the Noise Compatibility Program analysis.',
    plainer: 'We read every one of these comments. They are a big part of what the Noise Compatibility Program is studying.',
    warmer: 'We have read each of these comments carefully, and they are shaping the Noise Compatibility Program analysis.',
  },
  'The Late Night Noise Limitation Program is voluntary.': {
    shorter: 'The Late Night Noise Limitation Program is voluntary.',
    plainer: 'Airlines take part in the Late Night Noise Limitation Program by choice; it is not a requirement.',
    warmer: 'We understand the frustration that the Late Night Noise Limitation Program is only voluntary.',
  },
  'Airports cannot restrict aircraft operations by time of day without completing a separate federal review under the Airport Noise and Capacity Act, which sets a high bar for mandatory limits.': {
    shorter: 'Mandatory nighttime limits require a separate federal review under the Airport Noise and Capacity Act.',
    plainer: 'Federal law does not let an airport limit flights by time of day unless it first completes a separate federal review, and that review sets a high bar.',
    warmer: 'Federal law does not let the Port limit flights by time of day on its own: a separate federal review comes first, and it sets a high bar.',
  },
  'The program currently asks airlines to avoid the noisiest aircraft overnight and to use preferred runways and procedures when conditions allow, and the Port reports compliance publicly.': {
    shorter: 'Today it asks airlines to avoid their noisiest aircraft overnight, and the Port reports compliance publicly.',
    plainer: 'Today the program asks airlines to fly quieter aircraft at night and to use preferred runways and procedures when they can. The Port publishes how well airlines follow it.',
    warmer: 'Today the program asks airlines to fly their quietest aircraft at night and to use preferred runways when they can, and the Port publishes how well they follow it so you can see the results.',
  },
  'As part of the Noise Compatibility Program, the study is evaluating changes to the program, including a longer nighttime window, stronger reporting, and nighttime runway and arrival procedures.': {
    shorter: 'The study is evaluating a longer nighttime window, stronger reporting, and nighttime runway and arrival procedures.',
    plainer: 'The study is looking at ways to change the program: a longer nighttime window, better reporting, and different runway and arrival procedures at night.',
    warmer: 'Because of what you told us, the study is evaluating a longer nighttime window, stronger reporting, and nighttime runway and arrival procedures.',
  },
  'It is also analyzing nighttime flight tracks to understand why more overnight arrivals now pass over central Seattle.': {
    shorter: '',
    plainer: 'It is also mapping nighttime flights to find out why more overnight arrivals now fly over central Seattle.',
    warmer: 'It is also tracing nighttime flights to understand why more of them now pass over your neighborhoods.',
  },
  'Results, including the number of nighttime events above key sound levels for affected neighborhoods, will be presented at the fall 2026 public workshop.': {
    shorter: 'Results will be presented at the fall 2026 public workshop.',
    plainer: 'We will share the results, including how often nighttime noise passes key levels in each neighborhood, at the public workshop in fall 2026.',
    warmer: 'We will share what we find, neighborhood by neighborhood, at the fall 2026 public workshop, and we hope you will join us.',
  },
  'Any procedure change the study recommends must be reviewed and approved by the FAA before it can take effect.': {
    shorter: 'The FAA must approve any procedure change the study recommends.',
    plainer: 'The FAA has to review and approve any change the study recommends before it can happen.',
    warmer: 'The FAA has to review and approve any change the study recommends before it can happen.',
  },
  'The study cannot change flight paths directly, but it can document the overnight impacts and recommend measures to the FAA.': {
    shorter: 'The study can document overnight impacts and recommend measures to the FAA.',
    plainer: 'The study cannot move flight paths itself, but it can show the FAA how overnight flights affect you and recommend changes.',
    warmer: 'The study cannot move flight paths itself, but it will put the overnight impacts you described in front of the FAA, with recommendations.',
  },
};
