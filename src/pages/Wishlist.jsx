import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import MiddleNav from '../components/MiddleNav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching wishlist items from an API
    setTimeout(() => {
      setWishlistItems([
        { id: 1, name: 'CHARCOAL ENHANCED BAMBOO TOOTHBRUSH', imageUrl: 'https://img.freepik.com/premium-photo/eco-friendly-bamboo-toothbrush-pastel-background-zero-waste-life-without-plastic_223515-200.jpg?w=996', price: 120, originalPrice: 400, discount: 70, quantity: 500, rating: 4.5, reviews: 128 },
        { id: 2, name: 'BAMBOO TOOTHBRUSH [ white ]', imageUrl: 'https://img.freepik.com/free-photo/top-view-toothbrushes-towels_23-2148678027.jpg?w=826&t=st=1720514150~exp=1720514750~hmac=d12b18a24d3805634f531efeebf4641f623175b2449f1117084539d439e22e35', price: 150, originalPrice: 500, discount: 70, quantity: 500, rating: 4.2, reviews: 95 },
        { id: 3, name: 'BAMBOO TONGUE CLEANER', imageUrl: 'https://img.freepik.com/free-photo/eco-friendly-environment-bamboo-tube-straws_23-2148768567.jpg?t=st=1720514232~exp=1720517832~hmac=62cd94a2d5614c27c2c97a3235759bf284823b8b6df313938850f4dd238eb4fe&w=1060', price: 180, originalPrice: 600, discount: 70, quantity: 500, rating: 4.8, reviews: 203 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRemoveFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
  };

  const handleAddToCart = (item) => {
    // Implement your logic to add the item to the cart here
    console.log('Adding to cart:', item);
  };

  return (
    <>
      <MiddleNav />

      <div className="container py-5">
        <motion.h2
          className="text-center mb-4 section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Wishlist
        </motion.h2>
        
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : wishlistItems.length === 0 ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center mb-4">Your wishlist is empty.</p>
            <Link to="/allproducts" className="btn btn-success">
              <FontAwesomeIcon icon={faHeart} className="me-2" />
              Discover Products
            </Link>
          </motion.div>
        ) : (
          <AnimatePresence>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {wishlistItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="col"
                >
                  <div className="card h-100 shadow-sm d-flex flex-column">
                    <Link to={`/product/${item.id}`} className="text-decoration-none">
                      <img src={item.imageUrl} alt={item.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                    </Link>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <div className="mb-2">
                        <span className="fw-bold text-success">₹{item.price}</span>
                        <span className="text-muted text-decoration-line-through ms-2">₹{item.originalPrice}</span>
                        <span className="bg-danger-subtle ms-2">{item.discount}% OFF</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-warning">{'★'.repeat(Math.floor(item.rating))}</span>
                        <span className="text-muted">{'★'.repeat(5 - Math.floor(item.rating))}</span>
                        <small className="ms-1 text-muted">({item.reviews} reviews)</small>
                      </div>
                      <p className="card-text text-muted">{item.quantity} gm</p>
                      <div className="mt-auto d-flex justify-content-between">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleRemoveFromWishlist(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} className="me-1" />
                          Remove
                        </button>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleAddToCart(item)}
                        >
                          <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
