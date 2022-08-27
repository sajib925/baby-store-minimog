import  styled  from 'styled-components';
import { media } from '../../styles/responsive';





export const StyledCta = styled.div`
    margin-bottom: 100px;
    .ctaSection{
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 30px;
        ${media.down("sm")}{
            flex-direction: column;
        }
        
        .thumbnail{
            overflow: hidden;
            width: 61%;
            ${media.down("sm")}{
                width: 100%;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all .75s cubic-bezier(0,0,.2,1);
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
        .ctaInfo{
            width: 35%;
                ${media.down("sm")}{
                    width: 100%;
                    text-align: center;
                }
            .h2{
                font-size: 50px;
                font-weight: 500;
                line-height: 1.34em;
                color: #000;
                ${media.down("sm")}{
                    font-size: 28px;
                }
            }
            .description{
                margin-top: 19px;
                font-size: 16px;
                line-height: 1.75;
                display: inline-block;
                color: #666;
                ${media.down("sm")}{
                    text-align: center;
                }
            }
        }
        .link{
            a{
                color: #000;
                position: relative;
                padding-bottom: 5px;
                &::after{
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #000;
                    transform-origin: left;
                    transform: scaleX(1) translateZ(1);
                    transition: transform .6s cubic-bezier(.165,.84,.44,1);
                }
                &:hover::after{
                    transform-origin: right;
                    transform: scaleX(0) translateZ(0);
                }
            }
        }
    }


`