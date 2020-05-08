import React from "react"
import Slider from 'react-styled-carousel'

import styled from 'styled-components'

import ReviewCard from './reviewCard'
import { dark } from "../../styles/colors";


const StyledSection = styled.div`
    padding: 4rem 20rem;
    background: ${dark};
    color: white;
    text-align: center;
    h1{
        font-size: 32px;
        margin: 0 !important;
        margin-bottom: 6rem;
        padding: 0;
    }
    @media (max-width: 35em) {
        padding: 4rem 2rem;
        h1{
            margin-bottom: 4rem;
        }
    }
`;




const Section = () => {
    return(
        <StyledSection>
            <h1> REVIEWS</h1>
            <Slider autoSlide={false} cardsToShow={1}>
                <ReviewCard review="You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving. You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving.
                        You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving.
                        You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving."
                    fullName="Amel AZZI"
                    role="Developper"
                    company="Orange"/>
                <ReviewCard review="You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving. You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving.
                    You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving.
                    You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving."
                fullName="Adel AZZI"
                role="Developper"
                company="Orange"/>
            </Slider>
        </StyledSection>
    )
}

export default Section
