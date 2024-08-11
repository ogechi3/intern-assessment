import React from "react";
import List from '../List/List';
import honey from '../../assets/Group 870.png'
import chips from '../../assets/Group 871.png'
import spicy from '../../assets/Group 873.png'
import mushroom from '../../assets/Group 873.png'
import './FoodInspo.css'

const FoodInspo = () => {
  return (
    <div className="heading-food" id="about">
      <div className="food-inspo-head">
        <h1>Try this delicious recipe to make your day</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <List />
      <div className="insta-img ">
        <img src={honey} alt="honey-img" />
        <img src={chips} alt="chips-img" />
        <img src={spicy} alt="spicy-img" />
        <img src={mushroom} alt="mushroom-img" />
      </div>
    </div>
  );
};

export default FoodInspo;
