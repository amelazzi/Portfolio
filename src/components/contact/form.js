import React from "react"

import styled from 'styled-components'
import { dark, gray, bordo } from "../../styles/colors";

const StyledForm = styled.div`
    width: 48%;
`;

const FullName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledInput = styled.input`
    width: 48%;
    background: transparent;
    outline: none;
    border: 2px solid white;
    border-radius: 5px;
    padding: 8px 16px;
    margin-bottom: 8px;
    color: white;
    font-size: 16px;
    ::placeholder{
        color: white;
        font-size: 16px;
    }  
`;

const EmailInput = styled(StyledInput)`
    width: 100%;
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 20vh;
    background: transparent;
    outline: none;
    border: 2px solid white;
    border-radius: 5px;
    padding: 8px 16px;
    margin-bottom: 8px;
    color: white;
    font-size: 16px;
    ::placeholder{
        color: white;
        font-size: 16px;
    } 
`;

const StyledSubmmit = styled.input`
    width: 100%;
    background: ${bordo};
    outline: none;
    border-radius: 24px;
    text-align: center;
    padding: 8px;
    border: none;
    color: white;
    font-weight: 600;
    margin-top: 8px;
    :hover{
        cursor: pointer;
    }
`;


const Form = ({}) => {
    return(
        <StyledForm>
            <FullName>
                <StyledInput placeholder="First Name"/>
                <StyledInput placeholder="Last Name"/>
            </FullName>
            <EmailInput placeholder="Your Email"/>
            <StyledTextArea placeholder="Your Message"/>
            <StyledSubmmit type="submit" value="Send Message"/>
        </StyledForm>
    )
}

export default Form