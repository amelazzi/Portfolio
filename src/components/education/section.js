import React from "react"
import styled from 'styled-components'


import Card from './card'
import ReverseCard from './reverseCard'

const StyledSection = styled.div`
    padding: 4rem 10rem;
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

    @media (min-width: 48.1em) and (max-width: 62em) {
        padding: 4rem 2rem;
        padding-bottom: 8rem;
    }

    @media (min-width: 62.1em) and (max-width: 75em)  {
        padding: 4rem 6rem;
        padding-bottom: 8rem;
    }
    @media (min-width: 75.1em) and (max-width: 85.5em) {
        padding: 4rem 10rem;
        padding-bottom: 8rem;
    }
`;

const Section = () => {
    return(
        <StyledSection id="education">
            <h1> MY EDUCATION </h1>
            <Card school="University of Paris-Est Marne-la-vallée"
                date="Sept 2019 - Present"
                degree="Master"
                field="IoT Services & Systems"/>
            <ReverseCard school="Higher National School of Computer Science -ESI ex INI-"
                date="Sept 2014 - Sept 2019"
                degree="Master"
                field="Software Engineering "/>
            <Card school="El-Hammadia High School"
                date="Sept 2011 - Juin 2014"
                degree="Bachlor"
                field="Mathimathics field"/>
        </StyledSection>
    )
}

export default Section
