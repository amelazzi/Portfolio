import React, { Component } from 'react'
import styled from 'styled-components'
import { gray, bordo } from "../../styles/colors"


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
    margin-top: 2rem;
`;

const BigCard = styled.div`
    width: 18.5rem;
    height: 20rem;
    background: white;
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1,p{
        display: none;
        margin: 0;
    }

    p{
        font-size: 20px;
        font-weight: 500;
        margin-top: 16px;
    }

    :hover{
        background: ${bordo};
        opacity: 0.8;
        cursor: pointer;
        h1,p{
            display: block;
        }
    }
`;

const SmallCard = styled(BigCard)`
    height: 12rem;
    background: red;
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
                    <button id="tab1" onClick={() => this.setState({ activeTab: 1 })}> 
                        All Events</button>
                    <button onClick={() => this.setState({ activeTab: 2 })}> 
                        Events </button>
                    <button onClick={() => this.setState({ activeTab: 3 })}> 
                        Hackathons</button>
                </TabsBtn>
                
                <div>
                    {this.state.activeTab === 1 ? (
                        <CardContainer>
                            <BigCard>
                                <h1> Google I/O'19 </h1>
                                <p> Attendee </p>
                            </BigCard>
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