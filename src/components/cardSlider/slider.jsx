import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import { CardSliderData } from './cardSliderData';
import Card from './card';
import { StyledCard } from './styles';



export const Slider = () => {
  return (
    <StyledCard>
        <Swiper
            breakpoints={{
            // when window width is >= 640px
            320: {
            width: 320,
            slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
            width: 768,
            slidesPerView: 2,
            },
            }}
            loop={true}
            slidesPerView={5}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
        >
                { CardSliderData.map((props,i)=>{
                    const {title,description,subTitle,image,linkName} = props
                    return(
                        <SwiperSlide key={i}>
                            <Card  title={title} description={description} subTitle={subTitle} image={image} linkName={linkName} />
                        </SwiperSlide>

                    )
                })}
        </Swiper>
    </StyledCard>
  );
}


