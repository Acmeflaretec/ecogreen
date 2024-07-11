import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const categories = [
  { id: 1, name: 'Fashion' },
  { id: 2, name: 'Grocery' },
  { id: 3, name: 'Electronics' },
  { id: 4, name: 'Mobile Accessories' },
  { id: 5, name: 'Home & Living' },
  { id: 6, name: 'Books' },
  { id: 7, name: 'Sports & Outdoors' },
  // Add more categories as needed
];

function Category() {
  return (
    <div className="category-container">
      <div className="category-scroll">
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id} className="category-item">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;