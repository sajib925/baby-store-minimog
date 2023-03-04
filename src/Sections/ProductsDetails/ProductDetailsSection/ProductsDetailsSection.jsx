import React from 'react'
import StyledProductsDetailsSection from './StyledProductsDetailsSection';
import ProductsDetailsSlider from '../ProductsDetailsSlider/ProductsDetailsSlider';
import { Wrapper } from '../../../components/wrapper/wrapper';
import { Link } from 'react-router-dom';
import {TbJewishStar} from "react-icons/tb"
import {FaRegEye} from "react-icons/fa"
import {AiOutlineSwap} from "react-icons/ai"
import {RiQuestionLine} from "react-icons/ri"
import {AiOutlineShareAlt} from "react-icons/ai"
import {FaShippingFast} from "react-icons/fa"
import {TiShoppingBag} from "react-icons/ti"
import img from "../../../images/all-product/product-trust-badge.webp"

const ProductsDetailsSection = () => {
  return (
    <StyledProductsDetailsSection>
      <Wrapper>
        <div className="inner__section">
          <div className="inner__section__left">
            <ProductsDetailsSlider />
          </div>
          <div className="inner__section__right">
            <div className="inner__section__right__wrapper">
              <div className="title__wrapper">
                <h1 className="h1">Olliella mushroom basket</h1>
                <div className="title__wrapper__wishlist">
                  <div className="title__wrapper__icon">
                    <TbJewishStar size={22} />
                  </div>
                  <Link className="title__wrapper__link" to="/">
                    Browse wishlist
                  </Link>
                </div>
              </div>
              <div className="price__wrap">
                <div className="price__wrap__pricing">
                  <bdi>
                    <span>$</span>17.00
                  </bdi>
                </div>
                <div className="price__wrap__rating">
                  ★★★★★
                  <Link to="#" className="price__wrap__review">
                    (0 reviews)
                  </Link>
                </div>
              </div>
              <div className="view__wrap">
                <FaRegEye />
                <span className="view__wrap__number">29</span>
                people are viewing this right now
              </div>
              <div className="entry__product">
                <div className="entry__product__quantity__wrapper">
                  <label className="entry__product__text">Quantity</label>
                  <div className="entry__product__quantity">
                    <input
                      type="text"
                      className="entry__product__quantity__input"
                      value="1"
                    />
                    <button className="entry__product__quantity__minus__btn">
                      -
                    </button>
                    <button className="entry__product__quantity__plus__btn">
                      +
                    </button>
                  </div>
                </div>
                <button className="entry__product__cart__btn">
                  Add To Cart
                </button>
                <button className="entry__product__buy__btn">Buy Now</button>
              </div>
              <div className="product__popup">
                <div className="product__popup__compare">
                  <AiOutlineSwap size={20} />
                  <span className="product__popup__compare__text">Compare</span>
                </div>
                <div className="product__popup__question">
                  <RiQuestionLine size={20} />
                  <span className="product__popup__question__text">
                    Question
                  </span>
                </div>
                <div className="product__popup__share">
                  <AiOutlineShareAlt size={20} />
                  <span className="product__popup__share__text">Share</span>
                </div>
              </div>
              <div className="meta__shipping">
                <div className="meta__shipping__delivery">
                  <div className="icon">
                    <FaShippingFast size={20} />
                  </div>
                  <div className="label">Estimated Delivery :</div>
                  <div className="value">16 - 23 Feb, 2023</div>
                </div>
                <div className="meta__shipping__return">
                  <div className="icon">
                    <TiShoppingBag size={20} />
                  </div>
                  <div className="label">Free Shipping & Returns :</div>
                  <div className="value">On all orders over $200.00</div>
                </div>
              </div>
              <div className="product__trust__badge">
                <div className="product__trust__badge__thumbnail">
                  <img
                    src={img}
                    alt="payment card"
                    className="product__trust__badge__img"
                  />
                </div>
                <p className="product__trust__badge__text">
                  Guaranteed safe & secure checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </StyledProductsDetailsSection>
  );
}

export default ProductsDetailsSection