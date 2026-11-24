# Repo follow-ups (independent of the /github page change)

Source: read-only audit of public repos, 2026-11-24. Effort: S (<1h), M (a few hours), L (days).
Do these after the curated `/github` page ships. Nothing here has been done.

## Do first (affects how the page looks to visitors)

1. **WorldExplorer, CarExplorer**: delete ~20 AI/report markdown files in the root (EXECUTION_SUMMARY,
   REVIEW_REPORT, RETRY_CHECKLIST, RELEASE_NOTES_*), `CLAUDE.md`, `CODEX.md`, `GEMINI.md` (S).
2. **unpeeky, qa-news**: remove committed `.superpowers/sdd/` (35-41 files) (S). unpeeky also has
   `.github/copilot-instructions.md` and `.claude/` to decide on.
3. **unpeeky, WorldExplorer, CarExplorer**: `android/app/debug.keystore` is committed (standard Expo debug key,
   harmless, but remove from git and `.gitignore` it) (S).
4. **ChiefOfStaff**: confirm `data/*.ndjson` has nothing personal; decide on `REFACTORING_NOTES.md` and
   `docs/superpowers` in the public repo (S).
5. **k6_framework**: confirm it was not derived from an employer/course template (S).
6. **learn-js-react-basics**: README links `fundamentals-lab.vercel.app`, repo homepage differs; fix whichever
   is stale (S).
7. Verify Pages/Vercel demos actually load before linking them anywhere.

## Cross-cutting

- Add GitHub description + topics to every repo on the page (S each). Most have empty descriptions and no topics.
- Pin the ~6 strongest repos on the GitHub profile (S).
- Add CI + badge to test repos lacking it: duckduckgo-playwright-tests, e2e-cypress-supertest, k6_framework,
  saucelabs-mobile-test (S each; only e2e-playwright-ecommerce has CI).
- Add screenshots/GIF + CI badge to READMEs of products (ev-data-platform, wristplan, unpeeky, qa-news).

## Per repo

**Test automation**

- e2e-playwright-ecommerce: add README (S); `.eslint.config.json` is a misnamed file so lint likely never runs (S);
  add search/cart specs the description claims (M); publish HTML report from CI (S).
- duckduckgo-playwright-tests: verify tests pass on the live site (bot/consent page) (M); add CI (S).
- e2e-cypress-supertest: update README folder tree, document API tests (S); CI with Cypress artifacts (S);
  reduce duplication with page objects (M).
- k6_framework: add description/topics, rewrite README professionally with architecture + sample result (S);
  smoke-test workflow with grafana/k6-action (M); remove duplicate `exampleScript.js` (S).
- saucelabs-mobile-test: description/topics (S); CI (Sauce cloud or emulator) (M); README screenshots (S);
  check why the repo is 407 KB; merge duplicate `login*.e2e.ts` if identical (S).

**Own products**

- ev-data-platform: topics/description, CI badge, screenshots, "Testing strategy" section with coverage (S);
  move root SEO reports/branch-status docs into `docs/` (S); Playwright e2e on live demo (M).
- wristplan: CI badge, calendar screenshot/GIF, topics (S); publish Playwright report (M);
  decide whether `.claude/agents` stays public (S).
- ChiefOfStaff: architecture diagram, CI badge, coverage report, topics (S).
- qa-news: set homepage + description, screenshot, CI badge (S); Lighthouse CI or Playwright smoke (M).
- unpeeky: screenshots + Play Store badge, description/topics, CI badge, coverage info (S).
- quality-code-starter: description, mark as Template repository, a few more example tests (S).

**Maintenance / frontend**

- react_ThinkingReact: add README + CI badge (S); rename package from "react.dev", fix lint script (targets
  ts/tsx, code is jsx), drop committed `dist/` and one of the two lockfiles, fold stray notes
  (`DEPENDABOT_CLEANUP.md`, `VITE_UPGRADE_ARCHIVE.md`, `deps-updates/`) into CHANGELOG (S);
  Vitest + RTL smoke test and Playwright in CI (M); deploy + homepage (S).
- react_RegisterForm: replace task-text README, add demo link (S); Playwright e2e for valid/invalid submit (M).

**Side projects**

- WorldExplorer / CarExplorer: README with screenshots + Play Store link, CI badge, description/topics (S each);
  CarExplorer: verify `.env` is not in git history (S).
- mini-game-collection: add unit tests + CI (M); screenshots/description (S); check `src/firebase.ts` has no
  hard-coded keys (S).
- learn-js-react-basics: add description, Playwright smoke + CI build (M).

## Hidden repos: housekeeping (optional, owner's call)

- Archive: smallCypress, react_JSQuiz, RickAndMorty_JsonServer, RickAndMorty_API, StarWars, Pokedex,
  bookCollection, devstock-cssProject, react_DisneyApi, akademiaQA_crud (already archived fork; consider deleting).
- Make private (no value, no demo): asynchroniczny-js, javaScript, qa-blog, react_TicTacToe.
- paios-docs / paios-vault-template: already archived with paios; leave.
- Archiving keeps Pages demos live. These are actions on your account; not done without your go-ahead.

## Biggest strategic gap for an SDET audience

Only some repos show tests as the _point_. Highest-value new work: a dedicated end-to-end test-automation
showcase (Playwright/Cypress + CI + published report), or adding Playwright e2e + CI to RegisterForm and
ThinkingReact (M each) (L for a new repo).

## Draft descriptions (EN/PL) from the audit

Reuse as GitHub repo descriptions and as the page copy. Full EN/PL text per repo was produced by the audit
agents; they will be pasted into `src/config/githubRepos.js` during implementation.
