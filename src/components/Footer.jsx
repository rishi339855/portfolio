import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} Rishikesh Reddy. All Rights
            Reserved.
          </p>
          <p>Designed & Built by Rishikesh Reddy</p>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/rishi339855"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dadam-rishikesh-reddy-1318b827a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:rishikeshreddy887@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
