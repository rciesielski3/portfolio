import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSuitcase, FaGraduationCap } from "react-icons/fa";
import { DataContext } from "../../context/DataContext";

const ExperiencePage = () => {
  const { experiences, education } = React.useContext(DataContext);

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  if (!experiences || experiences.length === 0) {
    return (
      <div className="text-center text-white">
        <p>Loading experiences...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 text-white py-16 px-4 md:px-16 lg:px-32">
      <h1 className="text-center text-3xl font-bold mb-8" data-aos="fade-down">
        My Resume
      </h1>
      <div className="relative">
        {/* Vertical Line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-650"
          data-aos="fade-down"
        ></div>

        {/* Experience Section */}
        <h2
          className="text-center text-2xl font-bold mt-16 mb-8"
          data-aos="fade-up"
        >
          Experience
        </h2>
        <div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <h2 className="text-2xl font-bold">{exp.title}</h2>
                <span className="text-orange-650">{exp.time}</span>
                <p className="mt-4">{exp.description}</p>
              </div>
              {/* Icon */}
              <div
                className="flex items-center justify-center w-1/6 text-orange-650"
                data-aos="zoom-in"
              >
                <FaSuitcase />
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <h2
          className="text-center text-2xl font-bold mt-16 mb-8"
          data-aos="fade-up"
        >
          Education
        </h2>
        <div>
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <h2 className="text-2xl font-bold">{edu.title}</h2>
                <span className="text-orange-650">{edu.time}</span>
              </div>
              {/* Icon */}
              <div
                className="flex items-center justify-center w-1/6 text-orange-650"
                data-aos="zoom-in"
              >
                <FaGraduationCap />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
