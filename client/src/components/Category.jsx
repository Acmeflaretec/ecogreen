import React, { useState,useEffect } from 'react';
import axiosInstance from '../axios';
import { Link } from 'react-router-dom';
import './Category.css';
import { useNavigate,useLocation } from 'react-router-dom'; 


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
const navigate = useNavigate()
const [category,setCategory] = useState([])

useEffect(()=>{
  fetchCategory()
},[])


const fetchCategory = async (urlC) => {
  try {
    const response = await axiosInstance.get('/category');
    setCategory(response?.data?.data);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};
  return (
    <div className="category-container">
      <div className="category-scroll">
  <Link to={`/allproducts`} className="category-item">
    All products
  </Link>
  {category.map((category) => (
    <Link
      to={`/allproducts?categoryQuery=${category._id}`}
      key={category._id}
      className="category-item"
    >
      {category.name}
    </Link>
  ))}
</div>

      {/* <div className="category-scroll">
        {category.map((category) => (
          
          <Link to={`/allproducts?categoryQuery=${category._id}`} key={category._id} className="category-item">
            {category.name}
          </Link>
        ))}
      </div> */}
    </div>
  );
}

export default Category;