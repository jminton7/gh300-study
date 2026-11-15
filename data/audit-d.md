# Audit log: part-d.json (p2m1–p2m6)

Audited 15 Nov 2026 against current GitHub docs (markdown API) and the Learn module units.

## Changed / deleted

id | problem | fix | source
---|---|---|---
p2m4-q01 | Answer (Comment review by default) still right, but docs now have opt-in Copilot approvals that count toward required approvals; explain implied Copilot never approves | Explain now covers both: default Comment review, admin-enabled approvals (off by default), plus an exam-lag note | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review
p2m4-c01 | Same as p2m4-q01 | Card back mentions opt-in Copilot approvals | same
p2m4-q14 | Distractor "Reply @copilot under each review comment…" partly correct: an @copilot mention on a PR does make the cloud agent edit files | Replaced with "Thumbs-up each comment so Copilot code review commits the change itself"; explain updated | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-github
p2m4-q06 | Distractor "A 'Ruby models' section in .github/copilot-instructions.md" partly correct, because repo-wide instructions could carry path-scoped rules | Replaced with "An app/models/.github/copilot-instructions.md file" (not read); explain updated | https://learn.microsoft.com/en-us/training/modules/code-reviews-pull-requests-github-copilot/4-issues-early-automated-reviews-copilot
p2m4-q02 | Explain said a ruleset covers "every" PR; docs limit it to authors with Copilot access unless review for unlicensed members is enabled | Explain qualified | https://docs.github.com/en/copilot/concepts/agents/code-review
p2m4-q12 | "AI credits paid usage" is a 2026 rename; exam may say premium requests | Added an exam-lag note to the explain | https://docs.github.com/en/copilot/concepts/agents/code-review
p2m2-q05 | Explain left out the new extra approval required for PRs under Copilot's own app identity | Added to explain (answer unchanged) | https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/risks-and-mitigations
p2m2-c05 | Same as p2m2-q05 | Card back mentions the extra approval | same
p2m2-q11 | Copilot in the cloud: sessions now default to cloud sandboxes, where setup steps don't apply. Exam/Learn assume GitHub Actions | Explain notes the current default and the exam-lag (stem was already qualified) | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment
p2m2-c07 | Same as p2m2-q11 | Card notes it doesn't apply to cloud sandboxes (current default) | same
p2m2-q13 | Secrets are now the "Agents" secret type; older material says the `copilot` Actions environment | Explain covers both names | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables
p2m3-q05 | Explain said the remote endpoint covers "GitHub Enterprise Cloud". GHE.com data residency uses a different remote URL. Source pointed to the README instead of the docs | Explain corrected; source switched to the docs page | https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/enterprise-configuration
p2m3-c01 | "USB-C for AI tools" wasn't in the cited docs page (it comes from the Learn module) | Rewrote the card to match the Learn unit and changed the source | https://learn.microsoft.com/en-us/training/modules/mcp-server/2-simplify-workflow
p2m3-c05 | Docs list the default toolsets as repos/issues/pull_requests; the README adds context and users | Changed "The defaults are" to "The defaults include" | https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/configure-toolsets

Deleted: none.

## Checked and found correct (no change)

91 items (56 questions, 35 cards).

Totals: 105 checked (65 questions, 40 cards), 14 changed, 0 deleted. JSON validates: every question has 4 options, a valid answer index and a unique id, and no correct option is more than 25% longer than its longest distractor.
