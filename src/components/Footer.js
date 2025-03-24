import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/about-ajax.jpg" alt="Ajax Technologies Logo" />
          <h2>Ajax Technologies Limited</h2>
          <p>Control your space</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li><a href="#cctv">CCTV Systems</a></li>
              <li><a href="#access">Access Control</a></li>
              <li><a href="#intercom">Video/Audio Intercoms</a></li>
              <li><a href="#gates">Automated Gates</a></li>
              <li><a href="#fencing">Electric Fencing</a></li>
              <li><a href="#power">Standby Power</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Security Street, Nairobi, Kenya</p>
            <p><i className="fas fa-phone"></i> +254 123 456 789</p>
            <p><i className="fas fa-envelope"></i> info@ajaxtechnologies.com</p>
          </div>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ajax Technologies Limited. All Rights Reserved. Established in 2013</p>
      </div>
    </footer>
  );
};

export default Footer;