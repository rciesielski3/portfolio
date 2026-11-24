import React, { useState, useEffect, useMemo } from 'react';

import { githubRepoGroups } from '../../config/githubRepos';
import { profile } from '../../config/profile';
import { useLanguage } from '../../context/LanguageContext';
import { useSEO, generateBreadcrumbSchema } from '../../hooks/useSEO';
import { curateGroups } from './curateRepos';
import GithubCard from './GithubRepositoriesCard';

const REPOS_API_URL = `${profile.links.github.replace('https://github.com/', 'https://api.github.com/users/')}/repos?per_page=100`;

const GithubRepositories = () => {
  const [apiRepos, setApiRepos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleRepos, setVisibleRepos] = useState([]);
  const { content, language } = useLanguage();
  const githubContent = content.github;

  // Add SEO meta tags for github page
  useSEO({
    title: 'GitHub Projects - QA Automation & Development | Rafal Ciesielski',
    description:
      'Open source projects and experiments in test automation, frontend development, and QA tooling. React, Next.js, TypeScript, and testing frameworks.',
    canonical: 'https://rciesielski.dev/github',
    keywords: 'GitHub projects, test automation projects, open source QA, React projects, automation testing code',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: 'https://rciesielski.dev/' },
      { name: 'GitHub', url: 'https://rciesielski.dev/github' },
    ]),
  });

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(REPOS_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApiRepos(Array.isArray(data) ? data : null);
      } catch {
        // Cards are rendered from the curated config; only the live stats are missing.
        setApiRepos(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, []);

  const groups = useMemo(
    () => curateGroups({ groups: githubRepoGroups, apiRepos, language, profileUrl: profile.links.github }),
    [apiRepos, language],
  );
  const repoCount = useMemo(() => groups.reduce((total, group) => total + group.repos.length, 0), [groups]);

  useEffect(() => {
    if (loading) {
      return undefined;
    }

    setVisibleRepos([]);
    const timers = Array.from({ length: repoCount }, (_, index) =>
      setTimeout(() => {
        setVisibleRepos((prev) => [...prev, index]);
      }, index * 200),
    );

    return () => timers.forEach(clearTimeout);
  }, [loading, repoCount]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  let cardIndex = 0;

  return (
    <div className="content github-page">
      <header className="section-hero">
        <p className="section-kicker">{githubContent.hero.kicker}</p>
        <h1>{githubContent.hero.title}</h1>
        <p>{githubContent.hero.description}</p>
      </header>
      {groups.length === 0 ? (
        <div>{githubContent.emptyState}</div>
      ) : (
        groups.map((group) => {
          const groupContent = githubContent.groups[group.id];

          return (
            <section className="repo-group" key={group.id}>
              <div className="stack-heading">
                <p className="section-kicker">{groupContent.kicker}</p>
                <h2>{groupContent.title}</h2>
                <p>{groupContent.description}</p>
              </div>
              <div className="repo-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.repos.map((repo) => {
                  const index = cardIndex++;

                  return (
                    <div
                      key={repo.name}
                      className={`transition-transform duration-1000 ${
                        visibleRepos.includes(index)
                          ? 'transform translate-y-0 opacity-100'
                          : 'transform translate-y-20 opacity-0'
                      }`}
                    >
                      <GithubCard repo={repo} content={githubContent.card} />
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
};

export default GithubRepositories;
