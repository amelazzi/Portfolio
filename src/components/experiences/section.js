import React from "react"
import styled from 'styled-components'

import WorkCard from './workCard'
import VolunteeringCard from './volunteeringCard'

const StyledSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0rem 20rem;
    color: white;
    h1{
        font-size: 32px;
        margin: 0;
        margin-bottom: 4rem;
        padding: 0;
    }
    @media (max-width: 48em) {
        padding: 0rem 2rem;
        flex-direction: column;
        h1{
            margin-bottom: 2rem;
        }
    }
    @media (min-width: 48.1em) and (max-width: 62em) {
        padding: 0rem 2rem;
    }
    @media (min-width: 62.1em) and (max-width: 75em)  {
        padding: 0rem 6rem;
    }
`;

const WorkExperiences = styled.div`
    width: 45%;
    margin-top: 1rem;
    @media (max-width: 48em) {
        width: 100%;
    }
    @media (min-width: 48.1em) and (max-width: 62em) {
        width: 48%;
    }
`;

const VolunteeringExperiences = styled.div`
    width: 45%;
    margin-top: 1rem;
    @media (max-width: 48em) {
        width: 100%;
        margin-top: 2rem;
    }
    @media (min-width: 48.1em) and (max-width: 62em) {
        width: 48%;
    }
`;

const Section = () => {
    return(
        <StyledSection id="experiences">
        <WorkExperiences>
            <h1> Work Experience </h1>
            <WorkCard role="Intern" company="Orange Business Services"
                date="Apr 2020 - Present"
                reponsibility="Create JAVA Object Relational Mapping Evaluator"/>
            <WorkCard role="Intern" company="Orange Business Services"
                date="Apr 2020 - Present"
                reponsibility="Create JAVA Object Relational Mapping Evaluator"/>
            <WorkCard role="Intern" company="Orange Business Services"
                date="Apr 2020 - Present"
                reponsibility="Create JAVA Object Relational Mapping Evaluator"/>
            <WorkCard role="Intern" company="Orange Business Services"
                date="Apr 2020 - Present"
                reponsibility="Create JAVA Object Relational Mapping Evaluator"/>
        </WorkExperiences>
        <VolunteeringExperiences>
            <h1> Volunteering Experience </h1>
            <VolunteeringCard role="Embassador" community="Women Techmakers"
                date="0ct 2018 - Present"
                experience="It is a long established fact that a reader will be distracted by the readable content."/>
            <VolunteeringCard role="Embassador" community="Women Techmakers"
                date="0ct 2018 - Present"
                experience="It is a long established fact that a reader will be distracted by the readable content."/>
            <VolunteeringCard role="Embassador" community="Women Techmakers"
                date="0ct 2018 - Present"
                experience="It is a long established fact that a reader will be distracted by the readable content."/>
            <VolunteeringCard role="Embassador" community="Women Techmakers"
                date="0ct 2018 - Present"
                experience="It is a long established fact that a reader will be distracted by the readable content."/>
        </VolunteeringExperiences>

        </StyledSection>
    )
}

export default Section
