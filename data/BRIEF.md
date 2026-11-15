# GH-300 question bank brief (shared by all writers)

We are building an offline phone study app for the GitHub Copilot certification exam (GH-300).
Today is 15 November 2026. The exam skills outline was last updated 7 August 2026.
The user is a senior developer (10 years). Questions should be exam-style: mostly short scenarios
("A team needs X, what should they do?"), not trivia about UI click paths.

## Accuracy rules (most important)

- Every fact must be verified against a CURRENT source that you actually fetched in this session:
  - GitHub docs. The markdown API works well:
    `https://docs.github.com/api/article/body?pathname=/en/copilot/<path>`
    (Find paths via web search or links inside fetched pages.)
  - The Microsoft Learn module units, e.g.
    `https://learn.microsoft.com/en-us/training/modules/<module-slug>/` lists the units; open each unit.
- Copilot changes fast. Known changes in 2026:
  - "Copilot coding agent" was renamed "Copilot cloud agent"; there is a new "Copilot in the cloud" experience (Oct 28 2026).
  - "Premium requests" are being replaced by "GitHub AI credits". Plans now include Free, Student, Pro, Pro+, Max, Business, Enterprise.
  - GitHub Spark on github.com was announced for deprecation (Aug 2026).
  - The old `gh copilot suggest/explain` extension is retired; the current Copilot CLI is installed with `npm install -g @github/copilot`, `winget install GitHub.Copilot`, or `brew install --cask copilot-cli`, and run with `copilot`.
  - Content exclusion now IS supported for Copilot CLI, cloud agent, Copilot app and IDE agents (with caveats). Older guides say otherwise; don't repeat the old claim.
  - Data retention (Business/Enterprise defaults): Copilot Chat in IDE and Copilot CLI don't retain prompts/suggestions; Copilot on GitHub.com and GitHub Mobile retain up to 28 days. Never used to train models.
- AVOID volatile specifics: prices, credit amounts, exact model names, release dates, and anything you could not confirm.
- If the Learn module and current GitHub docs disagree, do not write a question on that point (or write it so both agree).
- Each question needs exactly one clearly correct answer. Distractors must be plausible and similar in length to the correct answer. No "all of the above" / "none of the above". The app shuffles options, so order doesn't matter.

## Output

Write a single JSON file (UTF-8, valid JSON, no comments) at the path you are given, shaped like:

```json
{
  "questions": [
    {
      "id": "p1m3-q01",
      "module": "p1m3",
      "domain": "prompt",
      "q": "Question text",
      "options": ["correct or not", "...", "...", "..."],
      "answer": 0,
      "explain": "1-3 sentences: why the answer is right and why the tempting wrong one is wrong.",
      "source": "https://... (the page that confirms it)"
    }
  ],
  "cards": [
    {
      "id": "p1m3-c01",
      "module": "p1m3",
      "domain": "prompt",
      "front": "Short prompt/term (e.g. 'Few-shot prompting')",
      "back": "Concise answer, 1-2 sentences",
      "source": "https://..."
    }
  ]
}
```

- `answer` is the 0-based index into `options`. Exactly 4 options.
- `domain` must be one of:
  - `responsible` (Use GitHub Copilot responsibly)
  - `features` (Use GitHub Copilot features: IDE, CLI, agents, MCP, code review, Spaces, org policies, audit log, REST API)
  - `data` (Data and architecture: data flow, prompt building, proxy filtering, lifecycle, LLM limits)
  - `prompt` (Prompt engineering and context crafting)
  - `productivity` (Developer productivity: generation, refactoring, docs, tests, security, legacy code)
  - `privacy` (Privacy, content exclusions, public-code filter, safeguards, troubleshooting)
- Module ids:
  - p1m1 Responsible AI with GitHub Copilot
  - p1m2 Introduction to GitHub Copilot
  - p1m3 Introduction to prompt engineering with GitHub Copilot
  - p1m4 Introduction to Copilot Spaces
  - p1m5 Using advanced GitHub Copilot features
  - p1m6 GitHub Copilot across environments (IDE, Chat, GitHub.com, CLI, Copilot app)
  - p1m7 Management and customization considerations
  - p1m8 Developer use cases for AI with GitHub Copilot
  - p1m9 Develop unit tests using GitHub Copilot tools
  - p2m1 Building applications with agent mode
  - p2m2 Copilot in the cloud (cloud agent)
  - p2m3 Introduction to MCP Server
  - p2m4 Code reviews and pull requests with Copilot
  - p2m5 Using GitHub Copilot with JavaScript
  - p2m6 Using GitHub Copilot with Python
  - extra Exam-guide topics not well covered by modules

After writing, validate the file parses (e.g. `node -e "JSON.parse(require('fs').readFileSync(process.argv[1],'utf8'))" <file>`) and fix errors.
Finally reply with: counts per module, and a list of anything you deliberately skipped because sources conflicted or were unclear.

## Exam alignment (added after audit; overrides anything above)

The goal is answers that are correct ON THE EXAM. The exam outline was last updated 7 Aug 2026 and its questions
were written against Microsoft Learn + GitHub docs as of roughly early/mid 2026.

- Only test points where Learn, exam-era docs, and current docs agree; OR test the exam-era answer and say in
  `explain` what changed since ("Exam-era material: X. Since <month> 2026: Y.").
- Never mark as correct an answer that is only true because of a change after ~Aug 2026. Known post-exam changes:
  content exclusion support in Copilot app/CLI (GA 2 Sep 2026; exam-era: exclusion NOT supported in IDE agent/edit
  mode, Copilot CLI, or coding agent); cloud sandboxes / `copilot --cloud` / "Copilot in the cloud" (28 Oct 2026);
  GitHub.com chat retention becoming "life of account" (announced 28 Aug 2026; exam-era: up to 28 days).
- Test-takers report the live exam still contains some older items (e.g. the retired `gh copilot suggest/explain`
  CLI extension, "premium requests"). It's fine to write cards/questions that teach those, clearly labeled as the
  older version, so the learner recognizes them.
- Exactly 4 options is the norm. "Choose two" questions are allowed: put "(Choose two.)" at the end of `q`, use
  4 or 5 options, and make `answer` an array of two 0-based indexes, e.g. `"answer": [0, 3]`.
- Ordering/sequence questions: write as a normal single-answer question whose options are 4 different sequences.
- Option-length balance: the correct option must not be more than ~25% longer than the longest distractor and
  should be the longest in no more than ~30% of your questions.
