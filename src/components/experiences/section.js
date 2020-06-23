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
    @media (min-width: 75.1em) and (max-width: 85.5em)  {
        padding: 0rem 10rem;
    }
`;

const WorkExperiences = styled.div`
    width: 45%;
    margin-top: 1rem;
    @media (max-width: 48em) {
        width: 100%;
    }
    @media (min-width: 48.1em) and (max-width: 85.5em) {
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
    @media (min-width: 48.1em) and (max-width: 85.5em) {
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
                reponsibility="Create Android/iOS Shared libraries using KMP"/>
            <WorkCard role="Intern" company="Ecole Superieure D'informatique"
                date="Nov - Sept 2019"
                reponsibility="Create JAVA Object Relational Mapping Evaluator"/>
            <WorkCard role="Full-Stack Web Developer" company="Gen-42"
                date="Julu - Oct 2018"
                reponsibility="Create Vitrine WebSite"/>
            <WorkCard role="FrontEnd Developer" company="Gen-42"
                date="Juin - Sept 2017"
                reponsibility="Develop a Project Management System"/>
        </WorkExperiences>
        <VolunteeringExperiences>
            <h1> Volunteering Experience </h1>
            <VolunteeringCard role="Organizer" community="She GotIT"
                date="0ct 2019 - Present"
                experience="It is a long established fact that a reader will be distracted by the readable content."/>
            <VolunteeringCard role="Embassador" community="Women Techmakers"
                date="0ct 2018 - Present"
                experience=" it's a global program that celebrates women, encouraging them to pursue and excel in technology careers"/>
            <VolunteeringCard role="Founder / Lead" community="Women Techmakers Algiers"
                date="Juin 2017 - Juin 2019"
                experience="WTM Algiers is a chapter belonging to WTM community. International Women's day is the main event"/>
            <VolunteeringCard role="Organizer" community="Google Developers Group Algiers"
                date="Sept 2015 - Present"
                experience="GDGs are created by Google in 2011, they are for developers who are interested in Google's technology"/>
        </VolunteeringExperiences>

        </StyledSection>
    )
}

export default Section
