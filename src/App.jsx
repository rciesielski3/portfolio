import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Skills from "./features/skills/Skills";
import Certifications from "./features/certification/Certifications";
import ContactForm from "./features/contact/ContactForm";
import GithubRepositories from "./features/github/GithubRepositories";
import MainPage from "./features/mainPage/MainPage";
import PrivacyPolicy from "./features/privacy/PrivacyPolicy";
import ExperiencePage from "./features/experience/ExperiencePage";
import NotFound from "./features/notFound/NotFound";

import DataProvider from "./context/DataContext";
import NavBar from "./shared/navbar/Navbar";
import Footer from "./shared/Footer";
import "./App.css";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <div className="app-layout">
          <NavBar />
          <div className="app-main">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/courses" element={<Certifications />} />
              <Route path="/github" element={<GithubRepositories />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/portfolio" element={<MainPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
