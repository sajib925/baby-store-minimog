
import  styled  from 'styled-components';
import img from '../../../public/image/cta/h_baby_banner_01.jpg'
import { media } from './../../styles/responsive';



export const StyledOurProduct = styled.section`
    margin-bottom: 100px;
    width: 100%;


    .image{
        background-image: url(${img});
        width: 100%;
        height: 500px;
        object-fit: cover;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: start;
        .info{
           ${media.down("md")}{
                display: none;
            } 
        }


         .info{
            max-width: 316px;
            margin-left: 115px;
            
            
            .h2{
                font-size: 50px;
                font-weight: 500;
                line-height: 1.44em;
                color: #666;
                
            }
            .description{
                margin: 20px 0 56px 0;
                
            }
            .btn{
               
                
                a{
                    padding: 13px 45px;
                    cursor: pointer;
                    line-height: 23px;
                    background-color: #e1927f;
                    color: #fff;
                    border-radius: 23px;
                    font-size: 16px;
                    font-weight: 500px;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    transition: all .25s cubic-bezier(.645,.045,.355,1);
                     
                    &:hover{
                      box-shadow: 0 0 0 0.2rem #E1927F; 
                    }
                }
            }
        }
    }    

        .mobileInfo{
            display: none;
            ${media.down("md")}{
                padding: 30px 15px 10px 15px;
                display: block;
                max-width: 470px;
                width: 100%;
                margin: 0 auto;
                .h2{
                    font-size: 36px;
                    font-weight: 500;
                    line-height: 51px;
                    color: #000;
                    text-align: center;
                }
                .description{
                    margin: 15px 0 24px 0;
                    color: #666;
                    text-align: center;
                }
                .btn{
                    .btnWrapper{
                        text-align: center;
                    }
                    a{
                        padding: 13px 45px;
                        cursor: pointer;
                        line-height: 23px;
                        background-color: #e1927f;
                        color: #fff;
                        border-radius: 23px;
                        font-size: 16px;
                        font-weight: 500px;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        transition: all .25s cubic-bezier(.645,.045,.355,1);
                        ${media.down("sm")}{
                            display: block;
                        }
                        &:hover{
                            box-shadow: 0 0 0 0.2rem #E1927F; 
                        }
                    }
                }
            }
        }
    
    
`