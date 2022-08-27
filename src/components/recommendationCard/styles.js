import styled from "styled-components";

export const StyledRecommendationSlider = styled.div`

    .card{
        .thumbnail{
            overflow: hidden;
            img{
                transition: all .75s cubic-bezier(0,0,.2,1);
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            &:hover{
                img{
                    transform: scale(1.1);
                }
            }
        }
    }

    .cardInfo{
        h5{
            font-size: 16px;
            font-weight: 600;
            line-height: 1.5;
            text-align: center;
            margin-top: 27px;
            a{
                color: #000;
            }
        }
    }

`