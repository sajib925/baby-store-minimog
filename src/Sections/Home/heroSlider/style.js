import styled from "styled-components";
import img1 from "../../../../public/image/heroSlider/h_baby_slide_01.jpg";
import img2 from "../../../../public/image/heroSlider/h_baby_slide_02.jpg";
import img3 from "../../../../public/image/heroSlider/h_baby_slide_03.jpg";

export const StyledSlider = styled.div`
  width: 100%;
  height: 700px;
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  .image1 {
    background-image: url(${img1});
    width: 100vw;
    height: 700px;
    object-fit: cover;
    
  }
  .image2 {
    background-image: url(${img2});
    width: 100%;
    height: 700px;
    object-fit: cover;
  }
  .image3 {
    background-image: url(${img3});
    width: 100%;
    height: 700px;
    object-fit: cover;
    background-size: cover;
  }
  .hero__text{
    transform: translateY(50%);

  }
`;
