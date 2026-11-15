# Audit log: part-c.json (p1m7, p1m8, p1m9)

Checked: 49 questions + 27 cards = 76 items. Changed: 6. Deleted: 0.

| id | problem | fix | source |
| --- | --- | --- | --- |
| p1m8-q09 | `answer` was 1 ("Yes, but only if telemetry is enabled..."), but the correct option is index 2 (usage metrics track activity, not licenses) | Set `answer` to 2 | https://docs.github.com/en/copilot/concepts/copilot-usage-metrics/copilot-metrics |
| p1m7-q07 | Exam-lag risk: older docs and guides said content exclusion isn't supported in IDE agent mode, Copilot CLI, or the coding agent. App and CLI support went GA in Sep 2026, after the Aug 2026 outline | Explanation now gives the current answer and the older one | https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot ; https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli |
| p1m7-q02 | Learn unit 4 lists only repository admins and org owners; current docs add enterprise owners. Answer still holds under either version | Explanation now mentions the Learn wording | https://docs.github.com/en/copilot/concepts/context/content-exclusion ; https://learn.microsoft.com/en-us/training/modules/github-copilot-management-and-customizations/4-manage-content-exclusions |
| p1m7-q16 | Older material uses the name "coding agent" | Explanation now notes the former name | https://docs.github.com/en/copilot/responsible-use/agents |
| p1m7-q24 | Correct option was the longest | Shortened it while keeping the meaning | https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot |
| p1m9-q01 | VS Code's new Copilot harness (default since Oct 2026) lists only /plan, /compact, /fork and skills as built-in slash commands. GitHub docs and Learn still teach /tests, /setupTests and /fixTestFailure | Answer unchanged. Explanation now notes the difference | https://docs.github.com/en/copilot/reference/cheat-sheet ; https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet |

Verified correct with no change: 70 items (43 questions, 27 cards).

Notes:
- p1m9-c01 cites Learn unit 3, which covers /tests and /setupTests. /fixTestFailure is covered in unit 5 and in the GitHub cheat sheet. The content is accurate, so the item was left unchanged.
- Learn unit 4 of the p1m7 module still says content exclusion doesn't apply with the `@github` chat participant. No item in this file repeats that claim.
