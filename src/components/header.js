import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { bordo, dark, gray } from "../styles/colors"
import SocialMedia from "../components/SocialMedial"
import Modal from "./modal"
import { ModalProvider, BaseModalBackground } from "styled-react-modal"
import Scrollspy from 'react-scrollspy'


const FadingBackground = styled(BaseModalBackground)`
  opacity: 0.96;
  transition: opacity ease 200ms;
`;

const StyledHeader = styled.div`
    background: ${gray};
    padding: 1rem 10rem;
    width: 100%;
    font-size: 18px;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    box-shadow: -1rem 0 3rem ${dark};
    z-index: 5;
    * {
        margin: 0;
    }

    @media (max-width: 62em) {
        padding: 1rem 2rem;
    }
    @media (min-width: 62.1em) and (max-width: 75em)  {
        padding: 1rem 6rem;
    }
    @media (min-width: 75.1em) and (max-width: 85.5em)  {
        padding: 1rem 10rem;
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
        padding: 0rem 1rem;
        position: relative;
        text-decoration: none;
        font-weight: 700 !important;
        :last-child{
            &:hover,
            &.active {
                color: ${bordo};
                &:after {
                    width:4.8rem !important;
                }
            }
        }
        &:hover,
        &.active {
            color: ${bordo};
            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: 2px;
                top: 1.5rem;
                left: calc(1rem / 2);
                width: calc(100% - 1.2rem);
                height: 2px;
                background: ${bordo};
                border-radius: 10px;
            }
        } 
    }
    @media (max-width: 48em) {
        display: none;
    }
`;

const navItems = ['home', 'skills', 'projects', 'events', 'contact']

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

            </StyledSocialMedia>
            <ModalProvider backgroundComponent={FadingBackground}>
                <Modal/>
            </ModalProvider>
            <StyledMenu>
                <nav>
                    <Scrollspy items={navItems} currentClassName="active">
                        <Link to="/#home"> Home </Link>
                        <Link to="/#skills"> Skills </Link>
                        <Link to="/#projects"> Projects </Link>
                        <Link to="/#events"> Events </Link>
                        <Link to="/#contact"> Contact </Link>
                    </Scrollspy>
                </nav>
            </StyledMenu>
        </StyledHeader>
    )  
}

export default Header