import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Ajax Technologies Limited</h1>
        <h2>Control your space</h2>
        <p>Advanced security solutions for your home and business</p>
        <div className="hero-buttons">
          <button className="btn primary-btn">Explore Products</button>
          <button className="btn secondary-btn">Contact Us</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Security System" />
      </div>
    </section>
  );
};

export default HeroSection;