# AGENTS.md

Handoff notes for picking this project back up. Last updated 15 Nov 2026.

## What this is

A phone study app (offline-capable PWA) for **GH-300, the GitHub Copilot certification exam**, built for James
(developer, ~10 years' experience) who wants to get through the material fast.

- Live: https://jminton7.github.io/gh300-study/ (GitHub Pages, served from `main` → `/docs`)
- Repo: https://github.com/jminton7/gh300-study
- Modes: Quiz (instant feedback + source link), Flashcards, Weak spots (spaced repetition), Mock exam
  (50 questions weighted by exam domain, 100-minute timer), Progress stats. Progress lives in the phone's localStorage.

**James's top priority: answers must be correct _for the exam_**, not just correct per today's docs. See
"Exam alignment" below before touching any question.

## Layout

```
data/part-a..h.json   question bank (questions + flashcards), see "Bank" below
data/BRIEF.md         writing rules for questions, incl. the "Exam alignment" section (read this first)
data/AUDIT.md         rules used for independent accuracy audits
data/audit-*.md       audit logs (what was changed and why, per file)
data/COVERAGE.md      exam topic coverage analysis vs study guide + 2026 test-taker reports
src/index.html        the whole app (vanilla JS, no deps). Bank is injected at /*BANK*/null
src/sw.js             service worker (network-first, offline fallback), versioned at build
src/manifest.webmanifest, src/icon-*.png
build.mjs             validates every part-*.json, merges, writes docs/ (the deployed site)
tools/smoke.mjs       headless-Chrome end-to-end test of the built docs/ (phone viewport)
docs/                 build output. Committed, because GitHub Pages serves it. Don't edit by hand.
```

## Commands

```sh
node build.mjs          # validate + build docs/. Fails loudly on schema errors.
node tools/smoke.mjs    # E2E: quiz (incl. choose-two), weak spots, back button, flashcards, mock, stats, topic filter
git push                # deploys; Pages rebuilds in ~1 min
```

The smoke test needs Chrome (set `CHROME=` to override the path) and ports 8765/9333 free. A run that's
killed part-way can leave Chrome holding 9333; if the next run hangs, kill stray chrome processes. Screenshots
go to `%TEMP%\gh300-shots`. Expected output: `summary: 95%` and `errors: none`.

## Bank

322 questions and 184 flashcards over all 15 Microsoft Learn modules (Part 1 + Part 2 learning paths) plus `extra`
(study-guide topics the modules don't cover). Domains and exam weights are in `DOMAINS` in `src/index.html`.

- Question: `{id, module, domain, q, options[4], answer, explain, source}`.
  Choose-two: `options` can have 5 entries, `answer` is an array, and `q` must end with "(Choose two.)".
  Ordering questions are written as single-answer questions whose options are different sequences.
- Card: `{id, module, domain, front, back, source}`.
- Optional `recent: true` marks a feature released after the exam outline. The app shows a "Newer than exam" tag
  and excludes the item from the mock exam.
- **Never change or reuse ids.** Users' progress is keyed by id.
- Writers put the correct option first. That's fine, because the app shuffles options. Keep option lengths balanced:
  the correct option shouldn't be noticeably longest. Current bank: correct option is longest in 22% (chance is
  ~25%), and never more than 25% longer than the longest distractor. Re-check this after edits (see snippet in
  BRIEF.md).
- Quiz/flashcard selection is weighted toward exam domain weights (`examWeighted`) and toward items the user missed
  (`weight`, a simple Leitner box).

## Exam alignment (the important part)

- Exam: 100 min, scaled score 700/1000 to pass, ~50–65 questions, mostly scenario questions with some choose-two,
  ordering and drop-down. Skills outline last updated **7 Aug 2026**. The answer key reflects Learn + GitHub
  docs as of roughly early/mid 2026.
- Real exam questions are under NDA. **Don't use brain-dump sites** (ExamTopics, "real exam questions" videos/repos,
  etc.). Use: the study guide, Learn modules, GitHub docs and changelog, archived docs, and topic-level test-taker
  reports.
- Rule: a question either tests something true in exam-era AND current material, or marks the exam-era answer and
  says in `explain` what changed since. Never mark as correct something that's only true because of a later change.
- Known post-exam changes:
  - Content exclusion support in the Copilot app/CLI went GA **2 Sep 2026**. Exam-era: exclusion NOT supported in
    IDE agent/edit mode, Copilot CLI, or the coding agent. Covered by p1m7-q07 and card p1m7-c14.
  - "Copilot in the cloud", cloud sandboxes and `copilot --cloud`: **28 Oct 2026** (items tagged `recent`).
  - GitHub.com chat retention becoming "life of account": announced **28 Aug 2026**. Exam-era: up to 28 days.
    IDE chat / CLI: not retained by default (Business/Enterprise).
  - Copilot code review approvals counting toward merge requirements are an admin opt-in. The default is still a
    Comment review.
  - Spark on github.com: no new users/apps from 4 Aug 2026.
- Renames: coding agent → Copilot cloud agent; premium requests → GitHub AI credits (usage billing from 1 Jun 2026);
  the old `gh copilot suggest/explain` extension was retired 25 Oct 2025 (the new CLI is `copilot`). Test-takers
  report the live exam still has some older items (old CLI, premium requests), so the bank teaches both, labeled.
- VS Code: `@terminal` / `@vscode` participants and edit mode are deprecated or hidden in current VS Code but still
  in exam-era material. The bank teaches the exam-era answer with a note.

## Status

- Every item has been through an independent audit (logs in `data/audit-*.md`). Notable fixes: one wrong answer key
  (p1m8-q09), several questions with two defensible answers, and exam-lag items.
- Coverage gaps from `COVERAGE.md` were filled by part-f (responsible AI), part-g (data/architecture) and part-h
  (plans, CLI basics incl. the retired gh copilot extension, productivity, chat feedback, prompt files, edit mode).
- Still overweight relative to the exam (fine, since quiz mode is domain-weighted): Copilot Spaces, cloud agent
  internals, policy-conflict edge cases, usage metrics.
- Not simulated: drag-and-drop/drop-down question types, and the exam's "can't go back" sections.

## James's study notes

- In a chat quiz before the app existed he scored 8/13. Misses: data retention by surface, which customization
  file does what (`copilot-instructions.md` vs `.github/instructions/*.instructions.md` + `applyTo` vs `AGENTS.md`
  vs `.github/prompts/*.prompt.md`), few-shot vs FIM, and policy conflicts (same enterprise → least restrictive;
  different enterprises → most restrictive).
- Suggested plan: about 6–10 hours total. Skim modules (focus: prompt engineering/data, management & content
  exclusion, cloud agent, code review), then app quizzes and mock exams until 80%+, then Microsoft's free official
  practice assessment (needs Microsoft sign-in, so James must take it himself):
  https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/practice/assessment?assessment-type=practice&assessmentId=218035372&practice-assessment-type=certification

## Likely next steps

1. Ask James how he did on the official practice assessment and the app's mock exam. Add or strengthen questions
   for topics he missed (same pipeline: write → independent audit → build → smoke → push).
2. If the exam outline changes again (check the "Change log" in the study guide:
   https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300), re-run the coverage
   check and audit affected items.
3. Optional app ideas: drop-down "action → effect" question type, a "can't go back" mock mode, light theme.
