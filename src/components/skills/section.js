import React from "react"
import styled from 'styled-components'

import ProSkills from './proSkill'
import SoftSkill from './softSkill'
import { gray } from "../../styles/colors";

const StyledSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4rem 20rem;
    color: white;
    h1{
        text-align: center;
        font-size: 32px;
        margin: 0;
        margin-bottom: 4rem;
        padding: 0;
    }
    @media (max-width: 48em) {
        flex-direction: column;
        padding: 2rem;
        h1{
            margin-bottom: 1rem;
        }
    }
    @media (min-width: 48.1em) and (max-width: 62em) {
        padding: 4rem 2rem;
    }
    @media (min-width: 62.1em) and (max-width: 75em)  {
        padding: 4rem 6rem;
    }
    @media (min-width: 75.1em) and (max-width: 85.5em)  {
        padding: 4rem 10rem;
    }
`;

const ProSkillsContainer = styled.div`
    width: 50%;
    @media (max-width: 48em) {
        width: 100%;
    }
`;

const SoftSkillsContainer = styled.div`
    width: 45%;
    @media (max-width: 48em) {
        width: 100%;
        margin-top: 4rem;
    }
`;

const SoftSkills = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0rem 4.5rem;

    @media (max-width: 48em) {
        padding: 0rem 2rem;
        margin-top: 2rem;
    }

    @media (min-width: 48.1em) and (max-width: 62em) {
        padding: 0rem 2rem;
    }

    @media (min-width: 75.1em) and (max-width: 85.5em)  {
        padding: 0rem 2rem;
    }
`;

const Section = () => {
    return(
        <StyledSection id="skills">
        <ProSkillsContainer>
            <h1> Professional Skills </h1>
            <ProSkills name="Kotlin" progress="65%"/>
            <ProSkills name="React JS" progress="50%"/>
            <ProSkills name="Databases" progress="70%"/>
            <ProSkills name="ORMs" progress="75%"/>
            <ProSkills name="Graphic Design" progress="45%"/>
        </ProSkillsContainer>
        <SoftSkillsContainer>
            <h1> Soft Skills </h1>
            <SoftSkills>
                <SoftSkill name="Communication" progress="70"/>
                <SoftSkill name="Team Work" progress="85"/>
                <SoftSkill name="Project Management" progress="75"/>
                <SoftSkill name="Creativity" progress="80"/>
            </SoftSkills>
        </SoftSkillsContainer>

        </StyledSection>
    )
}

export default Section
