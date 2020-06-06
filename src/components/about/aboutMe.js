import React from "react"

import styled from 'styled-components'
import { bordo, gray } from "../../styles/colors"
import resumePDF from "../../Resume_Amel_AZZI.pdf"

const StyledSection = styled.div`
    background: ${gray};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: white;
    @media (max-width: 48em) {
        flex-direction: column;
    }
`;

const PictureContainer = styled.div`
    width: 50%;
    height: 35vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media (max-width: 48em) {
        width: 100%;
        height: auto;
    }
`;

const OverView = styled.div`
    width: 45%;
    h1{
        font-size: 32px;
        margin: 0;
        padding: 0;
    }
    p{
        font-size: 18px; 
        margin-top: 16px;
    }
    @media (max-width: 48em) {
        width: 100%;
        margin-top: 2rem;
    }
`;

const SkillsContainer = styled.div`
    display: flex;
    justify-content: space-start;
    flex-wrap: wrap;
`;

const Skill = styled.div`
    border-style: solid;
    border-color: ${bordo};
    border-radius: 5px;
    border-width: 3px;
    padding: 4px 8px;
    margin-right: 16px;
    margin-bottom: 16px;
    :last-child{
        margin-right: 0;
    }
`;

const DownloadCV = styled.a`
    width: 11rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${bordo};
    border-radius: 24px;
    padding: 8px 20px;
    border: none;
    color: white;
    font-weight: 600;
    margin-top: 20px;
    text-decoration: none;
`;

const IconContainer = styled.div`
    width: 1rem;
    height: 1rem;
    margin-left: 4px;
    img{
        width: 100%;
        height: 100;
        object-fit: contain;
    }
`;


const AboutMe = () => {
    return(
        <StyledSection>
            <PictureContainer>
                <img src={require("../../images/about-picture.png")}/>
            </PictureContainer>
            <OverView>
                <h1> ABOUT ME </h1>
                <p> Hello, I’m Amel, Software Engineer base at Nantes - Paris. I have a rich experience in Web/Mobile design & building. I’m also good at  </p>
                <SkillsContainer>
                    <Skill> FrontEnd </Skill>
                    <Skill> BackEnd </Skill>
                    <Skill> Databases </Skill>
                    <Skill> ORMs </Skill>
                    <Skill> GitHub </Skill>
                    <Skill> Graphic Design </Skill>
                </SkillsContainer>
                <DownloadCV href={resumePDF} download> 
                    Download CV 
                    <IconContainer>
                        <img src={require("../../images/download-icon.png")} />
                    </IconContainer>    
                </DownloadCV>{` `}
            </OverView>
        </StyledSection>
    )
}

export default AboutMe
