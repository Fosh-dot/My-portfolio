import "../styles/projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern React portfolio with animations.",
    live: "#",
    github: "#",
  },
  {
    title: "Landing Page",
    description: "Responsive business landing page.",
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
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="links">
              <a href={project.live}>Live</a>
              <a href={project.github}>GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
