# Cleanup runbook (run after the /github PR is merged)

Based on the read-only audit from 2026-11-24. **Nothing here has been executed.** Each block is a separate
branch + PR per repo; review `git status` before committing. Order = visible impact first.
Details and effort per repo: `2026-11-24-repo-followups.md`.

Convention for each repo:

```bash
gh repo clone rciesielski3/<repo> /tmp/cleanup/<repo> && cd /tmp/cleanup/<repo>
git checkout -b chore/repo-cleanup
# ...do the steps...
git push -u origin chore/repo-cleanup && gh pr create --fill
```

`git rm` only removes files from the current tree; they stay in history. That is fine for AI clutter and the
Expo debug key. If anything turns out to be a real secret, stop and rotate it instead.

## 1. WorldExplorer, CarExplorer (shown as side projects)

- [ ] List clutter first: `ls *.md` and `git ls-files | grep -E 'SUMMARY|REPORT|CHECKLIST|RELEASE_NOTES|CODEX|GEMINI|CLAUDE'`
- [ ] `git rm` the report/summary/checklist files; keep `README.md`, `LICENSE`, and a real `CHANGELOG` if one exists.
- [ ] Decide on `CLAUDE.md` / `CODEX.md` / `GEMINI.md`: remove, or keep only the one you actually use.
- [ ] CarExplorer: move `RELEASE_NOTES_v*` into `docs/releases/` instead of deleting if you want the history.
- [ ] `git rm --cached android/app/debug.keystore` and add `android/app/debug.keystore` to `.gitignore`.
- [ ] CarExplorer: `git log --all --oneline -- .env` must print nothing (API keys); if it does, rotate the keys.
- [ ] README: screenshots, Play Store link, CI badge for `pr-validate`.
- [ ] `gh repo edit rciesielski3/<repo> --description "..." --add-topic expo --add-topic react-native`

## 2. unpeeky, qa-news

- [ ] `git rm -r .superpowers/sdd` (35-41 AI task briefs). Add `.superpowers/` to `.gitignore` if it will keep being generated.
- [ ] unpeeky: decide on `.claude/` and `.github/copilot-instructions.md`; `git rm --cached android/app/debug.keystore` + `.gitignore`.
- [ ] unpeeky: README: screenshots, Play Store badge, CI badge; check the Play Store link works.
- [ ] qa-news: `gh repo edit rciesielski3/qa-news --homepage <live-url> --description "..."`.

## 3. ChiefOfStaff, ev-data-platform, wristplan

- [ ] ChiefOfStaff: open `data/*.ndjson`, confirm nothing personal; decide on `REFACTORING_NOTES.md` and `docs/superpowers`.
- [ ] ev-data-platform: move root SEO reports / branch-status / `README_PROJECT_SOURCE_OF_TRUTH.md` into `docs/`.
- [ ] wristplan: decide whether `.claude/agents` stays public; add a calendar screenshot/GIF to README.
- [ ] All three: CI badge in README, description and topics (see below).

## 4. react_ThinkingReact, react_RegisterForm

- [ ] ThinkingReact: add README (what/why/CI badge); rename package from `react.dev`; fix `lint` script to target `jsx`;
      `git rm -r dist`, add `dist` to `.gitignore`; keep one lockfile (`package-lock.json` or `yarn.lock`);
      fold `DEPENDABOT_CLEANUP.md`, `VITE_UPGRADE_ARCHIVE.md`, `deps-updates/` into `CHANGELOG.md`.
- [ ] RegisterForm: replace the task-text README; add demo link.

## 5. Test repos

- [ ] e2e-playwright-ecommerce: rename `.eslint.config.json` to the name ESLint actually reads (`eslint.config.*`), add README.
- [ ] duckduckgo-playwright-tests, e2e-cypress-supertest, k6_framework, saucelabs-mobile-test: add a minimal
      GitHub Actions workflow + badge (see snippets below).
- [ ] duckduckgo-playwright-tests: run the suite once against the live site; mark or fix flaky bot-challenge cases.
- [ ] e2e-cypress-supertest: refresh the README folder tree, document API tests.
- [ ] k6_framework: confirm it is original (not a course/employer template); remove duplicate root `exampleScript.js`.
- [ ] saucelabs-mobile-test: find why the repo is 407 KB (`git count-objects -vH`, `git ls-files | xargs du -h | sort -h | tail`).

## 6. learn-js-react-basics, mini-game-collection

- [ ] learn-js-react-basics: README links `fundamentals-lab.vercel.app`, homepage field differs; open both, keep the live one.
- [ ] mini-game-collection: confirm `src/firebase.ts` reads env vars, no hard-coded keys; add a basic test + CI later.

## 7. Descriptions and topics (run per repo, edit the text)

Descriptions can reuse the EN text from `src/config/githubRepos.js` once merged.

```bash
gh repo edit rciesielski3/<repo> --description "<EN description>" \
  --add-topic playwright --add-topic typescript --add-topic test-automation
# template repo:
gh repo edit rciesielski3/quality-code-starter --template
```

Suggested topics: test repos `test-automation` + tool (`playwright`, `cypress`, `k6`, `appium`, `webdriverio`);
products `nextjs`, `typescript`, `playwright`, `expo`, `react-native`; template `template`.
Pin the ~6 strongest repos on the profile (web UI only; no CLI for pinning).

## 8. Minimal CI snippets

Playwright (`.github/workflows/playwright.yml`):

```yaml
name: Playwright
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npx playwright test
      - uses: actions/upload-artifact@v4
        if: always()
        with: { name: playwright-report, path: playwright-report/ }
```

Cypress: same shape with `cypress-io/github-action@v6`. k6: `grafana/k6-action@v0.3.1` with a smoke script.
Badge: `![CI](https://github.com/rciesielski3/<repo>/actions/workflows/<file>.yml/badge.svg)`.

## 9. Hidden repos housekeeping (your call, account-level actions)

```bash
# archive (demos on Pages stay live)
for r in smallCypress react_JSQuiz RickAndMorty_JsonServer RickAndMorty_API StarWars Pokedex \
         bookCollection devstock-cssProject react_DisneyApi; do
  gh repo archive rciesielski3/$r --yes
done
# make private (no value, no demo): needs your explicit go-ahead
for r in asynchroniczny-js javaScript qa-blog react_TicTacToe; do
  gh repo edit rciesielski3/$r --visibility private --accept-visibility-change-consequences
done
```

`akademiaQA_crud` is an already archived fork; delete it or leave it. `paios*` are archived; leave.
