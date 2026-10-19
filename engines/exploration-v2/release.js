// ../../layers/release/spine.ts
var release = {
  id: "atlas-relay-4-2",
  product: "Atlas Relay",
  version: "4.2",
  scenarioVersion: "1",
  status: "fictional-draft",
  shipped: "Standard event batches and a regional connector are available in 4.2.",
  condition: "Private-region delivery requires an enabled regional connector.",
  beta: "Automatic schema mapping is a preview. It has no production support or delivery date.",
  gap: "Unmapped custom formats cannot be accepted in production.",
  migration: "Existing 4.1 customers must enable and test the regional connector before private delivery moves to 4.2.",
  launchClaim: "The launch summary says that every source can connect. It does not state the preview limit.",
  competition: "Northstar Pipe has production custom mapping. Atlas Relay has simpler standard-batch operation. A mandatory unmapped input is not a fit."
};

// src/release.ts
var site = (id, name, at, observe, correct, why, wrong) => ({
  id,
  name,
  at,
  observe,
  correct,
  why,
  wrong,
  fine: correct === "none",
  cabinetColor: "#3F5260",
  screenColor: id === "preview" ? "#B63535" : "#497C91",
  source: release.id,
  version: release.version,
  configuration: "Customer evaluation deployment",
  evidence: observe
});
var releaseActions = {
  none: { label: "Accept it", short: "accepted" },
  fix: { label: "Plan services work", short: "planned services" },
  report: { label: "Flag it to the customer", short: "flagged" },
  stop: { label: "Block it from the deal", short: "blocked" }
};
var releaseInspection = {
  presentation: "stations",
  replayIdentity: { schemaVersion: 1, engineId: "exploration-v2", scenarioId: release.id, scenarioVersion: release.scenarioVersion },
  title: "Deployment Review",
  subtitle: `${release.product} ${release.version} for a new customer`,
  noun: "record",
  version: `${release.id}:${release.scenarioVersion}`,
  situation: `A customer is buying ${release.product} ${release.version}. Its automatic mapping feature is only a preview, with no support. Six deployment records need your call before the deal closes.`,
  goal: "Pick the right response for each of the six.",
  sites: [
    site("input", "Input acceptance record", [5, 0, 1], "A note under the input chart says the production feed has no mapping. The buyer has refused an adapter.", "stop", "Without a mapping or an adapter, this feed cannot run in production.", {
      none: "A required production input is not supported.",
      fix: "Services cannot supply an adapter the buyer refuses.",
      report: "A flag does not fix it. The deal still promises a feed that cannot work."
    }),
    site("migration", "Migration plan", [-3, 0, -3], "The regional connector must be set up in twelve environments. The customer asked for install and test help.", "fix", "Twelve setups is real work. Plan services time to install and test them.", {
      none: "Nobody owns delivery of twelve setups.",
      report: "A warning does not get the setup work done.",
      stop: "The supported connector works with planned services help."
    }),
    site("owner", "On-call schedule", [-5, 0, 1], "All delivery checks pass. No owner is listed for connector alerts.", "report", "The customer must name an owner before production.", {
      none: "An alert with no owner can go unanswered.",
      fix: "Services cannot staff the customer's on-call schedule.",
      stop: "A missing name is easy to fix. It does not block the deal."
    }),
    site("capacity", "Capacity record", [1, 0, -3], "The measured batch rate is supported. The sizing sheet has no growth figure for next quarter.", "report", "Ask the customer for growth figures before final sizing.", {
      none: "The sheet does not cover next quarter.",
      fix: "The customer can give the figure without a services contract.",
      stop: "The measured load is supported. Nothing has failed."
    }),
    site("connector", "Regional delivery monitor", [-3, 0, 3], "The regional connector is on. Delivery and recovery checks pass with standard batches.", "none", "The connector is on and its checks pass. Nothing needs doing.", {
      fix: "It is already installed and tested.",
      report: "A healthy connector is not a problem.",
      stop: "Every requirement is met."
    }),
    site("preview", "Red preview panel", [4, 0, -3], "A red panel says PREVIEW DISABLED. Production uses a tested standard-input adapter. Automatic mapping is not in the deal.", "none", "The preview is off on purpose. The tested adapter covers the agreed input.", {
      fix: "The tested adapter needs no replacement.",
      report: "A disabled optional preview is not a production problem.",
      stop: "A red panel does not break the tested production path."
    })
  ]
};
export {
  releaseActions,
  releaseInspection
};
