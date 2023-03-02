import styled from "styled-components";
import { media } from "../../styles/responsive";

export const StyledFooter = styled.footer`
  padding: 75px 0 47px 0;
  .footer {
    display: grid;
    grid-template-columns: 1.9fr 1fr 1fr 1fr 0.8fr;
    ${media.down("sm")} {
      grid-template-columns: 1fr;
      grid-row-gap: 10px;
    }
    .pd {
      padding: 0 15px;
    }
    .firstColumn {
      margin-right: 70px;
      ${media.down("sm")} {
        margin-right: 0;
      }
      .h2 {
        font-size: 30px;
        font-weight: 600;
        line-height: 1.16em;
      }
      .description {
        font-size: 16px;
        line-height: 1.75;
        color: #666;
        margin-bottom: 29px;
      }
      .formContainer {
        form {
          position: relative;
          .searchInput {
            padding: 3px 45px 3px 18px;
            position: relative;
            flex-grow: 1;
            padding-right: 45px;
            color: #000;
            border: 1px solid #d2d2d2;
            background-color: transparent !important;
            box-shadow: none !important;
            outline: none;
            min-height: 45px;
            border-radius: 23px;
            width: 100%;
          }
          button {
            position: absolute;
            top: 0;
            right: 0;
            min-width: 45px;
            height: 45px;
            line-height: 45px;
            padding: 0;
            border: 0;
            background-color: transparent;
            display: inline-flex;
            align-content: center;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    .h4 {
      font-size: 16px;
      font-weight: 600;
      text-transform: capitalize;
      padding-bottom: 12px;
    }
    .links {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      margin-top: 6px;
      transition: all ease 1s;
      overflow: hidden;
    }
    .openLinks {
    }
    .closeLinks {
      ${media.down("md")} {
        height: 0;
      }
    }
    .text {
      font-size: 16px;
      line-height: 30px;
      color: #666;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        color: #000;
      }
    }
    .fifthColumn {
      a {
        color: #666;
        display: inline-flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        column-gap: 13px;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover {
          color: #000;
        }
      }
    }
  }
`;