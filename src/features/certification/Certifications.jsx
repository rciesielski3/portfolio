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
    <>
      <h2 className="text-3xl font-bold text-blue-500 my-4 text-shadow">
        Certifications
      </h2>
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
    </>
  );
};

export default Certifications;
