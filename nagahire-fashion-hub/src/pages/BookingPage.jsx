import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/BookingPage.css";

const BookingPage = () => {
  const location = useLocation();
  const messageFromState = location.state?.message || "Hello Anitha, I want to book a service.";
  const productFromState = location.state?.product || null;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const anithaNumber = "250788747861"; // Replace with actual number
    const message = `${messageFromState}%0A${productFromState ? `Product: ${productFromState.title}%0APrice: ${productFromState.price}%0A` : ""}Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ADate: ${form.date}%0ANotes: ${form.notes}`;
    const url = `https://wa.me/${anithaNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="booking-page">
      <h1>Book Product</h1>
      {productFromState && (
        <div className="product-info">
          <h2>{productFromState.title}</h2>
          <p>Price: {productFromState.price}</p>
        </div>
      )}
      <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} required />
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <textarea name="notes" placeholder="Additional Notes" value={form.notes} onChange={handleChange} />
        <button type="button" className="whatsapp-btn" onClick={handleWhatsApp}>
          Send Booking via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
