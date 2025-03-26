import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    emailjs.sendForm(
      'service_6hvw06c', 
      'template_2jof1xr', // Fixed the typo in template ID (removed extra 't')
      form.current,
      'M0siBmV_02QwB81j6'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitMessage('Thank you for your message. We will get back to you soon!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setSubmitMessage('There was an error submitting your message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
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
              <p>Park Suites, Parklands Road, Westlands</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fab fa-whatsapp"></i>
            <div>
              <p>+254 722 114 098</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <p>info@ajax.co.ke</p>
            </div>
          </div>
          
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={handleSubmit}>
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
            <button 
              type="submit" 
              className="btn submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && <div className="submit-message">{submitMessage}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;