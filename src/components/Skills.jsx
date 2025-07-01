import React from "react";
import {
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBookOpen,
} from "react-icons/fa";
import { SiJavascript, SiPostgresql } from "react-icons/si";
import { DiRuby } from "react-icons/di"; // Using a generic code icon for C/C++

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FaLaptopCode />,
    items: [
      { name: "C", icon: <DiRuby /> },
      { name: "C++", icon: <DiRuby /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    category: "Web Technologies",
    icon: <FaLaptopCode />,
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
  },
  {
    category: "Databases",
    icon: <FaDatabase />,
    items: [
      { name: "SQL", icon: <FaDatabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    category: "Coursework",
    icon: <FaBookOpen />,
    items: [
      { name: "Operating Systems", icon: <FaBookOpen /> },
      { name: "DBMS", icon: <FaBookOpen /> },
      { name: "Data Structures and Algorithms", icon: <FaBookOpen /> },
      { name: "OOPs", icon: <FaBookOpen /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="content">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillsData.map((skillCategory, index) => (
            <div className="skill-category" key={index}>
              <h3>
                {skillCategory.icon}
                {skillCategory.category}
              </h3>
              <ul className="skills-list">
                {skillCategory.items.map((skill, i) => (
                  <li key={i}>
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
