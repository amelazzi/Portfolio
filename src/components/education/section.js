import React from "react"
import styled from 'styled-components'


import Card from './card'
import ReverseCard from './reverseCard'

const StyledSection = styled.div`
    padding: 4rem 20rem;
    padding-bottom: 8rem;
    color: white;
    text-align: center;
    h1{
        font-size: 32px;
        margin: 0;
        margin-bottom: 6rem;
        padding: 0;
    }

    @media (max-width: 48em) {
        padding: 2rem;
        padding-bottom: 4rem;
        margin-top: 1rem;
        h1{
            margin-bottom: 4rem;
        }
    }
`;

const Section = () => {
    return(
        <StyledSection id="education">
            <h1> MY EDUCATION </h1>
            <Card school="University of Paris-Est Marne-la-vallée"
                date="Sept 2019 - Present"
                degree="Master"
                field="Software Engineering "/>
            <ReverseCard school="University of Paris-Est Marne-la-vallée"
                date="Sept 2019 - Present"
                degree="Master"
                field="Software Engineering "/>
            <Card school="University of Paris-Est Marne-la-vallée"
                date="Sept 2019 - Present"
                degree="Master"
                field="Software Engineering "/>
            <ReverseCard school="University of Paris-Est Marne-la-vallée"
                date="Sept 2019 - Present"
                degree="Master"
                field="Software Engineering "/>
        </StyledSection>
    )
}

export default Section
