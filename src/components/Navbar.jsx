import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
          <li className="admin-btn-mobile">
            <a
              href="https://nagahire-fhb-1.onrender.com/accounts/login/"
              target="_parent"
              rel="noreferrer"
            >
              Admin Login
            </a>
          </li>
        </ul>

        {/* Admin Login Button (desktop) */}
        <a
          href="https://nagahire-fhb-1.onrender.com/accounts/login/"
          rel="noreferrer"
          className="admin-btn"
        >
          Admin Login
        </a>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span>&#9776;</span>
        </div>
      </div>
    </nav>
  );
}