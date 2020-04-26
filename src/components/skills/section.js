import React from "react"
import styled from 'styled-components'

import ProSkills from './proSkill'
import SoftSkill from './softSkill'

const StyledSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5rem 20rem;
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
`;

const SoftSkillsContainer = styled.div`
    width: 50%;
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
            <SoftSkill/>
        </SoftSkillsContainer>

        </StyledSection>
    )
}

export default Section
