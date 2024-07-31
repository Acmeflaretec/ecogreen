import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MiddleNav from '../components/MiddleNav';
import { FaShoppingCart, FaPlus, FaMinus, FaTrash, FaReceipt, FaArrowLeft } from 'react-icons/fa';

function Cart() {
  const initialCartItems = [
    { id: 1, name: 'Charcoal Enhanced Bamboo Toothbrush', imageUrl: 'https://img.freepik.com/premium-photo/eco-friendly-bamboo-toothbrush-pastel-background-zero-waste-life-without-plastic_223515-200.jpg?w=996', price: 120, quantity: 1 },
    { id: 2, name: 'Bamboo Toothbrush (White)', imageUrl: 'https://img.freepik.com/free-photo/top-view-toothbrushes-towels_23-2148678027.jpg?w=826&t=st=1720514150~exp=1720514750~hmac=d12b18a24d3805634f531efeebf4641f623175b2449f1117084539d439e22e35', price: 150, quantity: 2 },
    { id: 3, name: 'Bamboo Tongue Cleaner', imageUrl: 'https://img.freepik.com/free-photo/eco-friendly-environment-bamboo-tube-straws_23-2148768567.jpg?t=st=1720514232~exp=1720517832~hmac=62cd94a2d5614c27c2c97a3235759bf284823b8b6df313938850f4dd238eb4fe&w=1060', price: 180, quantity: 1 },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (itemId, operation) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === itemId
          ? {
              ...item,
              quantity:
                operation === 'increment'
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = itemId => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.id !== itemId)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + (typeof item.price === 'number' ? item.price * item.quantity : 0),
    0
  );

  const discount = 300;
  const deliveryCharges = 300;

  const totalBeforeDiscount = subtotal;
  const totalAfterDiscount = totalBeforeDiscount - discount + deliveryCharges;

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <MiddleNav />
      
      <div className="container my-5 flex-grow-1">
        <h1 className="text-primary mb-4 text-center fw-bold">
          <FaShoppingCart className="me-2" /> Your Shopping Cart
        </h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <img src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?w=740&t=st=1720516789~exp=1720517389~hmac=7b47b4f9e9c2f2e6ad5f1c9c9e4b4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4" alt="Empty Cart" className="img-fluid mb-4" style={{maxWidth: '300px'}} />
            <p className="text-muted mb-4 fs-5">Your cart is empty</p>
            <Link to="/allproducts" className="btn btn-primary btn-lg">
              <FaArrowLeft className="me-2" />Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8">
              {cartItems.map(item => (
                <div key={item.id} className="card mb-4 border-0 shadow-sm rounded-3 overflow-hidden hover-shadow transition">
                  <div className="row g-0">
                    <div className="col-md-3 p-3 d-flex align-items-center justify-content-center bg-light">
                      <img
                        src={item.imageUrl}
                        className="img-fluid rounded-3"
                        alt={item.name}
                        style={{ maxHeight: '150px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body p-4">
                        <h5 className="card-title text-primary mb-3">{item.name}</h5>
                        <div className="d-flex align-items-center mb-3">
                          <p className="card-text fw-bold mb-0 me-3 fs-4">₹{typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}</p>
                          <span className="text-muted text-decoration-line-through small me-2">₹999</span>
                          <span className="bg-success-subtle">70% off</span>
                        </div>
                        <div className="d-flex align-items-center flex-wrap">
                          <div className="btn-group me-3 mb-2" role="group">
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => handleQuantityChange(item.id, 'decrement')}
                              disabled={item.quantity === 1}
                            >
                              <FaMinus />
                            </button>
                            <button className="btn btn-outline-primary" disabled>
                              {item.quantity}
                            </button>
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => handleQuantityChange(item.id, 'increment')}
                            >
                              <FaPlus />
                            </button>
                          </div>
                          <button
                            className="btn btn-outline-danger mb-2"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <FaTrash className="me-2" /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm rounded-3 sticky-top" style={{top: '20px'}}>
                <div className="card-body p-4">
                  <h5 className="card-title text-primary mb-4 fw-bold">
                    <FaReceipt className="me-2" />Order Summary
                  </h5>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Discount:</span>
                      <span className="text-success">-₹{discount.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Delivery Charges:</span>
                      <span>₹{deliveryCharges.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                    <span>Total:</span>
                    <span>₹{totalAfterDiscount.toFixed(2)}</span>
                  </div>
                  <Link to="/checkout" className="btn btn-primary btn-lg w-100 mb-3">
                    Proceed to Checkout
                  </Link>
                  <Link to="/allproducts" className="btn btn-outline-secondary w-100">
                    <FaArrowLeft className="me-2" />Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default Cart;