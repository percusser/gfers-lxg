// CONTENT PACK — the only place a product or a source name appears.
// Engine, HUD and mechanics are generic. See ../../content-packs/README.md.
export default {
  id: 'default',
  title: 'The Valve Room',
  version: '1.0.0',
  // The source system whose data volume the customer is cutting (shown on the intro screen).
  product: 'Splunk',
  // Volume each mode lets through, as a fraction of a source's full GB/day.
  // Keys must cover every mode id the engine uses: full, filter, sample, cold, drop.
  modeVolume: { full: 1, filter: .55, sample: .25, cold: .15, drop: 0 },
  sources: [
    { id: 'fw',    name: 'Firewall syslog',  gb: 420 },
    { id: 'win',   name: 'Windows events',   gb: 310 },
    { id: 'edr',   name: 'EDR telemetry',    gb: 260 },
    { id: 'cloud', name: 'Cloud audit',      gb: 90  },
    { id: 'vpn',   name: 'VPN auth',         gb: 40  },
    { id: 'proxy', name: 'Proxy / DNS',      gb: 380 },
    { id: 'app',   name: 'App logs',         gb: 210 },
    { id: 'badge', name: 'Badge readers',    gb: 12  },
  ],
  // Consumers. `needs` is what each source must still deliver for the consumer to stay up.
  lamps: [
    { id: 'brute',   name: 'Brute-force login',  needs: { vpn: ['full', 'filter'],   win: ['full', 'filter'] } },
    { id: 'lateral', name: 'Lateral movement',   needs: { win: ['full'],            edr: ['full', 'filter'] } },
    { id: 'exfil',   name: 'Data exfiltration',  needs: { proxy: ['full', 'filter'], cloud: ['full', 'filter'] } },
    { id: 'beacon',  name: 'Malware beacon',     needs: { proxy: ['full', 'filter'], edr: ['full', 'filter'] } },
    { id: 'tail',    name: 'Tailgating',         needs: { badge: ['full', 'filter'], vpn: ['full', 'filter'] } },
  ],
  board: { id: 'board', name: 'Operations board', needs: { fw: ['full', 'filter', 'sample'], app: ['full', 'filter', 'sample'] } },
  tank:  { id: 'tank',  name: 'Retention tank',   needs: { fw: ['full', 'filter', 'cold'], cloud: ['full', 'filter', 'cold'], badge: ['full', 'filter', 'cold'] } },
  target: -0.30,
  // The customer's own cut plan. Round one: the learner calls what it breaks before it runs.
  plan: { fw: 'filter', proxy: 'filter', vpn: 'drop', badge: 'drop' },
  turns: 6,
  // Debrief only. What an SE says in the room, per outlet, and what each stop maps to.
  say: {
    brute:   'VPN auth is only 40 GB a day. Dropping it saves little and blinds brute-force alerts. Keep it full and filter a big source instead.',
    lateral: 'Lateral movement needs every Windows event field. Filtering removes fields its search uses. Cut volume somewhere else.',
    exfil:   'Proxy and DNS can be filtered. Sampling leaves gaps an exfiltration search cannot see across.',
    beacon:  'Malware beacons repeat on a timer. Sampling hides the timing. Filter the proxy feed, never sample it.',
    tail:    'Badge readers are only 12 GB a day. Dropping them kills the one alert that matches a badge-in with a VPN login.',
    board:   'The operations board shows trends, so sampled data works. Cold storage is too slow for it.',
    tank:    'Retention needs complete records, not fast ones. Cold storage fits firewall, cloud audit and badge data. Never drop them.',
  },
  stops: {
    full:   'Indexes every event.',
    filter: 'Removes chosen fields and events before indexing.',
    sample: 'Keeps 1 event in 4.',
    cold:   'Sends data to cold storage. Complete and searchable, but slow.',
    drop:   'Stops collecting it.',
  },
  theme: { pack: 'default' },
};
