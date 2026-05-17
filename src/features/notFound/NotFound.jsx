import React from "react";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  const location = useLocation();

  return (
    <section className="not-found-page">
      <div className="not-found-panel">
        <p className="not-found-kicker">404 / route not found</p>
        <h1>Signal lost, page not found.</h1>
        <p>
          The route <span>{location.pathname}</span> does not exist in this
          portfolio. Head back to the main page or continue from the experience
          overview.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-primary">
            <FaHome aria-hidden="true" /> Home
          </Link>
          <Link to="/experience" className="not-found-secondary">
            <FaArrowLeft aria-hidden="true" /> Experience
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
