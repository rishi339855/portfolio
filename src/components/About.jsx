import React from "react";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <div className="content">
        <div className="about-container">
          <div className="about-text">
            <h1>
              Hey folks, I'm{" "}
              <span className="name-highlight">Rishikesh Reddy</span>
            </h1>
            <h2>
              A Developer &<br />
              Tech Enthusiast
            </h2>
            <p className="about-subtitle">
              <FaUserGraduate style={{ marginRight: "10px" }} />
              Computer Science Student at R.V. College of Engineering
            </p>
            <div className="about-actions">
              <a
                href="/DADAM RISHIKESH REDDY RESUME.pdf"
                download="DADAM RISHIKESH REDDY RESUME.pdf"
                className="btn btn-primary"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
