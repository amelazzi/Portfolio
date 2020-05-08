import React from "react"

import styled from 'styled-components'
import { dark } from "../../styles/colors";

const StyledCard = styled.div`
    background: ${dark};
    padding: 2rem;
    width: 31%;
    color: white;
    text-align: center;
    box-shadow: -1rem 0 3rem ${dark};
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
    @media (max-width: 35em) {
        width: 100%;
        margin-bottom: 2rem;
    }
`;

const IconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Card = ({icon, title, resume}) => {
    return(
        <StyledCard>
            <IconContainer>
                <img src={icon}/>
            </IconContainer>
            <h2> {title} </h2>
            <p> {resume} </p>
        </StyledCard>
    )
}

export default Card
