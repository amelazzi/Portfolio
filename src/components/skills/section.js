import React from "react"
import styled from 'styled-components'

import ProSkills from './proSkill'
import SoftSkill from './softSkill'

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
`;

const ProSkillsContainer = styled.div`
    width: 50%;
    margin-top: 1rem;
`;

const SoftSkillsContainer = styled.div`
    width: 45%;
    margin-top: 1rem;
`;

const SoftSkills = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0rem 4.5rem;
`;

const Section = () => {
    return(
        <StyledSection>
        <ProSkillsContainer>
            <h1> Professional Skills </h1>
            <ProSkills name="Java" progress="70%"/>
            <ProSkills name="Java" progress="70%"/>
            <ProSkills name="Java" progress="70%"/>
            <ProSkills name="Java" progress="70%"/>
            <ProSkills name="Java" progress="70%"/>
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
