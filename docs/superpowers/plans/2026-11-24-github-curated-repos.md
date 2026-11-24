# Curated GitHub Repos Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `/github` shows only a curated, grouped, ordered list of 17 repos with PL/EN descriptions and live API stats, and keeps working when the GitHub API fails.

**Architecture:** An ordered allowlist in `src/config/githubRepos.js` is merged with one `?per_page=100` API response by a pure function `curateGroups`. The component renders one section per group from that result. Cards are built from config, so API failure only removes stats.

**Tech Stack:** React 18 (CRA/Jest, React Testing Library), Tailwind + `src/styles/styles.css`, Prettier (printWidth 120), ESLint `--max-warnings=0`.

**Spec:** `docs/superpowers/specs/2026-11-24-github-curated-repos-design.md`

## Global Constraints

- Node >= 22; `npm run verify` (format:check, lint, tests) must pass before the PR.
- All user-facing copy lives in `src/content/portfolioContent.js`, EN and PL in parallel (`github` block: EN ~line 241, PL ~line 649).
- GitHub username/profile URL comes from `profile.links.github` (`src/config/profile.js`); do not hardcode it in new code.
- Repo names match the API exactly and case-sensitively.
- Never show a repo with `archived: true` or `fork: true` in the API data.
- Commit messages: conventional commits, ending with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`. PR title: `feat: curate github repos page`.

## Review Focus

- API fetch rejects or returns non-OK: cards still render from config, no error text (Task 3 test).
- A configured repo is absent from a successful API response (renamed/private): skipped, not shown broken (Task 2 test).
- A configured repo is archived or a fork in the API: hidden (Task 2 test).
- A group whose repos are all skipped: its heading is not rendered (Task 3 test).
- Language is PL: PL description and PL group copy are used (Task 3 test).
- Repo missing language/stars/forks: card renders no `undefined`/empty chips (Task 3 test).
- Config has a duplicate repo name or a group id without content: caught by a config test (Task 1).

---

### Task 1: Config, group copy, external-work cleanup

**Files:**

- Create: `src/config/githubRepos.js`, `src/config/githubRepos.test.js`
- Modify: `src/content/portfolioContent.js` (EN `github` ~241, PL `github` ~649)
- Add to git: `docs/` (spec, plan, follow-ups already in the worktree)

**Interfaces:**

- Produces: `githubRepoGroups: Array<{ id: GroupId, repos: Array<{ name: string, description: { en: string, pl: string } }> }>` with `GroupId` one of `'testAutomation' | 'ownProducts' | 'maintenance' | 'sideProjects'`, in that order. `content.github.groups[GroupId] = { kicker, title, description }` in both languages.

- [ ] **Step 1: Write the failing test** `src/config/githubRepos.test.js`:
  - `has the four groups in page order` → ids equal `['testAutomation','ownProducts','maintenance','sideProjects']`.
  - `lists 17 repos with no duplicates` → flat names length 17 and `new Set(names).size === 17`.
  - `every repo has non-empty en and pl descriptions`.
  - `every group id has en and pl copy` → for `portfolioContent.en.github.groups[id]` and `.pl...`, `title` and `description` are non-empty strings.
  - `external work no longer duplicates repo cards` → no item url in either language contains `ev-data-platform`, `learn-js-react-basics` or `mini-game-collection`.
    Import `portfolioContent` from `../content/portfolioContent`.

- [ ] **Step 2: Run** `CI=true npm test -- --watchAll=false src/config/githubRepos.test.js` — expect FAIL (module missing).

- [ ] **Step 3: Create `src/config/githubRepos.js`** exporting `githubRepoGroups` with exactly these repos and copy:

  **testAutomation**
  - `e2e-playwright-ecommerce` — en: "Playwright + TypeScript E2E suite for an e-commerce demo shop: login, registration and checkout, built on Page Objects and fixtures, with GitHub Actions CI." / pl: "Zestaw testów E2E w Playwright + TypeScript dla demo sklepu: logowanie, rejestracja i checkout, z Page Objects, fixture'ami i CI w GitHub Actions."
  - `duckduckgo-playwright-tests` — en: "Playwright + TypeScript UI tests for DuckDuckGo search: Page Object Model, accessibility checks, negative-input cases and resilient role-based locators." / pl: "Testy UI w Playwright + TypeScript dla wyszukiwarki DuckDuckGo: Page Object Model, testy dostępności, przypadki negatywne i stabilne lokatory oparte na rolach."
  - `e2e-cypress-supertest` — en: "Cypress E2E suite for automationexercise.com, organised by feature with custom commands, fixtures and AAA structure, plus API tests with Jest/Supertest." / pl: "Zestaw testów E2E w Cypress dla automationexercise.com, pogrupowany funkcjonalnie, z własnymi komendami, fixture'ami i strukturą AAA, plus testy API w Jest/Supertest."
  - `k6_framework` — en: "Config-driven k6 performance-testing framework: reusable scenarios, thresholds and request objects, run from JSON configs against any API." / pl: "Konfiguracyjny framework do testów wydajnościowych w k6: reużywalne scenariusze, progi (thresholds) i obiekty żądań, uruchamiane z plików JSON."
  - `saucelabs-mobile-test` — en: "Cross-platform mobile test automation with WebdriverIO, Appium and TypeScript: Page Objects, shared iOS/Android selectors and multilingual runs on the Sauce Labs demo app." / pl: "Automatyzacja testów mobilnych w WebdriverIO, Appium i TypeScript: Page Objects, wspólne selektory iOS/Android i testy wielojęzyczne na aplikacji demo Sauce Labs."

  **ownProducts**
  - `ev-data-platform` — en: "Open-source platform that imports, normalizes and maps EV and charging-infrastructure data (Next.js, PostGIS), with tested APIs and automated CI/CD." / pl: "Platforma open-source do zbierania, normalizacji i eksploracji danych o pojazdach elektrycznych i stacjach ładowania (Next.js, PostGIS), z testami i CI/CD."
  - `wristplan` — en: "Self-hosted Next.js workout planner that syncs Garmin activities and schedules structured workouts to intervals.icu, with Playwright e2e tests and strict CI gates." / pl: "Samodzielnie hostowany planer treningów (Next.js): synchronizuje aktywności z Garmina i planuje treningi w intervals.icu. Testy e2e w Playwright i rygorystyczne bramki CI."
  - `ChiefOfStaff` — en: "Automated AI-assisted news pipeline: scheduled GitHub Actions fetch RSS, summarize via the Claude API and publish curated QA news. Covered by unit tests, secret scanning and an auto-merge gate." / pl: "Zautomatyzowany potok newsów wspierany AI: harmonogram GitHub Actions pobiera RSS, streszcza przez Claude API i publikuje wyselekcjonowane newsy QA. Testy, skanowanie sekretów i bramka merge."
  - `qa-news` — en: "Public read-only portal with daily, weekly and monthly views of curated QA news, built as a static Next.js site with automated tests and deploys." / pl: "Publiczny portal z codziennymi, tygodniowymi i miesięcznymi przeglądami newsów QA, statyczna aplikacja Next.js z automatycznymi testami i wdrożeniem."
  - `unpeeky` — en: "Mobile reward app for parents and kids built with React Native and Expo: a photo is revealed tile by tile as tasks are approved. Local-first, with Play Store CI/CD." / pl: "Aplikacja mobilna dla rodziców i dzieci (React Native + Expo): zdjęcie nagrody odsłania się kafelek po kafelku po zatwierdzeniu zadań. Local-first, CI/CD do Google Play."
  - `quality-code-starter` — en: "Strict TypeScript starter template with a single local and CI quality gate: lint, types, tests with coverage, commit and secret checks." / pl: "Rygorystyczny szablon TypeScript z jedną bramką jakości lokalnie i w CI: lint, typy, testy z pokryciem, kontrola commitów i sekretów."

  **maintenance**
  - `react_ThinkingReact` — en: "Small React app kept production-hygienic: CI on Node 20/24, documented changelog and security-driven dependency upgrades (Vite, esbuild, nanoid)." / pl: "Mała aplikacja React utrzymywana z dbałością o higienę projektu: CI na Node 20/24, changelog oraz aktualizacje zależności z powodów bezpieczeństwa (Vite, esbuild, nanoid)."
  - `react_RegisterForm` — en: "Registration form with schema validation (zod + react-hook-form), file upload and modal confirmation." / pl: "Formularz rejestracyjny z walidacją schematu (zod + react-hook-form), wgrywaniem pliku i modalem potwierdzenia."

  **sideProjects**
  - `WorldExplorer` — en: "Android app for learning countries, capitals and flags, with quizzes, a map and theming (React Native/Expo). Maintained on the side." / pl: "Aplikacja na Androida do nauki krajów, stolic i flag z quizami, mapą i motywami (React Native/Expo). Rozwijana z doskoku."
  - `CarExplorer` — en: "Expo app to explore car models, decode VINs and read automotive news, with quizzes and favorites in 4 languages. Maintained on the side." / pl: "Aplikacja Expo do przeglądania modeli aut, dekodowania VIN i czytania newsów motoryzacyjnych, z quizami i ulubionymi, w 4 językach. Rozwijana z doskoku."
  - `mini-game-collection` — en: "Collection of React + TypeScript mini-games with scoring and a Firebase leaderboard, built as a vibe-coding side project." / pl: "Kolekcja minigier w React + TypeScript z punktacją i rankingiem Firebase, zbudowana jako poboczny projekt w duchu vibe-codingu."
  - `learn-js-react-basics` — en: "Interactive learning lab for JavaScript, React and Next.js fundamentals, with live demos and topic pages." / pl: "Interaktywne laboratorium do nauki podstaw JavaScript, React i Next.js, z demami na żywo i stronami tematycznymi."

- [ ] **Step 4: Add `groups` to the `github` block** in `portfolioContent.js`, EN and PL, keyed by the four group ids, each `{ kicker, title, description }`. Suggested EN titles: "Test automation", "Own products", "Maintenance and frontend practice", "Side projects"; PL: "Automatyzacja testów", "Własne produkty", "Utrzymanie i praktyka frontendowa", "Projekty poboczne"; kickers and one-sentence descriptions are the builder's wording (side projects: occasional, vibe-coded work).

- [ ] **Step 5: Remove the "EV Source", "JS & React Fundamentals" and "Mini Game Collection" items** from `externalWork.items` in both languages (they now have cards). Leave QA Journey, Quality Assurance Blog and My Smart Home as they are.

- [ ] **Step 6: Run** the config test — expect PASS. Run `npm run format:check && npm run lint`.

- [ ] **Step 7: Commit**

```bash
git add docs src/config src/content
git commit -m "feat: add curated github repo config and group copy" -m "Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 2: `curateGroups` pure function

**Files:**

- Create: `src/features/github/curateRepos.js`, `src/features/github/curateRepos.test.js`

**Interfaces:**

- Consumes: `githubRepoGroups` shape from Task 1; `profile.links.github`.
- Produces: `curateGroups({ groups, apiRepos, language, profileUrl }) => Array<{ id: string, repos: CardRepo[] }>` where `CardRepo = { name: string, html_url: string, description: string, language?: string, stargazers_count?: number, forks_count?: number }` (API field names, so `GithubCard` is unchanged). `apiRepos` is `null` when the fetch failed or has not loaded, else the parsed array. Groups with zero resulting repos are omitted.

- [ ] **Step 1: Write failing tests** in `curateRepos.test.js` using a small inline `groups` fixture (two groups, three repos) and fixture API rows:
  - `keeps config order and group order, ignoring API order`.
  - `uses the config description for the requested language` (en and pl) `and falls back to the API description when config has none for that language`.
  - `builds html_url from profileUrl + name` (`https://github.com/rciesielski3/<name>`), also when `apiRepos` is `null`.
  - `copies language, stargazers_count and forks_count from the API row`, and leaves them undefined when `apiRepos` is `null`.
  - `drops a repo whose API row is archived` and `drops a fork`.
  - `skips a configured repo missing from a loaded API response` but `keeps it when apiRepos is null`.
  - `matches names case-sensitively` (API `Wristplan` does not match config `wristplan`; with a loaded response it is skipped).
  - `omits a group when all its repos are skipped`.

- [ ] **Step 2: Run** `CI=true npm test -- --watchAll=false src/features/github/curateRepos.test.js` — expect FAIL.

- [ ] **Step 3: Implement `curateGroups`** per the interface. One pass: index `apiRepos` by `name` into a `Map` when non-null; per configured repo, look up the row; apply the skip rules above; build the `CardRepo`.

- [ ] **Step 4: Run** the test — expect PASS.

- [ ] **Step 5: Commit** `feat: add curateGroups merge of config and API data` (with the Co-Authored-By trailer).

---

### Task 3: Page component, card guard, styles

**Files:**

- Modify: `src/features/github/GithubRepositories.jsx`, `src/features/github/GithubRepositoriesCard.jsx`, `src/styles/styles.css` (only if a group heading class is needed)
- Create: `src/features/github/GithubRepositories.test.jsx`

**Interfaces:**

- Consumes: `curateGroups` (Task 2), `githubRepoGroups` (Task 1), `content.github.groups`, `useLanguage()` returning `{ content, language }`, `profile.links.github`.

- [ ] **Step 1: Write failing tests** in `GithubRepositories.test.jsx`. Wrap in `LanguageProvider` + `MemoryRouter`; set `window.localStorage.setItem('portfolio-language', 'en'|'pl')` before render; mock `global.fetch` per test (`resolves { ok: true, json: async () => rows }`). Use `findBy*` for async. Assertions:
  - `renders only configured repos, grouped, in config order`: API rows include `e2e-playwright-ecommerce`, `ev-data-platform` and an unconfigured `react_JSQuiz`; `react_JSQuiz` is absent, group headings appear in order, and card titles within the first group follow config order.
  - `calls the API with per_page=100`: `fetch` first arg contains `per_page=100`.
  - `hides archived and fork repos even when configured`.
  - `renders cards without stats and without error text when fetch rejects`: configured repo titles present, `screen.queryByText(/Error/)` absent, no `NaN`/`undefined` text.
  - `omits a group heading when none of its repos exist in the API response`.
  - `uses the PL description and PL group title when language is PL`.
  - `renders language, stars and forks when the API provides them`, and renders no language chip when `language` is null.

- [ ] **Step 2: Run** the test file — expect FAIL.

- [ ] **Step 3: Rewrite `GithubRepositories.jsx`**: fetch `${profile.links.github.replace('https://github.com/', 'https://api.github.com/users/')}/repos?per_page=100` (or an equivalent derived-from-profile construction); on non-OK or rejection leave `apiRepos` as `null` and do not set `error`; remove the `error` state and its render branch (keep `errorPrefix` content key untouched). Compute `curateGroups({ groups: githubRepoGroups, apiRepos, language, profileUrl: profile.links.github })` from state. Render, per group: `.stack-heading` block (`section-kicker`, `h2`, description from `content.github.groups[id]`) followed by the existing `repo-grid` with `GithubCard`. Keep the loading spinner, the staggered reveal (index across all cards), the SEO hook call, the `emptyState` message when there are no groups, and the `external-work-section` unchanged.

- [ ] **Step 4: Update `GithubCard`** so the language chip renders only when `repo.language` is truthy and the star/fork chips only when their counts are numbers.

- [ ] **Step 5: Run** the test file — expect PASS. Then run `CI=true npm test -- --watchAll=false` — all suites pass.

- [ ] **Step 6: Commit** `feat: render curated grouped repos on the github page` (with the trailer).

---

### Task 4: Sitemap, full verification, PR

**Files:**

- Modify: `public/sitemap.xml` (the `/github` entry, `lastmod`)

- [ ] **Step 1:** Set `/github` `lastmod` to `2026-11-24`.
- [ ] **Step 2:** Run `npm run verify` — expected: format, lint and all tests pass. Run `npm run build` — expected: compiles without warnings that fail CI.
- [ ] **Step 3:** Start the app (`npm start`), open `/github`, check in EN and PL: four groups in order, no hidden repos, descriptions per language, all links open the right repos; then block the `api.github.com` request in devtools and reload — cards still show, no error.
- [ ] **Step 4:** Commit `chore: bump github page lastmod`, push `feat/github-curated-repos`, open a PR titled `feat: curate github repos page` with a short body (what changed, how to verify, link to the spec) ending with `🤖 Generated with [Claude Code](https://claude.com/claude-code)`. Do not merge.

## Self-review notes

- Spec coverage: config + groups (T1), merge/fallback/guards (T2), rendering, failure mode, card guard (T3), external-work cleanup (T1), sitemap (T4), tests (T1–T3), verify/PR (T4). Follow-ups doc is separate and already written.
- Owner decision: the three duplicated items are removed from `externalWork`; live demo links are no longer on the page (card links go to the repos).
- `curateGroups` and `GithubCard` use API field names (`stargazers_count`, `forks_count`, `html_url`) so the card keeps its props contract.
