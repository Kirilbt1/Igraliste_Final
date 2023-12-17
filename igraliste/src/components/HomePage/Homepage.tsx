import React from 'react'
import "./HomePage.css"
import Carousel from '../Carousel/Carousel';

import SliderHome from './SliderHome';
import { Link } from 'react-router-dom';
import Circle from '../Circle/Circle';
const Homepage = () => {
  return (
    <>
    <Carousel/>
    <div className='home'>
      <div className='hero-section'>
        <img src="../images/Home1.png" alt="" className='hero-section-pic'/>
        {/* <Link to="/product-cards"> <Circle
              circleHeading="Valentines gal Kолекција"
              circleDescription="Погледни ги свежите љубовни парчиња"
              customCircleStyle={{
                position: "absolute",
                bottom: "-115px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "240px",
                height: "240px",
                flexShrink: 0,
                borderRadius: "120px",
                border: "1.247px solid var(--Black, #232221)",
                background:
                  "var(--Pink-gradient, linear-gradient(180deg, #ffdbdb 0.05%, #fdfdfd 93.1%, #fdfdfd 110.6%, #8a8328 152.03%)",
              }}
              
            /></Link> */}
      </div>
      <div className='section-two-home'>
        <h2 className='section-two-home' >Trendy парчиња во моментов</h2>
      <SliderHome/>
      </div>
      <div className='section-three-home'>
        <img src="../images/Home1.png" alt="" className='third-section-pic'/>
        {/* <Link to="/product-cards"> <Circle
              circleHeading="Valentines gal Kолекција"
              circleDescription="Погледни ги свежите љубовни парчиња"
              customCircleStyle={{
                position: "absolute",
                bottom: "-115px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "240px",
                height: "240px",
                flexShrink: 0,
                borderRadius: "120px",
                border: "1.247px solid var(--Black, #232221)",
                background:
                  "var(--Pink-gradient, linear-gradient(180deg, #ffdbdb 0.05%, #fdfdfd 93.1%, #fdfdfd 110.6%, #8a8328 152.03%)",
              }}
              
            /></Link> */}
      </div>
      <div className='section-fourth-home'>
        <img src="../images/Home1.png" alt="" className='fourth-section-pic'/>
        
      </div>
    </div>
    </>
  )
}

export default Homepage;

