import React from 'react';
import './ProductCard.css';  // Assuming you have a CSS file for styling

const ProductCard = () => {
  return (
    <div className="product-container">
      <h2>Premium Products</h2>
      <div className="product-cards">
        <div className="card">
          <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/z/z/s/-original-imagttjpr7vphrks.jpeg?q=70" alt="TCL QLED TV" />
          <h3>Best of QLED TVs</h3>
          <p>₹7,000 Off on Exch*</p>
        </div>

        <div className="card">
          <img src="https://rukminim2.flixcart.com/image/612/612/l26hdow0/speaker/mobile-tablet-speaker/3/9/l/jblpbencoreessin-jbl-original-imagdhyruwqhuwmg.jpeg?q=70" alt="Speakers & Soundbars" />
          <h3>Speakers & Soundbars</h3>
          <p>Shop Now</p>
        </div>

        <div className="card">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/w/g/r/-original-imagxp8utj55gjnk.jpeg?q=70" alt="Gamepads" />
          <h3>Gamepads</h3>
          <p>From ₹699</p>
        </div>

        <div className="card">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/gamepad/l/v/4/elite-ops-wireless-with-type-c-charging-evofox-original-imah5muhb7hpsqfg.jpeg?q=70" alt="Smart Wearable" />
          <h3>Premium Smart Wearables</h3>
          <p>From ₹2,799</p>
        </div>

        <div className="card">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/welding-machine/s/s/v/200-mag-mma-welder-flux-cored-wire-gasless-ac-220v-5-0-kva-igbt-original-imah3g6he6yc9ufc.jpeg?q=70" alt="Power Tools" />
          <h3>Power Tools</h3>
          <p>Up to 55% Off</p>
        </div>

        <div className="card special-offer">
          <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/p/h/o/-original-imah32rczr7yfggs.jpeg?q=70" alt="Nothing Phone" />
          <h3>CMF by Nothing Phone 1</h3>
          <p>From ₹12,999*</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
