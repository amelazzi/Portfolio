import React from "react"
import styled from 'styled-components'

import {gray, bordo} from '../../styles/colors'


const StyledSkill = styled.div`
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-size: 16px;
        margin: 0;
        margin-bottom: 4px;
        margin-top: 16px;
        padding: 0;
    }
`;

const BackgroundBar = styled.div`
    width: 100%;
    height: 0.6rem;
    background: ${gray};
    border-radius: 8px;
`;

const ProgressiveBar = styled.div`
    width: ${props=>props.progress};
    height: 0.6rem;
    background: ${bordo};
    border-radius: 8px;
`;

const ProSkill = ({name, progress}) => {
    return(
        <StyledSkill>
            <InfoContainer>
                <p> {name} </p>
                <p> {progress} </p>
            </InfoContainer>
            <BackgroundBar>
                <ProgressiveBar progress={progress}/>
            </BackgroundBar>
        </StyledSkill>
    )
}

export default ProSkill
