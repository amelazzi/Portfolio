import React from "react"
import styled from 'styled-components'

import Card from './card'

const StyledSection = styled.div`
    margin-top: 4rem;
    width: 100%;
    color: white;
    text-align: center;
    h1{
        font-size: 32px;
        margin: 0;
        padding: 0;
    }

`;

const CardsContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 48em) {
        flex-direction: column;
    }
`;

const WhatIDo = () => {
    return(
        <StyledSection>
            <h1> WHAT I DO </h1>
            <CardsContainer>
                <Card icon={require("../../images/mobile-icon.png")}
                    title="Mobile Development"
                    resume="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."/>
                <Card icon={require("../../images/laptop-icon.png")}
                    title="Web Development"
                    resume="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."/>
                <Card icon={require("../../images/graphic-design-icon.png")}
                    title="Graphic Design"
                    resume="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."/>
            </CardsContainer>
        </StyledSection>
    )
}

export default WhatIDo
