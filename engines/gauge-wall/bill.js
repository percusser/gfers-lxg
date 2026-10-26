// The bill for one pricing model: pure, no DOM, shared by the wall and the pack check.
// A month costs the commitment at the model's rate, used or not, plus any usage
// over the commitment at `overage` times that rate.
export function monthCost(L, commit, usage, overage) {
  return { base: commit * L.rate, over: Math.max(0, usage - commit) * L.rate * overage };
}

/** Total bill over `months` (default: the months still to run). */
export function bill(L, commit, overage, months = L.future) {
  return months.reduce((n, u) => { const c = monthCost(L, commit, u, overage); return n + c.base + c.over; }, 0);
}

/** The commitment on the knob's grid with the lowest bill over `months`; the first of equals. */
export function bestCommit(L, overage, months = L.future) {
  let best = null;
  for (let c = L.range[0]; c <= L.range[1]; c += L.step) {
    const b = bill(L, c, overage, months);
    if (!best || b < best.bill) best = { commit: c, bill: b };
  }
  return best;
}
