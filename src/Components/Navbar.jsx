// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a className="navbar-brand" href="#">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart" className="logo" />
                    
                </a>

                <form className="search-bar">
                    <input 
                        className="search-input" 
                        type="search" 
                        placeholder="Search for Products, Brands and More" 
                        aria-label="Search" 
                    />
                </form>

                <div className="navbar-icons">
                    <a className="nav-link login-link" href="#">Login</a>
                    <a className="nav-link" href="#">Become a Seller</a>
                    <a className="nav-link" href="#">More</a>
                    <a className="nav-link cart-link" href="#">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png" alt="Cart" className="cart-icon"/>
                        Cart
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
