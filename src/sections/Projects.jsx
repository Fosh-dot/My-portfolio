import "../styles/projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A modern responsive e-commerce interface built with React, focused on user experience and clean UI.",
    image: "/project1.png",
    tech: "React, CSS, JavaScript",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and responsive design principles.",
    image: "/project2.png",
    tech: "React, CSS",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span className="tech">{project.tech}</span>

              <div className="links">
                <a href={project.live} target="_blank">
                  Live
                </a>
                <a href={project.github} target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
