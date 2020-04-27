import React from "react"

import styled from 'styled-components'
import { bordo, gray } from "../../styles/colors";

const StyledCard = styled.div`
    background: ${gray};
    padding: 1.5rem;
    width: 26rem;
    height: 10rem;
    color: white;
    text-align: center;
    -webkit-box-shadow: -1rem 0 3rem #000;
    box-shadow: -1rem 0 3rem #000;
    h1{
        font-size: 22px !important;
        margin: 0 !important;
    }
    h4{
        margin: 0;
        margin-top: 16px;
        font-size: 16px;
        font-weight: 500;
        color: ${bordo};
    }
    p{
        margin: 0;
        font-size: 16px;
        margin-left: 6px;
    }
    h5{
        margin: 0;
        font-size: 16px;
        font-weight: 700;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;


const Card = ({school, date, degree, field}) => {
    return(
        <StyledCard>
            <h1> {school} </h1>
            <h4> {date} </h4>
            <InfoContainer>
                <h5> Degree:  </h5>
                <p> {degree} </p>
            </InfoContainer>
            <InfoContainer>
                <h5> Field:  </h5>
                <p> {field} </p>
            </InfoContainer>
        </StyledCard>
    )
}

export default Card
