# Audit log: part-e.json (extra)

Checked: 36 questions + 23 cards = 59 items. Changed: 11. Deleted: 0. Found correct without changes: 48.

I checked all REST paths against /en/rest/copilot/copilot-user-management and /en/rest/copilot/copilot-metrics. I checked all audit event names (cfb_seat_added, cfb_seat_cancelled, cfb_seat_assignment_created/refreshed, cfb_org_settings_changed, cfb_enterprise_settings_changed, cfb_seat_management_changed, content_exclusion_changed, plan_changed) against the enterprise audit-log events reference. All of them exist.

| id | problem | fix | source |
|---|---|---|---|
| extra-q20 | The stem had a user who was also on a Copilot team. The REST docs say DELETE selected_users returns 422 when a seat was assigned through a team, so the distractor "request fails…team" was arguably correct. | Changed the stem to a directly assigned seat and replaced distractor D. The explanation now covers the 422 case and points to DELETE selected_teams. | https://docs.github.com/en/rest/copilot/copilot-user-management |
| extra-c14 | Didn't mention that team-assigned seats can't be removed through selected_users. | Added the 422 note. | https://docs.github.com/en/rest/copilot/copilot-user-management |
| extra-q22 | Exam-lag risk: older material names the "Copilot Metrics API" access policy for the legacy metrics endpoints. | Explanation now gives both names. Answer unchanged. | https://docs.github.com/en/rest/copilot/copilot-metrics ; https://docs.github.com/en/copilot/reference/enterprise-administrators/policy-conflicts |
| extra-c15 | Said only that the policy must be "enabled". The docs require "Enabled everywhere" at enterprise level. | Made it precise. | https://docs.github.com/en/rest/copilot/copilot-metrics |
| extra-q17 | The explanation said there's "no setting to extend retention". The cited doc doesn't say this. | Removed the unverified claim and kept the 180-day and SIEM-streaming facts. | https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/review-activity/review-audit-logs |
| extra-q02 | The correct option was the longest by a clear margin. The explanation also left out the documented exceptions. | Shortened the correct option. The explanation now names the exceptions (AI credit paid usage, Spark). | https://docs.github.com/en/copilot/reference/enterprise-administrators/policy-conflicts |
| extra-q10 | The correct option was the longest. | Shortened it. Same meaning. | https://docs.github.com/en/copilot/reference/copilot-billing/seat-assignment |
| extra-q24 | The correct option was the longest. | Shortened it. Same meaning. | https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-files |
| extra-q32 | Exam-lag risk: older material uses Ask/Edit/Agent modes rather than Ask/Plan/Agent built-in agents. | Explanation notes the older naming. Ask is read-only in both. | https://code.visualstudio.com/docs/agents/run/agent-harnesses |
| extra-c12 | "cfb_seat_management_changed (who gets access)" was vague. | Changed it to the org access setting: all members, selected, or disabled. This follows the event description. | https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise |
| extra-c23 | Said Spark was "deprecated and retired" without dates. It had no exam-lag note. | Added the 4 Aug 2026 stop date, the 31 Aug export window, and that deployed apps keep working. Added a note that older material and the exam may still treat Spark as current. | https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com/ |

Notes (no change):
- extra-q12: the agentic audit-log reference has a public-preview section on streaming "Copilot API usage records" (request/response bodies) for EMU and data-residency enterprises. The review-audit-logs page still says plainly that the audit log does not include local client session data such as prompts, so q12 stays as written.
- extra-q01: policy-conflicts calls the delegated state "No policy" while the concept page calls it "Let organizations decide". These are the same thing; the question uses the concept-page term.
