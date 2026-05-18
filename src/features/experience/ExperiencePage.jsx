import React from "react";
import AOS from "aos";
import { FaSuitcase, FaGraduationCap } from "react-icons/fa";
import "aos/dist/aos.css";

import { DataContext } from "../../context/DataContext";
import { profile } from "../../config/profile";
import { useLanguage } from "../../context/LanguageContext";
import "./ExperiencePage.css";

const ExperiencePage = () => {
  const { experiences, education } = React.useContext(DataContext);
  const { content, language } = useLanguage();
  const experienceContent = content.experience;
  const timelineTranslations = experienceContent.timeline;
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
    return <div className="spinner">{content.common.loading}</div>;
  }

  const displayedExperiences =
    language === "pl" && timelineTranslations?.experiences
      ? experiences.map((experience, index) => ({
          ...experience,
          ...timelineTranslations.experiences[index],
        }))
      : experiences;

  const displayedEducation =
    language === "pl" && timelineTranslations?.education
      ? education.map((educationItem, index) => ({
          ...educationItem,
          ...timelineTranslations.education[index],
        }))
      : education;

  return (
    <div className="experience-page">
      <header className="section-hero">
        <p className="section-kicker">{experienceContent.hero.kicker}</p>
        <h1>{experienceContent.hero.title}</h1>
        <p>{experienceContent.hero.description}</p>
      </header>
      <section className="experience-summary" aria-label="Experience summary">
        {experienceContent.summary.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
      <div className="timeline-line" style={expLineStyle} />
      <div className="timeline-line" style={eduLineStyle} />
      <section ref={expRef} className="timeline-section">
        <h2 className="timeline-section-title" data-aos="zoom-in">
          {experienceContent.sections.experience}
        </h2>
        {displayedExperiences.map((exp, index) => (
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
          {experienceContent.sections.education}
        </h2>
        {displayedEducation.map((edu, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "is-right" : "is-left"}`}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <div className="timeline-card">
              <h3>{edu.title}</h3>
              <span>{edu.studies}</span>
            </div>
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
          </div>
        ))}
      </section>
      <section className="experience-cta">
        <h2 data-aos="fade-down">{experienceContent.cta.title}</h2>
        <p data-aos="fade-up">{experienceContent.cta.description}</p>
        <button
          data-aos="fade-up"
          onClick={() => window.open(profile.links.linkedin, "_blank")}
        >
          {experienceContent.cta.button}
        </button>
      </section>
    </div>
  );
};

export default ExperiencePage;
