import React, { useState, useEffect } from "react";

import GithubCard from "./GithubRepositoriesCard";

const externalWork = [
  {
    title: "QA Journey",
    description: "Writing and notes around quality assurance practice.",
    url: "https://qa-journey.blogspot.com/",
  },
  {
    title: "Quality Assurance Blog",
    description: "Additional QA articles and experiments.",
    url: "https://qa-blog.onrender.com/",
  },
  {
    title: "JS & React Fundamentals",
    description: "Learning lab for JavaScript, React and Next.js fundamentals.",
    url: "https://learn-js-react-basics.vercel.app/",
  },
  {
    title: "Mini Game Collection",
    description: "Small frontend projects focused on interaction and polish.",
    url: "https://mini-game-collection.vercel.app/",
  },
  {
    title: "My Smart Home",
    description: "Smart home related page and domain project.",
    url: "https://mysmarthome.cba.pl/",
  },
];

const GithubRepositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleRepos, setVisibleRepos] = useState([]);

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
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="content github-page">
      <header className="section-hero">
        <p className="section-kicker">Build log</p>
        <h1>GitHub repositories</h1>
        <p>
          Projects, experiments and learning repos that show how I approach
          automation, frontend foundations and practical engineering.
        </p>
      </header>
      {repos.length === 0 ? (
        <div>Coming soon. Under construction.</div>
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
              <GithubCard repo={repo} />
            </div>
          ))}
        </div>
      )}
      <section className="external-work-section">
        <div className="stack-heading">
          <p className="section-kicker">Supporting work</p>
          <h2>Articles and side projects</h2>
          <p>
            These are useful as secondary proof points, so they live here rather
            than competing with the primary portfolio navigation.
          </p>
        </div>
        <div className="external-work-grid">
          {externalWork.map((item) => (
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
