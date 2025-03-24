import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/about-ajax.jpg" alt="Ajax Technologies Logo" className="navbar-logo-img" />
          <div className="navbar-logo-text">
            <h1>Ajax Technologies Limited</h1>
            <p className="slogan">Control your space</p>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-links" onClick={toggleMenu}>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={toggleMenu}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;