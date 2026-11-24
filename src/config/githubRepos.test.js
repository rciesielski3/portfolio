import { portfolioContent } from '../content/portfolioContent';
import { githubRepoGroups } from './githubRepos';

const allRepos = githubRepoGroups.flatMap((group) => group.repos);

test('has the four groups in page order', () => {
  expect(githubRepoGroups.map((group) => group.id)).toEqual([
    'testAutomation',
    'ownProducts',
    'maintenance',
    'sideProjects',
  ]);
});

test('lists 17 repos with no duplicates', () => {
  const names = allRepos.map((repo) => repo.name);

  expect(names).toHaveLength(17);
  expect(new Set(names).size).toBe(17);
});

test('every repo has non-empty en and pl descriptions', () => {
  allRepos.forEach((repo) => {
    expect(repo.description.en.trim()).not.toBe('');
    expect(repo.description.pl.trim()).not.toBe('');
  });
});

test.each(['en', 'pl'])('every group id has %s copy', (language) => {
  githubRepoGroups.forEach((group) => {
    const copy = portfolioContent[language].github.groups[group.id];

    expect(copy.kicker.trim()).not.toBe('');
    expect(copy.title.trim()).not.toBe('');
    expect(copy.description.trim()).not.toBe('');
  });
});

test.each(['en', 'pl'])('external work no longer duplicates repo cards in %s', (language) => {
  const urls = portfolioContent[language].github.externalWork.items.map((item) => item.url).join(' ');

  expect(urls).not.toMatch(/ev-data-platform|learn-js-react-basics|mini-game-collection/);
});
