import React from "react";
import {Autoplay, Pagination, Navigation, EffectFade} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {StyledSlider} from "./style";
import {Wrapper} from "../../../components/wrapper/wrapper";
import HeroText from "../HeroText/HeroText";

export const HeroSlider = () => {
  return (
    <StyledSlider>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
      >
        <SwiperSlide>
          <div className="image1">
            <Wrapper>
              <div className="hero__text">
                <div className="">
                  <HeroText
                    title="Welcome to Tiny World"
                    descrition="Trusted and loved by parents."
                    btnLink="/"
                    btn="Shop Now"
                  />
                </div>
              </div>
            </Wrapper>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image2">
            <Wrapper>
              <div className="hero__text">
                <div className="">
                  <HeroText
                    title="Giggle Baby Stores"
                    descrition="Openwork knit sweater fall."
                    btnLink="/"
                    btn="Shop Now"
                  />
                </div>
              </div>
            </Wrapper>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image3">
            <Wrapper>
              <div className="hero__text">
                <div className="">
                  <HeroText
                    title="All your Baby needs"
                    descrition="Our baby stuffs are cute, affordable."
                    btnLink="/"
                    btn="Shop Now"
                  />
                </div>
              </div>
            </Wrapper>
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledSlider>
  );
};
