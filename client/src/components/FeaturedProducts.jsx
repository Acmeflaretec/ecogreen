import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FeaturedProducts.css';
import { Link } from 'react-router-dom';

const formatTitle = (title) => {
  let formattedTitle = title.replace(/_/g, ' ');
  formattedTitle = formattedTitle.replace(/\b\w/g, (char) => char.toUpperCase());
  return formattedTitle;
};

function FeaturedProducts({ title, tagName }) {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProductsList = async () => {
    try {
      const response = await axiosInstance.get(`/products/gettaggedproducts?tagName=${tagName}`);
      setProductsList(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchProductsList();
  }, [tagName]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i key={index} className={`star ${index < Math.round(rating) ? 'filled' : ''}`}></i>
    ));
  };

  const ProductCard = ({ product }) => (
    <div className="productCard mt-5 mb-5">
      <img
        src={`${import.meta.env.VITE_API_BASE_URL_LOCALHOST}/uploads/${product?.image[0]}`}
        alt={product?.name}
        className="product-image"
      />
      <h3 className="product-name">{product?.name}</h3>
      <div className="product-rating">{renderStars(product?.rating)}</div>
      <p className="product-price">₹ {product?.sale_rate.toFixed(2)}</p>
      <Link to={`/product?productId=${product._id}`}>
        <button className='btn btn-primary w-100'>
          Buy now
        </button>
      </Link>
    </div>
  );

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="featured-products-container">
      <h2 className="section-title">{formatTitle(title)}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          320: {   // Mobile devices
            slidesPerView: 2,  // Show 2 products on mobile screens
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
      >
        {productsList?.map((product) => (
          <SwiperSlide key={product?._id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeaturedProducts;
