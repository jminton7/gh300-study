# Audit log: part-f.json (p1m1, Responsible AI)

id | problem | fix | source
---|---|---|---
p1m1-q22 | Explain paraphrased the module wrongly ("remove sensitive data once it's no longer required"). The module says "once the AI is in use" | Reworded explain to match the module | https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai
p1m1-q24 | Same misquote of the data-removal guidance in explain | Reworded explain ("remove sensitive data once the AI is in use", "control who can access keys") | https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai
p1m1-q25 | Explain cited unverified "GitHub's CLI guidance says never to commit secrets", which isn't in the cited source | Replaced it with why the "delete the thread" distractor is wrong | https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai
p1m1-q27 | Stem said "so that no group ends up with a worse experience", which overlaps with the fairness definition ("avoiding differential impacts on similarly situated groups"). Two principles were defensible | Stem now names accessibility and language outcomes ("works with screen readers and in their languages"), which map only to inclusiveness. Explain updated | https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai
p1m1-q29 | Source was the generic Microsoft principles page, not the Learn unit whose wording the item uses | Source changed to the Learn unit | https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai
p1m1-q32 | Explain claimed GitHub "advises validating output against current documentation" and a "fixed body of data". Neither is stated in the source | Explain now relies on the documented point that web search helps with recent events and new technologies, plus the review/test guidance | https://docs.github.com/en/copilot/responsible-use/chat
p1m1-q35 | Explain claimed "no GitHub agreement claims ownership" (customer agreements weren't checked) | Removed that claim. Explain now sticks to ToS J.2 and J.5 | https://docs.github.com/en/site-policy/github-terms/github-terms-of-service#j-ai-features-training-and-your-data
p1m1-q46 | The --allow-all-tools warning and the home-directory advice are on the Copilot CLI concepts page, not the agents application card. Explain paraphrase overstated ("destructive operations without individual prompts") | Source changed. Explain now quotes the actual warning ("can run any shell command you can run without asking first") | https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli

Deleted: none.

Checked and found correct (no change): 19 questions (q20, q21, q23, q26, q28, q30, q31, q33, q34, q36–q45) and 11 cards (c20–c30).

Notes:
- Principle mapping was checked strictly against the Learn unit definitions. q20 and q21 map to accountability, q22–q25 to privacy and security, q26 to fairness, q27 (after the fix) to inclusiveness, q28 to transparency (the unit lists auditability/logging under transparency), q29 to accountability and transparency, and q30 to reliability and safety.
- q23 mentions "regular security audits". The unit lists those under privacy and security, and the rest of the scenario (HSMs, key rotation, restricted access) is clearly privacy and security, so the item is unambiguous.
- Option-length balance: the correct option is the longest in 6 of 27 questions (22%), and the largest ratio is 1.10.
- No answer depends on post-Aug-2026 changes. ToS section J has been effective since 27 Apr 2026, PR-summary and code-review limitations are stable, and `--allow-all-tools` dates from the CLI preview.
