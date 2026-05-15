import React, { createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [iAm, setIAm] = React.useState([]);
  const [certificationCourses, setCertificationCourses] = React.useState([]);
  const [experiences, setExperiences] = React.useState([]);
  const [education, setEducation] = React.useState([]);

  React.useEffect(() => {
    const baseUrl = process.env.PUBLIC_URL;

    const fetchJson = async (fileName, fallback) => {
      try {
        const response = await fetch(`${baseUrl}/data/${fileName}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      } catch (error) {
        console.error(`Error fetching ${fileName}:`, error);
        return fallback;
      }
    };

    const loadData = async () => {
      const [
        iAmData,
        experienceData,
        certificationData,
      ] = await Promise.all([
        fetchJson("iAm.json", []),
        fetchJson("experiences.json", { experiences: [], education: [] }),
        fetchJson("certifications.json", []),
      ]);

      setIAm(iAmData || []);
      setExperiences(experienceData.experiences || []);
      setEducation(experienceData.education || []);
      setCertificationCourses(certificationData || []);
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        iAm,
        certificationCourses,
        education,
        experiences,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
