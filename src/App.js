import Navbar from './Components/Navbar';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Categories from './Components/Categories';
import SlideShow from './Components/SlideShow';
import ProductCard from './Components/ProductCard';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <SlideShow />
      <ProductCard />
      <Footer/>
    </div>
  );
}

export default App;
