import React, {useState} from "react";
import StyledProductsDetailsSlider from "./StyledProductSDetailsSlider";
import img1 from "../../../../public/image/pricingCard/pricing_card_1_1.png";
import img2 from "../../../../public/image/pricingCard/pricing_card_1_2.png";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {FreeMode, Navigation, Thumbs} from "swiper";

const ProductsDetailsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <StyledProductsDetailsSlider>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            src={img2}
            style={{width: "100%", height: "100%", objectFit: "cover"}}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            style={{width: "100%", height: "100%", objectFit: "cover"}}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper__slide">
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            style={{width: "68px", height: "90px"}}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            style={{width: "68px", height: "90px"}}
          />
        </SwiperSlide>
      </Swiper>
    </StyledProductsDetailsSlider>
  );
};

export default ProductsDetailsSlider;
