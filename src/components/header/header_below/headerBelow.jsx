import React from 'react';
import { Wrapper } from '../../wrapper/wrapper';
import { StyledHeaderBelow } from './styles';
import { ROUTES } from './../../../routes';
import { CustomNavLink } from '../customNavLink';

const HeaderBelow = () => {
  return (
    <StyledHeaderBelow>
      <Wrapper>
        <div className="headerBelowInner">
          <div className="pageNavigation">
            <div className="navbar">
              <ul className="navLinks">
                { ROUTES.map((link) => {
                  return(
                    <li key={link.to}>
                      <CustomNavLink linkTo={link.to} linkName={link.name} />
                    </li>
                  )})}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </StyledHeaderBelow>
  );
}

export default HeaderBelow;
