import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [aboutMeContent, setAboutMeContent] = useState([]);
  const [certificationCourses, setCertificationCourses] = useState([]);
  const [responsibilities, setResponsibilities] = useState({});
  console.log("aboutMeContent" + aboutMeContent);

  useEffect(() => {
    fetch("/data/aboutMeContent.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setAboutMeContent(data))
      .catch((error) => console.error("Error fetching aboutMeContent:", error));

    fetch("/data/responsibilities.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setResponsibilities(data))
      .catch((error) =>
        console.error("Error fetching responsibilities:", error)
      );

    fetch("/data/certifications.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCertificationCourses(data))
      .catch((error) => console.error("Error fetching certifications:", error));
  }, []);

  return (
    <DataContext.Provider
      value={{ aboutMeContent, certificationCourses, responsibilities }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
