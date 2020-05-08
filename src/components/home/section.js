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
`;

const StyledPicture = styled.div`
    width: 35vh;
    height: 35vh;
    border-radius: 50%;
    border-style: solid;
    border-color: black;
    border-width: 20px;
    padding: 16px;
`;

const PictureContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
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
