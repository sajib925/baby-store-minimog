import React from 'react'
import styled from 'styled-components'
import Marquee from "react-fast-marquee";

const StyledOfferExpired = styled.article`
  .notice{
    font-size: 16px;
    line-height: 26px;
    color: #666;
  }
`

export const OfferExpired = () => {
  return (
    <StyledOfferExpired>
      <Marquee>
        <div className="noticeContainer">
          <div className="notice">
            Error validating access token: Session has expired on Friday,
            17-Feb-23 00:02:22 PDT. The current time is Friday, 24-Aug-22
            21:24:40 PDT.{" || "} Error validating access token: Session has
            expired on Friday, 17-Feb-23 00:02:22 PDT. The current time is
            Friday, 24-Aug-22 21:24:40 PDT.
          </div>
        </div>
      </Marquee>
    </StyledOfferExpired>
  );
}
