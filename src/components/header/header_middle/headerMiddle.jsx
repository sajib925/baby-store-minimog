import React,{useState,useEffect} from 'react';
import { StyledHeaderMiddle } from './styles';
import { Wrapper } from './../../wrapper/wrapper';
import { FaBars } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import { Link } from 'react-router-dom';
import  Logo  from '../../../images/logo/dark-logo.png'
import LoginIcon from '../../../images/icon/login.svg'
import CartIcon from '../../../images/icon/cart.svg'
import WishListIcon from '../../../images/icon/wishlist.svg'
import { MobileMenu } from './../mobileMenu/mobileMenu';
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import  emptyImg  from '../../../../public/image/cart/empty-cart.png'
import { HiOutlinePencil } from 'react-icons/hi'
import { FaShippingFast } from 'react-icons/fa'
import { RiCouponLine } from 'react-icons/ri'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
const HeaderMiddle = () => {
    const [mobileMenu, setMobileMenu] = useState (false);
    const handleClick = () => {
        setMobileMenu (mobileMenu => !mobileMenu);
    }
    const [shoppingCart, setSoppingCart] = useState (false);
    const shoppingCartClick = () =>{
        setSoppingCart (shoppingCart => !shoppingCart)
    }
    const [searchBar, setSearchBar] = useState (false);
    const searchBarClick = () =>{
        setSearchBar (searchBar => !searchBar)
    }
    const [loginForm, setLoginForm] = useState (false);
    const loginFormClick = () =>{
        setLoginForm (loginForm => !loginForm)
    }
    const [type , setType] = useState (false)
    const handlePass = () => {
        setType (type => !type)
    }
    const [signUpForm, setSignUpForm] = useState (false);
    const signUpClick = () =>{
        setSignUpForm (signUpForm => !signUpForm)
    }
    const [forgatPass, setForgatPass] = useState (false);
    const forgatPassClick = () =>{
        setForgatPass (forgatPass => !forgatPass)
    }
    useEffect(() => {
      if (mobileMenu === true) {
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "17px";
      } else if (shoppingCart === true) {
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "17px";
      } else if (searchBar === true) {
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "17px";
      } else if (loginForm === true) {
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "17px";
      } else if (signUpForm === true) {
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "17px";
      } else if (forgatPass === true) {
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "17px";
      } else {
        document.body.style.overflow = "auto";
        document.body.style.marginRight = "0";
      }
    }, [
      mobileMenu,
      shoppingCart,
      searchBar,
      loginForm,
      signUpForm,
      forgatPass,
    ]);
  return (
    <StyledHeaderMiddle>
        <Wrapper>
            <div className="headerWrap">
                <div className="headerLeft">
                    <div className="headerInner">
                        <div className="mobileMenuBar">
                            <div className="menuBarIcon">
                                <FaBars size="20"onClick={handleClick} />
                            </div>
                        </div>
                        <div className="headerSearchForm" >
                            <form role="search" method="get"  action="/" onClick={searchBarClick}>
                                <input type="search" readOnly className='searchInput' placeholder="Search products" value="" name="s" title="Search for:"/>
                                <button>
                                    <span>
                                        <GoSearch size='20px' />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="headerCenter">
                    <div className="headerCenterInner">
                        <div className="branding">
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="headerRight">
                    <div className="headerRightInner">
                        <div className="SearchIcon">
                            <GoSearch size="20" onClick={loginFormClick}/>
                        </div>
                        <Link to="/" className='loginIcon headerRightLink'>
                            <img src={LoginIcon} alt="log in icon" className='headerRightImg loginIcon' onClick={loginFormClick}/>
                            <span className='subMenu'>Log In</span>
                        </Link>

                        <Link to="/" className='wishListIcon headerRightLink'>
                            <div className="headerRightIcon">
                                <img src={WishListIcon} alt="wishlist icon" className='headerRightImg wishlistIcon'/>
                                <span className='iconBadge'>1</span>
                                <span className='subMenu'>Wishlist</span>
                            </div>
                        </Link>

                        <Link to="/" className='cartIcon headerRightLink'>
                            <div className="headerRightIcon">
                                <img src={CartIcon} alt="cart icon" className='headerRightImg cartIcon' onClick={shoppingCartClick}/>
                                <span className='iconBadge'>0</span>
                                <span className='subMenu'>Cart</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
        
            <MobileMenu mobileMenu = {mobileMenu} handleClick ={handleClick}/>

        {/* popup cart start here  */}
        <div className={shoppingCart ? "openCartPopup cartPopup" : "closeCartPopup cartPopup"}>
            <div className="cartInner">
                <Link to="/" className='closeIcon' onClick={shoppingCartClick}>
                    <AiOutlineClose />
                </Link>
                <div className="cartPopupContent">
                    <div className="cartHeader">
                        <h3 className="h3">Shopping Cart</h3>
                        <div className="countDownMessage">
                            🔥 These products are limited, checkout within
                            <div className="timer">00m 00s </div>
                        </div>
                        <div className="cartGoalText">Buy <span className="amount"><bdi>
                            <span className="currencySymbol">$</span>200.00</bdi>
                            </span> more to enjoy <strong>FREE Shipping</strong>
                        </div>
                        <div className="progressBar">
                            <div className="progressBarWrap">
                                <div className="progressBarRol">
                                    <div className="progressBarIcon">
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cartBody">
                        <div className="emptyCartMessage">
                             <div className="emptyCartImg">
                                <img src={emptyImg} alt="Empty Cart Img" />
                            </div>
                            <h2 className="h2">Your cart is currently empty.</h2>
                            <p className="description">You may check out all the available products and buy some in the shop.</p>
                        </div>
                       
                        <div className="cartBTN">
                            <Link to="/">
                                Return to shop
                            </Link>
                        </div>
                    </div>
                    <div className="cartFooter">
                        <div className="footerActions">
                            <Link to="/" >
                                <span>
                                    <HiOutlinePencil size={20}/>
                                </span>
                                <span>Note</span>
                            </Link>
                            <Link to="/" className='separator'>
                                <span>
                                    <FaShippingFast size={22}/>
                                </span>
                                <span>Shipping</span>
                            </Link>
                            <Link to="/" className='separator'>
                                <span>
                                    <RiCouponLine size={22}/>
                                </span>
                                <span>Coupon</span>
                            </Link>
                        </div>
                        <table className="cartTable">
	                        <tfoot>
	                            <tr>
		                            <th className='subTotal'>Subtotal</th>
		                            <td ><span className='subTotalAmount'>$0.00</span></td>
                                </tr>
                                <tr className='border'>
		                            <th className='total'>Total</th>
		                            <td><span className='totalAmount'>$0.00</span></td>
                                </tr>
		                    </tfoot>
                        </table>
                        <div className="cartFooterBtn">
                            <Link to="/" className='btn'>
                                Checkout
                            </Link>
                            <Link to="/" className='linkBtn'>
                                <div className="btnWrapper">
                                    <span className="button-text">View cart</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* popup cart end here  */}

        {/* popup search start here  */}

        <div className={searchBar ? "popupSearch openSearchBar" : "popupSearch closeSearchBar"}>
            <div className="searchInner">
                <div className="closeIcon" onClick={searchBarClick}>
                   <AiOutlineClose />
                </div>
                <div className="popupSearchContainer">
                    <div className="popupContent">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="searchBar">
                            <form action="/">
                                <input type="search" className="searchField" placeholder="Search products" name="s"/>
                                <button>
                                    <GoSearch size={22}/>
                                </button>
                            </form>
                        </div>
                        <div className="headerRight">
                            <div className="headerRightInner">
                                <Link to="/" className='loginIcon headerRightLink'>
                                    <img src={LoginIcon} alt="log in icon" className='headerRightImg loginIcon' onClick={loginFormClick}/>
                                    <span className='subMenu'>Log In</span>
                                </Link>

                                <Link to="/" className='wishListIcon headerRightLink'>
                                    <div className="headerRightIcon">
                                        <img src={WishListIcon} alt="wishlist icon" className='headerRightImg wishlistIcon'/>
                                        <span className='iconBadge'>1</span>
                                        <span className='subMenu'>Wishlist</span>
                                    </div>
                                </Link>

                                <Link to="/" className='cartIcon headerRightLink'>
                                    <div className="headerRightIcon">
                                        <img src={CartIcon} alt="cart icon" className='headerRightImg cartIcon' onClick={shoppingCartClick}/>
                                        <span className='iconBadge'>0</span>
                                        <span className='subMenu'>Cart</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="popularKye">
                        <span className='label'>Popular Searches: </span>
                        <Link to="/">T-Shirt</Link>
                        <Link to="/">Blue</Link>
                        <Link to="/">Jacket</Link>
                    </div>
                </div>
            </div>
        </div>

        {/* popup search end here  */}

        {/* popup login form start here */}

    <div className={loginForm ? "popupLoginForm openLoginForm" : "popupLoginForm closeLoginForm"}>
        <div className="overlay"></div>
        <div className="loginFormContent">
            <div className="closeBtn" onClick={loginFormClick}>
                <AiOutlineClose />
            </div>
            <div className="loginFormContentWrap">
                <div className="loginInner">
                    <div className="loginContentHeader">
                        <h3 className="h3">Sign In</h3>
                        <p className="description">
			    			Don't have an account yet? <Link to="/" onClick={() => {signUpClick(); loginFormClick()}}>Sign up</Link> for free
                        </p>
                    </div>
                    <div className="loginContentBody">
                        <form action="/">
                            <div className="formGroup">
                                <label className="formLabel">Username or email</label>
                                <input type="text" className="loginInput" placeholder="Your username or email"></input>
                                <label className='error'>This field is required</label>
                            </div>
                            <div className="formGroup">
                                <label className="formLabel">Password</label>
                                <div className="inputGroup pass">
                                    <input type={type ? "text" : "password"} class="loginInput" placeholder="Password"></input>
                                    <label className='error'>This field is required</label>
                                    <div className='PassChange' onClick={handlePass}>
                                        {type ? <AiOutlineEyeInvisible /> :<AiOutlineEye />}
                                    </div>
                                </div>
                            </div>
                                <div className="formGroup check">
					    		<label className="formLabelCheck">
					    			<input className="formCheckbox" type="checkbox" />
					    			<span>Stay signed in</span>
					    		</label>
                                <div className="forgetPass">
                                    <Link to="/" onClick={() => {loginFormClick(); forgatPassClick() }}>Forgot your password?</Link>
                                </div>
                            </div>
                            <div className="formGroupSubmitBtn">
                                <button type="submit" className="formSubmit"><span>Log In</span></button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

        {/* popup login form end here */}

        {/* popup sign up form start here */}

    <div className={signUpForm ? "popupSignUpForm openSignUpForm" : "popupSignUpForm closeSignUpForm"}>
        <div className="overlay"></div>
        <div className="signUpContent">
            <div className="closeBtn">
                <AiOutlineClose onClick={signUpClick}/>
            </div>
            
                <div className="inner">
                    <div className="signUpHeader">
                        <h3 className="h3">Sign Up</h3>
                        <p className="description">Already have an account? <Link to="/" className="login" 
                        onClick={() => {loginFormClick(); signUpClick()}}> Log in </Link></p>
                    </div>
                    <div className="signUpBody">
                        <form action="/">
                            <div className="formGroup">
                                <label className="signUpLabel">Your Name</label>
                                <input type="text" className="signUpInput" placeholder="Your Name"></input>
                                <label className='error' for="ip_password">This field is required</label>
                            </div>
                            <div className="formGroup">
                                <label className="signUpLabel">Username</label>
                                <input type="text" className="signUpInput" placeholder="Username"></input>
                                <label className='error'>This field is required</label>
                            </div>
                            <div className="formGroup">
                                <label className="signUpLabel">Email</label>
                                <input type="email" className="signUpInput" placeholder="Your Email"></input>
                                <label className='error' >This field is required</label>
                            </div>
                            <div className="formGroup pass">
                                <label className="signUpLabel">Password</label>
                                <div className="inputGroup pass">
                                    <input type={type ? "text" : "password"} class="signUpInput" placeholder="Password"></input>
                                    <label className='error'>This field is required</label>
                                    <div className='PassChange' onClick={handlePass}>
                                        {type ? <AiOutlineEyeInvisible /> :<AiOutlineEye />}
                                    </div>
                                </div>
                            </div>
                            <div className="formGroup check">
                                <label className="checkLabel">
								<input type="checkbox" />
                                Yes, I agree with <Link to="/">Privacy Policy</Link> and Terms of U signUp </label>
                            </div>
                            <div className="formGroup btn">
                                <button type="submit" className="formSubmit"><span>Sign Up</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            
        </div>
    </div>

        {/* popup sign up form end here */}

        {/* popup forget password start here */}

    <div className={forgatPass ? "popupForgetPass openForgetPass" : "popupForgetPass closeForgetPass"}>
        <div className="overlay"></div>
        <div className="forgetPassContent">
            <div className="closeBtn" onClick={forgatPassClick}>
                <AiOutlineClose />
            </div>
            <div className="inner">
                <div className="forgetPssHeader">
                    <h3 className="h3">Lost your password?</h3>
                    <p className="description">
						Please enter your username or email address. You will receive a link to create a new password via emailRemember now? 
                        <Link to="/" className="login" onClick={() => { forgatPassClick(); loginFormClick() }}> Back to login </Link>
                    </p>
                </div>
                <div className="forgetPassBody">
                    <div className="formGroup">
                        <label className="forgetPassLabel">Username or email</label>
                        <input type="text" className="forgetPassInput" placeholder="Your username or email"></input>
                        <label className='error' >This field is required</label>
                    </div>
                    <div className="btn">
                        <button type="submit" className="forgetPassSubmit"><span>Log In</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

        {/* popup forget password end here */}
    
    </StyledHeaderMiddle>
  );
}

export default HeaderMiddle;
