import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer = styled(motion.div)`
    line-height: 1.5em;
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
`;

export const Welcome = styled.p`
    margin: 0 auto;
    width: 100%;
    max-width: 850px;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    grid-row: 1 / 2;
    grid-column: 1 / 3;

    span {
        display: block;
        text-align: right;
    }
`;

export const Description = styled.p`
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    grid-row: 2 / 3;
    grid-column: 1 / 3;

    @media (min-width: ${({ theme }) => theme.desktop}) {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
    }
`;

export const ImgDescription = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    height: 230px;
    overflow: hidden;
    grid-row: 3 / 4;
    grid-column: 1 / 3;

    @media (min-width: ${({ theme }) => theme.tablet}) {
        position: relative;
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
    }

    img {
        width: 100%;
        height: auto;

        @media (min-width: ${({ theme }) => theme.tablet}) {
            position: absolute;
            top: -65px;
        }
    }
`;

export const Technologies = styled.p`
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    grid-row: 4 / 5;
    grid-column: 1 / 3;

    a:hover {
        color: ${({ theme }) => theme.primaryHover};
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
        grid-row: 3 / 4;
        grid-column: 2 / 3;
    }
`;

export const ImgTech = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    height: 230px;
    overflow: hidden;
    grid-row: 5 / 6;
    grid-column: 1 / 3;
    
    @media (min-width: ${({ theme }) => theme.desktop}) {
        height: 100%;
        grid-row: 3 / 4;
        grid-column: 1 / 2;
    }

    img {
        width: 100%;
        height: auto;
    }
`;
