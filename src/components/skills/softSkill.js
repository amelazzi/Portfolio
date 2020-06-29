import React from "react"
import styled from 'styled-components'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-right: 0rem;
    width: 7rem;
    p{
        font-size: 16px;
        margin-top: 8px;
    }
    @media (max-width: 48em) {
        width: 50%;
    }
`;

const StyledCircularProgressbar = styled(CircularProgressbar)`
    width: 7rem;
    height: 7rem;
`;

const SoftSkill = ({name, progress}) => {
    return(
        <StyledSkill>
            <StyledCircularProgressbar strokeWidth = "5"
                value={progress} text={`${progress}%`} 
                styles={buildStyles({
                    textSize: '13px',
                    pathColor: `#FF4F5B`,
                    textColor: 'white',
                    trailColor: '#1E1E24',
                    backgroundColor: '#1E1E24',
                  })}/>
            <p> {name} </p>
        </StyledSkill>
    )
}

export default SoftSkill
