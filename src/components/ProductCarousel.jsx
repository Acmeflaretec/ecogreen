import React from 'react';
import './ProductCarousel.css';

function ProductCarousel({ products }) {
  return (
    <div className="product-carousel p-3">
      <h2>Related items <span className="see-more">See more</span></h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
