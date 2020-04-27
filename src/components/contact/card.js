import React from "react"

import styled from 'styled-components'
import { dark, gray, bordo } from "../../styles/colors";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${gray};
    padding: 2rem;
    width: 30%;
    color: white;
    text-align: center;
    -webkit-box-shadow: -1rem 0 3rem #000;
    box-shadow: -1rem 0 3rem #000;
    h1{
        font-size: 26px !important;
        margin: 0;
        padding: 0;
    }
    p{
        text-align: left;
        font-size: 16px;
        padding: 0;
        margin: 0;
        margin-top: 8px;
    }
`;

const IconContainer = styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    border-style: solid;
    border-color: ${bordo};
    border-width: 4px;
    margin-bottom: 2rem;
    position: relative;
    img{
        width:30%;
        height: 30%;
        object-fit: contain;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Card = ({icon, info}) => {
    return(
        <StyledCard>
            <IconContainer>
                <img src={icon}/>
            </IconContainer>
            <h1> Email </h1>
            <p> {info} </p>
        </StyledCard>
    )
}

export default Card
