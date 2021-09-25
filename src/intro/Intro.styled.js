import styled from "styled-components";
import { motion } from "framer-motion";

export const IntroContainer = styled.section`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding: 0;
`;

export const IntroSection = styled(motion.div)`
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
    color: ${({ theme }) => theme.logoColor};
    cursor: pointer;
    margin: 0;
`;

export const IntroDescBox = styled.div`
    height: 4vw;
    margin: 0;
`;

export const IntroDesc = styled(motion.p)`
    font-size: 4vw;
    color: ${({ theme }) => theme.logoDescColor};
`;
