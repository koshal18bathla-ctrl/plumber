
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="#home">
        <span className="logo-icon">🔧</span>
        Plumber<span className="logo-blue">Pro</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="nav-call" href="tel:+919876543210">
        ☎ Call Now
      </a>
    </header>
  );
}

export default Navbar;


