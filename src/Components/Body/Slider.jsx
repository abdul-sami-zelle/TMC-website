import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import bn1 from '../Images/bn1.png'
import bn2 from '../Images/bn2.jpg'
import bn3 from '../Images/bn3.jpg'
import bn4 from '../Images/bn4.png'

// Import Link from react-router-dom
import { Link } from 'react-router-dom';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
     
        className="mySwiper"
      >
        <SwiperSlide>
        <Link to="/slide1">
          <div className="bgBlur" style={{
            backgroundImage:"url(../Images/bn1.png)"
          }}>
            <img src={bn1} alt="Slide 1" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/slide2">
        <img src={bn2} alt="Slide 2" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/slide3">
        <img src={bn3} alt="Slide 3" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/slide4">
        <img src={bn4} alt="Slide 4" />
        </Link>
      </SwiperSlide>
      </Swiper>
    </>
  );
}
