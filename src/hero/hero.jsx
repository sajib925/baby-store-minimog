import React from "react";
import { HeroSlider } from "../components/heroSlider/heroSlider";
import { StyledHero } from "./styles";


export const Hero = () => {
    return(
       <StyledHero>
        <HeroSlider />
       </StyledHero> 
    )
}