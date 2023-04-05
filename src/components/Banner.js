import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./leyouts/Container";
import Images from "./leyouts/Images"

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 
  };
  return (
    <Container>
        <div>
           <Slider {...settings}>
            <div>
              <Images  imgsrc='images/banner.png'/>
            </div>
            <div>
              <Images  imgsrc='images/banner.png'/>
            </div>
            <div>
              <Images  imgsrc='images/banner.png'/>
            </div>
        </Slider>
       </div>
    </Container>
   
   
    
  );
};

export default Banner;
