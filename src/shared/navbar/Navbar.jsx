import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle">
        <NavLink
          to="/"
          className="navbar-title"
          onClick={() => setMenuOpen(false)}
        >
          RC<span>Quality Engineering</span>
        </NavLink>
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
      <NavLink
        to="/"
        className="navbar-title navbar-title-desktop"
        onClick={() => setMenuOpen(false)}
      >
        RC<span>Quality Engineering</span>
      </NavLink>
      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li className="navbar-menu-item">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li className="navbar-menu-item">
          <NavLink to="/experience" onClick={() => setMenuOpen(false)}>
            Experience
          </NavLink>
        </li>
        <li className="navbar-menu-item">
          <NavLink to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </NavLink>
        </li>
        <li className="navbar-menu-item">
          <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
            Certifications
          </NavLink>
        </li>
        <li className="navbar-menu-item">
          <NavLink to="/github" onClick={() => setMenuOpen(false)}>
            GitHub
          </NavLink>
        </li>
        <li className="navbar-menu-item">
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
