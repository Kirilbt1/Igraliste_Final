
// Carousel.tsx
import React, { useState } from "react";
import "./SliderHome.css";

const SliderHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 2) % 2);
  };


  const slides = [
    {
      imgSrc: "../images/Home1.png",
      slideTxt: "  Lorem, ipsum dolor.",
      slidePrice: "900 денари",
    },
    {
      imgSrc: "../images/zshdane1.png",
      slideTxt: "Црвена ташна",
      slidePrice: "1300 денари",
    },
  ];

  return (
    <div className="slider">
      <div className="wrapper">
        <img src={slides[currentSlide].imgSrc} alt="" className="slider-img"/>
        <div className="text-slider">{slides[currentSlide].slideTxt}</div>
        <div className="price-slider">{slides[currentSlide].slidePrice}</div>
      </div>
      <div className="slider-buttons">
        <img
          src="../images/homeStrelkaLeva.png"
          alt=""
          onClick={prevSlide}
          className=""
        />
        <img
          src="../images/home-desna.png"
          alt=""
          onClick={nextSlide}
          className=""
        />
      </div>
    </div>
  );
};

export default SliderHome;
