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
        Frontend Developer <br />
        <span>Building Modern Web Experiences</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I create responsive, user-friendly websites using React and JavaScript.
      </motion.p>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        View Projects
      </motion.button>
    </section>
  );
}
