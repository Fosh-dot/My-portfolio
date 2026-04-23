import "../styles/about.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        I'm a frontend developer focused on building responsive and modern web
        applications using React.
      </motion.p>
    </section>
  );
}
