import styled from "styled-components";
import { media } from "../../../styles/responsive";

export const StyledHeaderBelow = styled.header`
    ${media.down("xl")}{
        display: none;
    }
    .headerBelowInner{
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        /* min-height: 64px; */
        .pageNavigation{
            padding: 0 14px;
        }
    }
    .navLinks{
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        li{
            list-style: none;
            a{
                padding: 16px 18px 26px 18px;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                color: #000;
                display: block;
            }
            
        }
    }

`