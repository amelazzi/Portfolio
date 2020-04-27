import React from "react"
import styled from 'styled-components'


import Card from './card'

const StyledSection = styled.div`
    padding: 4rem 20rem;
    color: white;
    text-align: center;
    h1{
        font-size: 32px;
        margin: 0;
        margin-bottom: 4rem;
        padding: 0;
    }
`;

const Section = () => {
    return(
        <StyledSection>
            <h1> MY EDUCATION </h1>
            <Card school="University of Paris-Est Marne-la-vallée"
                date="Sept 2019 - Present"
                degree="Master"
                field="Software Engineering "/>
        </StyledSection>
    )
}

export default Section
