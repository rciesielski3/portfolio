import React, { useState, useEffect } from "react";
import SkillCard from "./SkillCard";

const SkillSection = ({ sectionTitle, skills }) => {
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
      <h2
        className={` text-blue-500 my-4 text-3xl text-shadow font-bold  transition-opacity duration-1000 ${
          visibleTitle ? "opacity-100" : "opacity-0"
        }`}
      >
        {sectionTitle}
      </h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`transition-transform duration-1000 ${
              visibleSkills.includes(index)
                ? index % 2 === 0
                  ? "transform translate-x-0"
                  : "transform translate-x-0"
                : index % 2 === 0
                ? "transform -translate-x-full"
                : "transform translate-x-full"
            }`}
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
