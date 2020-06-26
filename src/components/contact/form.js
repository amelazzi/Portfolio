import React from "react"

import styled from 'styled-components'
import { bordo } from "../../styles/colors"

const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}
  

const StyledForm = styled.form`
    width: 48%;
    @media (max-width: 48em) {
        width: 100%;
    }
`;

const FullName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 48em) {
        flex-direction: column;
    }
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
    @media (max-width: 48em) {
        width: 100%;
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
    @media (max-width: 48em) {
        height: 30vh;
    }
`;

const StyledSubmmit = styled.button`
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

const Form = () => {
    const [state, setState] = React.useState({})
  
    const handleChange = e => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = e => {
      const form = e.target
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
        .then(() => alert("Thank you for sending 😄"))
        .catch(error => alert(error))
    }
    return(
        <StyledForm 
            name="contact"
            method="POST"
            data-netlify={true}
            onSubmit={handleSubmit}>
            <FullName>
                <StyledInput name="firstname" type="text" placeholder="First Name" 
                    required onChange={handleChange}/>
                <StyledInput name="lastname" type="text" placeholder="Last Name" 
                    required onChange={handleChange}/>
            </FullName>
            <EmailInput name="email" type="email" placeholder="Your Email" 
                required onChange={handleChange}/>
            <StyledTextArea name="message" placeholder="Your Message" 
                required onChange={handleChange}/>
            <StyledSubmmit type="submit"> Send Message </StyledSubmmit>
        </StyledForm>
    )
}

export default Form
export { encode }
