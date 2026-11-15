# Audit log: part-b.json (p1m4 Spaces, p1m5 Advanced features, p1m6 Across environments)

Audited 15 Nov 2026. 77 items checked (47 questions, 30 cards). 7 changed, 0 deleted.

## Changed

id | problem | fix | source
---|---|---|---
p1m4-q06 | Explain said loading the whole repo "would exceed model context limits"; the docs don't say that | Replaced with the docs' wording (best for large-scale use, such as questions across all docs) and contrasted it with individually attached files | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/copilot-spaces/create-copilot-spaces
p1m5-q08 | Stem didn't say which IDE, but @terminal is VS Code-specific. Exam-lag: @-participants are now deprecated in the VS Code Copilot harness | Stem now says "in VS Code". Explain now gives both versions: current docs (deprecated) and older material/exam (standard participants) | https://code.visualstudio.com/docs/chat/copilot-chat-context ; https://docs.github.com/en/copilot/reference/cheat-sheet
p1m5-q09 | Exam-lag: @vscode participant is deprecated in the Copilot harness, and the explain didn't say so | Explain now gives both the current docs and the older material/exam answer | https://code.visualstudio.com/docs/chat/copilot-chat-context
p1m5-q12 | Distractor "Close all other editor tabs and then ask a general question" is partly right, because Copilot uses the active/open files as context | Replaced it with "Ask a general question and rely on the open tabs for context", which is clearly the unscoped approach | https://learn.microsoft.com/en-us/training/modules/github-copilot-across-environments/3-git-hub-copilot-chat
p1m6-q09 | Exam-lag: the Learn CLI unit calls `copilot -i` "one-shot mode", but the CLI reference says -i starts an interactive session with that prompt. Only -p exits | Explain now mentions the Learn wording and the correct behavior (the answer is unchanged) | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference ; https://learn.microsoft.com/en-us/training/modules/github-copilot-across-environments/5-git-hub-copilot-for-the-command-line
p1m6-q12 | Explain implied Shift+Tab simply switches into plan mode. The CLI reference says it cycles between standard, plan, and autopilot modes | Explain reworded to say it cycles modes, including plan mode | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
p1m6-c03 | Card didn't separate -p from -i. The Learn module says -i is "one-shot", which could confuse | Added a note that -i starts an interactive session and doesn't exit | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference

## Checked and found correct (no change)

70 items (41 questions, 29 cards). Each matched current GitHub docs, VS Code docs, or the Learn units. Correct answers were confirmed, distractors are clearly wrong, and option lengths are balanced: no correct option is more than 25% longer than the longest distractor.

## Observations (no change needed)

- The Learn CLI unit lists `/explain` and `/suggest` slash commands and `brew install copilot-cli` without `--cask`. These don't match current docs. No question here depends on them.
- The Learn unit says org/enterprise admins must enable the Cloud Sandbox policy before members can use `copilot --cloud`. p1m6-q15 doesn't depend on this.
- The VS Code docs' Copilot-harness slash command list now shows only /plan, /compact, and /fork. GitHub's cheat sheet (VS Code tab) still lists /explain, /fix, and /tests. Questions on those commands follow the GitHub cheat sheet and the Learn module.
