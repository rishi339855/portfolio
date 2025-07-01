import React from "react";
import { FaBriefcase, FaBuilding, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <div className="content">
        <h2>Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3>
              <FaBuilding style={{ marginRight: "10px" }} />
              ATDXT <span className="experience-location">Bangalore, IN</span>
            </h3>
            <p className="experience-role-date">
              <span className="experience-role">Project Intern</span>
              <span className="experience-date">
                <FaCalendarAlt style={{ marginRight: "5px" }} />
                Nov 2023 - May 2024
              </span>
            </p>
          </div>
          <div className="experience-details">
            <ul>
              <li>
                Created and implemented a desktop software integrating iris,
                fingerprint, and facial recognition for secure user
                authentication.
              </li>
            </ul>
            <h4>Area of Contribution:</h4>
            <ul>
              <li>
                Developed an iris recognition model utilizing the CASIA Dataset
                and ResNET50 architecture.
              </li>
              <li>Achieved 88% accuracy in biometric identification.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
