import React from 'react';
import { ROUTES } from '../../../routes';
import { CustomNavLink } from '../customNavLink';
import { StyledMobileMenu } from './styles';
import { GrClose } from 'react-icons/gr'
import { FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const MobileMenu = ({mobileMenu,handleClick}) => {
  return (
    <StyledMobileMenu>
      <div className={mobileMenu ? "mobileMenuOpen mobileMenu" : "mobileMenuClose mobileMenu"}>

      <div className="inner">
        <div className="closeBTN">
          <GrClose onClick={handleClick}/>
        </div>
        <div className="mobileMenuContent">
            <ul className="mobileMenuLinks">
                { ROUTES.map((link) => {
                  return(
                    <li key={link.to}>
                      <CustomNavLink linkTo={link.to} linkName={link.name} />
                    </li>
                )})}
            </ul>
            <div className="mobileMenuComponents">
              <div className="mobileMenuMyAccount">
                <span className='icon'>
                  <FaRegUser />
                </span>
                <span className='text'>My Account</span>
              </div>
              <div className="mobileMenuLoginBTN">
                <Link to="/">
                    <div className="BTNWrapper">
                      <span className="BTNText">
                        Log in
                      </span>
                    </div>
                </Link>
              </div>
              <div className="mobileMenuRegisterBTN">
                <Link to="/">
                    <div className="BTNWrapper">
                      <span className="BTNText">
                        Register
                      </span>
                    </div>
                </Link>
              </div>
            </div>
        </div>
      </div>
      </div>
    </StyledMobileMenu>
  );
}


