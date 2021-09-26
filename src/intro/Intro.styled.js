import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const IntroContainer = styled.section`
    height: 100vh;
    width: 100vw;
    padding: 0;

    @media (min-width: ${({theme}) => theme.desktop}) {
        max-width: unset;
        margin: 0;
    }
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

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const IntroDescBox = styled.div`
    height: 4vw;
    margin: 0;
`;

export const IntroDesc = styled(motion.p)`
    font-size: 4vw;
    color: ${({ theme }) => theme.logoDescColor};
`;
