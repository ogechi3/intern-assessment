import React from 'react'
import burger from '../../assets/Group 845.png'
import fish from '../../assets/Group 859.png'
import pancake from '../../assets/Group 860.png'
import salad from '../../assets/Group 861.png'
import chicken from '../../assets/Group 862.png'
import adds from '../../assets/Ads.png'
import fruitypankake from '../../assets/Group 863.png'
import rice from '../../assets/Group 864.png'
import pasta from '../../assets/Group 865.png'
import tomatoes from '../../assets/image 27.png'
import beef from '../../assets/image 21.png'
import onions from '../../assets/image 28.png'
import lettuce from '../../assets/image 20.png'
import './Menu.css'
import chef from '../../assets/portrait-happy-male-chef-dressed-uniform 1.png'


const Menu = () => {
   return (
     <div className="menu">
       <div>
         <h2>Simple and tasty recipes</h2>
         <p>
           Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
         </p>
       </div>
       <div className="menu-img">
         <img src={burger} alt="burger-img" />
         <img src={fish} alt="fish-img" />
         <img src={pancake} alt="pankage-img" />
         <img src={salad} alt="salad-img" />
         <img src={chicken} alt="chicken-img" />
         <img src={adds} alt="adds-img" />
         <img src={fruitypankake} alt="fruity-img" />
         <img src={rice} alt="rice-img" />
         <img src={pasta} alt="pasta-img" />
       </div>
       <div className="section">
         <div>
           <h1>Everyone can be a chef in their own kitchen</h1>
           <p>
             Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
             minim{" "}
           </p>
           <button className="heaader-end">
             <a href="/">Learn More</a>
           </button>
         </div>

         <div className="images">
           <div className="">
             <img src={tomatoes} alt="tomatoes-img" className="img-1" />
             <img src={beef} alt="beef-img" className="img-2" />
             <img src={onions} alt="onions-img" className="img-3" />
             <img src={lettuce} alt="lettuce-img" className="img-4" />
           </div>
           <img src={chef} alt="chef-img" className="background-img" />
         </div>
       </div>
     
     </div>
   );
}

export default Menu
