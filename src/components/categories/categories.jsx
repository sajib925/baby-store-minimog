import React, { Children } from 'react'
import { Link } from 'react-router-dom';

export const Card = ({image,title,number}) => {
  return (
    

        <div className="card">
            <div className="thumbnail">
                <img src={image} alt="" />
            </div>
            <div className="categoriesInfo">
                <h5><Link to="/">{title} { number ? <sup> {number} </sup> : ''}</Link></h5>
            </div>
        </div>
    
  )
}

