import React from "react"
import styled from 'styled-components'

import Card from './card'
import Form from './form'
import AddressIcon from "../../images/address-icon.png"
import EmailIcon from "../../images/mail-icon.png"
import MobileIcon from "../../images/phone-icon.png"

import backgroundImg from "../../images/world-map.png"

const StyledSection = styled.div`
    padding: 4rem 10rem;
    background-image: url(${backgroundImg});
    background-size: contain;
    background-repeat: no-repeat;
    color: white;
    text-align: center;
    h1{
        font-size: 32px;
        margin: 0 !important;
        margin-bottom: 6rem;
        padding: 0;
    }
    @media (max-width: 48em) {
        padding: 4rem 2rem;
        h1{
            margin-bottom: 4rem;
        }
    }
    @media (min-width: 48.1em) and (max-width: 62em) {
        padding: 4rem 2rem;
        padding-bottom: 4rem;
    }

    @media (min-width: 62.1em) and (max-width: 75em)  {
        padding: 4rem 6rem;
        padding-bottom: 4rem;
    }
    @media (min-width: 75.1em) and (max-width: 85.5em) {
        padding: 4rem 10rem;
        padding-bottom: 4rem;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    @media (max-width: 48em) {
        flex-direction: column;
    }
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    @media (max-width: 48em) {
        flex-direction: column;
        margin-top: 2rem;
    }
`;

const Maps = styled.div`
    width: 48%;
    @media (max-width: 48em) {
        width: 100%;
        height: 50vh;
        margin-top: 2rem;
    }
`;

const Section = () => {
    return(
        <StyledSection id="contact">
            <h1> CONTACT ME</h1>
            <CardsContainer>
                <Card icon={AddressIcon} title="Address"
                    info="Nantes 44000, France"/>
                <Card icon={EmailIcon} title="Email"
                    info="amelias.azzi@gmail.com"/>
                <Card icon={MobileIcon} title="Mobile"
                    info="+33 669 57 35 82"/>
            </CardsContainer>
            <FormContainer>
                <Form/>
                <Maps>
                    <iframe
                        src="https://maps.google.com/maps?q=Nantes%2044000&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="my-location"
                        style={{ border: 0, margin: 0 }}>
                    </iframe>
                </Maps>
            </FormContainer>
        </StyledSection>
    )
}

export default Section
