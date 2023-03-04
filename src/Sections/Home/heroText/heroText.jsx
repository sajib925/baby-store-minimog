import React from "react";
import {Link} from "react-router-dom";
import { StyledHeroText } from "./styles";

const HeroText = ({title, descrition, btnLink, btn}) => {
  return (
    <StyledHeroText>
      <h1 className="title">{title}</h1>
      <p className="description">{descrition}</p>
      <div className="btn">
        <Link to={btnLink} className="btn__link">
          {btn}
        </Link>
      </div>
    </StyledHeroText>
  );
};

export default HeroText;
