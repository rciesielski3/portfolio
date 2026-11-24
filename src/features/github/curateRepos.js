/**
 * Merges the curated repo config with the (optional) GitHub API response.
 *
 * `apiRepos` is `null` when the request failed or has not loaded: every configured repo is then kept,
 * without stats. When it is an array, configured repos missing from it (renamed, private) are skipped,
 * and archived repos and forks are dropped. Groups left without repos are omitted.
 */
export const curateGroups = ({ groups, apiRepos, language, profileUrl }) => {
  const apiByName = apiRepos ? new Map(apiRepos.map((repo) => [repo.name, repo])) : null;

  return groups
    .map((group) => ({
      id: group.id,
      repos: group.repos.flatMap((configured) => {
        const apiRepo = apiByName ? apiByName.get(configured.name) : undefined;

        if (apiByName && (!apiRepo || apiRepo.archived || apiRepo.fork)) {
          return [];
        }

        return [
          {
            name: configured.name,
            html_url: `${profileUrl}/${configured.name}`,
            description: configured.description[language] || apiRepo?.description || '',
            language: apiRepo?.language,
            stargazers_count: apiRepo?.stargazers_count,
            forks_count: apiRepo?.forks_count,
          },
        ];
      }),
    }))
    .filter((group) => group.repos.length > 0);
};
