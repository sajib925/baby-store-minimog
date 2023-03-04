import styled from "styled-components";
import { media } from './../../../styles/responsive';

export const StyledHeroText = styled.div`
  max-width: 370px;
  width: 100%;
  ${media.down("md")} {
    max-width: 100%;
    text-align: center;
  }
  .title {
    font-size: 70px;
    font-weight: 500;
    line-height: 1.29em;
    color: #000;
    ${media.down("md")} {
      font-size: 36px;
      text-align: center;
    }
  }
  .description {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2em;
    color: #666;
    margin: 19px 0;
    ${media.down("md")} {
      font-size: 16px;
      text-align: center;
    }
  }
  .btn {
    ${media.down("md")} {
      max-width: 100%;
      text-align: center;
    }
    &__link {
      padding: 13px 45px;
      display: inline-block;
      cursor: pointer;
      line-height: 23px;
      background-color: #e1927f;
      color: #fff;
      border-radius: 23px;
      font-size: 16px;
      font-weight: 500px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        box-shadow: 0 0 0 0.2rem #e1927f;
      }
    }
  }
`;
