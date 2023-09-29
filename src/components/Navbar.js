import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          News<span>Quake</span>
        </Link>
        <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="toggle-line"></div>
          <div className="toggle-line"></div>
          <div className="toggle-line"></div>
        </div>
        <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link className="nav-link navbar-item" to="/">
              <FaHome /> Home
            </Link>
          </li>

          <li
            className={`nav-item dropdown ${isDropdownOpen ? 'open' : ''}`}
            onMouseEnter={toggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <span className="dropdown-label">Categories</span>
            <div className="dropdown-menu">
              <ul>
                <li onClick={toggleMenu} className="nav-item1">
                  <Link className="nav-link" to="/category/politics">
                    Politics
                  </Link>
                </li>
                <li onClick={toggleMenu} className="nav-item2">
                  <Link className="nav-link" to="/category/sports">
                    Sports
                  </Link>
                </li>
                <li onClick={toggleMenu} className="nav-item3">
                  <Link className="nav-link" to="/category/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li onClick={toggleMenu} className="nav-item4">
                  <Link className="nav-link" to="/category/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link navbar-item" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
