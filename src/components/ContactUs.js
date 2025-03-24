import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Get in touch with our team for any inquiries</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Our Location</h3>
              <p>123 Security Street, Nairobi, Kenya</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone Number</h3>
              <p>+254 123 456 789</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email Address</h3>
              <p>info@ajaxtechnologies.com</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;