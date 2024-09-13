import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">CRICKET</div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#tournaments">Tournaments</a></li>
            <li><a href="#register">Register</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="action-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
