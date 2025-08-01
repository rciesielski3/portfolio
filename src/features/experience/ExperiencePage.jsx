import React from "react";
import AOS from "aos";
import { FaSuitcase, FaGraduationCap } from "react-icons/fa";
import "aos/dist/aos.css";

import { DataContext } from "../../context/DataContext";

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
    <div className="content">
      <h2
        className="text-center text-3xl font-bold text-blue-500 mb-6 text-shadow"
        data-aos="fade-down"
      >
        My Resume
      </h2>
      <p className="text-orange-600 mb-6 text-lg" data-aos="fade-down">
        Below is a summary of my professional experience and education history.
      </p>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-650"
        style={expLineStyle}
      />
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-650"
        style={eduLineStyle}
      />
      <section ref={expRef}>
        <h2
          className="text-center text-2xl font-bold my-8 p-0.5 border-4 border-orange-650 rounded-lg bg-gray-800"
          data-aos="fade-down"
        >
          Experience
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <div
              className={`md:w-1/2 bg-gray-700 p-4 rounded-lg ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              } text-center md:text-inherit`}
            >
              <h2 className="text-2xl font-bold">{exp.title}</h2>
              <span className="text-orange-650">{exp.company}</span>
              <p className="text-orange-650 text-xs">{exp.time}</p>
              <p className="mt-4 font-light">{exp.description}</p>
            </div>
            <div className="w-0 md:w-1/12 relative flex justify-center">
              <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800 border-2 border-orange-650 text-orange-650 flex items-center justify-center z-10">
                <FaSuitcase />
              </div>
            </div>
            <div className="md:w-1/2" />
          </div>
        ))}
      </section>
      <section ref={eduRef}>
        <h2
          className="text-center text-2xl font-bold mt-16 mb-8 p-0.5 border-4 border-orange-650 rounded-lg bg-gray-800"
          data-aos="fade-down"
        >
          Education
        </h2>
        {education.map((edu, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <div
              className={`md:w-1/2 bg-gray-700 p-4 rounded-lg ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              } text-center md:text-inherit`}
            >
              <h2 className="text-2xl font-bold">{edu.title}</h2>
              <span className="text-orange-650">{edu.studies}</span>
              <p className="text-orange-650 text-xs">{edu.time}</p>
            </div>
            <div className="w-0 md:w-1/12 relative flex justify-center">
              <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800 border-2 border-orange-650 text-orange-650 flex items-center justify-center z-10">
                <FaGraduationCap />
              </div>
            </div>
            <div className="md:w-1/2" />
          </div>
        ))}
      </section>
      <section className="text-center mt-16">
        <h2
          className="text-2xl font-bold mb-4 p-0.5 border-4 border-orange-650 rounded-lg bg-gray-800"
          data-aos="fade-down"
        >
          Connect with Me
        </h2>
        <p className="mb-4" data-aos="fade-up">
          If you want to know more about me, feel free to check out my LinkedIn
          profile.
        </p>
        <button
          className="btnLinkedIn bg-blue-500 p-3 rounded-lg hover:bg-blue-700 hover:scale-110"
          data-aos="fade-up"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100",
              "_blank"
            )
          }
        >
          Show Profile
        </button>
      </section>
    </div>
  );
};

export default ExperiencePage;
