# Audit log: part-g.json (p1m3, data & architecture)

`id | problem | fix | source`

- p1m3-q32 | The two-year engagement-data figure was sourced only to a Microsoft community blog. The current github.com/features/copilot FAQ no longer has the retention section. | Verified "User Engagement Data: Kept for two years" for IDE access and all other access in the official GitHub Copilot FAQ archived 28 Feb 2026 and 1 Sep 2025 (exam era). Switched the source to the archive. Added "According to GitHub's Copilot FAQ" to the question and labeled the explanation as exam-era. | https://web.archive.org/web/20260228173246/https://github.com/features/copilot
- p1m3-c32 | Same weak source for the two-year figure | Same fix; the card back is now labeled as exam-era FAQ/Trust Center | same as above
- p1m3-q34 | The explanation said the DPA "prohibits [training] without customer authorization". No fetched source says that; the DPA "with authorization" clause covers billing, abuse detection and similar uses. | Rewrote: Business/Enterprise data is protected under the DPA, so the training setting isn't shown, and training applies only to individual plans | https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies
- p1m3-c33 | Same DPA wording problem | Same rewording | same as above
- p1m3-q35 | The correct option depended on the exact setting name "Allow GitHub to use my data for AI model training", which arrived with the 24 Apr 2026 change. Exam-era Learn only says individuals "can opt out". | The option now reads "Opt out of AI model training in their personal Copilot settings on GitHub". The explanation keeps the current setting name. | Learn unit 4; manage-policies; github.com/features/copilot FAQ
- p1m3-q41 | Sourced to a Microsoft community blog | Re-sourced to the GitHub docs content-exclusion page ("content in affected files will not inform inline suggestions... responses") and adjusted the explanation | https://docs.github.com/en/copilot/concepts/context/content-exclusion
- p1m3-q45 | The ordering question didn't say which process model it uses. The GitHub/Trust Center life-cycle diagram merges the proxy and toxicity stages. | Added "According to the Microsoft Learn prompt-engineering module's process flow". Checked the 4 sequences against unit 3: only option 0 matches (context, proxy, toxicity, LLM, post-processing, delivery). | Learn unit 3

## Checks with no change needed

- Ordering q46 (toxicity filter, then proxy checks, then delivery, then feedback loop) matches Learn unit 3 step 5→6. Every distractor breaks the order.
- Ordering q47 (input processing, language model analysis, response generation, output formatting) matches the inline-suggestions application card. Every distractor breaks the order.
- Retention items q30, q31 and q36 use the exam-era values as answers: IDE chat not retained, GitHub.com and Mobile up to 28 days. This is confirmed by current Learn unit 4 and the archived FAQ. q31 and q36 explain the 28 Aug 2026 change to life-of-account retention.
- c30 note confirmed: the exam-era FAQ says retention applies to "chat on github.com, mobile, and CLI". Current Learn lists the CLI as not retained.

Checked and found correct with no change: 29 items (20 questions + 9 cards).
Changed: 7 items (5 questions + 2 cards). Deleted: 0. JSON validated (25 questions, 11 cards).
