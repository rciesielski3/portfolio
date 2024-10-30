import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import TypingEffect from "../../components/typing/TypingEffect";

import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="left-section">
        <div className="typing-container">
          <TypingEffect />
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin z-10"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/rciesielski3"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github z-10"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
      <div className="right-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/myImage.webp`}
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default MainPage;
