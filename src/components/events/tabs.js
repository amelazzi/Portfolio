import React, { Component } from 'react'
import styled from 'styled-components'
import { gray, bordo } from "../../styles/colors"

import BigCard from './bigCard'
import SmallCard from './smallCard'

const TabsBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3rem;

    button{
        margin: 0.5rem 2rem;
        font-size: 18px;
        font-weight: 200;
        color: white;
        background: transparent;
        border: none;
        border-bottom: 3px solid ${gray};
        :hover{
            border-bottom: 3px solid ${bordo};
            cursor: pointer;
        }
    }
    @media (max-width: 48em) {
        button{
            margin: 0.5rem 1rem;
        }
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-start;
    position: relative;
    margin-top: 2rem;

    @media (max-width: 48em) {
        justify-content: center;
    }
    @media (min-width: 48.1em) and (max-width: 62em) {
        align-items: center;
        justify-content: space-around;
    }

    @media (min-width: 62.1em) and (max-width: 75em)  {
        align-items: center;
        justify-content: space-between;
    }

    @media (min-width: 75.1em) and (max-width: 85.5em) {
        align-items: center;
        justify-content: space-between;
    }
`;

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabs: []
        };
        this.state.activeTab = 1
    }

    render() {
        return (
            <>
                <TabsBtn>
                    <button onClick={() => this.setState({ activeTab: 1 })}> 
                        All Events</button>
                    <button onClick={() => this.setState({ activeTab: 2 })}> 
                        Events </button>
                    <button onClick={() => this.setState({ activeTab: 3 })}> 
                        Hackathons</button>
                </TabsBtn>
                
                <div>
                    {this.state.activeTab === 1 ? 
                    (
                        <CardContainer>
                            <BigCard event="ArabWic Lebanon" background="white"
                                picture={require("../../images/arabwic-logo.png")}
                                edition="2017" role="Participant"/>
                            <SmallCard event="WTM Summit" background="white"
                                picture={require("../../images/wtm-logo.png")}
                                edition="2017" role="Invited by Google"
                                marginLeft="2rem" marginRight="2rem"/>
                            <BigCard event="GDD India" background="white"
                                picture={require("../../images/gdd-india-logo.png")}
                                edition="2018" role="Participant"/>
                            <SmallCard event="Google I/O" background="#536DFE"
                                picture={require("../../images/io-2018-logo.png")}
                                edition="2018" role="Invited by Google"/>
                            <SmallCard event="LegalTech Algiers" background="black"
                                edition="2018" role="Participant" 
                                picture={require("../../images/legalTech-logo.png")}
                                marginTop="-8rem" marginLeft="2rem" marginRight="2rem"/>
                            <SmallCard event="Hajj Hackathon" background="white"
                                picture={require("../../images/hajj-hackathon-logo.png")}
                                edition="2018" role="Organizer / Participant"/>
                             <SmallCard event="Hack UPC" background="#E5E5E5"
                                picture={require("../../images/hack-upc-logo.png")}
                                edition="2018" role="Participant"/>
                            <BigCard event="FireBase Summit" background="white"
                                picture={require("../../images/firebase-summit18-logo.png")}
                                edition="2018" role="Invited by WTM" 
                                marginTop="-8rem" marginLeft="2rem" marginRight="2rem"/>
                            <SmallCard event="Junction" background="black"
                                picture={require("../../images/junction-logo.png")}
                                edition="2018" role="Participant"/>
                            <BigCard event="Start Hack" background="white"
                                picture={require("../../images/start-hack-logo.png")}
                                edition="2018" role="Participant" marginRight="2rem"/>
                            <SmallCard event="Oman Ideathon" background="white"
                                picture={require("../../images/oman-ideathon-logo.png")}
                                edition="2018" role="Google Organizer"/>
                            <BigCard event="Google I/O" background="#5565FF"
                                picture={require("../../images/io-2019-logo.png")}
                                edition="2019" role="Invited by Google" 
                                marginTop="-22rem" marginLeft="41rem"/>
                            <SmallCard event="FireBase Summit" background="#2C3849"
                                picture={require("../../images/firebase-summit19-logo.png")}
                                edition="2019" role="Invited by WTM"
                                marginTop="-8rem" marginLeft="20.5rem"/>
                        </CardContainer>
                    ) : this.state.activeTab === 2?
                    (
                        <CardContainer>
                            <BigCard event="ArabWic Lebanon" background="white"
                                picture={require("../../images/arabwic-logo.png")}
                                edition="2017" role="Participant"/>
                            <SmallCard event="WTM Summit" background="white"
                                picture={require("../../images/wtm-logo.png")}
                                edition="2017" role="Invited by Google"
                                marginLeft="2rem" marginRight="2rem"/>
                            <BigCard event="GDD India" background="white"
                                picture={require("../../images/gdd-india-logo.png")}
                                edition="2018" role="Participant"/>
                            <SmallCard event="Google I/O" background="#536DFE"
                                picture={require("../../images/io-2018-logo.png")}
                                edition="2018" role="Invited by Google"/>
                            <SmallCard event="FireBase Summit" background="white"
                                picture={require("../../images/firebase-summit18-logo.png")}
                                edition="2018" role="Invited by WTM"
                                marginTop="-8rem" marginLeft="2rem" marginRight="2rem"/>
                            <SmallCard event="Oman Ideathon" background="white"
                                picture={require("../../images/oman-ideathon-logo.png")}
                                edition="2018" role="Google Organizer"/>
                             <SmallCard event="Google I/O" background="#5565FF"
                                picture={require("../../images/io-2019-logo.png")}
                                edition="2019" role="Invited by Google" />
                            <BigCard event="FireBase Summit" background="#2C3849"
                                picture={require("../../images/firebase-summit19-logo.png")}
                                edition="2019" role="Invited by WTM"
                                marginTop="-8rem" marginLeft="2rem" marginRight="2rem"/>
                        </CardContainer>
                    ):
                    (
                        <CardContainer>
                            <SmallCard event="LegalTech Algiers" background="black"
                                edition="2018" role="Participant" 
                                picture={require("../../images/legalTech-logo.png")}/>
                            <BigCard event="Hajj Hackathon" background="white"
                                picture={require("../../images/hajj-hackathon-logo.png")}
                                edition="2018" role="Organizer / Participant"
                                marginLeft="2rem"/>
                            <SmallCard event="Junction" background="black"
                                picture={require("../../images/junction-logo.png")}
                                edition="2018" role="Participant"
                                marginLeft="2rem"/>
                            <SmallCard event="Hack UPC" background="#E5E5E5"
                                picture={require("../../images/hack-upc-logo.png")}
                                edition="2018" role="Participant"
                                marginTop="-8rem"/>
                            <BigCard event="Start Hack" background="white"
                                picture={require("../../images/start-hack-logo.png")}
                                edition="2018" role="Participant" 
                                marginTop="-8rem" marginLeft="22.5rem"/>
                        </CardContainer>
                    )}
                </div>
            </>
        );
    }
}
export default Tabs;