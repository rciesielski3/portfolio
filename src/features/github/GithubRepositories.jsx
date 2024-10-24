import React, { useState, useEffect } from "react";

import GithubCard from "./GithubRepositoriesCard";

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
    // Staggered slide-in effect for the repository cards
    if (repos.length > 0) {
      repos.forEach((_, index) => {
        setTimeout(() => {
          setVisibleRepos((prev) => [...prev, index]);
        }, index * 200); // 200ms delay between each repo card
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
    <div className="content">
      <h2 className="text-3xl font-bold text-blue-500 my-4 text-shadow pb-4">
        My repositories
      </h2>
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
    </div>
  );
};

export default GithubRepositories;
