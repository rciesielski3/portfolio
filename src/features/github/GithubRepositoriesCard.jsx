import React from "react";

const GithubCard = ({ repo }) => {
  return (
    <div className="repo-box">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </a>
      <p>{repo.description || "No description provided."}</p>
    </div>
  );
};

export default GithubCard;
