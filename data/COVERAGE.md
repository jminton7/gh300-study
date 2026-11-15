# GH-300 question bank: coverage check against the 2026 exam

Checked 15 Nov 2026 against the official skills outline (skills measured as of 7 Aug 2026), plus 2026 reports from people who took the exam. The reports only describe which topics came up and what the questions felt like. No exam questions were read or copied. Brain-dump sites and "real exam question" sources were not used.

Bank checked: `part-a..e.json`, with **238 questions and 147 cards**.

## TL;DR

- **The bank leans too heavily on Features.** Using the domain tags, Features has 98 of 238 questions (41%), but the exam weight is 25–30%. Using study-guide bullets instead, about 140 questions test Features topics, because many items tagged "privacy" or "prompt" are really about CLI permissions, cloud-agent security, MCP or Spaces.
- **Two domains are seriously under-covered:**
  - **Responsible AI (15–20%)**: 17–19 questions (about 8%). The target is about 44.
  - **Data & architecture (10–15%)**: 7 tagged questions. Another 3 questions and about 5 cards elsewhere also test data topics. That's about 10 effective questions against a target of about 31. Three topics have **zero** questions: data retention by surface or plan, the suggestion lifecycle, and how prompts are built from context.
- **Productivity has holes:** code generation, refactoring and docs have 0 primary questions. So do security and performance improvements, sample data, and integration tests.
- **Test-takers bring up plans and licensing more than any other topic**, but the bank has only 5 questions on it. CLI login and authentication came up in 2 reports; the bank has 1 question.
- **Style gap:** test-takers describe choose-two items, ordering (build-list) items and drop-down (hot-area) items. They also say there are sections you can't return to. The app's single-answer, 4-option format doesn't cover any of these.

Weight targets below assume a bank of 238 and use the midpoint of each domain's range, normalised to 100%. That gives Responsible ≈ 44, Features ≈ 69, and each of the other four domains ≈ 31.

| Domain (exam weight) | Questions by `domain` tag | Questions by study-guide bullet (this audit) | Target ≈ | Verdict |
|---|---|---|---|---|
| Responsible (15–20%) | 19 | 17 | 44 | **Under by ~25** |
| Features (25–30%) | 98 | 113 in-guide + 30 off-guide (cloud agent, metrics, plans, app, memory) | 69 | **Over by ~30–70** |
| Data & architecture (10–15%) | 7 | 9 (+3 counted under Responsible/Productivity as limitations) | 31 | **Under by ~20** |
| Prompt (10–15%) | 38 | 25 | 31 | OK |
| Productivity (10–15%) | 35 | 17 (+~8 slash-command items counted under Features) | 31 | Slightly under; uneven |
| Privacy (10–15%) | 41 | 27 | 31 | OK (heavy on network troubleshooting) |

## How the mapping was done

- Each item was read and given **one primary** study-guide bullet. Items that clearly also test another bullet are listed in the "also touched" column. Items that fit no bullet are tagged as off-guide.
- Counts are shown as `questions / cards`.
- Item IDs are examples, not complete lists. The full mapping is in the session notes and can be regenerated if needed.

### Is data & architecture covered under other tags?

Partly, but not enough. The 7 items tagged `data` are `p1m3-q12..q17` and `p1m4-q06`. The items below are tagged differently but really test data or architecture:

- **LLM/Copilot limitations:** `p1m1-q12` (Chat is designed for coding questions), `p1m8-q03` (niche frameworks), `p1m8-q04` (architecture trade-offs), and cards `p1m1-c08`, `p1m8-c05`, `p2m1-c06`.
- **Data use:** card `p1m7-c12` (no training on Business/Enterprise data). Also `p1m4-q03` and card `p1m4-c03` (Space retrieval and permission scoping).
- **How context is determined:** 8 prompt-domain questions cover this from the user's side (`p1m3-q02`, `p1m5-q10/11/12/15`, `p2m1-q04/05`, `p2m5-q03`). None of them explain how Copilot builds the prompt.

Even counting all of these, data & architecture reaches only about 10 questions. **Nothing** covers:

- retention by surface or plan
- the suggestion lifecycle end to end
- the context-window limit (only card `p1m3-c11`)
- how Chat and completions handle data differently

## Coverage by study-guide bullet (skills measured as of 7 Aug 2026)

The **Reports** column gives the number of independent 2026 first-hand reports that mention the topic. See the topic table and sources further down.

### Use GitHub Copilot responsibly (15–20%)

| Bullet | Q / C | Examples | Also touched by | Reports |
|---|---|---|---|---|
| Describe risks and limitations of Generative AI tools | 2 / 1 | p1m1-q06, q07 | D5 items | 7 (RAI overall) |
| Describe ethical and responsible AI usage | 4 / 5 | p1m1-q01, q02, q03, q11 (fairness, inclusiveness, transparency, reliability) | — | 7 |
| Identify potential harms and mitigation strategies | 3 / 1 | p1m1-q04, q08, q10 | p2m2-q08 | 7 |
| Explain the need to validate AI output | 5 / 0 | p1m1-q09, p1m8-q13, p2m1-q09, p2m6-q03, q05 | p1m9-q06/07/12, p2m4-q11 | 2 |
| Identify how to operate GitHub Copilot responsibly | 3 / 1 | p2m2-q02, q05, p2m3-q10 | p2m1-q03, CLI permission items | 1 |

**Missing principles:** there's no scenario question on **accountability** or on **privacy & security as a principle**; those two appear only on cards. There are also no scenario questions on bias in suggestions, IP or licensing harm, or insecure-code harm and how to mitigate it.

### Use GitHub Copilot features (25–30%)

| Bullet | Q / C | Examples | Notes | Reports |
|---|---|---|---|---|
| Enable Copilot in the IDE | **1 / 0** | p1m2-q03 (seat) | Nothing on installing the extension, signing in, the status icon, or enabling per language | 2 ("how to enable features") |
| Trigger Copilot through inline, chat, CLI, agent mode | 10 / 4 | p1m2-q04/05, p1m6-q01..05 | Mostly VS Code keyboard shortcuts | — |
| Configure content exclusions (app knowledge) | 4 IDE-specific (counted under S1/S4) | p1m7-q07, q08, q09, q24 | OK | 6 |
| Define Copilot CLI and how it benefits developers | **0 / 0** | — | | 2 |
| Identify the steps for installing Copilot CLI | **1 / 1** | p1m6-q08 | | — |
| Describe key CLI features and commands | 5 / 2 | p1m6-q10, q11, q13, q14, q19 | All about tool approval or tokens. Login (`copilot login`, `/login`, token precedence) appears only via CI token in q14 | 2 (login/auth flow) |
| Use CLI interactively and in sessions | **2 / 4** | p1m6-q12, q15 | | — |
| Generate scripts and manage files with CLI | **1 / 0** | p1m6-q09 | | — |
| Agent Mode, **Copilot Edits**, MCP; Agent Sessions; sub-agents | 24 / 16 | agent mode p2m1-*, MCP p2m3-*, extra-q26..34 | **Copilot Edits: 0.** Sub-agents: 3. Agent sessions: 2 | 3 |
| (Copilot cloud agent: "delegate tasks"; not named in the guide) | 13 / 9 | p2m2-* | Off-guide depth | 0 |
| Use Copilot for code review and coding assistance | 8 / 5 | p2m4-q01, q04, q07..09, q14 | OK | 1 |
| Spaces, **Spark**, PR summaries, review instructions files | 22 / 16 | Spaces 13 q; instructions 7 q; PR summary 1 q (p1m6-q07) | **Spark: 0 q** (card extra-c23 only). Spaces are heavily over-represented | 3 (Spaces/Spark in scope) |
| Chat limits, options, **feedback**, commands; prompt-file reuse | 7 / 6 | p1m5-q04..09, extra-q24 | Slash commands and participants are well covered. **Feedback: 0. Prompt files: 1. Limits: 0** (p1m1-q12 is under D5) | — |
| Org-wide policies; code review policies; feature availability | 18 / 10 | extra-q01..09, p1m7-q19/20, p2m4-q02/03/12/13, p2m3-q02/03 | Very deep on policy-conflict edge cases | 2 |
| Audit log events | 8 / 4 | extra-q12..17, p1m7-q12, p2m2-q15 | OK | 3 |
| Manage subscriptions using the REST API | 6 / 3 | extra-q18..23 | OK | 2 |

### Understand GitHub Copilot data and architecture (10–15%)

| Bullet | Q / C | Examples | Notes | Reports |
|---|---|---|---|---|
| Explain data usage, flow, and sharing | **1 / 1** | p1m3-q16 | Nothing on retention by surface (IDE vs GitHub.com/Mobile/CLI vs cloud sessions), training opt-out on individual plans, or what telemetry/engagement data covers | 2 |
| Describe input processing and prompt building | **1 / 2** | p1m3-q14 (FIM) | How context is gathered (cursor before/after, open tabs, file name/language, indexing) is tested only from the user's side | 1 (+2 in 2025) |
| Explain proxy filtering and post-processing | 3 / 2 | p1m3-q12, q13, q15 | OK for its size | — |
| Visualize code suggestion lifecycle | **0 / 0** | (card p1m3-c06 partly) | Natural ordering item | — |
| Describe limitations of LLMs and Copilot | 3 / 4 | p1m1-q12, p1m8-q03, q04 | Context window is on a card only. Nothing on training cutoff or stale APIs, or non-determinism | 1 |
| (LLM fine-tuning / LoRA; Learn unit, not a bullet) | 1 / 1 | p1m3-q17 | | 1 |

### Apply prompt engineering and context crafting (10–15%)

| Bullet | Q / C | Examples | Notes | Reports |
|---|---|---|---|---|
| Describe prompt structure and context | **1 / 5** | p1m3-q07 | | 7 (prompting overall) |
| Understand how context is determined | 8 / 4 | p1m3-q02, p1m5-q10/11/12/15 | Good | 2 |
| Use zero-shot and few-shot prompting | 3 / 1 | p1m3-q03, q04, p2m6-q04 | Zero-shot (when no examples are needed) is never the correct answer | 1 (zero-shot, role) |
| Apply best practices for prompt crafting | 11 / 3 | p1m3-q08..11, p2m5-* | Good | — |
| Explain prompt engineering principles | **1 / 1** | p1m3-q01 (4 S's) | Only "Single" is tested. Specific, Short and Surround each deserve an item | — |
| Describe prompt process flow and chat history usage | **1 / 1** | p1m3-q06 | | — |

### Improve developer productivity with GitHub Copilot (10–15%)

| Bullet | Q / C | Examples | Notes | Reports |
|---|---|---|---|---|
| Code generation, refactoring, and documentation | **0 / 1** | (secondary: p1m5-q04 /fix, p1m5-q07 /doc) | No refactoring or docs scenario | 1 |
| Accelerate learning and reduce context switching | 2 / 0 | p1m8-q01, q02 | | — |
| Generate sample data and modernize legacy code | **2 / 0** | p1m8-q05, p2m1-q12 | **Sample data: 0** | — |
| Generate unit and integration tests | 8 / 5 | p1m9-* | **Integration/E2E tests and mocks: 0** | 2 |
| Identify edge cases and write assertions | 5 / 1 | p1m9-q03, q06..08, q12 | Good | 2 |
| Suggest security improvements and performance optimizations | **0 / 0** | (secondary: p1m3-q05, p1m5-q06, p2m4-q08) | | 2 |

### Configure privacy, content exclusions, and safeguards (10–15%)

| Bullet | Q / C | Examples | Notes | Reports |
|---|---|---|---|---|
| Configure content exclusions and editor settings | 10 / 4 | p1m7-q01..07, q10, q11, p1m2-q12 | Strong | 6 |
| Describe ownership and limitations of outputs | **2 / 0** | p1m1-q05, p1m7-q21 | | 1 (IP indemnity) |
| Enable suggestions-matching-public-code filtering | 5 / 4 | p1m7-q13..17 | Good. Nothing uses the older name "duplication detection filter" | 1 (+2 in 2025) |
| Resolve issues with suggestions and content exclusions | 10 / 4 | p1m2-q06..10, p1m7-q08/09/22..24 | 4 of the 10 are proxy/TLS/curl network items | — |

### Off-guide content in the bank

| Area | Q / C | Comment |
|---|---|---|
| Copilot cloud agent (branches, firewall, setup steps, secrets) | 13 / 9 (+4 under R5/O2/A3) | The guide only says "delegate tasks". Keep the core, stop adding detail |
| Usage metrics dashboards and survey | 7 / 6 | Not a bullet. One report mentions "usage tracking" via the API |
| Plans and licensing | 5 / 6 | Not a bullet, but the audience profile says "features across various plans" and it's the most-reported topic. **Under-covered** |
| GitHub Copilot app | 3 / 2 | Learn module only |
| Copilot Memory | 2 / 1 | Not in the guide |

## What 2026 test-takers say comes up

Only **independent first-hand 2026 reports** are counted (letters refer to Sources). Pre-2026 reports and commercial aggregators are listed separately and not counted. Reports from after the 7 Aug 2026 outline change are scarce: only [B2] and [J], and neither names many topics. Most of this evidence describes the January 2026 outline, which the Aug 2026 changelog calls only "minor" changes from.

| Topic | 2026 reports | Which | Bank coverage |
|---|---|---|---|
| Responsible AI principles (fairness, transparency, accountability…), scenario-based | 7 | A, B, D, G, H, I, J | 17 q: **low** |
| Prompt engineering (zero-shot, role prompting, effective prompts) | 7 | A, C3, D, G, H, I, J | 25 q: OK |
| Plans and licensing; what each plan includes (data retention, IP indemnity, audit log, REST) | 6 | B, C3, D, G, H, K | 5 q: **low** |
| Content exclusion scenarios (org-level) | 6 | A, B, C3, D, G, H | 14+ q: good |
| Audit log actions | 3 | B, G, H | 8 q: good |
| Agent / Edit / Plan mode, MCP, sub-agents in scope | 3 | D, H, J | 24 q (Edits 0) |
| Exam lag: outdated items (retired `gh copilot` CLI, old PRU billing model) | 3 | C1, C2, H | 0 q (deliberate) |
| Copilot REST API, API integration and usage tracking | 2 | A, H | 6 q (+7 metrics) |
| CLI login/authentication (incl. a 4-step login-flow ordering item) | 2 | A, B | 1 q: **low** |
| Data handling and retention by plan/surface | 2 | G, H | 0–1 q: **gap** |
| How to enable features; org vs user settings | 2 | B, G | covered via policies |
| Security considerations, code-quality checks, reviewing generated code | 2 | I, G | V6 0 q: **gap** |
| Testing, edge cases | 2 | G, J | 13 q: good |
| Productivity metrics (and their caveats) | 2 | G, J | 7 q: good |
| Billing: premium requests vs AI credits | 2 | H, J | 1 q (extra-q31) |
| LLM concepts (context window, fine-tuning, LoRA) | 1 | J | 1 q + 2 cards |

Pre-2026 background (not counted): public-code filter enablement, how long exclusions take to apply, how Copilot picks context, fairness vs transparency, Business-plan questions, Copilot in the SDLC, audit-log location and contents [P1]. Enterprise features and licensing were also called the weakest area [P2].

## Ranked gaps: suggested new question topics

Ranking combines exam weight, how often reports mention the topic, and current count. These are topics only. Writers must check each fact against the linked page as BRIEF.md requires.

1. **Data retention and data use by surface and plan** (Data, 0 q)
   - IDE completions and IDE Chat are not retained, while GitHub.com and Mobile retain for up to 28 days. Business/Enterprise data is never used for training.
   - Cloud or agent session logs and where session data lives.
   - Individual-plan training-use setting.
   - Exam-lag note: older material says CLI retains for 28 days; BRIEF says it doesn't now. Test only the stable part.
   - Links: [Copilot Trust Center FAQ](https://copilot.github.trust.page/faq) · [About session data](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/session-data) · [Learn: GitHub Copilot data](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/4-github-copilot-data)
2. **Code suggestion lifecycle and prompt building** (Data, 0–1 q; a natural ordering item)
   - Order the inbound and outbound steps.
   - What context gets collected (text before/after the cursor, neighbouring tabs, file path/language).
   - Where the public-code check runs; why a suggestion is truncated or dropped.
   - Links: [Learn: user prompt process flow](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow) · [Responsible use: inline suggestions](https://docs.github.com/en/copilot/responsible-use/copilot-code-completion)
3. **Limitations of LLMs and Copilot** (Data, 3 q)
   - Limited context window (what to do about it); training-data recency and stale APIs; non-deterministic output.
   - Weaker results for niche languages; out-of-scope questions; "Chat answers can be wrong even when confident".
   - Links: [Responsible use: Copilot Chat – Limitations](https://docs.github.com/en/copilot/responsible-use/chat-in-your-ide) · [Learn: GitHub Copilot data – limited context windows](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/4-github-copilot-data)
4. **Responsible AI scenarios** (Responsible, 17 q vs ~44)
   - Accountability and privacy & security as principles.
   - Bias or non-inclusive output; IP or licensing harm.
   - Security harm from accepted code; mitigations (review, tests, scanning, governance).
   - Validating agent output; operating safely with tool approvals.
   - Links: [Learn: Responsible AI with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/) · [Responsible use: Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat-in-your-ide)
5. **Plans and licensing** (5 q; the most-reported topic)
   - Which plan a scenario needs: policy management, content exclusion, IP indemnity, audit log, org custom instructions.
   - Enterprise requires GHEC; Free vs Pro vs Business vs Enterprise; seat assignment.
   - Use "choose two" style where possible. Avoid prices and quotas.
   - Links: [Plans for GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans) · [Seats and billing for orgs/enterprises](https://docs.github.com/en/copilot/concepts/billing/organizations-and-enterprises)
6. **Copilot CLI basics** (C1 0, C5 1, auth 1)
   - What the CLI is for and its benefits; interactive vs `-p`.
   - Login (`copilot login` / `/login`), token precedence (`COPILOT_GITHUB_TOKEN` > `GH_TOKEN` > `GITHUB_TOKEN` > `gh`), classic PATs rejected.
   - Resuming sessions; generating scripts and editing files.
   - One exam-lag item: the `gh copilot` extension is retired, so name its replacement.
   - Links: [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli) · [Authenticating Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli) · [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
7. **Productivity: refactoring, docs, security and performance**
   - Refactor for readability; design patterns.
   - Generate docs and comments; performance refactor.
   - Find vulnerabilities and suggest fixes.
   - Links: [Improve readability](https://docs.github.com/en/copilot/tutorials/copilot-cookbook/refactor-code/improve-code-readability) · [Refactor for performance](https://docs.github.com/en/copilot/tutorials/copilot-cookbook/refactor-code/refactor-for-optimization) · [Find vulnerabilities](https://docs.github.com/en/copilot/tutorials/copilot-cookbook/analyze-security/find-vulnerabilities)
8. **Sample data, integration/E2E tests, mocks, legacy translation**
   - Links: [Learn: boost developer productivity (sample data)](https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/2-boost-developer-productivity) · [Create mock objects](https://docs.github.com/en/copilot/tutorials/copilot-cookbook/testing-code/create-mock-objects) · [Create end-to-end tests](https://docs.github.com/en/copilot/tutorials/copilot-cookbook/testing-code/create-end-to-end-tests) · [Translate code](https://docs.github.com/en/copilot/tutorials/copilot-cookbook/refactor-code/translate-code)
9. **Chat limits, options, feedback, prompt files**
   - Thumbs up/down feedback; model picker or auto model selection (concept only).
   - Prompt files vs custom instructions (only 1 q); where Chat is available.
   - Links: [Responsible use: Copilot Chat (feedback)](https://docs.github.com/en/copilot/responsible-use/chat-in-your-ide) · [Asking Copilot questions in your IDE](https://docs.github.com/en/copilot/how-tos/use-chat/use-chat-in-ide) · [Auto model selection](https://docs.github.com/en/copilot/concepts/auto-model-selection)
10. **Copilot Edits and Spark** (still named in the guide; 0 q each)
    - Write concept-level items with lag caveats. In VS Code, Edits has been folded into the chat agents. Spark on github.com is being deprecated (Aug 2026).
    - Links: [VS Code: Use chat](https://code.visualstudio.com/docs/copilot/chat/copilot-chat) · [VS Code: Manage agent sessions](https://code.visualstudio.com/docs/copilot/chat/chat-sessions) · [Spark deprecation changelog](https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com/)
11. **Enable Copilot in the IDE** (1 q)
    - Install the extension and sign in; what the status icon tells you.
    - Feature differences by IDE (agent mode, MCP, prompt files not everywhere).
    - Links: [Install the Copilot extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension) · [Copilot feature matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix)
12. **Prompt principles and chat history** (P1/P5/P6 one question each)
    - Specific, Short and Surround each as a scenario; when zero-shot is enough.
    - How chat history feeds later turns; when to use a new thread.
    - Links: [Prompt engineering for Copilot](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering) · [Learn: prompt engineering foundations](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices)
13. **Ownership of outputs** (2 q)
    - Who owns accepted suggestions; IP indemnity conditions; code referencing vs blocking.
    - Links: [Copilot Trust Center FAQ](https://copilot.github.trust.page/faq) · [Policies as an individual subscriber](https://docs.github.com/copilot/how-tos/manage-your-account/managing-copilot-policies-as-an-individual-subscriber)

**Exam-lag reminder.** Reports [C1, C2, H] say the live exam still contained outdated items: the retired `gh copilot` CLI and the premium-request billing model. Aggregator [S2] still claims content exclusion doesn't apply to agents or the CLI. Current docs say it does (see BRIEF). For these topics, explanations should give both the current answer and the older one.

## Where the bank is overweight

Hold these steady or trim:

- **Copilot Spaces: 13 questions and 9 cards.** That's for one-third of one sub-bullet; 4–5 questions would be proportionate.
- **Copilot cloud agent internals: ~17 questions and 10 cards.** Branch prefix, firewall allowlist, `copilot-setup-steps.yml`, EMU repos and Actions secrets are detail beyond "delegate tasks".
- **Policy-conflict edge cases: ~11 questions** (extra-q01..09, p1m7-q19/20). Multi-org, multi-enterprise and directly assigned seats. Reports confirm policies matter, but this is deep.
- **Usage metrics dashboards and survey: 7 questions and 6 cards.** Not in the guide.
- **Network troubleshooting: 4 questions** (proxy URL scheme, TLS interception, curl ping, Electron logs).
- **CLI tool-permission flags: 5 questions**, while CLI basics are missing.

## Question style: what test-takers describe vs what the app simulates

| Remark | Source | Does the app (single answer, 4 options) simulate it? |
|---|---|---|
| Mostly short scenarios; reading who the persona is (developer vs admin) matters | G, H, I, D | Yes |
| **Multiple response / "choose two"** (e.g. what a given plan allows) | S1, S2 (aggregators); 2025 [P3] | **No.** Add a multi-select type with all-or-nothing scoring |
| **Ordering / build-list** ("CLI login flow, 4 sequential steps") | A | **No.** Good candidates: CLI login, the inbound/outbound prompt flow, the issue→PR cloud-agent flow, content-exclusion setup |
| **Drop-down / hot-area** ("prompt engineering action and its effect", called a "new pattern") | A | **No.** Could be a 2-blank "action → effect" item |
| About 65 questions in 100 minutes; many finish in ~30 minutes | C2, C3, B | Add a timed 65-question mock |
| Sections you can't return to; taking a break locks earlier questions | S2; Microsoft exam-experience page | Add a "no going back" exam mode |
| No access to Microsoft Learn during GitHub exams (role-based MS exams allow it) | Microsoft exam-experience page | n/a (closed book) |
| Practice assessment feels easier than the real exam; someone scoring 90% in practice failed at 685 | E, S1 | Harder distractors; multi-select helps |
| Some questions outdated or "weird" | C1, C2, H | Exam-lag notes in explanations |

## Sources

**Official**
- Study guide, GH-300, skills measured as of 7 Aug 2026: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300
- Exam duration and experience (question types; breaks lock earlier questions; no Learn access for GitHub exams): https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience

**2026 first-hand reports (counted)**
- [A] r/AzureCertification, "Passed GH-300 GitHub Copilot Exam with 822", u/jurk_0600, 27 May 2026: https://www.reddit.com/r/AzureCertification/comments/1tp9401/passed_gh300_github_copilot_exam_with_822/
- [B] r/AzureCertification, "Cleared GH-300 !!", u/Acceptable_Garlic470, 31 Jul 2026; [B2] comment by u/CautiousClub8788, 4 Oct 2026 (post-Aug; "tough", no topics): https://www.reddit.com/r/AzureCertification/comments/1vbxqft/cleared_gh300/
- [C1] u/twice-Dahyun-5400, 19 Jan 2026; [C2] u/Single_Mud_9738, 25 Jan 2026; [C3] u/sabki-bajaungi, 29 May 2026. All in r/GithubCopilot, "GH-300 Certification Exam": https://www.reddit.com/r/GithubCopilot/comments/1qghayc/gh300_certification_exam/ (u/BluebirdBorn4471, 20 Mar 2026, in the same thread was **excluded**: it lists GitHub Actions/branching topics that look like GH-200 and promotes a dump vendor.)
- [D] r/GithubCopilot, comment by u/ColdComfortable6926, 18 Jun 2026 (topics only; the post also promotes a practice vendor): https://www.reddit.com/r/GithubCopilot/comments/1nj3dml/cleared_gh300_github_copilot_certification/
- [E] r/AzureCertification, "I failed on an 'easy' certification", 30 May 2026: https://www.reddit.com/r/AzureCertification/comments/1ts9100/i_failed_on_an_easy_certification/
- [G] LinkedIn, Abdul Rasheed Feroz Khan, "How I Cleared … GH-300 with a Score of 877", 18 Mar 2026: https://www.linkedin.com/pulse/how-i-cleared-github-copilot-certification-gh-300-score-feroz-khan-a32nc
- [H] AzureTechInsider, Dieter Gobeyn, "How to pass GitHub Copilot GH-300 Exam", 1 May 2026: https://azuretechinsider.com/how-to-pass-github-copilot-gh-300-exam/
- [I] GitHub Community discussion #189319, answer by George802, 12 Mar 2026: https://github.com/orgs/community/discussions/189319
- [J] Medium, Piyush Kumar Singh, "I Cleared the GitHub Copilot GH-300 Certification", 8 Nov 2026. This describes study topics rather than exam contents: https://medium.com/@singh.piyush/i-cleared-the-github-copilot-gh-300-certification-syllabus-key-topics-my-study-notes-aec245ab67cf
- [K] r/AzureCertification, "GH-300 certification" (failed first attempt; plan/account-type questions), early 2026. Read via the CertUp summary only: https://www.reddit.com/r/AzureCertification/comments/1qodi00/gh300_certification/

**Pre-2026 background (not counted)**
- [P1] r/GithubCopilot 1nj3dml, u/Bright-Math-4790 (Sep 2025) and u/Fit-Strawberry3001 (Dec 2025): link as [D]
- [P2] r/AzureCertification, "Passed GH-300 GitHub Copilot :)", Dec 2025: https://www.reddit.com/r/AzureCertification/comments/1pqj9zt/passed_gh300_github_copilot/
- [P3] dev.to, Majdi Zlitni, Dec 2025 (format: "multiple choice, multiple answer, scenario-based"): https://dev.to/majdizlitni/a-reading-first-gh-300-cert-prep-what-to-study-what-to-skip-and-what-actually-matters-3n6

**Aggregators (secondary; used only for question-style claims; contain some outdated facts)**
- [S1] CertUp, GH-300 exam guide and practice-test comparison: https://certup.com/github-copilot/exam-guide · https://certup.com/github-copilot/practice-tests
- [S2] CertCompanion, "GH-300 Exam 2026" (updated 7 Nov 2026; commercial; its content-exclusion claim is outdated): https://certcompanion.com/blog/microsoft-github-copilot-gh-300-exam-guide

**Note on access:** Reddit pages were read through each thread's public `.rss` feed, because the HTML and JSON versions were blocked. Several comments in these threads advertise dump sites. Those links were not followed.
