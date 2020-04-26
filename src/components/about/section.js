import React from "react"

import styled from 'styled-components'
import { bordo, gray } from "../../styles/colors"
import AboutMe from './aboutMe'
import WhatIDO from './whatIdo'

const StyledSection = styled.div`
    background: ${gray};
    padding: 5rem 20rem;
    color: white;
`;

const Section = () => {
    return(
        <StyledSection>
            <AboutMe/>
            <WhatIDO/>
        </StyledSection>
    )
}

export default Section