import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaShoppingCart,
  FaTasks,
  FaCloudSun,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projectsData = [
  {
    icon: <FaShoppingCart size={50} />,
    title: "Stock Market Management System",
    description:
      "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    technologies: "React, Node.js, PostgreSQL, Tailwind CSS",
    year: "2024",
    github: "#",
  },
  {
    icon: <FaTasks size={50} />,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
    technologies: "React, Firebase, Material-UI",
    year: "2023",
    github: "#",
  },
  {
    icon: <FaCloudSun size={50} />,
    title: "Weather Dashboard",
    description:
      "A weather application that displays current weather conditions and forecasts for multiple locations with interactive maps.",
    technologies: "JavaScript, OpenWeather API, Chart.js",
    year: "2023",
    github: "#",
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
