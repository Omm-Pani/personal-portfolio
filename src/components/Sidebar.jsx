import React, { useState } from "react";

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/my-avatar.png" alt="Omm Pani" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Omm Pani">
            Omm Pani
          </h1>
          <p className="title">Full Stack Developer 💻</p>
          <p className="title">AI Enthusiast 🧠</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:ommpani99@gmail.com" className="contact-link">
                ommpani99@gmail.com
              </a>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/omm-pani-608a4a248/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://twitter.com/ommpani9"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://leetcode.com/u/OmmPani/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="code-slash"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/Omm-Pani"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
