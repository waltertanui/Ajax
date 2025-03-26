import React, { useState } from 'react';
import '../styles/Products.css';

const Products = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const productList = [
    {
      id: 1,
      name: 'CCTV Systems',
      description: 'Advanced surveillance cameras for complete monitoring of your property.',
      extendedDescription: 'Explore our extensive range of high-definition security cameras, featuring robust outdoor models designed to withstand the elements and discreet indoor solutions that blend seamlessly into your environment.\n\nExpert Installation: Rely on our highly skilled and certified technicians for professional installation that guarantees optimal camera placement and maximum performance, ensuring your security needs are met with precision.\n\nCustomized Solutions: We take the time to understand your specific security requirements, working hand-in-hand with you to create a tailored surveillance system that enhances your safety with proactive measures that suit your lifestyle.\n\nSeamless Integration: Experience the convenience of a fully integrated security network by combining your CCTV system with access control and alarm solutions, providing you with a centralized hub for complete peace of mind.\n\nOngoing Support: Enjoy the confidence of knowing that our dedicated support team is available for ongoing maintenance and assistance, helping your CCTV system operate at peak performance and ensuring your security is never compromised.',
      image: 'https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2N0dnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      name: 'Access Control',
      description: 'Secure entry systems to manage and monitor who enters your premises.',
      extendedDescription: 'Our access control solutions include keycard systems, biometric readers, and smartphone-enabled entry. These systems allow you to restrict access to sensitive areas, track entry/exit times, and manage permissions remotely.',
      image: 'https://media.istockphoto.com/id/1151627487/photo/door-access-control-staff-holding-a-key-card-to-lock-and-unlock-door-at-home-or-condominium.webp?a=1&b=1&s=612x612&w=0&k=20&c=fKLbv_39qIAWe7UvU0dtVCJu2VFUZCOLBHXOCWfGYTc=',
    },
    {
      id: 3,
      name: 'Video/Audio Intercoms',
      description: 'Communication systems for secure visitor management.',
      extendedDescription: 'Our video and audio intercom systems provide crystal-clear communication with visitors before granting access. Featuring HD video, two-way audio, and smartphone integration, these systems allow you to screen visitors from anywhere, enhancing security and convenience.',
      image: '/doorcamera.jpeg',
    },
    {
      id: 4,
      name: 'Intruder Alarm Systems',
      description: 'Essential protection for homes, schools, and businesses from unauthorized entry.',
      extendedDescription: 'This is essential for protecting homes, schools, and businesses from unauthorized entry, ensuring personal safety, and safeguarding against burglary and property damage.\n\nKEY FEATURES OF OUR WIRELESS ALARM SYSTEM\n1.\tComprehensive All-in-One Kit \nIt includes everything you need for effective home security, such as sensors, alarms, a control hub, a keypad, a control fob, and motion cameras.\n\n2.\tAdvanced Motion Detection\nEach kit features a Passive Infrared (PIR) motion detector that accurately detects movement and triggers the alarm when necessary. Unlike outdated systems, our Ajax motion detectors can distinguish between humans and pets, reducing false alarms.\n\n3.\tEfficient Door Detection Sensors  \nSensors are easy to install on door frames. These unobtrusive sensors provide timely alerts when a door opens while the alarm system is active. They have received multiple accolades for their performance and are ideal for monitoring both doors and windows.\n\n4.\tLong-Lasting Battery Life  \nAjax alarm system sensors boast an impressive seven-year battery life, allowing you to enjoy peace of mind with minimal maintenance.\n\n5.\tInternal and External Sirens for Enhanced Security  \nEach Ajax alarm kit includes both internal and external sirens. The Home Siren effectively alerts you to potential intrusions indoors, while the Street Siren notifies passersby and deters intruders outdoors. Both sirens feature a five-year battery life, customizable alarm sounds, and adjustable sound levels for your convenience.\nOur alarm system provides a robust solution for keeping your home secure and offer you and your loved ones the confidence and safety you deserve.',
      image: '/Intruderalarm.jpeg',
    },
    {
      id: 5,
      name: 'Electric Fencing',
      description: 'Perimeter security solutions to protect your property.',
      extendedDescription: 'Our electric fencing solutions provide a powerful deterrent against intruders. These systems deliver a non-lethal but effective shock when tampered with and can be integrated with alarm systems to alert you of breach attempts. We offer various configurations suitable for residential, commercial, and industrial properties.',
      image: '/electric fence.jpeg',
    },
    {
      id: 6,
      name: 'Standby Power',
      description: 'Reliable backup power solutions for uninterrupted security.',
      extendedDescription: 'We are dedicated to providing specialized energy solutions that meet the unique needs of the East African region. Our services include solar power systems, generators, wind-powered equipment, uninterruptible power supply (UPS) systems, and reliable power backup solutions.\n\nWe supply and install solar power systems for residential homes, government buildings, commercial properties, and non-governmental organizations, particularly in remote areas that lack access to mains electricity. Our high-quality solar panels, charge controllers, inverters, and batteries come with a comprehensive warranty and are competitively priced, ensuring that you receive the best value for your investment.',
      image: 'https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHNvbGFyfGVufDB8fDB8fHww',
    },
  ];

  const toggleDescription = (id) => {
    if (expandedProduct === id) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(id);
    }
  };

  return (
    <section id="products" className="products-section">
      <div className="section-header">
        <h2>Our Products</h2>
        <p>Comprehensive security solutions for your peace of mind</p>
      </div>
      <div className="products-container">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{expandedProduct === product.id ? product.extendedDescription : product.description}</p>
              <button 
                className="btn product-btn" 
                onClick={() => toggleDescription(product.id)}
              >
                {expandedProduct === product.id ? 'Show Less' : 'WHY CHOOSE US'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;