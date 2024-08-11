import React from 'react'
import breakfast from '../../assets/Group 836 (1).png'
import vegan from '../../assets/Group 837 (1).png'
import meat from '../../assets/Group 838 (1).png'
import dessert from '../../assets/Group 839.png'
import lunch from '../../assets/Group 840.png'
import chocolate from '../../assets/Group 841.png'
import './Categories.css'

const Categories = () => {
  return (
    <div className='categories' id='home'>
       <div className='categories-head'>
        <h2>Categories</h2>
        <button>
          View All Categories
        </button>

       </div>
       <div className='category-img'>
        <img src={breakfast} alt="breakfast-img" />
        <img src={vegan} alt="vegan-img" />
        <img src={meat} alt="meat-img" />
        <img src={dessert} alt="dessert-img" />
        <img src={lunch} alt="lunch-img" />
        <img src={chocolate} alt="chocolate-img" />
       </div>
      
    </div>
  )
}

export default Categories
