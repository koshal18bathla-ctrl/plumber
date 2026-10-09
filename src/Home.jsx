
import "./Home.css";

const services = [
  {
    title: "Tap Installation",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=700&q=85",
    desc: "Professional tap fitting and replacement."
  },
  {
    title: "Pipe Repair",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=700&q=85",
    desc: "Fast repair for damaged pipes."
  },
  {
    title: "Water Heater",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=85",
    desc: "Water heater installation and repair."
  },
  {
    title: "Bathroom Fitting",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=700&q=85",
    desc: "Modern bathroom plumbing solutions."
  },
  {
    title: "Leakage Repair",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85",
    desc: "Find and fix unwanted water leaks."
  },
  {
    title: "Home Plumbing",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85",
    desc: "Reliable plumbing for your home."
  }
];

function Home() {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <span className="hero-tag">
            PROFESSIONAL PLUMBING SERVICES
          </span>

          <h1>
            Your Trusted
            <br />
            <span>Plumbing Partner</span>
          </h1>

          <p>
            Fast, reliable and affordable plumbing
            solutions for your home and business.
            From small repairs to major installations,
            we have got you covered.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Book Service →
            </a>

            <a href="tel:+919876543210" className="btn-outline">
              ☎ Call Now
            </a>
          </div>

          <div className="hero-features">
            <span>✓ Trusted Service</span>
            <span>◷ Quick Response</span>
            <span>★ Quality Work</span>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>What We Offer</h2>
          <p>
            Complete plumbing solutions for every home.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
              </div>

              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#contact">
                  Get Service <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1000&q=85"
            alt="Professional technician at work"
            loading="lazy"
          />
        </div>

        <div className="about-content">
          <span className="section-label">ABOUT OUR COMPANY</span>
          <h2>Reliable Plumbing for a Better Home</h2>
          <p>
            We help homeowners with plumbing repairs,
            installations and maintenance. Our goal is
            quality workmanship and dependable service.
          </p>

          <div className="about-points">
            <span>✓ Professional Service</span>
            <span>✓ Quality Work</span>
            <span>✓ Customer First</span>
          </div>

          <a href="#contact" className="btn-primary">
            Contact Our Team →
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;