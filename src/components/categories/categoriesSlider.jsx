import React from "react";
import {StyledCategoriesSlider} from "./styles";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Categories} from "./categoriesData";
import {Card} from "./categories";

export const CategoriesSlider = () => {
  return (
    <StyledCategoriesSlider>
      <Swiper
        data-aos="fade-down"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
      >
        {Categories.map((props, i) => {
          const {image, title, number} = props;
          return (
            <SwiperSlide key={i} className="">
              <Card image={image} title={title} number={number} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledCategoriesSlider>
  );
};
