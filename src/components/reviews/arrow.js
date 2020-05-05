import React from "react"

import styled from 'styled-components'
import { dark, gray } from "../../styles/colors";

const StyledLeftArrow = styled.div`
    width: 3rem;
    height: 3rem;
    background: ${gray};
    box-shadow: -1rem 0 3rem ${dark};
    position: relative;
    img{
        width: 30%;
        height: 30%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Arrow = ({icon}) =>{
    return(
        <StyledLeftArrow>
            <img src={icon}/>
        </StyledLeftArrow>
    )
}

export default Arrow;
