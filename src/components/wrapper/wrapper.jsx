import React from "react";
import styled from "styled-components";
import { media } from "../../styles/responsive";

const StyledWrapper = styled.div`
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap; */
    max-width: 1280px;
    padding: 0 35px;
    margin: 0 auto;
    ${media.down("xl")} {
       padding: 0 15px;
    }
    ${media.down("sm")} {
        width: 100%;
    }

`;


export const Wrapper = (props) => {
    return <StyledWrapper>{props.children}</StyledWrapper>
}