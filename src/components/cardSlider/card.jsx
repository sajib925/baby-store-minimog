import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({title,description,subTitle,image,linkName}) => {
  return (
        <div className="cardSlider">
            <p className="icons">
                ★★★★★
            </p>
            <h3 className="h3">{title}</h3>
            <p className="description">{description}</p>
            <h4 className="h4">{subTitle}</h4>
            <div className="cardImg">
                <img src={image} alt="slider image"/>
            </div>
            <Link to='/'>{linkName}</Link>
        </div>
  );
}

export default Card;
