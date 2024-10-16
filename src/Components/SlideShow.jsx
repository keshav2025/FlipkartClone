import React from 'react';
import Slider from "react-slick";
import './Slider.css';  // Custom styles

const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,  // Show the navigation arrows
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/32733e532e5f59e5.jpg?q=20" alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d279adec1e7093fc.jpeg?q=20" alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ef59fb90a107a29b.jpg?q=20" alt="Slide 3" className="slider-image" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

// Custom Next Arrow Component
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

// Custom Previous Arrow Component
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px" }}
      onClick={onClick}
    />
  );
};

export default SlideShow;
