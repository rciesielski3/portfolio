import React from "react";
import MainPage from "../features/mainPage/MainPage";
import AboutMe from "../features/about/AboutMe";
import Skills from "../features/skills/Skills";
import Certifications from "../features/certification/Certifications";
import GithubRepositories from "./GithubRepositories";
import BlogPreview from "../features/blog/BlogPreview";
import LinkedInProfile from "../features/LinkedInProfile";
import ContactForm from "../features/contact/ContactForm";
import UnderConstruction from "../features/UnderConstruction";
import { DataContext } from "../context/DataContext";

const MainContent = () => {
  const sections = {
    home: <MainPage />,
    about: <AboutMe />,
    skills: <Skills />,
    courses: <Certifications />,
    github: <GithubRepositories />,
    blog: <BlogPreview />,
    experience: <LinkedInProfile />,
    contact: <ContactForm />,
  };

  const [currentSection, setCurrentSection] = React.useState("about");

  return (
    <DataContext.Consumer>
      {() => <div>{sections[currentSection] || <UnderConstruction />}</div>}
    </DataContext.Consumer>
  );
};

export default MainContent;
