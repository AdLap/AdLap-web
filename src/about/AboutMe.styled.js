import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
    width: 100%;
    line-height: 1.5em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    row-gap: 4rem;

    @media (min-width: ${({ theme }) => theme.tablet}) {
        grid-template-rows: 380px 250px;
    }
`;

export const ImgContainer = styled(motion.div)`
    max-width: 250px;
    max-height: 380px;
    overflow: hidden;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    justify-self: center;

    @media (min-width: ${({ theme }) => theme.tablet}) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
`;

export const Description = styled(motion.p)`
    line-height: 1.5em;
    text-align: justify;
   

    span {
        margin-top: 20px;
        text-align: center;
    }
    
    &:first-of-type {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        display: flex;
        justify-content: center;
        flex-direction: column;

        @media (min-width: ${({ theme }) => theme.tablet}) {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
        }
    }

    &:last-of-type {
        grid-column: 1 / 3;
        grid-row: 3 / 4;

        @media (min-width: ${({ theme }) => theme.tablet}) {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
        }
    }
`;

export const DescriptionList = styled(motion.ul)`
    line-height: 1.5em;
    grid-column: 1 / 3;
    grid-row: 4 / 5;

    @media (min-width: ${({ theme }) => theme.tablet}) {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
    }

    li {
        list-style: none;

        span {
            margin-right: .5rem;
        }
    }
`;

