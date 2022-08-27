import React from 'react';
import { StyledCategoriesSlider } from './styles';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Categories } from './categoriesData';
import { Card } from './categories';

export const CategoriesSlider = () => {
  return (
    <StyledCategoriesSlider>
       <Swiper
       breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween:15
            },
            575: {
            slidesPerView: 1,
            spaceBetween: 15
            },
            768: {
            slidesPerView: 3,
            },
            }}
        slidesPerView={3}
        spaceBetween={30}
        
        className="mySwiper"
      >
        {Categories.map((props,i) =>{
          const {image, title, number} = props
          return(
            <SwiperSlide key={i}>
              <Card image={image} title={title} number={number}/>
            </SwiperSlide>
          )
        })
        }
        
      </Swiper>
    </StyledCategoriesSlider>
  );
}



