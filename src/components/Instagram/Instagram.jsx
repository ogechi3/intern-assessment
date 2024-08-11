import React from 'react'
import post from '../../assets/Post.png'
import post2 from '../../assets/Post (1).png'
import post3 from '../../assets/Post (2).png'
import {FaInstagram} from 'react-icons/fa'
import './Instagram.css'
const Instagram = () => {
  return (
    <div className="insta-pages" id='about'>
      <div>
        <h1>Check out @foodieland on Instagram</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="insta-img">
        <img src={post} alt="post-img" />
        <img src={post2} alt="post2-img" />
        <img src={post3} alt="post2-img" />
        <img src={post} alt="post-img" />
      </div>
      
      <button >
        visit Our Instagram <FaInstagram />
      </button>
    </div>
  );
}

export default Instagram
