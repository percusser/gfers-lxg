// Validates a content pack against what engines/scale/index.html actually reads, then plays every possible deal
// with the engine's own scoring to check the scenario teaches what the engine is for. Plain Node import: no DOM.
// See engines/scale/README.md for the contract.
import { makeScoring, nameLines, NAME_FIT } from './scoring.mjs';

const isStr = v => typeof v === 'string' && v.trim().length > 0;
const isObj = v => v && typeof v === 'object' && !Array.isArray(v);
// What the scene holds: the rival's side 6 weights, your side 4, the rack 4 shelves of 2.
const LIMITS = { rounds: [1, 4], needs: [2, 5], reqs: [2, 4], rival: [1, 6], items: [2, 8], slots: [1, 4] };
// a requirement is one line in the weigh-in panel at the smallest stage; a need's quote fits the needs card
const REQ_MAX = 44, SAID_MAX = 240, QUOTE_MAX = 70;
const reqFits = (text, at, problems) => { if (text.length > REQ_MAX) problems.push(`${at}: "${text}" is ${text.length} letters; a requirement fits on one line at ${REQ_MAX}`); };
const PRIORITY = [1, 2, 3];

export function validatePack(pack) {
  const problems = [];
  if (!isObj(pack)) return ['pack must be an object'];
  for (const f of ['id', 'title', 'client', 'clientRef']) if (!isStr(pack[f])) problems.push(`${f} is required`);
  // the briefing memo that opens the game: from whom, about what, and 1 to 3 paragraphs
  for (const f of ['from', 'about']) if (!isStr(pack.memo?.[f])) problems.push(`memo.${f} is required: the memo's From and About lines`);
  const sit = pack.situation;
  if (!Array.isArray(sit) || sit.length < 1 || sit.length > 3 || !sit.every(isStr)) problems.push('situation must be 1 to 3 paragraphs: the memo, saying who the client is, what is at stake and where the rival stands');
  else sit.forEach((t, i) => { if (t.length > 420) problems.push(`situation[${i}] is ${t.length} letters; keep a memo paragraph to 420`); });
  for (const side of ['us', 'them']) for (const f of ['name', 'product']) if (!isStr(pack[side]?.[f])) problems.push(`${side}.${f} is required`);
  if (!isStr(pack.them?.why)) problems.push('them.why is required: why the rival pitches this product to this client');
  if (pack.version !== undefined && !isStr(pack.version)) problems.push('version, when set, is a string like "1.0.0"');

  const rounds = Array.isArray(pack.rounds) ? pack.rounds : [];
  const [r0, r1] = LIMITS.rounds;
  if (rounds.length < r0 || rounds.length > r1) problems.push(`rounds must have ${r0} to ${r1} entries, one per meeting (1 is a single meeting, 2 or more a full deal); found ${rounds.length}`);

  const seen = new Map();   // id -> where it was first used
  const claim = (id, at) => { if (!isStr(id)) return; if (seen.has(id)) problems.push(`${at}: id "${id}" is already used at ${seen.get(id)}`); else seen.set(id, at); };
  const range = (list, key, at) => { const [a, b] = LIMITS[key]; if (!Array.isArray(list) || list.length < a || list.length > b) problems.push(`${at}: ${key} must have ${a} to ${b} entries; found ${Array.isArray(list) ? list.length : 0}`); };
  const fits = (name, fit, at, what) => { if (isStr(name) && !nameLines(name, ...fit)) problems.push(`${at}: name "${name}" doesn't fit on ${what} (${fit[0]} lines of ${fit[1]} letters); shorten it`); };

  const earlierNeeds = new Set();
  rounds.forEach((R, ri) => {
    const rt = `rounds[${ri}]${isStr(R?.id) ? ` "${R.id}"` : ''}`;
    if (!isObj(R)) return problems.push(`${rt} must be an object`);
    claim(R.id, rt);
    for (const f of ['id', 'name', 'intro']) if (!isStr(R[f])) problems.push(`${rt}: ${f} is required`);
    const needs = Array.isArray(R.needs) ? R.needs : [], rival = Array.isArray(R.rival) ? R.rival : [], items = Array.isArray(R.items) ? R.items : [];
    range(R.needs, 'needs', rt); range(R.rival, 'rival', rt); range(R.items, 'items', rt);
    const [s0, s1] = LIMITS.slots;
    if (!Number.isInteger(R.slots) || R.slots < s0 || R.slots > s1) problems.push(`${rt}: slots must be a whole number from ${s0} to ${s1}`);
    else if (R.slots >= needs.length) problems.push(`${rt}: slots (${R.slots}) must be fewer than needs (${needs.length}), so the learner has to choose`);

    const NEED = {}, REQ = {};   // REQ: requirement id -> need id, this round
    needs.forEach((n, i) => {
      const at = `${rt} needs[${i}]${isStr(n?.id) ? ` "${n.id}"` : ''}`;
      if (!isObj(n)) return problems.push(`${at} must be an object`);
      claim(n.id, at); NEED[n.id] = n;
      if (!isStr(n.name)) problems.push(`${at}: name is required`);
      if (!isStr(n.said)) problems.push(`${at}: said is required: the need in the client's own words, as the needs card shows it`);
      else if (n.said.length > SAID_MAX) problems.push(`${at}: said is ${n.said.length} letters; keep the client's words to ${SAID_MAX}`);
      if (!isStr(n.quote)) problems.push(`${at}: quote is required: a few of the client's words from said, one line on the results screen`);
      else if (n.quote.length > QUOTE_MAX) problems.push(`${at}: quote is ${n.quote.length} letters; it fits on one line at ${QUOTE_MAX}`);
      if (!isStr(n.who)) problems.push(`${at}: who is required: the person in the meeting who says this, like "IT director"`);
      if (!PRIORITY.includes(n.priority)) problems.push(`${at}: priority must be 3 (Must have), 2 (Important) or 1 (Nice to have)`);
      range(n.reqs, 'reqs', at);
      (Array.isArray(n.reqs) ? n.reqs : []).forEach((q, k) => {
        const qa = `${at} reqs[${k}]`;
        if (!isStr(q?.id) || !isStr(q?.text)) return problems.push(`${qa}: needs an id and a text`);
        if (REQ[q.id]) problems.push(`${qa}: requirement id "${q.id}" is already used in this round`); else REQ[q.id] = n.id;
        reqFits(q.text, qa, problems);
      });
    });
    const reqsOf = id => (NEED[id]?.reqs || []).map(q => q.id);

    const RIVAL = {};
    rival.forEach((r, i) => {
      const at = `${rt} rival[${i}]${isStr(r?.id) ? ` "${r.id}"` : ''}`;
      if (!isObj(r)) return problems.push(`${at} must be an object`);
      claim(r.id, at); RIVAL[r.id] = r;
      for (const f of ['id', 'name', 'pitch']) if (!isStr(r[f])) problems.push(`${at}: ${f} is required`);
      if (r.product !== undefined && !isStr(r.product)) problems.push(`${at}: product, when set, names the rival product this feature comes from`);
      if (!NEED[r.need]) return problems.push(`${at}: need "${r.need}" is not a need in this round`);
      fits(r.name, NAME_FIT[NEED[r.need].priority], at, 'its weight');
      if (!Array.isArray(r.meets) || !r.meets.length) problems.push(`${at}: meets must list the requirements of "${r.need}" it meets`);
      else for (const q of r.meets) if (!reqsOf(r.need).includes(q)) problems.push(`${at}: meets "${q}", which is not a requirement of "${r.need}"`);
      if (r.when !== undefined) {
        if (!isObj(r.when) || !isStr(r.when.won)) problems.push(`${at}: when must be { "won": "<need id>" }`);
        else if (!earlierNeeds.has(r.when.won)) problems.push(`${at}: when.won "${r.when.won}" must be a need from an earlier round`);
      }
    });

    items.forEach((it, i) => {
      const at = `${rt} items[${i}]${isStr(it?.id) ? ` "${it.id}"` : ''}`;
      if (!isObj(it)) return problems.push(`${at} must be an object`);
      claim(it.id, at);
      for (const f of ['id', 'name', 'does']) if (!isStr(it[f])) problems.push(`${at}: ${f} is required`);
      if (it.product !== undefined && !isStr(it.product)) problems.push(`${at}: product, when set, names the product this comes from`);
      if (it.kind !== undefined) problems.push(`${at}: remove kind; every item is a feature`);
      if (it.need === null) {
        fits(it.name, NAME_FIT[1], at, 'a small weight');
        if (it.meets?.length) problems.push(`${at}: a feature with need null meets nothing; remove meets`);
        if (!Array.isArray(it.covers) || !it.covers.length || !it.covers.every(isStr)) problems.push(`${at}: covers must list what this feature does (its card shows it), since the client didn't ask for it`);
      } else if (!NEED[it.need]) {
        problems.push(`${at}: need "${it.need}" is not a need in this round; use null for a feature the client didn't ask for`);
      } else {
        fits(it.name, NAME_FIT[NEED[it.need].priority], at, 'its weight');
        if (!Array.isArray(it.meets) || !it.meets.length) problems.push(`${at}: meets must list the requirements of "${it.need}" it meets`);
        else for (const q of it.meets) if (!reqsOf(it.need).includes(q)) problems.push(`${at}: meets "${q}", which is not a requirement of "${it.need}"`);
      }
    });
    // one weight per need on each side, so what is left on a pan weighs the same as that side's score
    for (const [list, side] of [[rival, 'rival'], [items, 'items']]) for (const n of needs) {
      const on = list.filter(x => x?.need === n?.id);
      if (on.length > 1) problems.push(`${rt}: ${side} has ${on.length} features for need "${n.id}" (${on.map(x => x.id).join(', ')}); use one per need`);
    }
    needs.forEach(n => isStr(n?.id) && earlierNeeds.add(n.id));
  });

  if (!problems.length) checkPlay(pack, problems);
  return problems;
}

// Plays the pack with the engine's own scoring. These are what make a Scale scenario worth playing.
function checkPlay(pack, problems) {
  const sc = makeScoring(pack), US = pack.us.name, THEM = pack.them.name;
  const score = d => `${US} ${d.us}, ${THEM} ${d.them}`;
  const best = sc.bestDeal(), blind = sc.blindDeal();
  if (best.us <= best.them) problems.push(`the best play doesn't win the deal (${score(best)}); the learner must be able to win`);
  if (blind.us > blind.them) problems.push(`a play that ignores ${THEM} wins the deal (${score(blind)}); reading ${THEM}'s side must matter`);

  // in every round, ignoring the rival does worse than the best that round allows
  const won = new Set();
  pack.rounds.forEach((R, ri) => {
    const top = list => Math.max(...list.map(ids => { const o = sc.roundOutcome(ri, ids, won); return o.us - o.them; }));
    if (top(sc.blindChoices(ri)) >= top(sc.choices(ri))) problems.push(`rounds[${ri}] "${R.id}": ignoring ${THEM} scores as well as the best play this round; give ${THEM} a feature that beats one of yours`);
    best.rounds[ri].won.forEach(x => won.add(x));
  });

  const states = sc.reachable();
  if (!pack.rounds.some(R => R.items.some(i => i.need === null))) problems.push('at least one feature must answer no need (need: null), so the learner has to read the meeting to leave it off');

  // every counter-move can fire, and can also not fire
  pack.rounds.forEach((R, ri) => R.rival.forEach(r => {
    if (!r.when) return;
    const fired = states[ri].filter(s => s.has(r.when.won)).length;
    if (!fired) problems.push(`rounds[${ri}] rival "${r.id}": no play wins "${r.when.won}" before this round, so it never joins`);
    else if (fired === states[ri].length) problems.push(`rounds[${ri}] rival "${r.id}": every play wins "${r.when.won}", so it always joins; drop when`);
  }));
}
