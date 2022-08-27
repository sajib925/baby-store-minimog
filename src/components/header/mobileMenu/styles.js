import styled from "styled-components";

export const StyledMobileMenu = styled.div`
    
       
        .mobileMenu{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999999;
            color: #666;
            background: rgba(0,0,0,.53);
            transition: all .3s;

        }

    .mobileMenuOpen{
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
    }
    .mobileMenuClose{
        visibility: hidden;
        opacity: 0;
        transform: translateX(-100%);
    }

    

    .inner{
        position: absolute;
        height: 100%;
        max-width: calc(100vw - 55px);
        text-align: start;
        transition: all .3s;
        cursor: default;
        background: #fff;
        width: 350px;
        .closeBTN{
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 100%;
            top: 0;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            svg{
                width: 13px;
                height: 21px;
            }
        }
        .mobileMenuContent{
            z-index: 1;
            height: 100%;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .mobileMenuLinks{
                padding: 20px 0;
                li{
                    margin: 0;
                    display: block;
                    list-style-type: none;
                    a{
                        padding: 13px 0;
                        font-weight: 400;
                        text-decoration: none;
                        color: #000;
                        font-size: 16px;
                        display: block;
                    }
                }
            }

            .mobileMenuComponents{
                padding-bottom: 50px;

                .mobileMenuMyAccount{
                    display: flex;
                    align-items: center;
                    color: #000;
                    font-weight: 500;
                    line-height: 24px;
                    margin: 20px 0 0;
                    .icon{
                        margin-right: 6px;
                        svg{
                            width: 18px;
                            height: 21px;
                        }
                    }
                    .text{
                        font-weight: 500;
                        line-height: 24px;
                    }
                }
                .mobileMenuLoginBTN{
                    margin-top: 12px;
                    a{
                        padding: 0 25px;
                        min-height: 45px;
                        border-radius: 23px;
                        color: #fff;
                        background-color: #E1927F;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: all .25s cubic-bezier(.645,.045,.355,1);
                        &:hover{
                            box-shadow: 0 0 0 0.2rem #E1927F;
                        }
                    }
                }
                .mobileMenuRegisterBTN{
                    margin-top: 12px;
                    a{
                        padding: 0 25px;
                        min-height: 45px;
                        border-radius: 23px;
                        color: #000;
                        border: 1px solid #E1927F;
                        background-color: transparent;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: all .25s cubic-bezier(.645,.045,.355,1);
                        &:hover{
                            box-shadow: 0 0 0 0.2rem #E1927F;
                            background-color: #E1927F;
                            color: #fff;
                        }
                    }
                }
            }
        }
        
    }

`