import React from 'react'
import friuts from '../../assets/Group 866.png'
import stake from '../../assets/Group 867.png'
import fried from '../../assets/Group 868.png'
import taco from '../../assets/Group 869.png'

const List = () => {
  return (
    <div className='insta-img'>
      <img src={friuts} alt="fruits-img" />
      <img src={stake} alt="stake-img" />
      <img src={fried} alt="fried-img" />
      <img src={taco} alt="taco-img" />
    </div>
  );
}

export default List
