// Default content pack for engines/scale: a copy of content-packs/scale/default.json, so the page runs with no pack injected.
// Every company, product and person on screen comes from the pack; the engine stays generic.
export default {
  "id": "calder-county-audit",
  "version": "6.0.0",
  "title": "The Scale",
  "client": "Calder County",
  "clientRef": "the county",
  "memo": {
    "from": "Your sales manager",
    "about": "Their failed audit"
  },
  "situation": [
    "Calder County is a big county with a small IT team: eight people looking after 2,000 employees, a jail and a 911 center. The state failed them on their security audit last month. The IT director has until spring to fix it, and the county auditor has to sign off before the state checks again.",
    "They already pay for CrowdStrike on their laptops, so CrowdStrike walked in first. This is our one meeting. Listen to the two of them. The committee decides right after."
  ],
  "us": {
    "name": "Splunk",
    "product": "Splunk Enterprise Security"
  },
  "them": {
    "name": "CrowdStrike",
    "product": "Falcon Next-Gen SIEM",
    "why": "The county already runs Falcon on its laptops, so CrowdStrike pitches its SIEM as one more part of a tool the county already has."
  },
  "rounds": [
    {
      "id": "audit",
      "name": "The audit meeting",
      "slots": 3,
      "intro": "The IT director and the county auditor say what the state audit needs.",
      "needs": [
        {
          "id": "year",
          "name": "A year of searchable logs",
          "priority": 3,
          "said": "The state audit says we keep a year of logs from every system, not just the laptops. When the auditor asks about a login from last spring, we need the answer that day, not after a week of restoring old files.",
          "quote": "Logs from every system, not just the laptops, kept for a year.",
          "reqs": [
            {
              "id": "keep12",
              "text": "Keeps 12 months of laptop logs"
            },
            {
              "id": "keepother",
              "text": "Keeps 12 months of logs from other systems"
            },
            {
              "id": "fastold",
              "text": "Searches old logs in seconds"
            },
            {
              "id": "oneplace",
              "text": "Old and new logs in one search"
            }
          ],
          "who": "IT director"
        },
        {
          "id": "every",
          "name": "Logs from every system",
          "priority": 3,
          "said": "I want the firewalls, the badge doors and the 911 dispatch system in the same report as your servers and laptops.",
          "quote": "The firewalls, the badge doors and 911 dispatch in the same report.",
          "reqs": [
            {
              "id": "firewall",
              "text": "Firewalls and network gear"
            },
            {
              "id": "badge",
              "text": "The badge doors"
            },
            {
              "id": "dispatch",
              "text": "The 911 dispatch system"
            },
            {
              "id": "servers",
              "text": "Servers and laptops"
            }
          ],
          "who": "County auditor"
        },
        {
          "id": "reports",
          "name": "Reports the auditor accepts",
          "priority": 3,
          "said": "Every year two of us spend a month building the audit report in spreadsheets. We want it ready when the auditor asks, with a record of who looked at what, kept for seven years.",
          "quote": "Ready when the auditor asks, with a record of who looked at what.",
          "reqs": [
            {
              "id": "ready",
              "text": "Ready-made state audit reports"
            },
            {
              "id": "who",
              "text": "Records who looked at what"
            },
            {
              "id": "seven",
              "text": "Keeps audit records for 7 years"
            }
          ],
          "who": "IT director"
        },
        {
          "id": "leavers",
          "name": "Accounts of people who left",
          "priority": 2,
          "said": "People leave a department and their accounts stay open for months. I flagged it in the audit. When an old account gets used, I want to see everything it touched, from the badge doors to the servers.",
          "quote": "When an old account gets used, I want to see everything it touched.",
          "reqs": [
            {
              "id": "leaver",
              "text": "Flags accounts of people who left"
            },
            {
              "id": "everything",
              "text": "Shows everything the account touched"
            }
          ],
          "who": "County auditor"
        },
        {
          "id": "price",
          "name": "A price the board can plan",
          "priority": 1,
          "said": "The board votes on one number for three years. If the audit brings in more logs, that number can't jump.",
          "quote": "If the audit brings in more logs, that number can't jump.",
          "reqs": [
            {
              "id": "flat",
              "text": "Price stays flat as logs grow"
            },
            {
              "id": "three",
              "text": "One price for three years"
            }
          ],
          "who": "IT director"
        }
      ],
      "rival": [
        {
          "id": "cs-logscale",
          "name": "LogScale storage",
          "need": "year",
          "meets": [
            "keep12",
            "fastold",
            "oneplace"
          ],
          "product": "Falcon LogScale",
          "pitch": "LogScale keeps 12 months of Falcon logs from the laptops and searches old and new logs together in seconds. In the plan CrowdStrike quoted, logs from other systems are kept for 90 days."
        },
        {
          "id": "cs-connectors",
          "name": "Data connectors",
          "need": "every",
          "meets": [
            "firewall",
            "servers"
          ],
          "pitch": "Falcon pulls in logs from the big firewall vendors, and from servers and laptops."
        },
        {
          "id": "cs-compliance",
          "name": "Compliance dashboards",
          "need": "reports",
          "meets": [
            "ready",
            "who",
            "seven"
          ],
          "pitch": "Ready-made state audit reports, a record of who looked at what, and 7 years of audit records."
        },
        {
          "id": "cs-identity",
          "name": "Identity Protection",
          "need": "leavers",
          "meets": [
            "leaver"
          ],
          "product": "Falcon Identity Protection",
          "pitch": "Identity Protection flags accounts of people who left and alerts the same day one signs in. It watches sign-ins only, not the badge doors or the servers' own logs."
        },
        {
          "id": "cs-flex",
          "name": "Falcon Flex pricing",
          "need": "price",
          "meets": [
            "flat",
            "three"
          ],
          "pitch": "One Flex price for three years. It stays flat as logs grow."
        }
      ],
      "items": [
        {
          "id": "addons",
          "name": "Splunkbase add-ons",
          "need": "every",
          "meets": [
            "firewall",
            "badge",
            "dispatch",
            "servers"
          ],
          "does": "Ready-made add-ons bring in logs from firewalls, the badge doors, the 911 dispatch system, servers and laptops."
        },
        {
          "id": "smartstore",
          "name": "SmartStore",
          "need": "year",
          "meets": [
            "keep12",
            "keepother",
            "fastold",
            "oneplace"
          ],
          "does": "Keeps 12 months of logs from every system in cloud storage, and searches old and new logs together in seconds."
        },
        {
          "id": "auditpack",
          "name": "Audit report pack",
          "need": "reports",
          "meets": [
            "ready",
            "who"
          ],
          "does": "Ready-made state audit reports, with a record of who looked at what."
        },
        {
          "id": "ueba",
          "name": "Behavior analytics",
          "need": "leavers",
          "meets": [
            "leaver",
            "everything"
          ],
          "does": "Flags accounts of people who left, and shows everything an account touched, from the badge doors to the servers."
        },
        {
          "id": "mobile",
          "name": "Mobile app",
          "need": null,
          "does": "Shows alerts and dashboards on a phone or tablet.",
          "covers": [
            "Alerts on a phone",
            "Dashboards on a tablet"
          ]
        }
      ]
    }
  ],
  "objectives": [
    {
      "id": "o1",
      "text": "Given a client's needs and a rival's features, the learner can choose the features that meet more of a need than the rival does, and leave out the ones that only match or lose.",
      "mistakes": [
        "Chooses the feature that matches the need best without checking whether the rival matches it as well.",
        "Chooses a feature the client didn't ask for."
      ]
    },
    {
      "id": "o2",
      "text": "Given a feature the client didn't ask for, the learner can leave it off the scale.",
      "mistakes": [
        "Uses a feature because it sounds useful, though nobody in the meeting asked for it."
      ]
    }
  ],
  "objectiveMap": {
    "o1": [
      "/rounds/0/items/0",
      "/rounds/0/items/1",
      "/rounds/0/items/2",
      "/rounds/0/items/3"
    ],
    "o2": [
      "/rounds/0/items/4"
    ]
  }
};
