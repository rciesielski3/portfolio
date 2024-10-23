import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AboutMe from "./features/about/AboutMe";
import Skills from "./features/skills/Skills";
import Certifications from "./features/certification/Certifications";
import ContactForm from "./features/contact/ContactForm";
import GithubRepositories from "./features/github/GithubRepositories";
import BlogPreview from "./features/blog/BlogPreview";
import LinkedInProfile from "./features/experience/LinkedInProfile";
import MySmartHome from "./features/smarthome/MySmartHome";
import DataProvider from "./context/DataContext";
import NavBar from "./shared/Navbar";
import Footer from "./shared/Footer";
import MainPage from "./features/mainPage/MainPage";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <NavBar />
        <div style={{ padding: "20px" }}>
          <Routes>
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
            <Route path="/" exact element={<MainPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </DataProvider>
  );
};

export default App;
