import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import '../Home.scss'

export default function HomeSlide() {
  const sliderData = useSelector(state => state.slider);
  console.log(sliderData);
  const settings = {
    dots: false,
    arrows: false, 
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className='HomeSlide'>
      <Slider {...settings}>
        {sliderData.map(elem => {
          return (
            <div className="slide-itemm" key={elem.id}>
              <img src={elem.image} alt="" loading='lazy' />
              <div className="slide-content">
                <h1>{elem.title}</h1>
                <p>{elem.desc}</p>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
