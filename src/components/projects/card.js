import React from "react"

import styled from 'styled-components'
import { dark } from "../../styles/colors";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: ${dark};
    box-shadow: -1rem 0 3rem ${dark};
    padding: 2rem;
    margin-bottom: 2rem;
    margin-right: 2rem;
    :nth-child(3n){
        margin-right: 0rem;
    }
    :hover{
        cursor: pointer;
    }
    width: 31%;

    @media (max-width: 48em) {
        width: 100%;
    }

    @media (min-width: 48.1em) and (max-width: 62em){
        width: 45%;
        margin-right: 0rem;
    }
    @media (min-width: 62.1em) and (max-width: 85.5em)  {
        margin-right: 0rem;
    }
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    h1{
        font-size: 32px;
        margin: 0;
        padding: 0;
    }
    h2{
        text-align: left;
        font-size: 26px;
        margin-top: 28px;
    }
    p{
        text-align: left;
        font-size: 18px; 
        margin: 0;
        padding: 0;
    }
    @media (max-width: 48em) {
        width: 100%;
        margin-bottom: 2rem;
        align-items: center;
        p{
            text-align: center;
        }
    }
`;

const IconContainer = styled.div`
    width: 6rem;
    height: 6rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const StacksContainer = styled.div`
    display: flex;
    justify-content: space-start;
    flex-wrap: wrap;
    margin-top: auto;
    @media (max-width: 48em) {
        justify-content: space-around;
    }
`;


const Card = ({icon, title, resume, stacks}) => {
    return(
       <StyledDiv>
            <StyledCard>
                <IconContainer>
                    <img src={icon} alt="project-logo"/>
                </IconContainer>
                <h2> {title} </h2>
                <p> {resume} </p>
            </StyledCard>
            <StacksContainer>
                {stacks}
            </StacksContainer>
       </StyledDiv>
    )
}

export default Card
