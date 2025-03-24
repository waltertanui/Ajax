import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      name: 'Installation',
      description: 'Professional installation of all security systems by our expert technicians.',
      icon: 'fa-tools',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Maintenance',
      description: 'Regular maintenance services to ensure your security systems operate at peak performance.',
      icon: 'fa-wrench',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Monitoring',
      description: '24/7 monitoring services for continuous protection of your property.',
      icon: 'fa-desktop',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Consultation',
      description: 'Expert security consultation to design the perfect security solution for your needs.',
      icon: 'fa-comments',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Comprehensive security services to protect what matters most</p>
      </div>
      <div className="services-container">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.name} />
            </div>
            <div className="service-icon">
              <i className={`fas ${service.icon}`}></i>
            </div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;