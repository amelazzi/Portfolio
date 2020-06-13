import React from "react"

import styled from 'styled-components'
import { bordo, gray } from "../../styles/colors";


const StyledCard = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 16px;
    @media (max-width: 48em) {
        flex-direction: row-reverse;
        margin-bottom: 2rem;
        margin-top: 0;
    }
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
    width: 45%;
    margin-right: 3rem;
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
    @media (max-width: 48em) {
        width: 100%;
        height: auto;
        margin-left: 2rem;
        margin-right: 0;
    }

    @media (min-width: 48.1em) and (max-width: 62em) {
        width: 42.45%;
        height: 12rem;
    }

    @media (min-width: 62.1em) and (max-width: 75em)  {
        width: 45.9%;
        height: 12rem;
    }
    @media (min-width: 75.5em) and (max-width: 85.5em) {
        width: 44.6%;
        height: 12rem;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;


const reverseCard = ({school, date, degree, field}) => {
    return(
        <StyledCard>
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
            <DividerContainer>
                <Divider/>
                <BackgroundEclipse/>
                <FrontEclipse/>
            </DividerContainer>
        </StyledCard>
    )
}

export default reverseCard
