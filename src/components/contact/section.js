import React from "react"
import styled from 'styled-components'
import { gray } from "../../styles/colors"

import Card from './card'
import Form from './form'

const backgroundImg = require("../../images/world-map.png")

const StyledSection = styled.div`
    padding: 4rem 20rem;
    background-image: url(${backgroundImg});
    color: white;
    text-align: center;
    h1{
        font-size: 32px;
        margin: 0 !important;
        margin-bottom: 6rem;
        padding: 0;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
`;

const Maps = styled.div`
    width: 48%;
`;

const Section = () => {
    return(
        <StyledSection>
            <h1> CONTACT ME</h1>
            <CardsContainer>
                <Card icon={require("../../images/address-icon.png")}
                    info="Orange Business Services, 13 Boulevard Martin Luther King, 44300 Nantes"/>
                <Card icon={require("../../images/mail-icon.png")}
                    info="amel.azzi@orange.com"/>
                <Card icon={require("../../images/phone-icon.png")}
                    info="+33 669 57 35 82"/>
            </CardsContainer>
            <FormContainer>
                <Form/>
                <Maps>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d10832.430142311261!2d-1.5727072094177472!3d47.253600466603814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4805ef21672963b9%3A0xffd53fbbefd0123e!2sOrange%20Business%20Services%2C%2013%20Boulevard%20Martin%20Luther%20King%2C%2044300%20Nantes!3m2!1d47.2562492!2d-1.555752!5e0!3m2!1sen!2sfr!4v1588003939385!5m2!1sen!2sfr"
                        width="100%"
                        height="100%"
                        frameborder="0"
                        title="wtm-location"
                        style={{ border: 0, margin: 0 }}
                        allowfullscreen="">
                    </iframe>
                </Maps>
            </FormContainer>
        </StyledSection>
    )
}

export default Section
