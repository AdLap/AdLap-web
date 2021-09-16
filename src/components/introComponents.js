import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const IntroSection = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
`;

export const IntroLogo = styled(motion.h1)`
    font-size: 8vw;
    font-weight: 700;
    color: gold;
    cursor: pointer;
`;

export const IntroDesc = styled(motion.p)`
    font-size: 4vw;
    color: #6d0080;
    margin-top: -4vw;
 
`;

