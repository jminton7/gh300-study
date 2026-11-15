# GH-300 Study

A phone-friendly quiz and flashcard app for the GitHub Copilot certification exam (GH-300).
It has 238 multiple-choice questions and 147 flashcards covering every module in the
[Part 1](https://learn.microsoft.com/en-us/training/paths/copilot/) and
[Part 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/) learning paths,
plus exam-guide topics the modules don't cover well.

Every answer links to the source it was checked against (GitHub Docs or Microsoft Learn, November 2026).

## Use it

Open the GitHub Pages site on your phone and add it to your home screen. It works offline after the first load,
and your progress stays in the browser on that device.

## Edit questions

Questions live in `data/part-*.json` (format described in `data/BRIEF.md`). After editing, rebuild:

```sh
node build.mjs
```

This validates the bank and writes the site to `docs/`, which GitHub Pages serves.

Unofficial study aid. Not affiliated with GitHub or Microsoft.
