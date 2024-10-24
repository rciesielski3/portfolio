import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  const isBlogActive =
    location.pathname === "/blogs/qa-journey" ||
    location.pathname === "/blogs/quality-assurance";

  return (
    <nav className="bg-gray-800 p-4 text-xl z-10 relative">
      <ul className="list-none flex justify-around">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-650 font-bold no-underline"
                : "text-white font-bold no-underline hover:text-orange-650"
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-orange-650 font-bold no-underline"
                : "text-white font-bold no-underline hover:text-orange-650"
            }
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "text-orange-650 font-bold no-underline"
                : "text-white font-bold no-underline hover:text-orange-650"
            }
          >
            Certifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              isActive
                ? "text-orange-650 font-bold no-underline"
                : "text-white font-bold no-underline hover:text-orange-650"
            }
          >
            Github Repositories
          </NavLink>
        </li>
        <li className="relative" onMouseEnter={handleMouseEnter}>
          <span
            className={`${
              isBlogActive
                ? "text-orange-650 font-bold no-underline"
                : "text-white font-bold no-underline hover:text-orange-650"
            }`}
          >
            Blogs
          </span>
          {showSubmenu && (
            <ul
              className="absolute mt-3 bg-gray-700 shadow-lg rounded-lg p-2"
              onMouseLeave={handleMouseLeave}
            >
              <li>
                <Link
                  to="/blogs/qa-journey"
                  className="block px-5 py-2 text-white hover:text-orange-650"
                >
                  QA Journey
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs/quality-assurance"
                  className="block px-5 py-2 text-white hover:text-orange-650"
                >
                  Quality Assurance
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive
                ? "text-orange-650 font-bold no-underline"
                : "text-white font-bold no-underline hover:text-orange-650"
            }
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-orange-650 font-bold no-underline"
                : "text-white font-bold no-underline hover:text-orange-650"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
