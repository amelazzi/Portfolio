import React from "react"

import styled from 'styled-components'
import { gray } from "../../styles/colors"
import AboutMe from './aboutMe'
import WhatIDO from './whatIdo'

const StyledSection = styled.div`
    background: ${gray};
    padding: 4rem 20rem;
    color: white;
    @media (max-width: 48em) {
        padding: 2rem;
    }
    @media (min-width: 48.1em) and (max-width: 62em) {
        padding: 4rem 2rem;
    }
    @media (min-width: 62.1em) and (max-width: 75em)  {
        padding: 4rem 6rem;
    }
    @media (min-width: 75.1em) and (max-width: 85.5em)  {
        padding: 4rem 10rem;
    }
`;

const Section = () => {
    return(
        <StyledSection id="about">
            <AboutMe/>
            <WhatIDO/>
        </StyledSection>
    )
}

export default Section
