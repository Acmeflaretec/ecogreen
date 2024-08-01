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
        { 
          id: 1, 
          name: 'WIRELESS EARBUDS', 
          imageUrl: 'https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074301.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_user', 
          price: 2500, 
          originalPrice: 5000, 
          discount: 50, 
          quantity: 100, 
          rating: 4.6, 
          reviews: 250 
        },
        { 
          id: 2, 
          name: 'BLUETOOTH SPEAKER', 
          imageUrl: 'https://t4.ftcdn.net/jpg/01/99/21/51/240_F_199215173_Bu3MTEbuNO3Lsi8OPnwHvGTBgzGXDVqF.jpg', 
          price: 1500, 
          originalPrice: 3000, 
          discount: 50, 
          quantity: 75, 
          rating: 4.4, 
          reviews: 180 
        },
        { 
          id: 3, 
          name: 'SMARTPHONE', 
          imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/au/galaxy-s21/gallery/au-galaxy-s21-5g-g991-sm-g991bzaaats-368339758?$624_624_PNG$', 
          price: 20000, 
          originalPrice: 40000, 
          discount: 50, 
          quantity: 50, 
          rating: 4.7, 
          reviews: 500 
        },
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
