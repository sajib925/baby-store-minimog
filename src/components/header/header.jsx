import React from 'react';
import { PageTopBar } from '../pageTopBar/pageTopBar';
import HeaderTop from './headerTop';
import HeaderBelow from './header_below/headerBelow';
import HeaderMiddle from './header_middle/headerMiddle';
// import { MobileMenu } from './mobileMenu/mobileMenu';
import { StyledHeader } from './styles';

const Header = () => {
  return (
    <StyledHeader>
        <PageTopBar />
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBelow />
        
          {/* <MobileMenu /> */}
        
    </StyledHeader>
  );
}

export default Header;
