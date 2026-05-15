import React from "react";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import { doc, getDoc, increment, setDoc } from "firebase/firestore";
import { logEvent } from "firebase/analytics";
import { db, analytics } from "../../firebase";

import TypingEffect from "../../components/typing/TypingEffect";

import "./MainPage.css";

const MainPage = () => {
  const [visitCount, setVisitCount] = React.useState(0);

  React.useEffect(() => {
    const incrementVisitCount = async () => {
      const visitRef = doc(db, "counters", "visits");

      try {
        await setDoc(visitRef, { count: increment(1) }, { merge: true });
        const docSnap = await getDoc(visitRef);
        setVisitCount(docSnap.data()?.count || 0);

        logEvent(analytics, "page_view", {
          page_location: window.location.href,
          page_title: document.title,
          region: "auto",
        });
      } catch (error) {
        console.error("Error updating visitor count:", error);
      }
    };

    incrementVisitCount();
  }, []);

  return (
    <div className="main-page">
      <div className="content-wrapper">
        <div className="left-section">
          <div className="hero-kicker">QA Automation Engineer</div>
          <h1 className="hero-name">Rafal Ciesielski</h1>
          <TypingEffect />
          <p className="hero-copy">
            I help product teams reduce release risk through practical test
            strategy, reliable automation and clear quality feedback.
          </p>
          <dl className="career-snapshot" aria-label="Career snapshot">
            <div>
              <dt>10+ years</dt>
              <dd>IT, QA and product quality</dd>
            </div>
            <div>
              <dt>Automation focus</dt>
              <dd>Web, mobile and API testing</dd>
            </div>
            <div>
              <dt>Banking & IoT</dt>
              <dd>Regulated and product domains</dd>
            </div>
          </dl>
          <div className="hero-actions">
            <Link to="/experience" className="primary-action">
              View Experience <FaArrowRight aria-hidden="true" />
            </Link>
            <Link to="/contact" className="secondary-action">
              <FaEnvelope aria-hidden="true" /> Contact
            </Link>
          </div>
        </div>

        <div className="right-section">
          <div className="profile-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/myImage.webp`}
              alt="Rafal Ciesielski"
              className="profile-image"
            />
            <div className="profile-panel">
              <span>Current focus</span>
              <p>Test architecture, automation and AI-assisted QA.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            className="icon linkedin"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/rciesielski3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="icon github"
          >
            <FaGithub size={30} />
          </a>
        </div>

        <div className="visit-counter-container">
          <p className="visit-counter">
            Visitors: <span>{visitCount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
