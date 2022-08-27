import  styled  from 'styled-components';
import { media } from '../../styles/responsive'

export const StyledPricingCard = styled.div`

    .pricingCardThumbnail{
        overflow: hidden;
        margin-bottom: 21px;
        
        .thumbnail{
            position: relative;
            overflow: hidden;
            max-width: 270px;
            max-height: 270px;
            width: 100%;
            height: 100%;

            &:hover{
            .pricingAction{
                    opacity: 1;
                    bottom: 10px;
                }
                .pricingActionBounce{
                    opacity: 1;
                    bottom: 50%;
                }
                .hoverImage{
                    opacity: 1;
                    transform: scale(1.1);
                }
            }
            
            
            .mainImage{
                transition: opacity .8s ease;
                img{
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }
            
            }
            .hoverImage{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                transform: translateZ(0);
                transition: opacity .8s ease,transform 1.1s cubic-bezier(.15,.75,.5,1);
                img{
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }
            }
        }
        .pricingAction{
            position: absolute;
            bottom: -10px;
            right: 10px;
            left: 10px;
            z-index: 3;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: all .3s ease;
            .pricingActionBTN{
                pointer-events: auto;
                margin: 0 5px;
                display: flex;
                align-content: center;
                justify-content: center;
                align-items: center;
                position: relative;
                
                .pricingActionLink{
                    display: inline-flex;
                    align-content: center;
                    justify-content: center;
                    align-items: center;
                    background-color: #fff;
                    color: #000;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    padding: 0!important;
                    transition: all .25s cubic-bezier(.645,.045,.355,1);
                    svg{
                        width: 18px;
                        height: 16px;
                    }
                     &:hover{
                        background-color: #E1927F;
                        box-shadow: 0 0 0 0.2rem #E1927F;
                        color: #fff;
                        .hoverLink{
                            visibility: visible;
                            margin-top: 0;
                        }
                    }
                }
                .hoverLink{
                    padding: 7px 10px;
                    font-size: 14px;
                    line-height: 14px;
                    border-radius: 3px;
                    position: absolute;
                    bottom: 100%;
                    left: 50%;
                    background-color: #000;
                    color: #fff;
                    visibility: hidden;
                    white-space: nowrap;
                    transform: translateX(-50%);
                    box-shadow: 4px 4px 8px rgb(0 0 0 / 30%);
                    transition: all .25s cubic-bezier(.645,.045,.355,1);
                }
               
                
            }
            
        }
        .pricingActionBounce{
            position: absolute;
            bottom: 70%;
            left: 10px;
            right: 10px;
            display: flex;
            justify-content: center;
            z-index: 4;
            opacity: 0;
            transition: all .3s ease;
            a{
                padding: 0 25px;
                color: #000;
                background-color: #fff;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 45px;
                line-height: 43px;
                border-radius: 23px;
                transition: all .25s cubic-bezier(.645,.045,.355,1);
                &:hover{
                    background-color: #E1927F;
                    box-shadow: 0 0 0 0.2rem #E1927F;
                    color: #fff;
                }
            }
        }
    }
    .pricingCardInfo{
        padding-bottom: 20px;
        text-align: center;
        .category{
            margin-bottom: 3px;
            a{
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: .5px;
                line-height: 24px;
                font-weight: 500;
                color: #9b9b9b;
                display: block;
            }
        }
        .title{
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5em;
            display: inline;
            a{
                color: #000;
                ${media.down("sm")}{
                font-size: 14px;
                line-height: 21px;
                
                }
            }
        }
        .price{
                margin-top: 6px;
            span{
                color: #e1927f;
                font-size: 16px;
            }
        }
    }
`