import React, { createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [traits, setTraits] = React.useState([]);
  const [certificationCourses, setCertificationCourses] = React.useState([]);
  const [responsibilities, setResponsibilities] = React.useState({});
  const [experiences, setExperiences] = React.useState([]);
  const [education, setEducation] = React.useState([]);

  const baseUrl = process.env.PUBLIC_URL;

  React.useEffect(() => {
    fetch(`${baseUrl}/data/experiences.json`)
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setExperiences(data.experiences || []);
        setEducation(data.education || []);
      })
      .catch((error) => console.error("Error fetching experiences:", error));

    fetch(`${baseUrl}/data/traits.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setTraits(data.traits))
      .catch((error) => console.error("Error fetching traits:", error));

    fetch(`${baseUrl}/data/responsibilities.json`)
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

    fetch(`${baseUrl}/data/certifications.json`)
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
      value={{
        traits,
        certificationCourses,
        responsibilities,
        education,
        experiences,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
