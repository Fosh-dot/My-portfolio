import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-content">
        <p>
          I'm a frontend developer focused on building modern, responsive
          websites using React and JavaScript.
        </p>

        <p>
          I enjoy turning ideas into real-world projects and continuously
          improving my skills by building and experimenting.
        </p>
        <p>
          I'm currently expanding my skills into backend development as I work
          towards becoming a full-stack developer, with a goal of building
          complete, scalable web applications.
        </p>

        <div className="about-cards">
          <div>
            <h3>Projects</h3>
            <p>5+ Completed</p>
          </div>

          <div>
            <h3>Focus</h3>
            <p>Frontend Development</p>
          </div>

          <div>
            <h3>Tools</h3>
            <p>React, JS, CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
