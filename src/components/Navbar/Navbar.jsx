import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Foodieland <span className='dot'>.</span></h1>
        <ul>
          <li>Home</li>
          <li>Recipe</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>About Us</li>
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
