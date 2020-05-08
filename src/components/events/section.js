import React from "react"
import styled from 'styled-components'
import { gray } from "../../styles/colors"

import Tabs from './tabs'


const StyledSection = styled.div`
    padding: 4rem 20rem;
    background: ${gray};
    color: white;
    text-align: center;
    h1{
        font-size: 32px;
        margin: 0 !important;
        margin-bottom: 6rem;
        padding: 0;
    }
    @media (max-width: 35em) {
        padding: 4rem 2rem;
        padding-bottom: 2rem;
        h1{
            margin-bottom: 4rem;
        }
    }
`;

const Section = () => {
    return(
        <StyledSection id="events">
            <h1> EVENTS ATTENDED </h1>
            <Tabs/>
        </StyledSection>
    )
}

export default Section
