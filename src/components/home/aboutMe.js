import React from "react"

import styled from 'styled-components'
import { bordo, gray } from "../../styles/colors"
import resumePDF from "../../Resume_Amel_AZZI.pdf"
import aboutPicture from "../../images/about-picture.png"
import DownloadIcon from "../../images/download-icon.png"

const StyledSection = styled.div`
    background: ${gray};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 10rem;
    width: 100%;
    color: white;
    @media (max-width: 48em) {
        flex-direction: column;
        padding: 2rem;
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

    @media (min-width: 48.1em) and (max-width: 62em) {
        width: 45%;
        height: auto;
    }
    @media (min-width: 62.1em) and (max-width: 75em)  {
        width: 45%;
        height: auto;
    }
    @media (min-width: 75.1em) and (max-width: 85.5em)  {
        width: 45%;
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
                <img src={aboutPicture} alt="about-pic"/>
            </PictureContainer>
            <OverView>
                <h1> ABOUT ME </h1>
                <p> Hello, I am Software Engineer with passion for building Web/Mobile Software with solid architecture and beautiful UI.</p>
                <SkillsContainer>
                    <Skill> Mobile Development </Skill>
                    <Skill> Web Development</Skill>
                    <Skill> UI Design</Skill>
                    <Skill> Databases </Skill>
                    <Skill> ORMs </Skill>
                    <Skill> Git </Skill>
                    <Skill> Graphic Design </Skill>
                </SkillsContainer>
                <DownloadCV href={resumePDF} download> 
                    Download CV 
                    <IconContainer>
                        <img src={DownloadIcon} alt="download-icon"/>
                    </IconContainer>    
                </DownloadCV>{` `}
            </OverView>
        </StyledSection>
    )
}

export default AboutMe
