import "../styles/hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        I Design & Build, <br />
        <span>Modern Websites That Drive Results</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Frontend developer skilled in React, focused on creating responsive,
        high-performing websites. Currently expanding into full-stack
        development.
      </motion.p>
      <p>Built multiple responsive web projects using React and modern CSS.</p>

      <motion.a href="/CHUKWUEMEKA FORTUNE CV.pdf" className="btn-link">
        Download Cv
      </motion.a>
    </section>
  );
}
