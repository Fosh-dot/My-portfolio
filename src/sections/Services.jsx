import "../styles/services.css";

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>What I Offer</h2>

      <div className="services-grid">
        <div className="service-card">
          <h3>Website Development</h3>
          <p>I build responsive websites using React.</p>
        </div>

        <div className="service-card">
          <h3>Landing Pages</h3>
          <p>High-converting landing pages for businesses.</p>
        </div>

        <div className="service-card">
          <h3>UI Fixes</h3>
          <p>Improve and fix existing websites.</p>
        </div>
      </div>
    </section>
  );
}
