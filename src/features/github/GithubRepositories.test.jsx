import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { LanguageProvider } from '../../context/LanguageContext';
import { githubRepoGroups } from '../../config/githubRepos';
import { portfolioContent } from '../../content/portfolioContent';
import GithubRepositories from './GithubRepositories';

const row = (name, extra = {}) => ({
  name,
  description: null,
  language: 'TypeScript',
  stargazers_count: 0,
  forks_count: 0,
  archived: false,
  fork: false,
  ...extra,
});

const mockFetch = (impl) => {
  global.fetch = jest.fn(impl);
};

const mockRows = (rows) => mockFetch(() => Promise.resolve({ ok: true, json: async () => rows }));

const renderPage = (language = 'en') => {
  window.localStorage.setItem('portfolio-language', language);

  return render(
    <MemoryRouter>
      <LanguageProvider>
        <GithubRepositories />
      </LanguageProvider>
    </MemoryRouter>,
  );
};

const groupTitle = (language, id) => portfolioContent[language].github.groups[id].title;
const repoDescription = (id, name, language) =>
  githubRepoGroups.find((group) => group.id === id).repos.find((repo) => repo.name === name).description[language];

afterEach(() => {
  window.localStorage.clear();
  delete global.fetch;
});

test('renders only configured repos, grouped, in config order', async () => {
  mockRows([row('react_JSQuiz'), row('ev-data-platform'), row('e2e-playwright-ecommerce')]);
  renderPage();

  expect(await screen.findByText('e2e-playwright-ecommerce')).toBeInTheDocument();
  expect(screen.getByText('ev-data-platform')).toBeInTheDocument();
  expect(screen.queryByText('react_JSQuiz')).not.toBeInTheDocument();

  const headings = screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent);
  expect(headings.indexOf(groupTitle('en', 'testAutomation'))).toBeGreaterThanOrEqual(0);
  expect(headings.indexOf(groupTitle('en', 'testAutomation'))).toBeLessThan(
    headings.indexOf(groupTitle('en', 'ownProducts')),
  );
});

test('requests all repos with per_page=100', async () => {
  mockRows([row('wristplan')]);
  renderPage();

  await screen.findByText('wristplan');

  expect(global.fetch.mock.calls[0][0]).toContain('per_page=100');
});

test('hides archived and fork repos even when configured', async () => {
  mockRows([row('wristplan'), row('qa-news', { archived: true }), row('unpeeky', { fork: true })]);
  renderPage();

  expect(await screen.findByText('wristplan')).toBeInTheDocument();
  expect(screen.queryByText('qa-news')).not.toBeInTheDocument();
  expect(screen.queryByText('unpeeky')).not.toBeInTheDocument();
});

test('renders cards without stats and without error text when the request fails', async () => {
  mockFetch(() => Promise.reject(new Error('network down')));
  renderPage();

  expect(await screen.findByText('wristplan')).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /view repository/i })).toHaveLength(17);
  expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/undefined|NaN/)).not.toBeInTheDocument();
});

test('renders cards from config when the API responds with a non-OK status', async () => {
  mockFetch(() => Promise.resolve({ ok: false, status: 403, json: async () => ({}) }));
  renderPage();

  expect(await screen.findByText('wristplan')).toBeInTheDocument();
  expect(screen.queryByText(/403|error/i)).not.toBeInTheDocument();
});

test('omits a group heading when none of its repos exist in the API response', async () => {
  mockRows([row('wristplan')]);
  renderPage();

  await screen.findByText('wristplan');

  expect(screen.getByRole('heading', { level: 2, name: groupTitle('en', 'ownProducts') })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { level: 2, name: groupTitle('en', 'testAutomation') })).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { level: 2, name: groupTitle('en', 'sideProjects') })).not.toBeInTheDocument();
});

test('uses the PL description and PL group title when the language is PL', async () => {
  mockRows([row('e2e-playwright-ecommerce')]);
  renderPage('pl');

  expect(await screen.findByText('e2e-playwright-ecommerce')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: groupTitle('pl', 'testAutomation') })).toBeInTheDocument();
  expect(screen.getByText(repoDescription('testAutomation', 'e2e-playwright-ecommerce', 'pl'))).toBeInTheDocument();
});

test('renders language, stars and forks when the API provides them', async () => {
  mockRows([row('wristplan', { language: 'Go', stargazers_count: 42, forks_count: 7 })]);
  renderPage();

  await screen.findByText('wristplan');
  const card = screen.getByRole('article');

  expect(within(card).getByText('Go')).toBeInTheDocument();
  expect(within(card).getByText('42')).toBeInTheDocument();
  expect(within(card).getByText('7')).toBeInTheDocument();
});

test('renders no language chip when the API language is null', async () => {
  mockRows([row('wristplan', { language: null, stargazers_count: 5, forks_count: 2 })]);
  renderPage();

  await screen.findByText('wristplan');
  const card = screen.getByRole('article');

  expect(within(card).queryByText('TypeScript')).not.toBeInTheDocument();
  expect(within(card).getByText('5')).toBeInTheDocument();
});
