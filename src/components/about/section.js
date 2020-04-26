import React from "react"

import styled from 'styled-components'
import { bordo, gray } from "../../styles/colors"
import AboutMe from './aboutMe'

const StyledSection = styled.div`
    background: ${gray};
    height: 50vh;
    color: white;
`;

const Section = () => {
    return(
        <StyledSection>
            <AboutMe/>
        </StyledSection>
    )
}

export default Section
