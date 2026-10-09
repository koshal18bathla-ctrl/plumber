 
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div>
          <h2>🔧 PlumberPro</h2>
          <p>
            Your trusted partner for all plumbing
            and repair services.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>Phone: +91 9780616516</p>
          <p>Email: koshal18bathla@gmail.com</p>
          <p>Available for plumbing enquiries</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PlumberPro.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;