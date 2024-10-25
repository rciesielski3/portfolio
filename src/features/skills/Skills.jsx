import React, { useContext } from "react";

import { DataContext } from "../../context/DataContext";

import SkillSection from "./SkillSection";

const Skills = () => {
  const { responsibilities } = useContext(DataContext);

  return (
    <div className="skills">
      {Object.keys(responsibilities).map((sectionTitle, index) => (
        <SkillSection
          key={index}
          sectionTitle={sectionTitle}
          skills={responsibilities[sectionTitle]}
        />
      ))}
    </div>
  );
};

export default Skills;
