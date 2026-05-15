import { useEffect, useState } from "react";

const SkillSection = ({ sectionTitle, sectionIntro, skills }) => {
  const [visibleTitle, setVisibleTitle] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setVisibleTitle(true);
    }, 200);

    skills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSkills((prev) => [...prev, index]);
      }, index * 300);
    });
  }, [skills]);

  return (
    <div className="skills-section">
      <div className="skills-section-heading">
        <h2
          className={`skills-section-title ${
            visibleTitle ? "opacity-100" : "opacity-0"
          }`}
        >
          {sectionTitle}
        </h2>
        <p>{sectionIntro}</p>
      </div>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li
            key={index}
            className={`skill-shell ${
              visibleSkills.includes(index) ? "is-visible" : ""
            }`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
