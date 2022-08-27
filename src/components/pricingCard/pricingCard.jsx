import React from 'react'
import { StyledPricingCard } from './styles'
import { Link } from 'react-router-dom'
import { AiOutlineStar } from 'react-icons/ai'
import { AiOutlineSwap } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'

export const PricingCard = ({mainImg, hoverImg, category, title, price}) => {
  return (
    <StyledPricingCard>
        <div className="card">
                <div className="pricingCardThumbnail">
                    <div className="thumbnail">
                        <Link to="/">
                            <div className="mainImage">
                                <img src={mainImg} alt="pricing image" />
                            </div>
                            <div className="hoverImage">
                                <img src={hoverImg} alt="" />
                            </div>
                        </Link>
                         <div className="pricingAction">
                        <div className="wishlistBTN pricingActionBTN">
                            <Link to="/" className='pricingActionLink'>
                                    <AiOutlineStar />
                                <span className="hoverLink">Add to wishlist</span>
                            </Link>
                        </div>
                        <div className="compareBTN pricingActionBTN">
                            <Link to="/" className='pricingActionLink'>
                                    <AiOutlineSwap />
                                <span className="hoverLink">Compare</span>
                            </Link>
                        </div>
                        <div className="QuickViewBTN pricingActionBTN">
                            <Link to="/" className='pricingActionLink'>
                                    <BsEye />
                                <span className="hoverLink hover">Quick View</span>
                            </Link>
                        </div>
                    </div>
                    <div className="pricingActionBounce">
                        <Link to="/">
                            <span>Add to cart</span>
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="pricingCardInfo">
                    <div className="category">
                        <Link to="/">{category}</Link>
                    </div>
                    <h3 className="title">
                        <Link to="/">{title}</Link>
                    </h3>
                    <div className="price">
                        <span>{price}</span>
                    </div>
                </div>
        </div>
    </StyledPricingCard>
  )
}
