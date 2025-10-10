import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "./style/category.css";

const categoryData = [
  {
    id: 1,
    category: "All",
  },
  {
    id: 2,
    category: "Combos",
  },
  {
    id: 3,
    category: "Pizza",
  },
  {
    id: 4,
    category: "Burgers",
  },
  {
    id: 5,
    category: "Lavash",
  },
];

const CategorySlide = (prop) => {
  const { handleClickCategory } = prop;
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={false}
        className="mySwiper"
      >
        {categoryData.map((item) => (
          <SwiperSlide
            onClick={() => handleClickCategory(item.category)}
            key={item.id}
            className="swiperSlide2"
          >
            {item.category}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategorySlide;
