// The scale's scoring, pulled out of index.html so the browser and validate-pack.mjs run the same code.
// makeScoring(content) returns the functions bound to one content pack.
//
// A deal is played in rounds. In each round the committee takes the client's needs one at a time and counts the
// requirements each side meets: the rival's features already on the scale, and the features the learner used.
// The side that meets more wins the need and scores its priority (3 Must have, 2 Important, 1 Nice to have).
// The same count, or none on either side, scores for nobody. A used feature that answers no need scores nothing.
// On screen there are no points: a weight's size is its need's priority, the losing side's weight for each need
// comes off the pan, and a tie takes both off. What is left on each pan weighs exactly its side's score, because
// each side has at most one feature per need (validate-pack.mjs checks that).
//
// A rival feature with `when: { won: needId }` joins the rival's pitch only after the learner won that need in an
// earlier round: the rival's counter-move. Everything here is a count, so every play has one result.
export const PRIORITY = { 3: 'Must have', 2: 'Important', 1: 'Nice to have' };

export function makeScoring(CONTENT) {
  const ROUNDS = CONTENT.rounds;
  const ITEM = {}, RIVAL = {}, NEED = {};
  ROUNDS.forEach((R, ri) => {
    for (const it of R.items) ITEM[it.id] = { ...it, round: ri };
    for (const r of R.rival) RIVAL[r.id] = { ...r, round: ri };
    for (const n of R.needs) NEED[n.id] = { ...n, round: ri };
  });

  // the rival's features on the scale in round ri, given the needs the learner won before it
  const rivalsIn = (ri, won) => ROUNDS[ri].rival.filter(r => !r.when || won.has(r.when.won));

  function roundOutcome(ri, ids, won = new Set()) {
    const R = ROUNDS[ri];
    const items = ids.map(id => R.items.find(i => i.id === id)).filter(Boolean);
    const rivals = rivalsIn(ri, won);
    const needs = R.needs.map(n => {
      const base = new Set(n.reqs.map(q => q.id)), them = new Set(), us = new Set();
      const theirs = rivals.filter(r => r.need === n.id), feats = items.filter(i => i.need === n.id);
      for (const r of theirs) for (const q of r.meets) if (base.has(q)) them.add(q);
      for (const f of feats) for (const q of f.meets) if (base.has(q)) us.add(q);
      const winner = us.size > them.size ? 'us' : them.size > us.size ? 'them' : null;
      return { need: n, them: [...them], us: [...us], rivals: theirs.map(r => r.id), feats: feats.map(f => f.id),
        winner, points: winner ? n.priority : 0 };
    });
    const padding = items.filter(i => !i.need).map(i => i.id);
    const us = needs.reduce((s, x) => s + (x.winner === 'us' ? x.points : 0), 0);
    const them = needs.reduce((s, x) => s + (x.winner === 'them' ? x.points : 0), 0);
    return { round: ri, needs, padding, us, them,
      won: needs.filter(x => x.winner === 'us').map(x => x.need.id), rivals: rivals.map(r => r.id) };
  }

  // picks[ri] is the list of item ids placed in round ri
  function dealOutcome(picks) {
    const won = new Set(), rounds = [];
    ROUNDS.forEach((_, ri) => { const o = roundOutcome(ri, picks[ri] || [], new Set(won)); o.won.forEach(x => won.add(x)); rounds.push(o); });
    const us = rounds.reduce((s, o) => s + o.us, 0), them = rounds.reduce((s, o) => s + o.them, 0);
    return { rounds, us, them, margin: us - them, won: us > them };
  }

  const margin = o => o.us - o.them;
  const keyOf = won => [...won].sort().join(',');

  // every set of 1 to `slots` items from round ri's rack that `allow` lets through
  function choices(ri, allow = () => true) {
    const R = ROUNDS[ri], pool = R.items.filter(allow).map(i => i.id), out = [];
    const walk = (start, cur) => { if (cur.length) out.push(cur.slice()); if (cur.length === R.slots) return;
      for (let i = start; i < pool.length; i++) { cur.push(pool[i]); walk(i + 1, cur); cur.pop(); } };
    walk(0, []); return out;
  }
  // What a learner who ignores the rival uses in round ri: the features covering the most of the client's
  // requirements, each counted at its need's priority. Every tied set is returned.
  function blindChoices(ri) {
    const R = ROUNDS[ri];
    const cover = ids => R.needs.reduce((s, n) => {
      const met = new Set(); for (const id of ids) { const f = ITEM[id]; if (f.need === n.id) f.meets.forEach(q => n.reqs.some(r => r.id === q) && met.add(q)); }
      return s + n.priority * met.size; }, 0);
    const sets = choices(ri), top = Math.max(...sets.map(cover));
    return sets.filter(ids => cover(ids) === top);
  }
  // Each round's possible starting points: every set of needs the learner can have won before it, as
  // [{ won:Set, key }] per round. A round's result depends only on that set.
  function reachable() {
    const out = [new Map([['', new Set()]])];
    ROUNDS.forEach((_, ri) => {
      const next = new Map();
      for (const won of out[ri].values()) for (const ids of choices(ri)) {
        const w = new Set(won); roundOutcome(ri, ids, won).won.forEach(x => w.add(x)); next.set(keyOf(w), w);
      }
      out.push(next);
    });
    return out.slice(0, ROUNDS.length).map(m => [...m.values()]);
  }

  // Best (or worst) whole deal over the sets `pick(ri)` allows. Searched round by round, each (round, needs won)
  // state once.
  function searchDeal(sign, pick, from = 0, start = new Set()) {
    const memo = new Map();
    const go = (ri, won) => {
      if (ri === ROUNDS.length) return { margin: 0, picks: [] };
      const key = ri + ':' + keyOf(won); if (memo.has(key)) return memo.get(key);
      let best = null;
      for (const ids of pick(ri)) {
        const o = roundOutcome(ri, ids, won), next = new Set(won); o.won.forEach(x => next.add(x));
        const rest = go(ri + 1, next), m = margin(o) + rest.margin;
        if (!best || sign * m > sign * best.margin) best = { margin: m, picks: [ids, ...rest.picks] };
      }
      memo.set(key, best); return best;
    };
    const r = go(from, start);
    return from ? r : { ...dealOutcome(r.picks), picks: r.picks };
  }
  const bestDeal = () => searchDeal(1, ri => choices(ri));
  const worstDeal = () => searchDeal(-1, ri => choices(ri));
  // the learner who ignores the rival in every round; of the tied ways to do that, the one that ends best
  const blindDeal = () => searchDeal(1, blindChoices);
  // the best picks for rounds ri to the end, given the needs already won: { margin, picks }
  const bestFrom = (ri, won) => searchDeal(1, r => choices(r), ri, won);

  // 0 to 100 for the course system: how close the learner's margin came to the best deal's. Never shown on screen.
  function lmsScore(margin, best = bestDeal().margin, worst = worstDeal().margin) {
    return best === worst ? 100 : Math.round(100 * Math.max(0, Math.min(1, (margin - worst) / (best - worst))));
  }

  return { ITEM, RIVAL, NEED, rivalsIn, roundOutcome, dealOutcome, choices, blindChoices, reachable,
    bestDeal, worstDeal, blindDeal, bestFrom, lmsScore };
}

// The feature name on a weight: one to `maxLines` lines of at most `maxChars` letters, broken between words
// where the longest line comes out shortest. Returns null when the name can't fit.
export function nameLines(text, maxLines, maxChars) {
  const words = text.split(' ');
  for (let n = 1; n <= Math.min(maxLines, words.length); n++) {
    let best = null;
    const walk = (start, left, acc) => {
      if (left === 1) { const line = words.slice(start).join(' '); const lines = [...acc, line];
        const w = Math.max(...lines.map(l => l.length)); if (!best || w < best.w) best = { w, lines }; return; }
      for (let k = start + 1; k <= words.length - left + 1; k++) walk(k, left - 1, [...acc, words.slice(start, k).join(' ')]);
    };
    walk(0, n, []);
    if (best && best.w <= maxChars) return best.lines;
  }
  return null;
}
// What fits on each weight size (its points), in the one text size every weight uses
export const NAME_FIT = { 1: [2, 12], 2: [3, 16], 3: [3, 20] };
