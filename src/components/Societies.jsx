import React from "react";
import { FaUsers, FaCheckCircle } from "react-icons/fa";

// You can easily add or remove society names from this list
const societiesList = [
  "Member of Frequency Club RVCE",
  "Member of Rotract Club RVCE",
  "NCC Cadet(A-Certificate Holder)",
];

const Societies = () => {
  return (
    <section id="societies">
      <div className="content">
        <h2>Societies & Memberships</h2>
        <div className="societies-container">
          <div className="content-card">
            <h3>
              <FaUsers style={{ marginRight: "10px" }} />
              Active Memberships
            </h3>
            <ul className="societies-list">
              {societiesList.map((society, index) => (
                <li key={index}>
                  <FaCheckCircle
                    style={{
                      marginRight: "10px",
                      color: "var(--primary-color)",
                    }}
                  />
                  {society}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Societies;
