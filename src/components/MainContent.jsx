import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Blogs from "./Blogs";

function MainContent() {
  const [activePage, setActivePage] = useState("about");

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="main-content">
      <Navbar activePage={activePage} handleNavClick={handleNavClick} />
      {activePage === "about" && <About />}
      {activePage === "blogs" && <Blogs />}
    </div>
  );
}

export default MainContent;
