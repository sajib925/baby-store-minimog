import styled from "styled-components";
import {media} from "../../../styles/responsive";

const StyledProductsDetailsSection = styled.section`
  .inner__section {
    display: flex;
    flex-wrap: wrap;
    &__left {
      width: 50%;
      padding: 0 15px;
      ${media.down("xl")} {
        width: 100%;
      }
    }
    &__right {
      width: 50%;
      padding: 0 15px;
      ${media.down("xl")} {
        width: 100%;
      }
      &__wrapper {
        margin-left: 40px;
        max-width: 530px;
        width: 100%;
      }
    }
    .title__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .h1 {
        font-weight: 400;
      }

      &__wishlist {
        position: relative;
        display: inline-block;
        cursor: pointer;
        &:hover {
          .title__wrapper__link {
            display: block;
          }
          .title__wrapper__icon {
            border: 1px solid #000;
            background-color: #000;
            color: #fff;
          }
        }
      }
      &__icon {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid #ddd;
        background-color: #fff;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
      }
      &__link {
        position: absolute;
        bottom: 50%;
        right: 48px;
        transform: translateY(50%);
        padding: 7px 10px;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        white-space: nowrap;
        border-radius: 3px;
        background-color: #000;
        color: #fff;
        display: none;
        transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
      }
    }

    .price__wrap {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__pricing {
        font-size: 24px;
        line-height: 24px;
        font-weight: 400;
        color: #000;
      }
      &__review {
        margin-left: 10px;
        position: relative;
        color: #000;
        &::after {
          content: "";
          width: 0;
          height: 1px;
          position: absolute;
          left: auto;
          right: 0;
          bottom: 0;
          transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
          background-color: #999;
        }
        &:hover {
          color: #999;
          &::after {
            width: 100%;
            left: 0;
            right: auto;
          }
        }
      }
    }

    .view__wrap {
      margin-top: 28px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      &__number {
        padding: 0 5px 0 10px;
        font-weight: 600;
      }
    }

    .entry__product {
      margin-top: 22px;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      &__quantity__wrapper {
        margin: 0 20px 20px 0;
      }
      &__text {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        margin-bottom: 14px;
      }
      &__quantity {
        position: relative;
        width: 130px;
        &__input {
          padding: 0;
          width: 100%;
          min-height: 45px;
          background-color: #f1f1f1;
          border-color: #f1f1f1;
          text-align: center;
          font-size: 16px;
          line-height: 1;
          font-weight: 400;
          color: #000;
          -webkit-appearance: none;
          outline: none;
          border: none;
        }
        &__minus__btn {
          position: absolute;
          font-size: 25px;
          width: 45px;
          height: 45px;
          top: 0;
          left: 0;
          background: none !important;
          position: absolute;
          padding: 0;
          border: 0;
          touch-action: manipulation;
        }
        &__plus__btn {
          position: absolute;
          font-size: 25px;
          width: 45px;
          height: 45px;
          top: 0;
          right: 0;
          background: none !important;
          position: absolute;
          padding: 0;
          border: 0;
          touch-action: manipulation;
        }
      }
      &__cart__btn {
        flex-grow: 1;
        width: auto;
        margin: 0 0 20px;
        padding: 0 10px;
        height: 45px;
        line-height: 43px;
        outline: none;
        color: #000;
        border: 1px solid #000;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        background-color: #fff;
        font-size: 16px;
        font-weight: 500;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover {
          box-shadow: 0 0 0 0.2rem;
          background-color: #000;
          color: #fff;
        }
      }
      &__buy__btn {
        flex-grow: 1;
        width: 100% !important;
        margin: 0 0 20px;
        padding: 0 10px;
        height: 45px;
        line-height: 43px;
        outline: none;
        color: #fff;
        border: 1px solid #000;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        background-color: #000;
        font-size: 16px;
        font-weight: 500;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover {
          box-shadow: 0 0 0 0.2rem #000;
        }
      }
    }

    .product__popup {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 8px;
      border-bottom: 1px solid #eee;
      margin-bottom: 17px;
      &__compare {
        display: inline-flex;
        align-items: center;
        column-gap: 10px;
        font-size: 16px;
        line-height: 26px;
        color: #000;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        cursor: pointer;
        &:hover {
          color: #999;
        }
      }
      &__question {
        display: inline-flex;
        align-items: center;
        column-gap: 10px;
        font-size: 16px;
        line-height: 26px;
        color: #000;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        cursor: pointer;
        &:hover {
          color: #999;
        }
      }
      &__share {
        display: inline-flex;
        align-items: center;
        column-gap: 10px;
        font-size: 16px;
        line-height: 26px;
        color: #000;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        cursor: pointer;
        &:hover {
          color: #999;
        }
      }
    }

    .meta__shipping {
      margin-top: 23px;
      &__delivery {
        display: flex;
        align-items: center;
      }
      &__return {
        display: flex;
        align-items: center;
        margin-top: 4px;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(112, 112, 112);
      }
      .label {
        font-weight: 500;
        color: #000;
        font-size: 16px;
        margin: 0 10px 0 13px;
      }
      .value {
        font-weight: 400;
        color: #000;
        font-size: 16px;
      }
    }

    .product__trust__badge {
      margin: 27px 0 0;
      background-color: #f7f7f7;
      border-radius: 5px;
      padding: 15px 15px 10px;
      text-align: center;
      &__text {
        margin: 5px 0 0;
        color: #000;
        font-size: 15px;
        line-height: 22px;
      }
    }
  }
`;

export default StyledProductsDetailsSection;
