import React from 'react'
import FooterPart from '../FooterPart/FooterPart';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <FooterPart />
      <div>
        <h1>Foodieland</h1>
        <div className="footer-top">
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>

          <ul>
            <li>Home</li>
            <li>Recipe</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className="footer-down">
        <p>
          © 2020 Flowbase. Powered by <span style={{
            color:'pink'
          }}>Webflow</span>{" "}
        </p>
        <div className="social-icons">
          <FaFacebookF className="icons" />
          <FaTwitter className="icons" />
          <FaInstagram className="icons" />
        </div>
      </div>
    </div>
  );
}

export default Footer
