import React from "react";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";
import "./NotFound.css";

const NotFound = () => {
  const location = useLocation();
  const { content } = useLanguage();
  const notFoundContent = content.notFound;

  return (
    <section className="not-found-page">
      <div className="not-found-panel">
        <p className="not-found-kicker">{notFoundContent.kicker}</p>
        <h1>{notFoundContent.title}</h1>
        <p>
          {notFoundContent.prefix} <span>{location.pathname}</span>{" "}
          {notFoundContent.suffix}
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-primary">
            <FaHome aria-hidden="true" /> {notFoundContent.actions.home}
          </Link>
          <Link to="/experience" className="not-found-secondary">
            <FaArrowLeft aria-hidden="true" />{" "}
            {notFoundContent.actions.experience}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
