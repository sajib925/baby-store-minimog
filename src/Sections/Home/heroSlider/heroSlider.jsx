import React from "react";
import {Link} from "react-router-dom";
import {Wrapper} from "../../../components/wrapper/wrapper";
import {StyledSlider} from "./style";

// swiper
import {Autoplay, Pagination, Navigation, EffectFade} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
                  <h1 className="title">Welcome to Tiny World</h1>
                  <p className="description">Trusted and loved by parents.</p>
                  <div className="btn">
                    <Link to="#" className="btn__link">
                      Shop Now
                    </Link>
                  </div>
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
                  <h1 className="title">Giggle Baby Stores</h1>
                  <p className="description">Openwork knit sweater fall.</p>
                  <div className="btn">
                    <Link to="#" className="btn__link">
                      Shop Now
                    </Link>
                  </div>
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
                  <h1 className="title">All your Baby needs</h1>
                  <p className="description">
                    Our baby stuffs are cute, affordable.
                  </p>
                  <div className="btn">
                    <Link to="#" className="btn__link">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledSlider>
  );
};
