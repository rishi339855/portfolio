import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaChartLine,
  FaUtensils,
  FaSignLanguage,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projectsData = [
  {
    icon: <FaChartLine size={50} />, // Stock Market icon
    title: "Stock Market Management System",
    description:
      "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    technologies: "React, Node.js, PostgreSQL, Tailwind CSS",
    year: "2024",
    github: "https://github.com/rishi339855/Stock-Market-Management-System-",
  },
  {
    icon: <FaUtensils size={50} />, // Recipe/Food icon
    title: "Recipee Master",
    description:
      "•\tCreated a recipe platform featuring over 100,000 dishes, with functionalities for bookmarking, adding and storing entries.",
    technologies: "HTML,CSS,JavaScript",
    year: "2024",
    github: "https://github.com/rishi339855/Recipee-Master",
  },
  {
    icon: <FaSignLanguage size={50} />, // Sign Language/Hand icon
    title: "SignBridge AI",
    description:
      "•\tDeveloped a real-time Sign Language recognition system that converts hand gestures to text and speech using webcam input, alphabet classification, word suggestions, and multilingual text output.",
    technologies: "MediaPipe, OpenCV, TensorFlow/Keras, Streamlit, MongoDB",
    year: "2025",
    github: "https://github.com/rishi339855/SignBridge-AI",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="content">
        <h2>Projects</h2>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="projects-slider"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} className="project-slide">
              <div className="project-card-redesigned">
                <div className="project-image-redesigned">{project.icon}</div>
                <div className="project-content-redesigned">
                  <h4>{project.title}</h4>
                  <p className="project-year">{project.year}</p>
                  <p className="project-description">{project.description}</p>
                  <p className="project-tech">
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                  <div className="project-links-redesigned">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
