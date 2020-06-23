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
    justify-content: flext-start;
    position: relative;
    margin-top: 2rem;

    @media (max-width: 48em) {
        justify-content: center;
    }
    @media (min-width: 48.1em) and (max-width: 62em) {
        align-items: center;
        justify-content: space-around;
        display: none;
    }

    @media (min-width: 62.1em) and (max-width: 75em)  {
        align-items: center;
        justify-content: space-between;
        display: none;
    }

    @media (min-width: 75.1em) and (max-width: 85.5em) {
        align-items: center;
        justify-content: space-between;
        display: none;
    }
`;

const ResponsiveCardContainer = styled.div`
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    margin-top: 2rem;
    @media (min-width: 75.1em) and (max-width: 85.5em) {
        display: flex;
    }
`;

const MeduimCardContainer = styled.div`
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    margin-top: 2rem;
    @media (min-width: 62.1em) and (max-width: 75em){
        display: flex;
    }
`;

const SmallCardContainer = styled.div`
    display: none;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    margin-top: 2rem;
    @media (min-width: 48.1em) and (max-width: 62em){
        display: flex;
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
                        <div>
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

                            <ResponsiveCardContainer>
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
                                    marginTop="-9rem" marginRight="19.5rem"/>
                                <SmallCard event="Hajj Hackathon" background="white"
                                    picture={require("../../images/hajj-hackathon-logo.png")}
                                    edition="2018" role="Organizer / Participant"
                                    marginTop="-12rem" marginLeft="39rem"/>
                                <SmallCard event="Hack UPC" background="#E5E5E5"
                                    picture={require("../../images/hack-upc-logo.png")}
                                    edition="2018" role="Participant"/>
                                <BigCard event="FireBase Summit" background="white"
                                    picture={require("../../images/firebase-summit18-logo.png")}
                                    edition="2018" role="Invited by WTM" 
                                    marginTop="-9rem" marginLeft="2rem" marginRight="2rem"/>
                                <SmallCard event="Junction" background="black"
                                    picture={require("../../images/junction-logo.png")}
                                    edition="2018" role="Participant"/>
                                <BigCard event="Start Hack" background="white"
                                    picture={require("../../images/start-hack-logo.png")}
                                    edition="2018" role="Participant" 
                                    marginRight="2rem"/>
                                <SmallCard event="Oman Ideathon" background="white"
                                    picture={require("../../images/oman-ideathon-logo.png")}
                                    edition="2018" role="Google Organizer"
                                    marginRight="19.5rem"/>
                                <BigCard event="Google I/O" background="#5565FF"
                                    picture={require("../../images/io-2019-logo.png")}
                                    edition="2019" role="Invited by Google" 
                                    marginTop="-21rem" marginLeft="39rem"/>
                                <SmallCard event="FireBase Summit" background="#2C3849"
                                    picture={require("../../images/firebase-summit19-logo.png")}
                                    edition="2019" role="Invited by WTM"
                                    marginTop="-9rem" marginLeft="19.5rem"/>  
                            </ResponsiveCardContainer>
                            
                            <MeduimCardContainer>
                                <BigCard event="ArabWic Lebanon" background="white"
                                    picture={require("../../images/arabwic-logo.png")}
                                    edition="2017" role="Participant"/>
                                <SmallCard event="WTM Summit" background="white"
                                    picture={require("../../images/wtm-logo.png")}
                                    edition="2017" role="Invited by Google"/>
                                <BigCard event="GDD India" background="white"
                                    picture={require("../../images/gdd-india-logo.png")}
                                    edition="2018" role="Participant"/>
                                <SmallCard event="Google I/O" background="#536DFE"
                                    picture={require("../../images/io-2018-logo.png")}
                                    edition="2018" role="Invited by Google"/>
                                <SmallCard event="LegalTech Algiers" background="black"
                                    edition="2018" role="Participant" 
                                    picture={require("../../images/legalTech-logo.png")}
                                    marginTop="-9rem" marginRight="18.5rem"/>
                                <SmallCard event="Hajj Hackathon" background="white"
                                    picture={require("../../images/hajj-hackathon-logo.png")}
                                    edition="2018" role="Organizer / Participant"
                                    marginTop="-12rem" marginLeft="37.5rem"/>
                                <SmallCard event="Hack UPC" background="#E5E5E5"
                                    picture={require("../../images/hack-upc-logo.png")}
                                    edition="2018" role="Participant"/>
                                <BigCard event="FireBase Summit" background="white"
                                    picture={require("../../images/firebase-summit18-logo.png")}
                                    edition="2018" role="Invited by WTM" 
                                    marginTop="-9rem"/>
                                <SmallCard event="Junction" background="black"
                                    picture={require("../../images/junction-logo.png")}
                                    edition="2018" role="Participant"/>
                                <BigCard event="Start Hack" background="white"
                                    picture={require("../../images/start-hack-logo.png")}
                                    edition="2018" role="Participant"/>
                                <SmallCard event="Oman Ideathon" background="white"
                                    picture={require("../../images/oman-ideathon-logo.png")}
                                    edition="2018" role="Google Organizer"
                                    marginRight="19rem"/>
                                <BigCard event="Google I/O" background="#5565FF"
                                    picture={require("../../images/io-2019-logo.png")}
                                    edition="2019" role="Invited by Google" 
                                    marginTop="-21rem" marginLeft="37.5rem"/>
                                <SmallCard event="FireBase Summit" background="#2C3849"
                                    picture={require("../../images/firebase-summit19-logo.png")}
                                    edition="2019" role="Invited by WTM"
                                    marginTop="-9rem" marginLeft="18.5rem"/>
                            </MeduimCardContainer>
                        
                            <SmallCardContainer>
                                <BigCard event="ArabWic Lebanon" background="white"
                                    picture={require("../../images/arabwic-logo.png")}
                                    edition="2017" role="Participant"/>
                                <SmallCard event="WTM Summit" background="white"
                                    picture={require("../../images/wtm-logo.png")}
                                    edition="2017" role="Invited by Google"
                                    marginLeft="2rem"/>
                                <BigCard event="GDD India" background="white"
                                    picture={require("../../images/gdd-india-logo.png")}
                                    edition="2018" role="Participant"
                                    marginTop="-9rem" marginLeft="19rem"/>
                                <SmallCard event="Google I/O" background="#536DFE"
                                    picture={require("../../images/io-2018-logo.png")}
                                    edition="2018" role="Invited by Google"
                                    marginTop="-12rem" marginRight="19rem"/>
                                <SmallCard event="LegalTech Algiers" background="black"
                                    edition="2018" role="Participant" 
                                    picture={require("../../images/legalTech-logo.png")}
                                    marginRight="19rem"/>
                                <SmallCard event="Hajj Hackathon" background="white"
                                    picture={require("../../images/hajj-hackathon-logo.png")}
                                    edition="2018" role="Organizer / Participant"
                                    marginTop="-12rem" marginLeft="19rem"/>
                                <SmallCard event="Hack UPC" background="#E5E5E5"
                                    picture={require("../../images/hack-upc-logo.png")}
                                    edition="2018" role="Participant"/>
                                <BigCard event="FireBase Summit" background="white"
                                    picture={require("../../images/firebase-summit18-logo.png")}
                                    edition="2018" role="Invited by WTM"
                                    marginLeft="2rem"/>
                                <SmallCard event="Junction" background="black"
                                    picture={require("../../images/junction-logo.png")}
                                    edition="2018" role="Participant"
                                    marginTop="-9rem" marginRight="2rem"/>
                                <BigCard event="Start Hack" background="white"
                                    picture={require("../../images/start-hack-logo.png")}
                                    edition="2018" role="Participant"/>
                                <SmallCard event="Oman Ideathon" background="white"
                                    picture={require("../../images/oman-ideathon-logo.png")}
                                    edition="2018" role="Google Organizer"
                                    marginTop="-18rem" marginRight="19rem"/>
                                <BigCard event="Google I/O" background="#5565FF"
                                    picture={require("../../images/io-2019-logo.png")}
                                    edition="2019" role="Invited by Google" 
                                    marginTop="-6rem" marginRight="19rem"/>
                                <SmallCard event="FireBase Summit" background="#2C3849"
                                    picture={require("../../images/firebase-summit19-logo.png")}
                                    edition="2019" role="Invited by WTM"
                                    marginTop="-15rem" marginLeft="19rem"/>
                            </SmallCardContainer>
                        </div>
                    ) : this.state.activeTab === 2?
                    (
                        <div>
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

                            <ResponsiveCardContainer>
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
                                    marginTop="-9rem" marginLeft="2rem" marginRight="2rem"/>
                                <SmallCard event="Oman Ideathon" background="white"
                                    picture={require("../../images/oman-ideathon-logo.png")}
                                    edition="2018" role="Google Organizer"/>
                                <SmallCard event="Google I/O" background="#5565FF"
                                    picture={require("../../images/io-2019-logo.png")}
                                    edition="2019" role="Invited by Google" />
                                <BigCard event="FireBase Summit" background="#2C3849"
                                    picture={require("../../images/firebase-summit19-logo.png")}
                                    edition="2019" role="Invited by WTM"
                                    marginTop="-9rem" marginRight="19.5rem"/>
                            </ResponsiveCardContainer>
                        
                            <MeduimCardContainer>
                                <BigCard event="ArabWic Lebanon" background="white"
                                    picture={require("../../images/arabwic-logo.png")}
                                    edition="2017" role="Participant"/>
                                <SmallCard event="WTM Summit" background="white"
                                    picture={require("../../images/wtm-logo.png")}
                                    edition="2017" role="Invited by Google"/>
                                <BigCard event="GDD India" background="white"
                                    picture={require("../../images/gdd-india-logo.png")}
                                    edition="2018" role="Participant"/>
                                <SmallCard event="Google I/O" background="#536DFE"
                                    picture={require("../../images/io-2018-logo.png")}
                                    edition="2018" role="Invited by Google"/>
                                <SmallCard event="FireBase Summit" background="white"
                                    picture={require("../../images/firebase-summit18-logo.png")}
                                    edition="2018" role="Invited by WTM"
                                    marginTop="-9rem" marginLeft="1rem"/>
                                <SmallCard event="Oman Ideathon" background="white"
                                    picture={require("../../images/oman-ideathon-logo.png")}
                                    edition="2018" role="Google Organizer"
                                    marginLeft="1rem"/>
                                <SmallCard event="Google I/O" background="#5565FF"
                                    picture={require("../../images/io-2019-logo.png")}
                                    edition="2019" role="Invited by Google"/>
                                <BigCard event="FireBase Summit" background="#2C3849"
                                    picture={require("../../images/firebase-summit19-logo.png")}
                                    edition="2019" role="Invited by WTM"
                                    marginTop="-9rem" marginRight="18.5rem"/>
                            </MeduimCardContainer>
                        
                            <SmallCardContainer>
                                <BigCard event="ArabWic Lebanon" background="white"
                                    picture={require("../../images/arabwic-logo.png")}
                                    edition="2017" role="Participant"/>
                                <SmallCard event="WTM Summit" background="white"
                                    picture={require("../../images/wtm-logo.png")}
                                    edition="2017" role="Invited by Google"
                                    marginLeft="2rem"/>
                                <BigCard event="GDD India" background="white"
                                    picture={require("../../images/gdd-india-logo.png")}
                                    edition="2018" role="Participant"
                                    marginTop="-9rem" marginLeft="19rem"/>
                                <SmallCard event="Google I/O" background="#536DFE"
                                    picture={require("../../images/io-2018-logo.png")}
                                    edition="2018" role="Invited by Google"
                                    marginTop="-12rem" marginRight="1rem"/>
                                <SmallCard event="FireBase Summit" background="white"
                                    picture={require("../../images/firebase-summit18-logo.png")}
                                    edition="2018" role="Invited by WTM"
                                    marginLeft="1rem"/>
                                <SmallCard event="Oman Ideathon" background="white"
                                    picture={require("../../images/oman-ideathon-logo.png")}
                                    edition="2018" role="Google Organizer"
                                    marginTop="-12rem" marginRight="19rem"/>
                                <SmallCard event="Google I/O" background="#5565FF"
                                    picture={require("../../images/io-2019-logo.png")}
                                    edition="2019" role="Invited by Google"
                                    marginRight="19rem"/>
                                <BigCard event="FireBase Summit" background="#2C3849"
                                    picture={require("../../images/firebase-summit19-logo.png")}
                                    edition="2019" role="Invited by WTM"
                                    marginTop="-12rem" marginLeft="19rem"/>
                            </SmallCardContainer>   

                        </div>
                    ):
                    (
                        <div>
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
                            
                            <ResponsiveCardContainer>
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
                                    marginTop="-9rem"/>
                                <BigCard event="Start Hack" background="white"
                                    picture={require("../../images/start-hack-logo.png")}
                                    edition="2018" role="Participant" 
                                    marginTop="-12rem" marginLeft="39rem"/>
                            </ResponsiveCardContainer>
                            
                            <MeduimCardContainer>
                                <SmallCard event="LegalTech Algiers" background="black"
                                    edition="2018" role="Participant" 
                                    picture={require("../../images/legalTech-logo.png")}/>
                                <BigCard event="Hajj Hackathon" background="white"
                                    picture={require("../../images/hajj-hackathon-logo.png")}
                                    edition="2018" role="Organizer / Participant"
                                    marginLeft="1rem"/>
                                <SmallCard event="Junction" background="black"
                                    picture={require("../../images/junction-logo.png")}
                                    edition="2018" role="Participant"
                                    marginLeft="1rem"/>
                                <SmallCard event="Hack UPC" background="#E5E5E5"
                                    picture={require("../../images/hack-upc-logo.png")}
                                    edition="2018" role="Participant"
                                    marginTop="-9rem"/>
                                <BigCard event="Start Hack" background="white"
                                    picture={require("../../images/start-hack-logo.png")}
                                    edition="2018" role="Participant" 
                                    marginTop="-9rem" marginLeft="19rem"/>
                            </MeduimCardContainer>

                            <SmallCardContainer>
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
                                    marginTop="-9rem" marginRight="19rem"/>
                                <SmallCard event="Hack UPC" background="#E5E5E5"
                                    picture={require("../../images/hack-upc-logo.png")}
                                    edition="2018" role="Participant"
                                    marginRight="19rem"/>
                                <BigCard event="Start Hack" background="white"
                                    picture={require("../../images/start-hack-logo.png")}
                                    edition="2018" role="Participant" 
                                    marginTop="-15rem" marginLeft="19rem"/>
                            </SmallCardContainer>
                        </div>
                    )}
                </div>
            </>
        );
    }
}
export default Tabs;