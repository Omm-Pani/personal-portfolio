import React from "react";

function Navbar({ activePage, handleNavClick }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === "about" ? "active" : ""}`}
            onClick={() => handleNavClick("about")}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === "blogs" ? "active" : ""}`}
            onClick={() => handleNavClick("blogs")}
          >
            Blogs
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activePage === "contact" ? "active" : ""
            }`}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
