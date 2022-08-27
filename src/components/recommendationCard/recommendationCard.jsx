import React from 'react';
import { Link } from 'react-router-dom';

export const RecommendationCard = ({image, title}) => {
  return (
    <div>
      <div className="card">
        <div className="thumbnail">
            <img src={image} alt="recommendation image" />
        </div>
        <div className="cardInfo">
            <h5>
                <Link to="/">{title}</Link>
            </h5>
        </div>
      </div>
    </div>
  );
}


