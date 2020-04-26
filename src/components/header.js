import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { bordo, dark, gray } from "../styles/colors"
import SocialMedia from "../components/SocialMedial"

const StyledHeader = styled.div`
    background: ${gray};
    padding: 1rem 8rem;
    width: 100%;
    font-size: 18px;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    * {
        margin: 0;
    }
`;

const StyledSocialMedia = styled.div`
    display: felx;
`;

const StyledMenu = styled.div`
  display: flex;
    nav {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
    }
    a {
        color: white;
        padding: 0rem 1.8rem;
        :last-child{
            padding: 0rem;
        }
        position: relative;
        text-decoration: none;
        font-weight: 700 !important;
        &:hover,
        &:focus,
        &.active {
            color: ${bordo};
            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: 2px;
                top: 1.5rem;
                left: calc(3.2rem / 2);
                width: calc(100% - 3.2rem);
                height: 2px;
                background: ${bordo};
                border-radius: 10px;
            }
        }
        
    }
`;

const Header = () => {
    return(
        <StyledHeader>
            <StyledSocialMedia>
                <SocialMedia img={require("../images/github-white.png")} 
                    imgBackground={require("../images/github.png")}
                    link="https://github.com/amelazzi"/>

                <SocialMedia img={require("../images/twitter-white.png")} 
                    imgBackground={require("../images/twitter.png")}
                    link="https://twitter.com/amelias_azzi"/>

                <SocialMedia img={require("../images/linkedIn-white.png")} 
                    imgBackground={require("../images/linkedIn.png")}
                    link="https://www.linkedin.com/in/amel-azzi-625446b2/"/>

                <SocialMedia img={require("../images/facebook-white.png")} 
                    imgBackground={require("../images/facebook.png")}
                    link="https://www.facebook.com/misa.chan.9277"/>
            </StyledSocialMedia>
            <StyledMenu>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/"> About </Link>
                    <Link to="/"> Services </Link>
                    <Link to="/"> Portfolio </Link>
                    <Link to="/"> Contact </Link>
                </nav>
            </StyledMenu>
        </StyledHeader>
    )  
}

export default Header