import React from 'react'
import styled from 'styled-components'

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
        <div className='noticeContainer'>
          <div className="notice">
            Error validating access token: Session has expired on Sunday, 14-Aug-22 00:02:22 PDT. The current time is Tuesday, 23-Aug-22 21:24:40 PDT.
          </div>
        </div>
    </StyledOfferExpired>
    
  )
}
