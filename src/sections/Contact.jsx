import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>
        I'm open to freelance opportunities and collaborations. Let's build
        something great together.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
