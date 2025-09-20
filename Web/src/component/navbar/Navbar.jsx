import React, { useState } from "react";
import "./Navbar.css"; // Create a CSS file based on the styles below
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/store?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        
       <img src="https://zanthiumtechnosoft.com/img/logo11.png" style={{width:"171px", marginLeft:"201px"}}alt="" />
      </div>

      <div className="cart-icon">
       
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <form className="search-box" style={{marginRight:"135px"}} onSubmit={handleSearch}>
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Navbar;
