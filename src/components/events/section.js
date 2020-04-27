import React from "react"
import styled from 'styled-components'
import { gray } from "../../styles/colors"

import Tabs from './tabs'


const StyledSection = styled.div`
    padding: 3rem 20rem;
    padding-bottom: 8rem;
    background: ${gray};
    color: white;
    text-align: center;
    h1{
        font-size: 32px;
        margin: 0 !important;
        margin-bottom: 6rem;
        padding: 0;
    }
`;

const Section = () => {
    return(
        <StyledSection>
            <h1> EVENTS ATTENDED </h1>
            <Tabs/>
        </StyledSection>
    )
}

export default Section
