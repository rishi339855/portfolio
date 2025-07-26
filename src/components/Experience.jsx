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
              Real-Time Driver Monitoring System
              <span className="experience-location">
                Dept. of Computer Science
              </span>
            </h3>
            <p className="experience-role-date">
              <span className="experience-date">
                <FaCalendarAlt style={{ marginRight: "5px" }} />
                August 2024 - November 2024
              </span>
            </p>
          </div>
          <div className="experience-details">
            <ul>
              <li>
                Engineered a detection system with MediaPipe and YOLOv8 to
                identify driver drowsiness, yawning, and phone usage during the
                trip.
              </li>
              <li>
                Built a dual-interface website delivering live alerts to drivers
                and detailed trip reports to fleet owners.
              </li>
              <li>
                Achieved over 90% accuracy, mitigating accident risks and
                enhancing overall fleet safety.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
