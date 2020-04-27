import React from "react"
import styled from 'styled-components'
import { gray } from "../../styles/colors"

import Card from './card'


const StyledSection = styled.div`
    padding: 4rem 20rem;
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
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
`;

const Section = () => {
    return(
        <StyledSection>
            <h1> CONTACT ME</h1>
            <CardsContainer>
                <Card icon={require("../../images/address-icon.png")}
                    info="9B Rue Saint-Louis, Nantes 44300"/>
                <Card icon={require("../../images/mail-icon.png")}
                    info="amel.azzi@orange.com"/>
                <Card icon={require("../../images/phone-icon.png")}
                    info="+33 669 57 35 82"/>
            </CardsContainer>
        </StyledSection>
    )
}

export default Section
