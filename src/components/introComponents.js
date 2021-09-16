import styled from "styled-components";
import { motion } from "framer-motion";

export const IntroSection = styled(motion.section)`
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
    margin: 0;
`;

export const IntroDescBox = styled.div`
    height: 4vw;
    margin: 0;
`;

export const IntroDesc = styled(motion.p)`
    font-size: 4vw;
    color: #6d0080;
`;
