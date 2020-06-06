import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { bordo, dark, gray } from "../styles/colors"

import SocialMedia from './SocialMedial'

const StyledFooter = styled.div`
    background: ${dark};
    padding: 1rem 20rem;
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
`;

const StyledSocialMedia = styled.div`
    display: felx;
    @media (max-width: 48em) {
        margin-top: 1rem;
    }
`;


const Footer = () => {
    return(
        <StyledFooter>
            <p> All Rights Reserved Amel AZZI © 2020 </p>
            <StyledSocialMedia>
            <SocialMedia img={require("../images/github-dark.png")} 
                    imgBackground={require("../images/github-bordo.png")}
                    link="https://github.com/amelazzi"/>

                <SocialMedia img={require("../images/twitter-dark.png")} 
                    imgBackground={require("../images/twitter-bordo.png")}
                    link="https://twitter.com/amelias_azzi"/>

                <SocialMedia img={require("../images/linkedIn-dark.png")} 
                    imgBackground={require("../images/linkedIn-bordo.png")}
                    link="https://www.linkedin.com/in/amel-azzi-625446b2/"/>

                <SocialMedia img={require("../images/facebook-dark.png")} 
                    imgBackground={require("../images/facebook-bordo.png")}
                    link="https://www.facebook.com/misa.chan.9277"/>
            </StyledSocialMedia>
        </StyledFooter>
    )  
}

export default Footer