import React from 'react'
import fresh from '../../assets/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png'
import plate from '../../assets/Photo-plate.png'
import './FooterPart.css'
const FooterPart = () => {
  return (
    <div className="footer">
      <h1>Deliciousness to your inbox</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
      </p>

      <div className="footer-address">
        <img src={fresh} alt="fresh-img" />
        <div footer-form>
          <form>
            <input
              type="text"
              placeholder="Your email address"
              className="footer-input"
            />
          </form>
          
        </div>
        <img src={plate} alt="plate-img" />
      </div>
    </div>
  );
}

export default FooterPart
