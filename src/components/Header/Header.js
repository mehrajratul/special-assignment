import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = () => {
    return (
        <div className="header">  
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/services">Servies</Link>
                <Link to="/review">Reviews</Link>
                <Link to="/about">About us</Link>
            </nav>
        </div>
    );
};

export default Header;