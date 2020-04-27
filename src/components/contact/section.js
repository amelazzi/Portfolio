import React from "react"
import styled from 'styled-components'
import { gray } from "../../styles/colors"

import Card from './card'


const StyledSection = styled.div`
    padding: 3rem 20rem;
    color: white;
    text-align: center;
    h1{
        font-size: 32px;
        margin: 0 !important;
        margin-bottom: 6rem;
        padding: 0;
    }
`;

const CardsContainer = styled.div`
    displey: flex;
    justify-content: space-between;
    margin-top: 3rem;
`;

const Section = () => {
    return(
        <StyledSection>
            <h1> CONTACT ME</h1>
            <CardsContainer>
                <Card/>
            </CardsContainer>
        </StyledSection>
    )
}

export default Section
