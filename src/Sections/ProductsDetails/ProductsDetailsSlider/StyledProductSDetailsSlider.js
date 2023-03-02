import styled from "styled-components";

const StyledProductsDetailsSlider = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row-reverse;
.swiper-wrapper{
    width: 100%;
    height: 100px;
}
.mySwiper{
    width: 70px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    &:first-child{
        width: 65px;
        height: 100px;
    }
}

`;

export default StyledProductsDetailsSlider