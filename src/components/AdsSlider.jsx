import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "./style/styles.css";
import { Box, Typography } from "@mui/material";

const AdsSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Typography variant="h6" sx={{ marginLeft: "30px", color: "white" }}>
            Ice Creaem
          </Typography>
          <Box component={"img"} src="/ice-cream.webp"></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Typography variant="h6" sx={{ marginLeft: "30px", color: "white" }}>
            Ice Creaem
          </Typography>
          <Box component={"img"} src="/ice-cream.webp"></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Typography variant="h6" sx={{ marginLeft: "30px", color: "white" }}>
            Ice Creaem
          </Typography>
          <Box component={"img"} src="/ice-cream.webp"></Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AdsSlider;
