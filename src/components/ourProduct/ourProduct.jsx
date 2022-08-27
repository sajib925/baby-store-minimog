import React from 'react'
import { StyledOurProduct } from './styles'
import { Link } from 'react-router-dom';

export const OurProduct = () => {
  return (
    <StyledOurProduct>
        <div className="image">
             <div className="info">
                <h2 className="h2">
                    Baby Dreamy Bedroom.
                </h2>
                <p className="description">
                    We believe in crafting pieces where sustainability and style go hand in hand. 
                </p>
                <div className="btn">
                    <Link to="/"><span>Shop Now</span></Link>
                </div>
            </div>
        </div>
        <div className="mobileInfo">
            <h2 className="h2">
                Baby Dreamy Bedroom.
            </h2>
            <p className="description">
                We believe in crafting pieces where sustainability and style go hand in hand. 
            </p>
            <div className="btn">
                <div className="btnWrapper">
                    <Link to="/"><span>Shop Now</span></Link>
                </div>
            </div>
        </div>
       
    </StyledOurProduct>
  )
}
