import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };
  
  const navigate = useNavigate();

  return (
    <nav className="navigation">
      
      <h1 className="logo" onClick={()=>{navigate('/')}}>कोडhub</h1>

      
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>

      {/* Links for large screens */}
      <div className={`nav-links ${isMobileMenuOpen ? "mobile-menu open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/docspage">CodeDocs</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <div className="search-container">
          <input className="search-input" type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div>
          {!isLoggedIn ? (
            <button onClick={() => navigate("/login")} className="login-btn">
              Login
            </button>
          ) : (
            <div className="profile-container">
              <button onClick={toggleDropdown} className="authButton">
                <i className="fa-solid fa-user fa-2x" style={{ color: "#74C0FC" }}></i>
              </button>
              {showDropdown && (
                <div onClick={() => { setShowDropdown(false) }} className="dropdown-menu">
                  <Link className="dropdown-item" to={'/myProfile'}>My Profile</Link>
                  <button onClick={handleLogout} className=" btn-logout dropdown-item">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
