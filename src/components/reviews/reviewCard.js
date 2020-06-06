import React from "react"

import styled from 'styled-components'
import { dark, gray, bordo } from "../../styles/colors";

const StyledCard = styled.div`
    display: flex;
    justify-content: flex-start;
    background: ${gray};
    margin: 4rem 2rem;
    padding: 2rem;
    color: white;
    -webkit-box-shadow: -1rem 0 3rem #000;
    box-shadow: -1rem 0 3rem #000;
    @media (max-width: 48em) {
        flex-direction: column;
        align-items: center;
        margin: 0rem;
        margin-top: 2rem;
        box-shadow: none;
    }
`;

const IconContainer = styled.div`
    max-width: 4rem;
    max-height: 4rem;
    min-width: 4rem;
    min-height: 4rem;
    background: ${bordo};
    border-radius: 50%;
    img{
        width:100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 1.5rem;
    text-align: left;
    p{  
        display: block;
        font-size: 16px;
        padding: 0;
        margin: 0;
    }
    h1{
        color: ${bordo};
        font-size: 26px !important;
        padding-top: 1rem !important;
        padding-bottom: 0.4rem !important;
    }
    @media (max-width: 48em) {
        margin-left: 0;
    }
`;

const Card = ({picture,review, fullName, role, company}) => {
    return(
        <StyledCard>
            <IconContainer>
                <img src={picture} />
            </IconContainer>
            <Container>
                <p> {review} </p>
                <h1> {fullName} </h1>
                <p> {role} at {company}</p>
            </Container>
        </StyledCard>
    )
}

export default Card
