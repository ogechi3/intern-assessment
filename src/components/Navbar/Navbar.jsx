import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>
          Foodieland <span className="dot">.</span>
        </h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#recipe">Recipe</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
        </ul>
        <div className="social-icons">
          <FaFacebookF className="icons" />
          <FaTwitter className="icons" />
          <FaInstagram className="icons" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar
