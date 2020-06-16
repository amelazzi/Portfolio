import React from "react"

import styled from 'styled-components'
import { dark, gray, bordo } from "../../styles/colors";

const StyledCard = styled.div`
    background: ${gray};
    padding: 1.4rem;
    margin-bottom: 32px;
    width: 100%;
    color: white;
    -webkit-box-shadow: -1rem 0 3rem #000;
    box-shadow: -1rem 0 3rem #000;
    h4{
        font-size: 16px;
        margin-top: 16px;
        font-weight: 500;
        color: ${bordo};
    }
    h5{
        margin-top: 16px !important;
        font-size: 14px;
        color: white;
        margin:0;
    }
    p{
        text-align: left;
        font-size: 16px; 
        padding: 0;
        margin: 0;
        margin-top: -8px !important;
    }
`;

const JobConainer = styled.div`
    h1{
        font-size: 22px !important;
        margin: 0 !important;
        padding: 0;
        fon-weight: 400;
        :nth-child(2){
            margin-top: 8px !important;
            color: ${bordo};
        }
    }
`;

const VolunteeringCard = ({role, community, date, experience}) => {
    return(
        <StyledCard>
            <JobConainer>
                <h1> {role}</h1>
                <h1> {community} </h1>
            </JobConainer>
            <h4> {date} </h4>
            <p> {experience} </p>
        </StyledCard>
    )
}

export default VolunteeringCard
