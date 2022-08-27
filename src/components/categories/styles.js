import  styled   from 'styled-components';

export const StyledCategoriesSlider = styled.div`
    

    .card{
        .thumbnail{
            overflow: hidden;
        }
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
    .categoriesInfo{
        h5{
            font-size: 20px;
            line-height: 1.5;
            font-weight: 600;
            margin-top: 21px;
            a{
                color: #000;
            }
        }
    }

`