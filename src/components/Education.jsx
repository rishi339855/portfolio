import React from "react";
import {
  FaUniversity,
  FaSchool,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaBookOpen,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      year: "2022-26",
      institution: "R.V. College of Engineering",
      degree: "Dept. of CSE",
      grade: "Grade: 9.37",
      icon: <FaUniversity />,
    },
    {
      year: "2020-22",
      institution: "Sri chaitanya Junior College",
      degree: "12th Class",
      grade: "Percentage: 97.2%",
      icon: <FaSchool />,
    },
    {
      year: "2015-20",
      institution: "Jawahar Navodaya Vidyalaya",
      degree: "10th Class",
      grade: "Percentage: 95%",
      icon: <FaSchool />,
    },
  ];

  return (
    <section id="education">
      <div className="content">
        <h2>Education</h2>
        <div className="section-content">
          <div className="content-card">
            <div className="education-timeline">
              {educationData.map((item, index) => (
                <motion.div
                  className="timeline-item"
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-dot">
                    <div className="timeline-year">{item.year}</div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-icon">{item.icon}</div>
                    <div className="timeline-details">
                      <h3>{item.institution}</h3>
                      <p>{item.degree}</p>
                      <p>{item.grade}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
