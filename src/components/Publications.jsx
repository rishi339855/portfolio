import React from "react";
import { FaBook, FaCalendarAlt, FaLink } from "react-icons/fa";

const Publications = () => {
  return (
    <section id="publications">
      <div className="content">
        <h2>Publications</h2>
        <div className="publication-item">
          <div className="publication-header">
            <h3>
              <FaBook style={{ marginRight: "10px" }} />
              Predictive Analytics for Milk Quality using Random Forest (RF)
              Algorithm
            </h3>
            <p className="publication-date">
              <FaCalendarAlt style={{ marginRight: "5px" }} />
              Dec. 2024
            </p>
          </div>
          <div className="publication-details">
            <ul>
              <li>
                Published a research paper presenting a machine learning-based
                web application that analyzes chemical and physical parameters
                to accurately assess milk quality in real-time, achieving over
                95% accuracy. (CSITSS)
              </li>
            </ul>
            <a
              href="https://ieeexplore.ieee.org/document/10816917"
              className="publication-link"
            >
              <FaLink style={{ marginRight: "8px" }} />
              Click Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
