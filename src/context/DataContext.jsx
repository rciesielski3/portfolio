import React, { createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [aboutMeContent, setAboutMeContent] = React.useState([]);
  const [traits, setTraits] = React.useState([]);
  const [certificationCourses, setCertificationCourses] = React.useState([]);
  const [responsibilities, setResponsibilities] = React.useState({});
  const [experiences, setExperiences] = React.useState([]);
  const [education, setEducation] = React.useState([]);

  const baseUrl = "https://rciesielski3.github.io/portfolio";

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutMeResponse = await fetch(
          `${baseUrl}/data/aboutMeContent.json`
        );
        if (!aboutMeResponse.ok)
          throw new Error(`HTTP error! status: ${aboutMeResponse.status}`);
        const aboutMeData = await aboutMeResponse.json();
        setAboutMeContent(aboutMeData);

        const traitsResponse = await fetch(`${baseUrl}/data/traits.json`);
        if (!traitsResponse.ok)
          throw new Error(`HTTP error! status: ${traitsResponse.status}`);
        const traitsData = await traitsResponse.json();
        setTraits(traitsData.traits);

        const responsibilitiesResponse = await fetch(
          `${baseUrl}/data/responsibilities.json`
        );
        if (!responsibilitiesResponse.ok)
          throw new Error(
            `HTTP error! status: ${responsibilitiesResponse.status}`
          );
        const responsibilitiesData = await responsibilitiesResponse.json();
        setResponsibilities(responsibilitiesData);

        const certificationsResponse = await fetch(
          `${baseUrl}/data/certifications.json`
        );
        if (!certificationsResponse.ok)
          throw new Error(
            `HTTP error! status: ${certificationsResponse.status}`
          );
        const certificationsData = await certificationsResponse.json();
        setCertificationCourses(certificationsData);

        const experiencesResponse = await fetch(
          `${baseUrl}/data/experiences.json`
        );
        if (!experiencesResponse.ok)
          throw new Error(`HTTP error! status: ${experiencesResponse.status}`);
        const experiencesData = await experiencesResponse.json();
        setExperiences(experiencesData.experiences || []);
        setEducation(experiencesData.education || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [baseUrl]);

  return (
    <DataContext.Provider
      value={{
        aboutMeContent,
        traits,
        certificationCourses,
        responsibilities,
        experiences,
        education,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
