import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MiddleNav.css'; // Custom styles
import { setUserDetails, clearUserDetails } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function MiddleNav() {

  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails);
  console.log('userDetails',userDetails);
  


 const navigate = useNavigate()
  const cartItemCount = 3;
  const wishlistItemCount = 2;
  const [search,setSearch] =useState('')
  const handleLogout = () => {
    dispatch(clearUserDetails());

    localStorage.removeItem('Tokens');
    // window.location.reload();
    navigate('/')
  };
  const handleSearch =async()=>{
navigate(`/allproducts?search=${search}`)

  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light middle-nav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="logo.png" className="logo" alt="Logo" />
        </Link>
        <form className="search-bar mx-auto d-none d-md-flex" onSubmit={handleSearch} >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' onChange={(e)=>setSearch(e.target.value)} />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="nav-actions ms-auto">
          <Link to="/cart" className="nav-icon-link" title="Cart">
            <i className="fas fa-shopping-cart"></i>
            {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
          </Link>
          {userDetails ? (
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
            <Link to="/login" className="btn login-btn"><i className="fa-solid fa-arrow-right-to-bracket"></i></Link>
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
