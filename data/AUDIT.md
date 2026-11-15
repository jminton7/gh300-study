# GH-300 question bank: independent accuracy audit

You are auditing questions someone else wrote for an offline study app for the GitHub Copilot certification
exam (GH-300). Today is 15 November 2026. The exam skills outline was last updated 7 August 2026.
Be skeptical: assume each item may be wrong until you've confirmed it.

IMPORTANT: also read the "Exam alignment" section at the end of BRIEF.md. The marked answer must be correct ON THE
EXAM (exam-era material, outline updated 7 Aug 2026). Never accept an answer that is only correct because of a
change made after ~Aug 2026. "(Choose two.)" questions have `answer` as an array; check every listed answer is
correct and every other option is wrong.

File format is described in C:\Users\james\gh300-study\data\BRIEF.md (read it).

## For EVERY question and card in your file

1. Open the cited `source` (GitHub docs markdown API works well:
   `https://docs.github.com/api/article/body?pathname=/en/copilot/...`; Learn units are plain pages).
   If the source doesn't actually support the claim, find one that does or fix the item.
2. Check the marked correct answer is right per CURRENT docs.
3. Check every distractor is definitively wrong. If a distractor is arguably correct or partially correct,
   rewrite it so it's clearly wrong (keep it plausible and keep its length similar).
4. Check the question has one unambiguous best answer and doesn't depend on unstated assumptions
   (e.g. plan type, IDE, default vs configured setting). Add the missing qualifier to the stem if needed.
5. Check for staleness: renamed features (coding agent → Copilot cloud agent, premium requests → AI credits),
   retired commands (gh copilot suggest/explain), deprecated things (Spark on github.com, chat participants in VS Code).
6. Exam-lag risk: if something changed between ~mid-2026 and now such that the exam may still expect the OLD
   answer (example: GitHub.com chat retention was 28 days; now cloud-sandbox sessions retain for the life of the
   account), do not make the question hinge on the changed detail. Either rephrase to test the stable part, or
   keep it and make the `explain` mention both: "Current docs: X. Older material (and possibly the exam): Y."

## Fix in place

- Edit the JSON file directly. Keep ids, keep `answer` indexes pointing to the correct option, keep exactly 4 options.
- Keep option lengths balanced: the correct option must not be more than ~25% longer than the longest distractor,
  and should not usually be the longest.
- If an item can't be verified at all, delete it (and log that).
- Validate the JSON parses when done.

## Log

Write a short Markdown log next to the file: `C:\Users\james\gh300-study\data\audit-<letter>.md` with one line per
changed/deleted item: `id | problem | fix | source`. Also list items you checked and found correct as just a count.

Reply with: number checked, number changed, number deleted, and the 3 most significant problems found.
