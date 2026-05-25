import React, { useContext, useState, useEffect } from "react";

import { DataContext } from "../../context/DataContext";
import { useLanguage } from "../../context/LanguageContext";

import CertificationCard from "./CertificationCard";

const Certifications = () => {
  const [visibleCertifications, setVisibleCertifications] = useState([]);
  const { certificationCourses } = useContext(DataContext);
  const { content } = useLanguage();
  const certificationsContent = content.certifications;

  useEffect(() => {
    certificationCourses.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCertifications((prev) => [...prev, index]);
      }, index * 300);
    });
  }, [certificationCourses]);

  return (
    <div className="content certifications-page">
      <header className="section-hero">
        <p className="section-kicker">{certificationsContent.hero.kicker}</p>
        <h1>{certificationsContent.hero.title}</h1>
        <p>{certificationsContent.hero.description}</p>
      </header>
      <div className="certification-courses">
        {certificationCourses.map((course, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              visibleCertifications.includes(index)
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <CertificationCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
