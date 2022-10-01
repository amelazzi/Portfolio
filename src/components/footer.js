import React from "react"
import styled from 'styled-components'
import {dark} from "../styles/colors"

import SocialMedia from './SocialMedial'
import GithubDarkLogo from "../images/github-dark.png"
import GithubBordoLogo from "../images/github-bordo.png"
import TwitterDarkLogo from "../images/twitter-dark.png"
import TwitterBordoLogo from "../images/twitter-bordo.png"
import LinkedInDarkLogo from "../images/linkedIn-dark.png"
import rLinkedInBordoLogo from "../images/linkedIn-bordo.png"

const StyledFooter = styled.div`
    background: ${dark};
    padding: 1rem 10rem;
    width: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    * {
        margin: 0;
    }
    p{
        margin: 0;
        color: white;
        font-size: 16px;
    }
    @media (max-width: 48em) {
        width: 100%;
        padding: 2rem;
        flex-direction: column;
    }
    @media (min-width: 48.1em) and (max-width: 62em) {
        padding: 2rem;
    }
    @media (min-width: 62.1em) and (max-width: 75em)  {
        padding: 2rem 6rem;
    }
    @media (min-width: 75.1em) and (max-width: 85.5em) {
        padding: 2rem 10rem;
    }
`;

const StyledSocialMedia = styled.div`
    display: felx;
    @media (max-width: 48em) {
        margin-top: 1rem;
    }
`;


const Footer = () => {
    var currentYear = new Date().getFullYear();
    return(
        <StyledFooter>
            <p> All Rights Reserved Amel AZZI © 2020 - {currentYear}</p>
            <StyledSocialMedia>
            <SocialMedia img={GithubDarkLogo}
                    imgBackground={GithubBordoLogo}
                    link="https://github.com/amelazzi"/>

                <SocialMedia img={TwitterDarkLogo} 
                    imgBackground={TwitterBordoLogo}
                    link="https://twitter.com/amelias_azzi"/>

                <SocialMedia img={LinkedInDarkLogo} 
                    imgBackground={rLinkedInBordoLogo}
                    link="https://www.linkedin.com/in/amel-azzi-625446b2/"/>
            </StyledSocialMedia>
        </StyledFooter>
    )  
}

export default Footer