import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" className="nav-logo" /> 
          <Link to="/">NagahireFashionHub</Link>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>
          <li>
  <NavLink to="/men" className={({ isActive }) => (isActive ? "active-link" : "")}>
    Men
  </NavLink>
</li>

<li>
  <NavLink to="/women" className={({ isActive }) => (isActive ? "active-link" : "")}>
    Women
  </NavLink>
</li>
          <li>
            <NavLink to="/booking" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Bookings
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}
