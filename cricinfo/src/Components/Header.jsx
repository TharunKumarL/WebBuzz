import React from 'react';
import '../css/Header.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="path_to_logo" alt="Website Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/fixtures">FIXTURES & RESULTS</a></li>
          <li><a href="/players">PLAYERS & STAFF</a></li>
          <li><a href="/standings">STANDINGS</a></li>
          <li><a href="/blog">BLOG</a></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button type="submit">
        <i class="fa fa-search"></i> {/* Font Awesome icon */}
        </button>
      </div>
    </header>
  );
}

export default Header;
