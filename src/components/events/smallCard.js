import React from "react"

import styled from 'styled-components'
import { bordo } from "../../styles/colors";

const StyledCard = styled.div`
    width: 18.5rem;
    height: 12rem;
    background: white;
    border-radius: 16px;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1,p{
        display: none;
        margin: 0;
    }

    p{
        font-size: 18px;
        font-weight: 500;
        margin-top: 16px;
    }

    :hover{
        background: ${bordo};
        opacity: 0.8;
        cursor: pointer;
        h1,p{
            display: block;
        }
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

const Card = ({event, edition, role}) => {
    return(
        <StyledCard>
            <h1> {event} </h1>
            <EditionContainer>
                <h2> Edition:  </h2>
                <p> {edition} </p>
            </EditionContainer>
            <p> {role} </p>
        </StyledCard>
    )
}

export default Card
