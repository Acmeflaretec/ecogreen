import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MiddleNav.css'; // Custom styles

function MiddleNav() {
  const cartItemCount = 3;
  const wishlistItemCount = 2;
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add your logout logic here
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light middle-nav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="logo.png" className="logo" alt="Logo" />
        </Link>
        <form className="search-bar mx-auto d-none d-md-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="nav-actions ms-auto">
          <Link to="/" className="nav-icon-link" title="Cart">
            <i className="fas fa-shopping-cart"></i>
            {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
          </Link>
          {isLoggedIn ? (
            <div className="dropdown">
              <button className="profile-icon btn btn-secondary" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-user text-white"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="/allproducts">Allproducts</Link></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link to="/" className="btn login-btn"><i className="fa-solid fa-arrow-right-to-bracket"></i></Link>
          )}
        </div>
        <form className="search-bar mx-auto d-flex d-md-none mt-2">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default MiddleNav;
