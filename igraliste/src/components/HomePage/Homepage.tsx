import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel'
import Circle from '../Circle/Circle';
import "./HomePage.css"
import SliderHome from './SliderHome';

const Homepage = () => {
  return (

    <div className="home">
      <Carousel />

      <div className="hero-section">
        <div className="image-and-circle-wrapper">
          <img className="hero-section-pic" src="../images/Home1.png" alt="" />
        
           <Link to="/Product"> <Circle
              header="Valentines gal Kолекција"
              desctiption="Погледни ги свежите љубовни парчиња"
              customStyle={{
                position: "absolute",
                bottom: "-115px",
               
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "240px",
                height: "240px",
                flexShrink: 0,
                // borderRadius: "120px",
                // border: "1.247px solid var(--Black, #232221)",
                background:
                  "var(--Pink-gradient, linear-gradient(180deg, #ffdbdb 0.05%, #fdfdfd 93.1%, #fdfdfd 110.6%, #8a8328 152.03%)",
              }}
              
            /></Link>
        </div>
       </div>
    </div>
  )
}

export default Homepage;
