import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import AboutMe from "./features/about/AboutMe";
import Skills from "./features/skills/Skills";
import Certifications from "./features/certification/Certifications";
import ContactForm from "./features/contact/ContactForm";
import GithubRepositories from "./features/github/GithubRepositories";
import BlogPreview from "./features/blog/BlogPreview";
import LinkedInProfile from "./features/experience/LinkedInProfile";
import MySmartHome from "./features/smarthome/MySmartHome";
import MainPage from "./features/mainPage/MainPage";
import PrivacyPolicy from "./features/privacy/PrivacyPolicy";

import DataProvider from "./context/DataContext";
import NavBar from "./shared/navbar/Navbar";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <NavBar />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/courses" element={<Certifications />} />
            <Route path="/github" element={<GithubRepositories />} />
            <Route
              path="/blogs/qa-journey"
              element={
                <BlogPreview
                  url="https://qa-journey.blogspot.com/"
                  title="QA Journey"
                />
              }
            />
            <Route
              path="/blogs/quality-assurance"
              element={
                <BlogPreview
                  url="https://qa-blog.onrender.com/"
                  title="Quality Assurance"
                />
              }
            />
            <Route path="/mysmarthome" element={<MySmartHome />} />
            <Route path="/experience" element={<LinkedInProfile />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/portfolio" exact element={<MainPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </DataProvider>
  );
};

export default App;
