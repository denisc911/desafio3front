import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2> Tus estadísticas de ahorro </h2>
      <Slider {...settings}>
        <div>
         <a><img src="https://via.placeholder.com/600x300?text=Slide+1" alt="Slide 1" />  </a> 
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Slide+2" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Slide+3" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
