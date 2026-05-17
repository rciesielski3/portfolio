import React from "react";
import AOS from "aos";
import { FaSuitcase, FaGraduationCap } from "react-icons/fa";
import "aos/dist/aos.css";

import { DataContext } from "../../context/DataContext";
import { profile } from "../../config/profile";
import "./ExperiencePage.css";

const ExperiencePage = () => {
  const { experiences, education } = React.useContext(DataContext);
  const expRef = React.useRef(null);
  const eduRef = React.useRef(null);
  const [expLineStyle, setExpLineStyle] = React.useState({});
  const [eduLineStyle, setEduLineStyle] = React.useState({});

  React.useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out" });

    const updateLinePositions = () => {
      if (expRef.current && eduRef.current) {
        setExpLineStyle({
          top: expRef.current.offsetTop + 40,
          height: expRef.current.offsetHeight - 40,
        });

        setEduLineStyle({
          top: eduRef.current.offsetTop + 40,
          height: eduRef.current.offsetHeight - 40,
        });
      }
    };

    updateLinePositions();
    window.addEventListener("resize", updateLinePositions);
    return () => window.removeEventListener("resize", updateLinePositions);
  }, []);

  if (!experiences || experiences.length === 0) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div className="experience-page">
      <header className="section-hero">
        <p className="section-kicker">Resume</p>
        <h1>Experience</h1>
        <p>
          A timeline of quality engineering, automation, product delivery and
          hands-on product building across logistics, banking, web, mobile and
          smart home domains.
        </p>
      </header>
      <section className="experience-summary" aria-label="Experience summary">
        <article>
          <span>Current scope</span>
          <strong>Quality engineering</strong>
          <p>Automation, contracts, APIs, mobile and release feedback.</p>
        </article>
        <article>
          <span>Product ownership</span>
          <strong>ZabawkowyBox.pl</strong>
          <p>E-commerce subscriptions, payments, CMS and operations.</p>
        </article>
        <article>
          <span>Technical path</span>
          <strong>Automation practice</strong>
          <p>Playwright, WebdriverIO, API, CI/CD and AI-assisted workflows.</p>
        </article>
      </section>
      <div
        className="timeline-line"
        style={expLineStyle}
      />
      <div
        className="timeline-line"
        style={eduLineStyle}
      />
      <section ref={expRef} className="timeline-section">
        <h2 className="timeline-section-title" data-aos="zoom-in">
          Experience
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "is-right" : "is-left"}`}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <div className="timeline-card">
              <h3>{exp.title}</h3>
              <span>{exp.company}</span>
              <p className="timeline-time">{exp.time}</p>
              <p>{exp.description}</p>
            </div>
            <div className="timeline-icon">
              <FaSuitcase />
            </div>
          </div>
        ))}
      </section>
      <section ref={eduRef} className="timeline-section">
        <h2 className="timeline-section-title" data-aos="zoom-in">
          Education
        </h2>
        {education.map((edu, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "is-right" : "is-left"}`}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <div className="timeline-card">
              <h3>{edu.title}</h3>
              <span>{edu.studies}</span>
              <p className="timeline-time">{edu.time}</p>
            </div>
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
          </div>
        ))}
      </section>
      <section className="experience-cta">
        <h2 data-aos="fade-down">
          Connect with Me
        </h2>
        <p data-aos="fade-up">
          If you want to know more about me, feel free to check out my LinkedIn
          profile.
        </p>
        <button
          data-aos="fade-up"
          onClick={() => window.open(profile.links.linkedin, "_blank")}
        >
          Open LinkedIn
        </button>
      </section>
    </div>
  );
};

export default ExperiencePage;
