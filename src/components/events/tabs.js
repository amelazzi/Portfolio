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
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    margin-top: 2rem;
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
                    {this.state.activeTab === 1 ? (
                        <CardContainer>
                            <BigCard event="Google I/O"
                                edition="2018 & 2019"
                                role="Participant"/>
                            <SmallCard event="Google I/O"
                                edition="2018 & 2019"
                                role="Participant"/>
                        </CardContainer>
                        ) : this.state.activeTab === 2?
                        (<h1> tab 2 </h1>):
                        (<h1> tab 3 </h1>)}
                </div>
            </>
        );
    }
}
export default Tabs;