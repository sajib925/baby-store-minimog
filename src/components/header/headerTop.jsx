import React from 'react';
import { Link } from 'react-router-dom';
import  styled  from 'styled-components';
import { Wrapper } from '../wrapper/wrapper';
import Eng from '../../images/header-img/en-us.png'
import Fr from '../../images/header-img/fr.png'
import De from '../../images/header-img/de.png'
import { THEME } from './../../styles/theme';
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BiChevronDown} from 'react-icons/bi'
import { media } from './../../styles/responsive';

const StyledHeaderTop = styled.section`
    ${media.down("md")}{
        display: none;
    }
    .headerTop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        padding: 6px 0;
        border-bottom: 0.1px solid ${THEME.colors.borderBottomColor};
        
    }
    

    .left{
        padding: 0 14px;
        ${media.down("lg")}{
            display: none;
        }

        .links{
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 20px;
            .link{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                color: #000;
                font-size: 15px;
                transition: all .25s cubic-bezier(.645,.045,.355,1);
                &:hover{
                    opacity: .5;
                }
                
                 
            }

           
        }

    }
    .middle{
        margin-left: -120px;
        .header-text{
            margin-right: 12px;
            font-size: 15px;
        }
        .separator{
            border-right: 0.1px solid #f0e9e9de;
            margin-right: 10px;
        }
        a{
            color: #000;
            border-bottom: 1px solid #000;
            font-size: 15px;
            &:hover{
                opacity: .5;
            }
        }
        
    }
    

    .right {
        display: flex;
        align-items: center;
        column-gap: 28px;
        .menu{
           position: relative;
           span{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            color: #000;
            transition: all ease-in-out 0.2s;
            &:hover{
                opacity: .5;
            }
           }
            .sub-menu{
                &.min-width{
                    min-width: 170px;
                    padding: 18px 18px 22px 18px;
                }
                min-width: 100px;
                border: 0;
                position: absolute;
                top: 100%;
                right: 0;
                left: 0;
                padding: 18px 18px 22px 18px;
                margin: 0;
                list-style-type: none;
                z-index: 102;
                background: #fff;
                box-shadow: 0 20px 30px rgb(0 0 0 / 12%);
                display: none;

                .subMenuLink{
                    display: flex;
                    align-items: center;
                    font-size: 15px;
                    padding: 4px;
                    transition: all ease-in-out 0.2s;
                    &:hover{
                        background-color: ${THEME.colors.hoverColor};
                    }
                }
            }
            .rightLink{
                display: flex;
                align-items: center;
            }
        }
        .menu:hover .sub-menu{
            display: block;
        }
        
        
        
        img{
            width: 25px;
            height: 16px;
            margin: 0 5px;
        }
    }


`

const HeaderTop = () => {
  return (
    <StyledHeaderTop>
        <Wrapper>
            <div className="headerTop">

            
                <div className="left">
                    <div className="links">
                        <Link to="/" className='link'>
                            <FaInstagram/>
                            <span>100k Followers</span>
                        </Link>
                        <Link to="/" className='link'>
                            <FaFacebook/>
                            <span>300k Followers</span>
                        </Link>
                    </div>
                </div>
                <div className="middle">
                    <span className="header-text">Open Doors To A World Of Fashion</span>
                    <span className='separator'></span>
                    <Link to="/">Discover More</Link>
                </div>
                <div className="right">
                    <div className="menu">
                            <Link to="/" className='rightLink'>
                                <img src={Eng} alt="" />
                                <span>
                                    English
                                    <BiChevronDown/>
                                </span>
                                
                            </Link> 
                            <div className="sub-menu min-width">
                                <Link to="/" className='subMenuLink'>
                                    <img src={Fr} alt="" />
                                    <span>Français</span>
                                </Link>
                                <Link to="/" className='subMenuLink'>
                                    
                                    <img src={De} alt="" />
                                    <span >
                                        Deutsch
                                    </span>
                                </Link>
                            </div>  
                        </div>
                        <div className="menu">
                            <Link to="/" className='rightLink'>
                                <span>
                                    USD
                                    <BiChevronDown/>
                                </span>
                            </Link>
                            <div className="sub-menu pad">
                            <Link to="/" className='subMenuLink'>
                                <span>EUR</span>
                            </Link>
                            <Link to="/" className='subMenuLink'>
                                <span>GBP</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </StyledHeaderTop>
  );
}

export default HeaderTop;
