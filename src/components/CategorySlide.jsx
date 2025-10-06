import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "./style/category.css";

const CategorySlide = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={false}
        className="mySwiper"
      >
        <SwiperSlide className="swiperSlide2">All</SwiperSlide>
        <SwiperSlide className="swiperSlide2">Combos</SwiperSlide>
        <SwiperSlide className="swiperSlide2">Pizza</SwiperSlide>
        <SwiperSlide className="swiperSlide2">Slide 3</SwiperSlide>
        <SwiperSlide className="swiperSlide2">Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default CategorySlide;
