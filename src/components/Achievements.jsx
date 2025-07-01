import React from "react";
import {
  FaMedal,
  FaCertificate,
  FaTrophy,
  FaCrown,
  FaUserGraduate,
  FaHandshake,
  FaMicrophone,
} from "react-icons/fa";

const Achievements = () => {
  return (
    <section id="achievements">
      <div className="content">
        <h2>Achievements and Certifications</h2>
        <div className="section-content">
          <div className="grid-2">
            <div className="content-card">
              <h3>
                <FaMedal style={{ marginRight: "10px" }} />
                Awards & Recognition
              </h3>
              <ul>
                <li>
                  <strong>Best Student Award</strong> - University, 2024
                </li>
                <li>
                  <strong>Hackathon Winner</strong> - Tech Conference, 2023
                </li>
                <li>
                  <strong>Dean's List</strong> - University, 2022-2024
                </li>
                <li>
                  <strong>Innovation Award</strong> - Company Name, 2023
                </li>
              </ul>
            </div>
            <div className="content-card">
              <h3>
                <FaCertificate style={{ marginRight: "10px" }} />
                Certifications
              </h3>
              <ul>
                <li>
                  <strong>AWS Certified Developer</strong> - Amazon Web
                  Services, 2024
                </li>
                <li>
                  <strong>Google Cloud Professional</strong> - Google, 2023
                </li>
                <li>
                  <strong>Microsoft Azure Developer</strong> - Microsoft, 2023
                </li>
                <li>
                  <strong>Certified Scrum Master</strong> - Scrum Alliance, 2022
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
