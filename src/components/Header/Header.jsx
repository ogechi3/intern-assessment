import React from 'react'
import mask from '../../assets/Mask Group.jpg'
import scroll from '../../assets/image 14.png'
import timer from '../../assets/Timer.png'
import forkknife from '../../assets/ForkKnife.png'
import badge from '../../assets/Badge.png'
import man from '../../assets/Ellipse 2.png'
import './Header.css'

import {FaRegPlayCircle} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <button className="spices">
          <img src={scroll} alt="sroll" />
          <p >Hot Recipes</p>
        </button>
        <h1>Spicy delicious chicken wings</h1>
        <p className="header-text">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
        <div className="time">
          <button>
            <img src={timer} alt="timer" />
            <p>30 minutes</p>
          </button>
          <button>
            <img src={forkknife} alt="forkknife" />
            <p>Chicken </p>
          </button>
        </div>
        <div>
          <div className="header-end">
            <div className="header-end_man">
              <img src={man} alt="man" />

              <div>
                <h4>John Smith</h4>
                <p>15 March 2022</p>
              </div>
            </div>
            <button>
              View Recipes <FaRegPlayCircle />
            </button>
          </div>
        </div>
      </div>
      <div className="badge">
        <img src={badge} alt="badge" />
      </div>
      <div>
        <img src={mask} alt="mask-img" />
      </div>
    </div>
  );
}

export default Header
