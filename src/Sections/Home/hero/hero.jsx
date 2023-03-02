import React from "react";
import { HeroSlider } from "../heroSlider/heroSlider";
import { StyledHero } from "./styles";


export const Hero = () => {
    return(
       <StyledHero>
        <HeroSlider />
       </StyledHero> 
    )
}