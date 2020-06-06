import React from "react"
import styled from 'styled-components'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import {gray, bordo} from '../../styles/colors'


const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 16px;
        margin-top: 8px;
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
