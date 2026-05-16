import React from "react";
import { FaCodeBranch, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const GithubCard = ({ repo }) => {
  return (
    <article className="repo-box">
      <div className="repo-card-header">
        <p className="repo-title">{repo.name}</p>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
          aria-label={`Open ${repo.name} on GitHub`}
        >
          <FaExternalLinkAlt />
        </a>
      </div>
      <p className="repo-description">
        {repo.description || "No description provided yet."}
      </p>
      <div className="repo-meta">
        {repo.language && <span>{repo.language}</span>}
        <span>
          <FaStar aria-hidden="true" /> {repo.stargazers_count}
        </span>
        <span>
          <FaCodeBranch aria-hidden="true" /> {repo.forks_count}
        </span>
      </div>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View repository
      </a>
    </article>
  );
};

export default GithubCard;
