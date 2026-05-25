import React from "react";

import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { content } = useLanguage();

  return (
    <footer className="footer">
      <p>© {currentYear} Adateo Rafał Ciesielski</p>
      <p>{content.footer.rights}</p>
    </footer>
  );
};

export default Footer;
