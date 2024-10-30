import React, { createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [aboutMeContent, setAboutMeContent] = React.useState([]);
  const [traits, setTraits] = React.useState([]);
  const [certificationCourses, setCertificationCourses] = React.useState([]);
  const [responsibilities, setResponsibilities] = React.useState({});

  const baseUrl = process.env.PUBLIC_URL;

  React.useEffect(() => {
    fetch(`${baseUrl}/data/aboutMeContent.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setAboutMeContent(data))
      .catch((error) => console.error("Error fetching aboutMeContent:", error));

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
      value={{ aboutMeContent, traits, certificationCourses, responsibilities }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
