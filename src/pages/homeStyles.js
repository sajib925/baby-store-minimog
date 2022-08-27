import  styled  from 'styled-components';
import { media } from '../styles/responsive';

export const StyledHome = styled.section`




/* card design */

/* Top Categories section start here  */

    .categoriesSection{
        margin-top: 100px;
        margin-bottom: 50px;
        .header{
            margin-bottom: 60px;
        }
    }
/* Top Categories section ends here  */

/* Recommendation section start here  */

    .recommendationSection{
       .header{
            margin-bottom: 60px;
        } 
    }


/* Recommendation section ends here  */





    /* both cards section header design  */


    

    .header{
            position: relative;
            width: 100%;
            text-align: center;
            &::after{
                content: "";
                width: 100%;
                height: 1px;
                border-top: 1px dashed #c7c7c7;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            .h2{
                display: inline-block;
                position: relative;
                padding: 0 40px;
                z-index: 9;
                background: #fff;
                font-size: 36px;
                font-weight: 500;
                line-height: 1.28em;
                ${media.down("sm")}{
                    font-size: 28px;
                    padding: 0 20px;
                }

                
            }
            
        }
    .pricingSection{
        background-color: #f7f2f2;
        padding: 110px 0 80px 0;
        margin-bottom: 100px;
        
        .header{
            margin-bottom: 80px;
            .h2{
                background-color: #f7f2f2;
            }
        }
        .cardContainer{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 30px;
            ${media.down("lg")}{
                grid-template-columns: 1fr 1fr 1fr ;
            }
            ${media.down("md")}{
                grid-template-columns: 1fr 1fr;
                grid-gap: 10px;
            }
            ${media.down("sm")}{
                grid-template-columns: 1fr 1fr;
                grid-gap: 10px;
            }
        }
    }
    /* two card section header design  */

    /* card design */

    /* testimonial section design start here */
        .testimonialSection{
            margin: 100px 0;
            padding: 100px 0 85px 0;
            background-color: #eaf1f0;
            .header{
                margin-bottom: 80px;
                .h2{
                    background-color: #eaf1f0;
                }
            }
        }
    /* testimonial section design start here */

    /* brand section styled start here */

    .brandSection{
        margin-bottom: 80px;
        .header{
            margin-bottom: 80px;
        }
        .brandContainer{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-row-gap: 20px;
            .brandImg{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            ${media.down("xl")}{
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
            ${media.down("lg")}{
                grid-template-columns: 1fr 1fr 1fr ;
            }
            /* ${media.down("md")}{
                grid-template-columns: 1fr 1fr 1fr;
            } */
            ${media.down("sm")}{
                grid-template-columns: 1fr 1fr;
            }

            img{
                cursor: pointer;
                opacity: .3;
                transition: all .75s cubic-bezier(0,0,.2,1);
                ${media.down("sm")}{
                    width: 135px;
                }
                &:hover{
                    opacity: 1;
                }
            }
        
           
        }
    }

    /* brand section styled end here */


`