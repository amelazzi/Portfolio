import React from "react"
import styled from 'styled-components'

import Card from './card'
import { bordo, gray } from "../../styles/colors";

const StyledSection = styled.div`
    margin-top: 4rem;
    width: 100%;
    color: white;
    text-align: center;
    h1{
        font-size: 32px;
        margin: 0;
        padding: 0;
    }

    padding: 4rem 20rem;
    background: ${gray};
    color: white;
    @media (max-width: 48em) {
        padding: 2rem;
    }
    @media (min-width: 48.1em) and (max-width: 62em) {
        padding: 4rem 2rem;
    }
    @media (min-width: 62.1em) and (max-width: 75em)  {
        padding: 4rem 6rem;
    }
    @media (min-width: 75.1em) and (max-width: 85.5em)  {
        padding: 4rem 10rem;
    }

`;

const CardsContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media (max-width: 48em) {
        flex-direction: column;
    }

    @media (min-width: 48.1em) and (max-width: 62em){
        justify-content: space-between;
    }
    @media (min-width: 62.1em) and (max-width: 75em)  {
        justify-content: space-between;
    }
    @media (min-width: 75.1em) and (max-width: 85.5em)  {
    }
`;

const Stack = styled.div`
    border-style: solid;
    border-color: ${bordo};
    border-radius: 5px;
    border-width: 2px;
    padding: 4px 8px;
    margin-right: 16px;
    margin-top: 16px;
    :last-child{
        margin-right: 0;
    }
`;

// SharedLibrary stacks
const KMPStackList = [{name: "Kotlin MP"}, {name: "Kotlin"}, {name: "Swift"}]
const KMPStacks = KMPStackList.map((stack) =>
    <Stack key={stack.name}>{stack.name}</Stack>
)

// iWatch stacks
const IwatchStackList = [{name: "kotlin"}, {name: "Java EE"}]
const IwatchStacks = IwatchStackList.map((stack) =>
    <Stack key={stack.name}>{stack.name}</Stack>
)

// Torpics stacks
const TorpicsStackList = [{name: "Java"}, {name: "Java EE"}]
const TorpicsStacks = TorpicsStackList.map((stack) =>
    <Stack key={stack.name}>{stack.name}</Stack>
)

// ORM Evaluator stacks
const OrmStackList = [{name: "Java"}, {name: "Hibernate"}, {name: "MyBatis"}, {name: "PostgreSQL"}, {name: "MySQL"}, {name: "Oracle"}]
const OrmStacks = OrmStackList.map((stack) =>
    <Stack key={stack.name}>{stack.name}</Stack>
)

// Tetrate stacks
const TetrateStackList = [{name: "React JS"}, {name: "GatsBy"}]
const TetrateStacks = TetrateStackList.map((stack) =>
    <Stack key={stack.name}>{stack.name}</Stack>
)

// bAvus stacks
const BavusStackList = [{name: "Java Android"}, {name: "Python"}, {name: "HTML"}, {name: "CSS"}]
const BavusStacks = BavusStackList.map((stack) =>
    <Stack key={stack.name}>{stack.name}</Stack>
)

// Tharwa stacks
const TharwaStackList = [{name: "Node JS"}, {name: "SQL Server"}, {name: "Angular"}, {name: "NativeScript"}]
const TharwaStacks = TharwaStackList.map((stack) =>
    <Stack key={stack.name}>{stack.name}</Stack>
)

const WhatIDo = () => {
    return(
        <StyledSection id="projects">
            <h1> MY PROJECTS </h1>
            <CardsContainer>
                <Card icon={require("../../images/iWatch-logo.png")}
                        title="DataSharedLibrary"
                        resume="Shared library Android/iOS for network layer" 
                        stacks={KMPStacks}/>
                    <Card icon={require("../../images/iWatch-logo.png")}
                        title="iWatch"
                        resume="Android application to be updated on popular movies/series based on TMDB Api"
                        stacks={IwatchStacks}/>
                    <Card icon={require("../../images/torpics-logo.png")}
                        title="Torpics"
                        resume="Generate Java code based on heterogeneous databases and sensors, taking on concederation different 
                            functionalities to get an homogene and global database"
                        stacks={TorpicsStacks}/>
                    <Card icon={require("../../images/tetrate-logo.png")}
                        title="ORM Evaluator"
                        resume="Software to analyse and evaluate Java ORMs on different databases, taking on concederation the complexity 
                            of database schema and data size"
                        stacks={OrmStacks}/>
                    <Card icon={require("../../images/tetrate-logo.png")}
                        title="Tetrate"
                        resume="Rebuild Tetrate website from scratch without using any library. Build for fun and to master CSS tricks"
                        stacks={TetrateStacks}/>
                    <Card icon={require("../../images/tetrate-logo.png")}
                        title="bAvus"
                        resume="Android Road Condition Application, to aware tracks about the road condition and predict the best way to take"
                        stacks={BavusStacks}/>
                    <Card icon={require("../../images/tetrate-logo.png")}
                        title="Tharwa"
                        resume="Platform for eBanking. The platform integrates a web client used by bankers and managers and a mobile Android/iOS application 
                        for clients and employers"
                        stacks={TharwaStacks}/>
            </CardsContainer>
        </StyledSection>
    )
}

export default WhatIDo
