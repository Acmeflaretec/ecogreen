import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-section">
            <h5 className="footer-title">Shop</h5>
            <p className="footer-text">
              <Link to="/new-arrivals" className="footer-link">New Arrivals</Link><br />
              <Link to="/bestsellers" className="footer-link">Bestsellers</Link><br />
              <Link to="/sale" className="footer-link">Sale</Link><br />
              <Link to="/collections" className="footer-link">Collections</Link>
            </p>
          </Col>
          <Col lg={4} md={6} className="footer-section">
            <h5 className="footer-title">Customer Service</h5>
            <p className="footer-text">
              <Link to="/contact" className="footer-link">Contact Us</Link><br />
              <Link to="/shipping-returns" className="footer-link">Shipping & Returns</Link><br />
              <Link to="/size-guide" className="footer-link">Size Guide</Link><br />
              <Link to="/faq" className="footer-link">FAQ</Link>
            </p>
          </Col>
         
          <Col lg={4} md={6} className="footer-section">
            <h5 className="footer-title">Stay Connected</h5>
            <p className="footer-text">Subscribe to our newsletter for exclusive offers and updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaPinterestP /></a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0">&copy; {new Date().getFullYear()} Eco Green. All rights reserved.</p>
            </Col>
           
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
