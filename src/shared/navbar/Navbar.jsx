import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { navigationItems, profile } from "../../config/profile";
import "./NavBar.css";

const BrandLink = ({ className = "", onClick }) => (
  <NavLink to="/" className={`navbar-title ${className}`} onClick={onClick}>
    RC<span>{profile.brand}</span>
  </NavLink>
);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-toggle">
        <BrandLink onClick={closeMenu} />
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
      <BrandLink className="navbar-title-desktop" onClick={closeMenu} />
      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        {navigationItems.map((item) => (
          <li className="navbar-menu-item" key={item.path}>
            <NavLink to={item.path} onClick={closeMenu}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
