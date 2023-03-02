import React from 'react';
import { BrandData } from '../components/brandData/brandData';
import { Slider }  from '../components/cardSlider/slider';
import { Cta } from '../components/cta/cta';
import { OurProduct } from '../components/ourProduct/ourProduct';
import { Wrapper } from '../components/wrapper/wrapper';
import { StyledHome } from './homeStyles';
import { CategoriesSlider } from '../components/categories/categoriesSlider';
import { RecommendationSlider } from '../components/recommendationCard/recommendationSlider';
import { PricingData } from './../components/pricingCard/pricingData';
import { PricingCard } from './../components/pricingCard/pricingCard';
import { OfferExpired } from '../components/priceOfferDate/OfferExpired';
import { Hero } from '../Sections/Home/hero/hero';


const Home = () => {
  return (
    
    <StyledHome>
        <Hero />
        <Wrapper>
          
          <section className="categoriesSection">
            <div className="header">
              <h2 className="h2">Top Categories</h2>
            </div>
            <CategoriesSlider />
          </section>
      
        </Wrapper>
          <div className="pricingSection">
            <Wrapper>
              <div className="header">
                <h2 className="h2">
                  Hot This Week
                </h2>
              </div>
              <div className="cardContainer">
                { PricingData.map((props, i) =>{
                  const {mainImg, hoverImg, category, title, price} =props
                  return(
                    <PricingCard key={i} mainImg={mainImg} hoverImg={hoverImg} category={category} title={title} price={price} />
                  )
                })}
              </div>
            </Wrapper>
          </div>

          

        <Wrapper>
          <Cta />

          <section className="recommendationSection">
              <div className="header">
                <h2 className="h2">
                  Recommendation
                </h2>
              </div>
              
          </section>
              <RecommendationSlider />

        </Wrapper>
          <section className="testimonialSection">
            <div className="header">
              <h2 className="h2">Our Lovely Customers</h2>
            </div>
            <div className="sliderContainer">
              <Slider />
            </div>
          </section>
        <Wrapper>
          <section className="brandSection">
            <div className="header">
              <h2 className="h2">
                Shop by Brands
              </h2>
            </div>
            <div className="brandContainer">
              {BrandData.map((props,i)=>{
                const {image}=props
                return(
                  <div className="brandImg" key={i}>
                    <img  src={image} alt="brand image" />
                  </div>
                )
              })

              }
            </div>
          </section>
          
          <OurProduct />
        </Wrapper>
        <OfferExpired />
    </StyledHome>

    
  
  );
}

export default Home;
