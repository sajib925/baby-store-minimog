import React from 'react';
import { Autoplay,Pagination, Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../../../public/image/heroSlider/h_baby_slide_01.jpg';
import img2 from '../../../../public/image/heroSlider/h_baby_slide_02.jpg';
import img3 from '../../../../public/image/heroSlider/h_baby_slide_03.jpg'
import { StyledSlider } from './style';
import { Wrapper } from '../../../components/wrapper/wrapper';

export const HeroSlider = () => {
    return (
        <StyledSlider>
            <Swiper
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction:false
                }}
                modules={[ EffectFade, Autoplay,Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
    
            >
                <SwiperSlide>
                    {/* <div className="image1"></div> */}
                    <img src={img1} alt="" />
                    <Wrapper>
                        <h1 className='h1'>hello world</h1>
                    </Wrapper>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className="image2"></div> */}
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className="image3"></div> */}
                    <img src={img3} alt="" />
                </SwiperSlide>
            </Swiper>
        </StyledSlider>
        
  );
};