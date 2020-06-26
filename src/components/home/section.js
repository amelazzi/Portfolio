import React from "react"

import styled from 'styled-components'

import Home from './home'
import AboutMe from './aboutMe'


const StyledSection = styled.div`
    color: white;
`;

const Section = () => {
    return(
        <StyledSection id="home">
            <Home/>
            <AboutMe/>
        </StyledSection>
    )
}

export default Section
