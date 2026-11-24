// Curated list of repositories shown on /github. Order here is the order on the page.
// Names must match GitHub repo names exactly (case-sensitive). Group copy lives in portfolioContent.js.
export const githubRepoGroups = [
  {
    id: 'testAutomation',
    repos: [
      {
        name: 'e2e-playwright-ecommerce',
        description: {
          en: 'Playwright + TypeScript E2E suite for an e-commerce demo shop: login, registration and checkout, built on Page Objects and fixtures, with GitHub Actions CI.',
          pl: "Zestaw testów E2E w Playwright + TypeScript dla demo sklepu: logowanie, rejestracja i checkout, z Page Objects, fixture'ami i CI w GitHub Actions.",
        },
      },
      {
        name: 'duckduckgo-playwright-tests',
        description: {
          en: 'Playwright + TypeScript UI tests for DuckDuckGo search: Page Object Model, accessibility checks, negative-input cases and resilient role-based locators.',
          pl: 'Testy UI w Playwright + TypeScript dla wyszukiwarki DuckDuckGo: Page Object Model, testy dostępności, przypadki negatywne i stabilne lokatory oparte na rolach.',
        },
      },
      {
        name: 'e2e-cypress-supertest',
        description: {
          en: 'Cypress E2E suite for automationexercise.com, organised by feature with custom commands, fixtures and AAA structure, plus API tests with Jest/Supertest.',
          pl: "Zestaw testów E2E w Cypress dla automationexercise.com, pogrupowany funkcjonalnie, z własnymi komendami, fixture'ami i strukturą AAA, plus testy API w Jest/Supertest.",
        },
      },
      {
        name: 'k6_framework',
        description: {
          en: 'Personal k6 performance-testing sandbox built after a training: config-driven scripts, scenarios and thresholds, with a small smoke test against the QuickPizza demo.',
          pl: 'Osobisty poligon do testów wydajnościowych w k6, zbudowany po szkoleniu: skrypty, scenariusze i progi (thresholds) sterowane konfiguracją, z krótkim smoke testem na demo QuickPizza.',
        },
      },
      {
        name: 'saucelabs-mobile-test',
        description: {
          en: 'Mobile UI tests with WebdriverIO, Appium and TypeScript for the Sauce Labs Swag Labs sample app: Page Objects, shared iOS/Android selectors and multilingual runs, executed locally with Appium (not in the Sauce cloud).',
          pl: 'Testy UI aplikacji mobilnej w WebdriverIO, Appium i TypeScript dla przykładowej aplikacji Sauce Labs Swag Labs: Page Objects, wspólne selektory iOS/Android i testy wielojęzyczne, uruchamiane lokalnie przez Appium (nie w chmurze Sauce).',
        },
      },
    ],
  },
  {
    id: 'ownProducts',
    repos: [
      {
        name: 'ev-data-platform',
        description: {
          en: 'Open-source platform that imports, normalizes and maps EV and charging-infrastructure data (Next.js, PostGIS), with tested APIs and automated CI/CD.',
          pl: 'Platforma open-source do zbierania, normalizacji i eksploracji danych o pojazdach elektrycznych i stacjach ładowania (Next.js, PostGIS), z testami i CI/CD.',
        },
      },
      {
        name: 'wristplan',
        description: {
          en: 'Self-hosted Next.js workout planner that syncs Garmin activities and schedules structured workouts to intervals.icu, with Playwright e2e tests and strict CI gates.',
          pl: 'Samodzielnie hostowany planer treningów (Next.js): synchronizuje aktywności z Garmina i planuje treningi w intervals.icu. Testy e2e w Playwright i rygorystyczne bramki CI.',
        },
      },
      {
        name: 'ChiefOfStaff',
        description: {
          en: 'Automated AI-assisted news pipeline: scheduled GitHub Actions fetch RSS, summarize via the Claude API and publish curated QA news. Covered by unit tests, secret scanning and an auto-merge gate.',
          pl: 'Zautomatyzowany potok newsów wspierany AI: harmonogram GitHub Actions pobiera RSS, streszcza przez Claude API i publikuje wyselekcjonowane newsy QA. Testy, skanowanie sekretów i bramka merge.',
        },
      },
      {
        name: 'qa-news',
        description: {
          en: 'Public read-only portal with daily, weekly and monthly views of curated QA news, built as a static Next.js site with automated tests and deploys.',
          pl: 'Publiczny portal z codziennymi, tygodniowymi i miesięcznymi przeglądami newsów QA, statyczna aplikacja Next.js z automatycznymi testami i wdrożeniem.',
        },
      },
      {
        name: 'unpeeky',
        description: {
          en: 'Mobile reward app for parents and kids built with React Native and Expo: a photo is revealed tile by tile as tasks are approved. Local-first, with Play Store CI/CD.',
          pl: 'Aplikacja mobilna dla rodziców i dzieci (React Native + Expo): zdjęcie nagrody odsłania się kafelek po kafelku po zatwierdzeniu zadań. Local-first, CI/CD do Google Play.',
        },
      },
      {
        name: 'quality-code-starter',
        description: {
          en: 'Strict TypeScript starter template with a single local and CI quality gate: lint, types, tests with coverage, commit and secret checks.',
          pl: 'Rygorystyczny szablon TypeScript z jedną bramką jakości lokalnie i w CI: lint, typy, testy z pokryciem, kontrola commitów i sekretów.',
        },
      },
    ],
  },
  {
    id: 'maintenance',
    repos: [
      {
        name: 'react_ThinkingReact',
        description: {
          en: 'Small React app kept production-hygienic: CI on Node 20/24, documented changelog and security-driven dependency upgrades (Vite, esbuild, nanoid).',
          pl: 'Mała aplikacja React utrzymywana z dbałością o higienę projektu: CI na Node 20/24, changelog oraz aktualizacje zależności z powodów bezpieczeństwa (Vite, esbuild, nanoid).',
        },
      },
      {
        name: 'react_RegisterForm',
        description: {
          en: 'Registration form with schema validation (zod + react-hook-form), file upload and modal confirmation.',
          pl: 'Formularz rejestracyjny z walidacją schematu (zod + react-hook-form), wgrywaniem pliku i modalem potwierdzenia.',
        },
      },
    ],
  },
  {
    id: 'sideProjects',
    repos: [
      {
        name: 'WorldExplorer',
        description: {
          en: 'Android app for learning countries, capitals and flags, with quizzes, a map and theming (React Native/Expo). Maintained on the side.',
          pl: 'Aplikacja na Androida do nauki krajów, stolic i flag z quizami, mapą i motywami (React Native/Expo). Rozwijana z doskoku.',
        },
      },
      {
        name: 'CarExplorer',
        description: {
          en: 'Expo app to explore car models, decode VINs and read automotive news, with quizzes and favorites in 4 languages. Maintained on the side.',
          pl: 'Aplikacja Expo do przeglądania modeli aut, dekodowania VIN i czytania newsów motoryzacyjnych, z quizami i ulubionymi, w 4 językach. Rozwijana z doskoku.',
        },
      },
      {
        name: 'mini-game-collection',
        description: {
          en: 'Collection of React + TypeScript mini-games with scoring and a Firebase leaderboard, built as a vibe-coding side project.',
          pl: 'Kolekcja minigier w React + TypeScript z punktacją i rankingiem Firebase, zbudowana jako poboczny projekt w duchu vibe-codingu.',
        },
      },
      {
        name: 'learn-js-react-basics',
        description: {
          en: 'Interactive learning lab for JavaScript, React and Next.js fundamentals, with live demos and topic pages.',
          pl: 'Interaktywne laboratorium do nauki podstaw JavaScript, React i Next.js, z demami na żywo i stronami tematycznymi.',
        },
      },
    ],
  },
];
