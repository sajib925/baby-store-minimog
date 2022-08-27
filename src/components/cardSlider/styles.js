import  styled  from 'styled-components';
import { media } from '../../styles/responsive';

export const StyledCard = styled.div`

    .cardSlider{
        background-color: #fff;
        padding: 50px 35px 65px 35px;
        ${media.down("md")}{
            padding: 30px;
        }
        .icons{
            color: #E1927F;
            font-size: 20px;
            letter-spacing: 6px;
            margin-bottom: 18px;
            text-align: center;
        }
        .h3{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 10px;
            line-height: 1.17;
            text-align: center;
        }
        .description{
            line-height: 1.75;
            font-size: 16px;
            text-align: center;
        }
        .h4{
            text-align: center;
            margin-top: 16px;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.19;
        }
        .cardImg{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
        }
        a{
            display: block;
            text-align: center;
            font-size: 15px;
            font-weight: 500;
            color: #a9c5b9;
        }
    }

`