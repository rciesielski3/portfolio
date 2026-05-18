import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { navigationItems } from "../../config/profile";
import { useLanguage } from "../../context/LanguageContext";
import "./NavBar.css";

const BrandLink = ({ brand, className = "", onClick }) => (
  <NavLink to="/" className={`navbar-title ${className}`} onClick={onClick}>
    RC<span>{brand}</span>
  </NavLink>
);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { content, language, setLanguage, supportedLanguages } = useLanguage();

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-toggle">
        <BrandLink brand={content.profile.brand} onClick={closeMenu} />
        <button
          onClick={toggleMenu}
          className="navbar-menu-btn"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <BrandLink
        brand={content.profile.brand}
        className="navbar-title-desktop"
        onClick={closeMenu}
      />
      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        {navigationItems.map((item) => (
          <li className="navbar-menu-item" key={item.path}>
            <NavLink to={item.path} onClick={closeMenu}>
              {content.navigation[item.key]}
            </NavLink>
          </li>
        ))}
        <li className="navbar-language-item">
          <div className="language-toggle" aria-label={content.languageToggleLabel}>
            {supportedLanguages.map((languageCode) => (
              <button
                aria-pressed={languageCode === language}
                className={languageCode === language ? "active" : ""}
                key={languageCode}
                onClick={() => setLanguage(languageCode)}
                type="button"
              >
                {languageCode.toUpperCase()}
              </button>
            ))}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
