import React from 'react';
import '../styles/Products.css';

const Products = () => {
  const productList = [
    {
      id: 1,
      name: 'CCTV Systems',
      description: 'Advanced surveillance cameras for complete monitoring of your property.',
      image: 'https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2N0dnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      name: 'Access Control',
      description: 'Secure entry systems to manage and monitor who enters your premises.',
      image: 'https://media.istockphoto.com/id/1151627487/photo/door-access-control-staff-holding-a-key-card-to-lock-and-unlock-door-at-home-or-condominium.webp?a=1&b=1&s=612x612&w=0&k=20&c=fKLbv_39qIAWe7UvU0dtVCJu2VFUZCOLBHXOCWfGYTc=',
    },
    {
      id: 3,
      name: 'Video/Audio Intercoms',
      description: 'Communication systems for secure visitor management.',
      image: 'https://media.istockphoto.com/id/1221857753/photo/grocery-delivery-person.webp?a=1&b=1&s=612x612&w=0&k=20&c=7XLeHxj871oEITyJdSrcLCBS6G9jTDzGxXXLHpd-BSQ=',
    },
    {
      id: 4,
      name: 'Automated Gates',
      description: 'Convenient and secure gate automation solutions.',
      image: 'https://imgs.search.brave.com/wFe4N5orF7En4AtniAlGAxT0Otk_sv3eQ8LNfrEOM8A/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9lbWJl/ZC53aWRlbmNkbi5u/ZXQvaW1nL2NnaS9s/YWVzdGpkZ3U2LzYw/MHB4LzIwMjBfTE1f/SERfU1dfR3RlQ29t/X1JFTkRFUi5qcGVn/P2tlZXA9YyZjcm9w/PXllcyZ1PWllOHI1/bCZ1c2U9cGk1ZDI',
    },
    {
      id: 5,
      name: 'Electric Fencing',
      description: 'Perimeter security solutions to protect your property.',
      image: 'https://media.istockphoto.com/id/184962823/photo/electric-fence.webp?a=1&b=1&s=612x612&w=0&k=20&c=0PnT3B1QeXOoPnd3YU3aPO1cozfaVHayGl_VC9DvLwU=',
    },
    {
      id: 6,
      name: 'Standby Power',
      description: 'Reliable backup power solutions for uninterrupted security.',
      image: 'https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHNvbGFyfGVufDB8fDB8fHww',
    },
  ];

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
              <p>{product.description}</p>
              <button className="btn product-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;