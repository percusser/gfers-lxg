// export function validatePack(pack): string[] — [] means the pack is good.
// Wraps the same checks the engine runs at startup (see content-packs/README.md).
const MODES = ['full', 'filter', 'sample', 'cold', 'drop'];

function consumerUp(c, modes) {
  return Object.entries(c.needs).every(([sid, ok]) => ok.includes(modes[sid]));
}

export function validatePack(pack) {
  const problems = [];
  const fail = (msg) => problems.push(msg);

  if (!pack || typeof pack !== 'object') return ['pack is not an object'];
  if (typeof pack.id !== 'string' || !pack.id) fail('id is required (string)');
  if (typeof pack.title !== 'string' || !pack.title) fail('title is required (string)');
  if (typeof pack.product !== 'string' || !pack.product) fail('product is required (string) — the source system name shown on the intro screen');
  if (typeof pack.target !== 'number' || pack.target >= 0) fail('target must be a negative number (e.g. -0.30)');
  if (!Number.isInteger(pack.turns) || pack.turns < 1) fail('turns must be a positive integer');

  if (!Array.isArray(pack.sources) || pack.sources.length === 0) { fail('sources must be a non-empty array'); return problems; }
  const sourceIds = new Set();
  for (const s of pack.sources) {
    if (!s || typeof s.id !== 'string' || !s.id) { fail('every source needs a string id'); continue; }
    if (sourceIds.has(s.id)) fail(`duplicate source id "${s.id}"`);
    sourceIds.add(s.id);
    if (typeof s.name !== 'string' || !s.name) fail(`source "${s.id}" needs a string name`);
    if (typeof s.gb !== 'number' || s.gb <= 0) fail(`source "${s.id}" needs a positive gb`);
  }

  if (!pack.modeVolume || typeof pack.modeVolume !== 'object') { fail('modeVolume is required'); }
  else {
    for (const m of MODES) {
      if (typeof pack.modeVolume[m] !== 'number') fail(`modeVolume is missing a number for mode "${m}"`);
    }
  }

  if (!Array.isArray(pack.lamps) || pack.lamps.length === 0) fail('lamps must be a non-empty array');
  const consumers = [...(pack.lamps || []), pack.board, pack.tank].filter(Boolean);
  if (!pack.board) fail('board is required');
  if (!pack.tank) fail('tank is required');

  for (const c of consumers) {
    if (!c.id || !c.name) { fail('every output needs id and name'); continue; }
    if (!c.needs || typeof c.needs !== 'object') { fail(`output "${c.id}" needs a "needs" object`); continue; }
    for (const [sid, ok] of Object.entries(c.needs)) {
      if (!sourceIds.has(sid)) fail(`output "${c.id}" needs source "${sid}", which is not in sources`);
      if (!Array.isArray(ok) || ok.length === 0) fail(`output "${c.id}"'s needs for "${sid}" must be a non-empty array of mode ids`);
      else for (const m of ok) if (!MODES.includes(m)) fail(`output "${c.id}"'s needs for "${sid}" names unknown mode "${m}"`);
    }
    // `reads`: what the output uses from each source, shown on its card before the run. One sentence per `needs` source.
    if (!c.reads || typeof c.reads !== 'object' || Array.isArray(c.reads)) { fail(`output "${c.id}" needs a "reads" object: source id to one sentence on what it uses from that source`); continue; }
    for (const sid of Object.keys(c.needs)) {
      if (!(sid in c.reads)) fail(`output "${c.id}" is missing reads for source "${sid}"`);
      else if (typeof c.reads[sid] !== 'string' || !c.reads[sid].trim()) fail(`output "${c.id}"'s reads for source "${sid}" must be a non-empty string`);
    }
    for (const sid of Object.keys(c.reads)) {
      if (!(sid in c.needs)) fail(`output "${c.id}" has reads for source "${sid}", which is not in its needs`);
    }
  }

  if (!pack.plan || typeof pack.plan !== 'object') fail('plan is required');
  else for (const [sid, m] of Object.entries(pack.plan)) {
    if (!sourceIds.has(sid)) fail(`plan sets unknown source "${sid}"`);
    if (!MODES.includes(m)) fail(`plan sets source "${sid}" to unknown mode "${m}"`);
  }

  // Word list (README "Words"): the screen says "works" and "fails" and names each thing the same way everywhere,
  // so learner-facing pack text may not bring back the old words for the same ideas.
  const RETIRED = /\b(break|breaks|breaking|broke|broken|outputs?|marks?|marked)\b/i;
  const texts = [
    ...consumers.flatMap(c => [[`${c.id} name`, c.name], ...Object.entries(c.reads || {}).map(([sid, t]) => [`${c.id} reads.${sid}`, t])]),
    ...Object.entries(pack.say || {}).map(([k, t]) => [`say.${k}`, t]),
    ...Object.entries(pack.stops || {}).map(([k, t]) => [`stops.${k}`, t]),
  ];
  for (const [where, t] of texts) {
    const m = typeof t === 'string' && t.match(RETIRED);
    if (m) fail(`${where} uses "${m[0]}"; use "fails" or "works", and name the alert, dashboard or archive (README "Words")`);
  }

  // Keys of say and stops: the screen looks each up by id and shows nothing when one is missing.
  const outputIds = consumers.map(c => c.id);
  for (const [field, want, what] of [['say', outputIds, 'every alert, "board" and "tank" id'], ['stops', MODES, 'each of the five settings']]) {
    const obj = pack[field];
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) { fail(`${field} is required: an object with a sentence for ${what}`); continue; }
    for (const k of want) if (typeof obj[k] !== 'string' || !obj[k].trim()) fail(`${field}.${k} is missing; add one sentence for it (${field} needs ${what})`);
    for (const k of Object.keys(obj)) if (!want.includes(k)) fail(`${field}.${k} matches nothing (check the spelling); ${field} keys are ${want.join(', ')}`);
  }
  if (pack.sources.length > 8) fail(`${pack.sources.length} sources; the wall layout is only proven up to 8`);
  if (consumers.length > 7) fail(`${consumers.length} things depend on the sources (alerts, board, tank); the wall layout is only proven up to 7`);

  if (problems.length) return problems; // arithmetic/simulation checks need a structurally sound pack

  // Target must be reachable in principle: dropping everything to its cheapest mode.
  const totalGb = pack.sources.reduce((n, s) => n + s.gb, 0);
  const cheapest = Math.min(...Object.values(pack.modeVolume));
  const bestPossible = pack.sources.reduce((n, s) => n + s.gb * cheapest, 0) / totalGb - 1;
  if (bestPossible > pack.target) fail(`target ${pack.target} is not reachable — even every source at its cheapest mode only gets to ${bestPossible.toFixed(3)}`);

  // Round 1 must be a real puzzle: the customer's own plan has to break something, but not everything.
  const modes = Object.fromEntries(pack.sources.map(s => [s.id, pack.plan[s.id] || 'full']));
  const failing = consumers.filter(c => !consumerUp(c, modes));
  if (!failing.length) fail('plan fails nothing: round 1 has nothing wrong to catch, so it is not a real puzzle. Change pack.plan so at least one alert, the board or the tank fails');
  else if (failing.length === consumers.length) fail('plan fails every alert, the board and the tank: round 1 is a guess. Change pack.plan so about 3 of 7 fail and the rest work');

  // Round 2: search every setting for every source (the engine's own rules: volume at or under the target,
  // nothing failing) and count the wheel turns away from the plan.
  const n = pack.sources.length, total = pack.sources.reduce((a, s) => a + s.gb, 0);
  const start = pack.sources.map(s => pack.plan[s.id] || 'full');
  let fewest = Infinity, anyWin = false, bestVol = Infinity;
  const cur = new Array(n);
  (function walk(i, turned) {
    if (turned >= fewest) return;
    if (i === n) {
      const m = Object.fromEntries(pack.sources.map((s, k) => [s.id, cur[k]]));
      if (!consumers.every(c => consumerUp(c, m))) return;
      anyWin = true;
      const vol = pack.sources.reduce((a, s, k) => a + s.gb * pack.modeVolume[cur[k]], 0) / total - 1;
      bestVol = Math.min(bestVol, vol);
      if (vol <= pack.target) fewest = turned;
      return;
    }
    for (const mode of MODES) { cur[i] = mode; walk(i + 1, turned + (mode === start[i] ? 0 : 1)); }
  })(0, 0);
  if (fewest === Infinity) {
    fail(anyWin
      ? `round 2 cannot be won: no setting for every source keeps everything working and reaches ${pack.target}; the smallest data per day with nothing failing is ${bestVol.toFixed(3)}. Make target less negative or let more things survive cheaper settings (needs)`
      : 'round 2 cannot be won: no setting for every source keeps every alert, the board and the tank working. Check the needs tables');
  } else if (fewest > pack.turns) {
    fail(`round 2 needs at least ${fewest} changes from the customer's plan but turns is ${pack.turns}; raise turns to about ${fewest * 2} or change plan/target so the answer is closer`);
  }

  return problems;
}
