import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (type) => {
    setOpenSubmenu(type);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle">
        <span className="navbar-title">My Portfolio</span>
        <button onClick={toggleMenu} className="navbar-menu-btn">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li className="navbar-menu-item">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
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
        <li
          className="navbar-dropdown"
          onMouseEnter={() => handleMouseEnter("blogs")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="navbar-dropdown-btn">Blogs</button>
          <ul
            className={`navbar-dropdown-menu ${
              openSubmenu === "blogs" ? "active" : ""
            }`}
          >
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
        <li
          className="navbar-dropdown"
          onMouseEnter={() => handleMouseEnter("pages")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="navbar-dropdown-btn">Pages</button>
          <ul
            className={`navbar-dropdown-menu ${
              openSubmenu === "pages" ? "active" : ""
            }`}
          >
            <li>
              <Link
                to="/pages/learn-js-react-basics"
                onClick={() => setMenuOpen(false)}
              >
                JS & React Fundamentals
              </Link>
            </li>
            <li>
              <Link
                to="/pages/mini-game-collection"
                onClick={() => setMenuOpen(false)}
              >
                Mini Game Collection
              </Link>
            </li>
            <li>
              <Link to="/pages/mysmarthome" onClick={() => setMenuOpen(false)}>
                My Smart Home
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
