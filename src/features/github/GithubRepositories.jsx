import React, { useState, useEffect } from "react";

import { useLanguage } from "../../context/LanguageContext";
import GithubCard from "./GithubRepositoriesCard";

const GithubRepositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleRepos, setVisibleRepos] = useState([]);
  const { content } = useLanguage();
  const githubContent = content.github;

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/rciesielski3/repos"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, []);

  useEffect(() => {
    if (repos.length > 0) {
      repos.forEach((_, index) => {
        setTimeout(() => {
          setVisibleRepos((prev) => [...prev, index]);
        }, index * 200);
      });
    }
  }, [repos]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  if (error) return <div>{githubContent.errorPrefix}: {error}</div>;

  return (
    <div className="content github-page">
      <header className="section-hero">
        <p className="section-kicker">{githubContent.hero.kicker}</p>
        <h1>{githubContent.hero.title}</h1>
        <p>{githubContent.hero.description}</p>
      </header>
      {repos.length === 0 ? (
        <div>{githubContent.emptyState}</div>
      ) : (
        <div className="repo-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <div
              key={index}
              className={`transition-transform duration-1000 ${
                visibleRepos.includes(index)
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-20 opacity-0"
            }`}
            >
              <GithubCard repo={repo} content={githubContent.card} />
            </div>
          ))}
        </div>
      )}
      <section className="external-work-section">
        <div className="stack-heading">
          <p className="section-kicker">{githubContent.externalWork.kicker}</p>
          <h2>{githubContent.externalWork.title}</h2>
          <p>{githubContent.externalWork.description}</p>
        </div>
        <div className="external-work-grid">
          {githubContent.externalWork.items.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="external-work-card"
              key={item.title}
            >
              <span>{item.title}</span>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GithubRepositories;
