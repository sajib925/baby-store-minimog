import React from 'react'
import img from '../../../public/image/cta/h_baby_cta_01.jpg'
import { StyledCta } from './styles'
import { Link } from 'react-router-dom';

export const Cta = () => {
  return (
    <StyledCta>
        <section className="ctaSection">
            <div className="thumbnail">
                <img src={img} alt="" />
            </div>
            <div className="ctaInfo">
                <h2 className="h2">
                    The best thing you need is here
                </h2>
                <p className="description">
                    We believe in crafting pieces where sustainability and style go hand in hand. Made from materials like recycled cashmere and sustainable alpaca.
                </p>
                <div className="link">
                    <Link to='/'>
                        Shop Collection
                    </Link>
                </div>
            </div>
        </section>
    </StyledCta>
  )
}
