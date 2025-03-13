import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <nav className="navbar">
      {/* Mobile Menu Button */}
      <div className="navbar-toggle">
        <span className="navbar-title">My Portfolio</span>
        <button onClick={toggleMenu} className="navbar-menu-btn">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Menu */}
      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li className="navbar-menu-item">
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About Me
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
            Github Repositories
          </NavLink>
        </li>

        {/* Blogs with Dropdown */}
        <li className="navbar-dropdown">
          <button className="navbar-dropdown-btn" onClick={toggleSubmenu}>
            Blogs
          </button>
          <ul className={`navbar-dropdown-menu ${showSubmenu ? "active" : ""}`}>
            <li>
              <Link to="/blogs/qa-journey" onClick={() => setMenuOpen(false)}>
                QA Journey
              </Link>
            </li>
            <li>
              <Link
                to="/blogs/quality-assurance"
                onClick={() => setMenuOpen(false)}
              >
                Quality Assurance
              </Link>
            </li>
          </ul>
        </li>

        <li className="navbar-menu-item">
          <NavLink to="/experience" onClick={() => setMenuOpen(false)}>
            Experience
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
