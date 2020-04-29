import React from "react"

import styled from 'styled-components'
import { bordo, gray } from "../../styles/colors";


const StyledCard = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 16px;
`

const DividerContainer = styled.div`
    margin-top: -15rem;
`;

const Divider = styled.div`
    width: 0.3rem;
    height: 16rem;
    background: ${gray};
    position: absolute;
    border-radius: 8px;
    z-index: 1;
`;

const BackgroundEclipse = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background: ${gray};
    border-radius: 100%;
    position: absolute;
    margin-left: -0.6rem;
    margin-top: 7rem;
    z-index: 2;
`;
const FrontEclipse = styled.div`
    width: 0.8rem;
    height: 0.8rem;
    background: ${bordo};
    border-radius: 100%;
    position: absolute;
    margin-left: -0.3rem;
    margin-top: 7.35rem;
    z-index: 3;
`;
const CardContainer = styled.div`
    background: ${gray};
    padding: 1.5rem;
    width: 26rem;
    height: 10rem;
    margin-left: 4rem;
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
            <DividerContainer>
                <Divider/>
                <BackgroundEclipse/>
                <FrontEclipse/>
            </DividerContainer>
            <CardContainer>
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
            </CardContainer>
        </StyledCard>
    )
}

export default Card
