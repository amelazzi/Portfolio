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
`;

const WorkExperiences = styled.div`
    width: 45%;
    margin-top: 1rem;
`;

const VolunteeringExperiences = styled.div`
    width: 45%;
    margin-top: 1rem;
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
