// UI Component
import React from 'react';
import './header.css';

// component import 

// asset imports
import logo_image from './../../assets/logo/logo_transparent.png';


const Header = () => {
    // to activate toggle behaviour
    return (
        <div className="header-wrapper">
            <div className="header-container">
                <div className="left-section">
                    <div className="logo-container">
                        <img src={logo_image} alt="Logo" />
                    </div>
                    </div>
                <div className="right-section">
                    <div className="login-signup-container">
                    <button className="navbar-login-btn">LOGIN</button>
                    <button className="navbar-signup-btn">SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;