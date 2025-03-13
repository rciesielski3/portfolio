import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Adateo Rafał Ciesielski</p>
      <p>All rights reserved.</p>
    </footer>
  );
};

export default Footer;
