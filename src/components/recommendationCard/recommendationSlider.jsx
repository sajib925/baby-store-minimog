import React from 'react';
import { StyledRecommendationSlider } from './styles';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CardData } from './cardData';
import { RecommendationCard } from './recommendationCard';

export const RecommendationSlider = () => {
  return (
    <StyledRecommendationSlider>
        <Swiper
            breakpoints={{
                0:{
                slidesPerView: 1,
                spaceBetween:15
                },
                640: {
                slidesPerView: 1,
                spaceBetween: 15
                },
                768: {
                slidesPerView: 4,
                },
            }}
            slidesPerView={4}
            spaceBetween={30}
            
            className="mySwiper"
        >
            {CardData.map((props,i) => {
                const {image, title} = props
                return(
                   <SwiperSlide key={i}>
                        <RecommendationCard image={image} title={title} />
                   </SwiperSlide> 
                )
            })}
        </Swiper>
    </StyledRecommendationSlider>
  );
}


