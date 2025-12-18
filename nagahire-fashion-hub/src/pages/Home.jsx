import "./../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

const Home = () => {
  const navigate = useNavigate();

  // Scroll to Services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Go to Shop page
  const goToShop = () => {
    navigate("/shop");
  };

  // Go to Booking page from CTA
  const goToBooking = () => {
    navigate("/booking", { state: { message: "Hello Anitha, I want to book a service." } });
  };

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Nagahire Fashion Hub</h1>
            <h2>Clothes Made Just for You</h2>
            <p>
              I create custom-made and ready-made clothing designed to fit your style and personality. 
              Every piece is crafted with care, from accurate measurements to selecting quality fabrics. 
              My goal is to make clothing that looks great, feels comfortable and makes you confident every day.
            </p>
            <button className="service-btn" onClick={scrollToServices}>
              Explore my services
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services" id="services-section">
        <h2 className="services-title">My Services</h2>
        <div className="services-container">
          <div className="service-card">
            <img src="/tailora.jpeg" alt="Tailor Sewing" />
            <h3>Tailor Sewing</h3>
            <p>Custom sewing services to bring your designs to life with precision.</p>
          </div>
          <div className="service-card">
            <img src="/measures.jpeg" alt="Measurement" />
            <h3>Measurement</h3>
            <p>Accurate measurements to ensure your clothes fit perfectly.</p>
          </div>
          <div className="service-card">
            <img src="/ready.jpeg" alt="Ready-made" />
            <h3>Ready-made</h3>
            <p>Stylish ready-made clothes crafted for comfort and elegance.</p>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="about-us">
        <div className="about-container">
          <div className="about-image">
            <img src="/tailor.jpeg" alt="Tailor Workshop" />
          </div>
          <div className="about-text">
            <div className="about-block">
              <h2>About Me</h2>
              <p>
                Hi! I'm Anitha, the tailor behind Nagahire Fashion Hub. I have a deep passion 
                for creating clothing that reflects both style and personality. Over the years, 
                I have honed my skills in custom-made and ready-made designs, paying attention 
                to every detail to ensure the perfect fit. Each piece I make is crafted with 
                care, ensuring comfort, elegance and a personal touch that makes you stand out.
              </p>
            </div>
            <div className="about-block">
              <h2>My Approach</h2>
              <p>
                My approach combines precision, creativity and dedication. I take time to 
                understand your needs, from measurements to design preferences, so that 
                every garment fits seamlessly and complements your style. Whether it's a 
                custom-made suit, a tailored dress or a ready-made outfit, I focus on 
                delivering high-quality clothing that is both stylish and comfortable, 
                making each client's experience unique and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="featured-products">
        <h2 className="section-title">My Featured Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="/suit.jpeg" alt="Custom Suit" />
            <h3>Custom Suit</h3>
            <button className="service-btn" onClick={goToShop}>View Details</button>
          </div>
          <div className="product-card">
            <img src="/dress.jpeg" alt="Tailored Dress" />
            <h3>Tailored Dress</h3>
            <button className="service-btn" onClick={goToShop}>View Details</button>
          </div>
          <div className="product-card">
            <img src="/shirt.jpeg" alt="Ready-made Shirt" />
            <h3>Ready-made Shirt</h3>
            <button className="service-btn" onClick={goToShop}>View Details</button>
          </div>
          <div className="product-card">
            <img src="/jacket.jpeg" alt="Tailored Jacket" />
            <h3>Tailored Jacket</h3>
            <button className="service-btn" onClick={goToShop}>View Details</button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <h2 className="section-title">What My Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Nagahire Fashion Hub made my custom suit perfectly! Excellent craftsmanship and attention to detail."</p>
            <h4>- Frida NIYONKURU</h4>
          </div>
          <div className="testimonial-card">
            <p>"Nagahire Fashion Hub me carefully and the dress fit flawlessly. Highly recommend their services!"</p>
            <h4>- Erica UMURINGA</h4>
          </div>
          <div className="testimonial-card">
            <p>"Ready-made clothes were stylish and comfortable. The quality is amazing. Will definitely come back."</p>
            <h4>- Hasha KANYANA</h4>
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Ready to Elevate Your Style?</h2>
          <p>Contact me today or explore my services to get your perfect custom fit.</p>
          <button className="service-btn" onClick={goToBooking}>Book a Service</button>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-brand-left">
              <img src={logo} alt="logo" className="footer-logo" />
              <div>
                <h2>NagahireFashionHub</h2>
                <p>Crafting stylish clothes with precision and passion.</p>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/booking">Bookings</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Me</h3>
            <p>Email: anithanagahire1@gmail.com</p>
            <p>Phone: +250 784 466 988</p>
            <div className="footer-socials">
              <a href="https://instagram.com/anny_gaella" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/250784466988" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://tiktok.com/@nagahireanitha" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Nagahire Fashion Hub. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
