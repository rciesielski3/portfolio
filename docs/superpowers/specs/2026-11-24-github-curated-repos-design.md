# Curated GitHub repos on /github — design

Branch: `feat/github-curated-repos`. Size: small change (one feature, one config file, content, tests).

## Intent and why

`/github` currently fetches `api.github.com/users/rciesielski3/repos` and renders everything: test repos,
archives, forks, tutorial leftovers. GitHub's default page size (30) also silently drops part of the ~35 public
repos, so what shows is random. The page should instead show only repos that demonstrate a professional
approach, for both recruiters and clients, with **test automation and own products first**.

## Goals

- Show a curated, ordered, grouped list of repos; everything else is hidden.
- Cards show PL/EN descriptions written by the owner (most GitHub descriptions are empty), plus live stats
  (language, stars, forks) from the API.
- The page still works when the GitHub API fails or is rate-limited (60 req/h unauthenticated).
- Archived repos and forks never show, even if listed by mistake.

## Non-goals

- Cleaning up the repos themselves (README, CI, topics, removing AI clutter) — tracked separately in
  `docs/superpowers/followups/2026-11-24-repo-followups.md`. Done after this change ships.
- No GitHub token, no backend, no build-time data generation.
- No change to the hero text or the page's overall visual style.

## Anti-goals

- A page that breaks or shows an error when the API is down.
- A list that needs code changes in more than one place to add a repo.

## Approaches considered

- **A. Allowlist in code, descriptions from GitHub.** Simple, but descriptions are mostly empty.
- **B. Topic `portfolio` on GitHub + filter.** No code edits per repo, but no order, no groups, no PL/EN
  text, and ~15 repos need topics first.
- **C. Allowlist with groups and own PL/EN descriptions, live stats from API (chosen by owner).** Full control
  over order and wording; live numbers stay honest; fallback is natural because cards render from config.

## Design (approach C)

**Config** — new `src/config/githubRepos.js` exporting ordered groups. Each repo is
`{ name, description: { en, pl } }`. Group titles/descriptions live in `portfolioContent.js` under
`github.groups` (EN + PL), keyed by group id, so all copy stays in one place.

Groups, in page order (repos in this order):

1. `testAutomation`: `e2e-playwright-ecommerce`, `duckduckgo-playwright-tests`, `e2e-cypress-supertest`,
   `k6_framework`, `saucelabs-mobile-test`
2. `ownProducts`: `ev-data-platform`, `wristplan`, `ChiefOfStaff`, `qa-news`, `unpeeky`, `quality-code-starter`
3. `maintenance`: `react_ThinkingReact`, `react_RegisterForm`
4. `sideProjects`: `WorldExplorer`, `CarExplorer`, `mini-game-collection`, `learn-js-react-basics`

Descriptions: use the EN/PL texts proposed by the audit agents (see follow-ups doc, section per repo) for
the 13 repos they covered; I write the rest. `react_ThinkingReact` is framed honestly as maintenance
(CI, changelog, security upgrades), side projects as occasional, vibe-coded work. Owner reviews wording
in the PR.

**Data flow** — `GithubRepositories.jsx` fetches `.../users/rciesielski3/repos?per_page=100` once, builds a
map by name. For each configured repo: `html_url` is built from `profile.links.github` + name (so the card
renders without API data); language/stars/forks come from the map when present. A repo whose API entry says
`archived` or `fork` is dropped. A repo not found in the API (renamed, made private) is skipped, not shown
broken. Description shown = config text for the active language, falling back to the API description, then
the existing `fallbackDescription`.

**Failure behaviour** — if the fetch fails, render all configured cards without stats; no error block. Loading
spinner stays. Keep the existing staggered reveal animation.

**Rendering** — one section per group (heading + short description, then the existing `repo-grid`), reusing
`GithubCard`, `.repo-grid` and `.repo-box` styles. Card gets a `stats` guard so missing language/stars/forks
render nothing instead of `undefined`.

**External work section** — remove the "EV Source" item (EN `portfolioContent.js:274`, PL `:682`); it
duplicates the `ev-data-platform` card. Other items stay.

**SEO** — bump `lastmod` for `/github` in `public/sitemap.xml`; page title/description unchanged.

**Tests** (React Testing Library, mocked `global.fetch`, wrapped in the language provider and router):

- renders only configured repos, in config order, grouped;
- hides archived/fork repos even when configured;
- skips a configured repo missing from the API response;
- on fetch failure, still renders cards without stats and shows no error text;
- uses the PL description when language is PL.

`npm run verify` (format, lint, tests) must pass; PR title follows commitlint (e.g. `feat: curate github repos page`).

## Constraints

- CRA/Jest, Prettier (printWidth 120), ESLint `--max-warnings=0`, Node >= 22.
- All user-facing copy lives in `portfolioContent.js`, EN and PL in parallel.

## Left to the builder

Exact CSS for group headings (reuse `.stack-heading`/`.section-kicker` patterns), file split of the test,
and the final wording polish of descriptions.

## Calls I made (not discussed with the owner)

- `unpeeky` is included now; repo cleanup comes after this ships (owner's decision).
- `react_RegisterForm` is included in `maintenance`; `react_DisneyApi` is hidden to keep the list short.
- Failure mode shows config cards without stats instead of an error.
- Links are built from the profile URL rather than the API, so cards survive API failure.
