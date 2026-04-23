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
        I Build Fast, Modern <br />
        <span>Web Experiences That Convert</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Frontend developer specializing in helping businesses and individuals
        create responsive, high-performing websites.
      </motion.p>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <a href="/CHUKWUEMEKA FORTUNE CV.pdf">
          <button className="btn">Resume</button>
        </a>
      </motion.button>
    </section>
  );
}
