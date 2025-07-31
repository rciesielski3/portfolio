import React from "react";

const GithubCard = ({ repo }) => {
  return (
    <>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <div className="repo-box">
          <p className="repo-title">{repo.name}</p>
          <p>{repo.description || "No description provided."}</p>
        </div>
      </a>
    </>
  );
};

export default GithubCard;
