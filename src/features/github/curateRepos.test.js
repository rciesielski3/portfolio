import { curateGroups } from './curateRepos';

const profileUrl = 'https://github.com/rciesielski3';

const groups = [
  {
    id: 'first',
    repos: [
      { name: 'alpha', description: { en: 'Alpha EN', pl: 'Alpha PL' } },
      { name: 'beta', description: { en: 'Beta EN', pl: '' } },
    ],
  },
  {
    id: 'second',
    repos: [{ name: 'gamma', description: { en: 'Gamma EN', pl: 'Gamma PL' } }],
  },
];

const apiRow = (name, extra = {}) => ({
  name,
  description: `${name} from API`,
  language: 'TypeScript',
  stargazers_count: 3,
  forks_count: 1,
  archived: false,
  fork: false,
  ...extra,
});

const curate = (apiRepos, language = 'en', customGroups = groups) =>
  curateGroups({ groups: customGroups, apiRepos, language, profileUrl });

const names = (result) => result.map((group) => group.repos.map((repo) => repo.name));

test('keeps config order and group order, ignoring API order', () => {
  const result = curate([apiRow('gamma'), apiRow('beta'), apiRow('alpha')]);

  expect(result.map((group) => group.id)).toEqual(['first', 'second']);
  expect(names(result)).toEqual([['alpha', 'beta'], ['gamma']]);
});

test('uses the config description for the requested language', () => {
  const en = curate([apiRow('alpha')], 'en');
  const pl = curate([apiRow('alpha')], 'pl');

  expect(en[0].repos[0].description).toBe('Alpha EN');
  expect(pl[0].repos[0].description).toBe('Alpha PL');
});

test('falls back to the API description when config has none for that language', () => {
  const result = curate([apiRow('beta')], 'pl');

  expect(result[0].repos[0].description).toBe('beta from API');
});

test('builds html_url from profileUrl and name, also when the API is unavailable', () => {
  const loaded = curate([apiRow('alpha')]);
  const failed = curate(null);

  expect(loaded[0].repos[0].html_url).toBe('https://github.com/rciesielski3/alpha');
  expect(failed[0].repos[0].html_url).toBe('https://github.com/rciesielski3/alpha');
});

test('copies language, stars and forks from the API row', () => {
  const [repo] = curate([apiRow('alpha')])[0].repos;

  expect(repo.language).toBe('TypeScript');
  expect(repo.stargazers_count).toBe(3);
  expect(repo.forks_count).toBe(1);
});

test('leaves stats undefined when the API is unavailable', () => {
  const [repo] = curate(null)[0].repos;

  expect(repo.language).toBeUndefined();
  expect(repo.stargazers_count).toBeUndefined();
  expect(repo.forks_count).toBeUndefined();
});

test('drops archived repos and forks even when configured', () => {
  const result = curate([apiRow('alpha', { archived: true }), apiRow('beta', { fork: true }), apiRow('gamma')]);

  expect(names(result)).toEqual([['gamma']]);
});

test('skips a configured repo missing from a loaded API response', () => {
  const result = curate([apiRow('alpha'), apiRow('gamma')]);

  expect(names(result)).toEqual([['alpha'], ['gamma']]);
});

test('keeps every configured repo when the API is unavailable', () => {
  expect(names(curate(null))).toEqual([['alpha', 'beta'], ['gamma']]);
});

test('matches names case-sensitively', () => {
  const result = curate([apiRow('Alpha'), apiRow('gamma')]);

  expect(names(result)).toEqual([['gamma']]);
});

test('omits a group when all its repos are skipped', () => {
  const result = curate([apiRow('alpha')]);

  expect(result.map((group) => group.id)).toEqual(['first']);
});
