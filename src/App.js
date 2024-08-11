import './App.css';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Menu from './components/Menu/Menu';
import Instagram from './components/Instagram/Instagram';
import FoodInspo from './components/FoodInspo/FoodInspo'


import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Categories />
      <Menu />
      <Instagram />
     
      <FoodInspo/>
  
      <Footer />
      
    </div>
  );
}

export default App;
