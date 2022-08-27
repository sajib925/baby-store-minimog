import React, {useState} from 'react';
import { Wrapper } from '../wrapper/wrapper';
import { StyledFooter } from './styles';
import { VscArrowRight } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
const Footer = () => {
  
  const [company, setCompany] = useState (false);
  const [information, setInformation] = useState (false);
  const [contact, setContact] = useState (false);
  const [followUs, setFollowUs] = useState (false);
  return (
    <StyledFooter>
      <Wrapper>
        <div className="footer">
          <div className="firstColumn pd">
            <h2 className="h2">
              Keep In Touch
            </h2>
            <p className="description">
              Our conversation is just getting started
            </p>
            <div className="formContainer">
              <form action="/">
                <input type="email" className='searchInput' placeholder='your email' />
                <button className='searchBtn'>
                  <VscArrowRight size={20}/>
                </button>
              </form>
            </div>
          </div>
          <div className="secondColumn pd">
            <h4 className="h4" onClick={() =>{setCompany(!company)}}>
              Company
            </h4>
            <div className={company ? "links openLinks" : "links closeLinks"}>
              <p className="text">About Us</p>
              <p className="text">Contact</p>
              <p className="text">Shipping & Return</p>
              <p className="text">FAQ</p>
            </div>
          </div>
          <div className="thirdColumn pd">
            <h4 className="h4" onClick={() =>{setInformation(!information)}}>
              Information
            </h4>
            <div className={information ? "links openLinks" : "links closeLinks"}>
              <p className="text">My Account</p>
              <p className="text">Login</p>
              <p className="text">My Cart</p>
              <p className="text">Wishlist</p>
              <p className="text">Checkout</p>
            </div>
          </div>
          <div className="forthColumn pd">
            <h4 className="h4" onClick={() =>{setContact(!contact)}}>
              Contact
            </h4>
            <div className={contact ? "links openLinks" : "links closeLinks"}>
              <p className="text">Customer Service</p>
              <p className="text">Store Locator</p>
              <p className="text">Wholesale</p>
              <p className="text">Career</p>
            </div>
          </div>
          <div className="fifthColumn pd">
            <h4 className="h4" onClick={() =>{setFollowUs(!followUs)}}>
              Follow Us
            </h4>
            <div className={followUs ? "links openLinks" : "links closeLinks"}>
              <div className="text">
                <Link to="/">
                  <FaFacebookF />
                  <span>Facebook</span>
                </Link>
              </div>
              <div className="text">
                <Link to="/">
                  <AiOutlineTwitter />
                  <span>Twitter</span>
                </Link>
              </div>
              <div className="text">
                <Link to="/">
                  <AiOutlineInstagram />
                  <span>Instagram</span>
                </Link>
              </div>
              <div className="text">
                <Link to="/">
                  <FaPinterestP />
                  <span>Pinterest</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
