import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaBook,
  FaTrophy,
  FaUsers,
  FaEnvelope,
  FaBriefcase,
  FaUserCircle,
  FaDownload,
} from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // Show navbar when scrolling up or at the very top
      if (window.scrollY < lastScrollY || window.scrollY <= 0) {
        setShowNav(true);
      } else {
        // Hide navbar when scrolling down
        setShowNav(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={showNav ? "navbar-visible" : "navbar-hidden"}>
      <div className="nav-container">
        <div className="nav-brand">
          <FaUserCircle size={28} />
          <span>Dadam Rishikesh Reddy</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">
              <FaUser /> About
            </a>
          </li>
          <li>
            <a href="#education">
              <FaGraduationCap /> Education
            </a>
          </li>
          <li>
            <a href="#skills">
              <FaCode /> Skills
            </a>
          </li>
          <li>
            <a href="#experience">
              <FaBriefcase /> Experience
            </a>
          </li>
          <li>
            <a href="#projects">
              <FaProjectDiagram /> Projects
            </a>
          </li>
          <li>
            <a href="#publications">
              <FaBook /> Publications
            </a>
          </li>
          <li>
            <a href="#societies">
              <FaUsers /> Societies
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope /> Contact
            </a>
          </li>
          <li>
            <a
              href="/DADAM RISHIKESH REDDY RESUME.pdf"
              download="DADAM RISHIKESH REDDY RESUME.pdf"
              className="btn btn-nav"
            >
              <FaDownload /> Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
