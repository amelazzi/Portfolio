import React from "react"

import styled from 'styled-components'
import { bordo } from "../../styles/colors";

const StyledSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 20rem;
    padding-top: 5rem;
    height: 80vh;
    color: white;
    @media (max-width: 48em) {
        flex-direction: column-reverse;
        padding: 2rem;
        padding-top: 6rem;
        height: auto;
    }

    @media (min-width: 48.1em) and (max-width: 62em) {
        padding: 2rem;
        padding-top: 6rem;
        height: auto;
    }

    @media (min-width: 62.1em) and (max-width: 75em)  {
        padding: 6rem;
        padding-top: 11rem;
        height: 100vh;
    }

    @media (min-width: 75.1em) and (max-width: 85.5em)  {
        padding: 1rem 10rem;
        padding-top: 7rem;
        height: 100vh;
    }
`;

const Information = styled.div`
    width: 40%;
    padding: 16px 0px;
    h1{
        font-size: 64px;
        margin: 16px 0px;
    }
    h2{
        font-size: 26px;
    }
    p{
        font-size: 18px; 
    }
    @media (max-width: 48em){
        width: 100%;
        padding: 0;
        margin-top: 32px;
    }

    @media (min-width: 48.1em) and (max-width: 62em) {
        width: 60%;
    }
    @media (min-width: 62.1em) and (max-width: 75em)  {
        width: 55%;
    }
    @media (min-width: 75.1em) and (max-width: 85.5em)  {
        width: 55%;
    }
`;

const StyledHello = styled.div`
    background: ${bordo};
    height: 2rem;
    width: 5.5rem;
    padding: 4px 16px;
    
    border-radius: 16px 16px 16px 0px;
    p{
        font-size: 16px;
        padding: 0;
        margin: 0;
    }
    @media (max-width: 48em) {
        width: 6rem;
    }
`;

const StyledPicture = styled.div`
    max-width: 35vh;
    max-height: 35vh;
    min-width: 35vh;
    min-height: 35vh;
    border-radius: 50%;
    border-style: solid;
    border-color: black;
    border-width: 20px;
    padding: 16px;
    @media (max-width: 62em) {
        width: 50vh;
        height: 50vh;
    } 
    @media (min-width: 62.1em) and (max-width: 85.5em)  {
        width: 60vh;
        height: 60vh;
    }
`;

const PictureContainer = styled.div`
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
    border-radius: 50%;
    margin-top: -4px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: fill;
    }
`;

const Section = () => {
    return(
        <StyledSection id="home">
            <Information>
                <StyledHello>
                    <p> Hello I'm </p>
                </StyledHello>
                <h1> Amel AZZI </h1>
                <h2> Software Engineer </h2>
                <p> You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.
                You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures. </p>
            </Information>
            <StyledPicture>
                <PictureContainer>
                    <img src={require("../../images/profile-picture.png")} />
                </PictureContainer>
            </StyledPicture>
        </StyledSection>
    )
}

export default Section
