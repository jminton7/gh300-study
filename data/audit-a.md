# Audit log: part-a.json (p1m1, p1m2, p1m3)

Audited 15 Nov 2026. Checked 41 questions and 27 cards (68 items) against the Learn units and current GitHub docs that were fetched for this audit.

## Changed

id | problem | fix | source
---|---|---|---
p1m1-q01 | The stem said "postcode". The module's inclusiveness principle says AI "can't exclude certain geographies", so Inclusiveness was an arguably correct distractor. | Changed "postcode" to "ethnicity", so the item clearly tests consistent decisions for people in similar situations (Fairness). | https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai
p1m1-q05 | The correct option was the longest. | Lengthened distractor B by one word. | https://docs.github.com/en/copilot/responsible-use/copilot-code-completion
p1m2-q08 | The correct option was the longest by a clear margin. | Lengthened distractor D. | https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-network-errors
p1m3-q06 | The explanation and source said GitHub docs recommend summarizing context and say long histories cost more. The current docs only say to start a new conversation and roll back irrelevant turns. The cost and summarizing claims come from the Learn module. | Changed the source to the Learn unit 2 and rewrote the explanation to say which claim comes from which source. Lightly reworded distractor C. | https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices
p1m3-q09 | Distractor D ("few-shot by pasting several complete programs") was partly valid, because GitHub docs recommend giving examples. | Replaced it with "Resubmit it with 'be thorough and complete' added", which is clearly wrong. | https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering
p1m3-q17 | The correct option was the longest. | Lengthened distractor C. | https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/5-github-copilot-large-language-models
p1m3-c04 | Same problem as q06: the summarize and cost claims were attributed to the GitHub docs, which no longer say them. | Changed the source to the Learn unit 2. | https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices
p1m2-c01 | "Auto model selection only" is a volatile model detail and conflicts with the Learn module ("access to advanced AI models"). | Replaced it with a stable description: limited monthly use of inline suggestions and chat at no cost. | https://docs.github.com/en/copilot/get-started/plans
p1m2-c02 | Exam-lag risk: students now get Copilot Student, but older material says free Copilot Pro. | Added a note about the older wording. | https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students
p1m2-c03 | Exam-lag risk: the card said "AI credit pool", but older material and the exam may say premium requests. | Reworded to "larger monthly usage allowance (AI credits; older material: premium requests)". | https://docs.github.com/en/copilot/get-started/plans

## Deleted

None.

## Checked and found correct (unchanged)

58 items (35 questions, 23 cards).

## Notes

- In several questions the correct option is still tied for longest, or within 3 characters of the longest distractor (p1m1-q09, p1m1-q11, p1m2-q03, p1m2-q06, p1m2-q07, p1m3-q02, p1m3-q11). None is more than 25% longer, so I left them.
- The prompt-flow items (p1m3-q12 to q15, c06 to c08) come only from the Learn module. The current GitHub docs don't describe a "proxy filter" or "toxicity filter" pipeline. The items keep the "in the module's flow" framing.
