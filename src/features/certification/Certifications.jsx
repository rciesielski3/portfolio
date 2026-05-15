import React, { useContext, useState, useEffect } from "react";

import { DataContext } from "../../context/DataContext";

import CertificationCard from "./CertificationCard";

const Certifications = () => {
  const [visibleCertifications, setVisibleCertifications] = useState([]);
  const { certificationCourses } = useContext(DataContext);

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
        <p className="section-kicker">Continuous learning</p>
        <h1>Certifications</h1>
        <p>
          A curated training record across test automation, AI, accessibility,
          performance, web development and networking foundations.
        </p>
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
