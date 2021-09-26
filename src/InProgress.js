import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionWorkInProgress = styled.section`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WorkInProgress = styled.h1`
    font-size: 3vw;
    color: gold;
`;

const GoHomeProgress = styled(Link)`
    text-decoration: none;
    color: #6d0080;
    font-size: 3vw;
    border: .75px solid #6d0080;
    padding: 10px 20px;
`;


const InProgress = () => {
    return (
        <SectionWorkInProgress id='progress'>
            <WorkInProgress>Strona w budowie...</WorkInProgress>
            <GoHomeProgress to='/'>Wróć...</GoHomeProgress>
        </SectionWorkInProgress>
    )
}

export default InProgress;