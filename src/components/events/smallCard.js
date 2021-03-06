import React from "react"

import styled from 'styled-components'
import { bordo } from "../../styles/colors";

const StyledCard = styled.div`
    width: 18.5rem;
    height: 12rem;
    padding: 1.5rem;
    background: ${props=>props.background};
    border-radius: 16px;
    margin-bottom: 2rem;
    margin-top: ${props=>props.marginTop};
    margin-left: ${props=>props.marginLeft};
    margin-right: ${props=>props.marginRight};
    align-items: center;
    :hover{
        background: ${bordo};
        opacity: 0.8;
        cursor: pointer;
        h1,h2,p{
            display: block;
        }
        img{
            display: none;
        }
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media (max-width: 48em) {
        margin: 0;
        margin-bottom: 2rem;
    }

    @media (min-width: 48.1rem) and (max-width: 85.5em) {
        margin-bottom: 2rem;
        padding: 0.8rem;
        width: 17rem;
        height: 10rem;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:1rem;
    h1,h2,p{
        display: none;
        margin: 0;
    }

    p{
        font-size: 18px;
        font-weight: 500;
        margin-top: 16px;
    }
`;

const EditionContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    h2{
        font-size: 20px;
        font-weight: 700;
        margin-top: 16px;
    }
    p{
        margin-left: 6px;
    }
`;

const Card = ({event, edition, role, marginTop, marginLeft, marginRight, picture, background}) => {
    return(
        <StyledCard background={background} marginTop={marginTop} marginLeft={marginLeft} marginRight={marginRight}>
            <img src={picture} alt="event-logo"/>
            <InfoContainer>
                <h1> {event} </h1>
                <EditionContainer>
                    <h2> Edition:  </h2>
                    <p> {edition} </p>
                </EditionContainer>
                <p> {role} </p>
            </InfoContainer>
        </StyledCard>
    )
}

export default Card
