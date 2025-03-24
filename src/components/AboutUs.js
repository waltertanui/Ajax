import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Ajax Technologies Limited</h2>
      </div>
      <div className="about-container">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="About Ajax Technologies" />
        </div>
        <div className="about-content">
          <h3>Your Security Partner</h3>
          <p>
            Ajax Technologies Limited is a leading provider of comprehensive security solutions in the region. 
            With years of experience and a team of dedicated professionals, we specialize in delivering 
            cutting-edge security systems tailored to meet the unique needs of our clients.
          </p>
          <p>
            Our mission is to provide innovative security solutions that help our clients control their space 
            and protect what matters most to them. We pride ourselves on our commitment to quality, 
            reliability, and customer satisfaction.
          </p>
          <div className="about-features">
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <h4>Trusted Security</h4>
            </div>
            <div className="feature">
              <i className="fas fa-users"></i>
              <h4>Expert Team</h4>
            </div>
            <div className="feature">
              <i className="fas fa-cogs"></i>
              <h4>Quality Service</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;