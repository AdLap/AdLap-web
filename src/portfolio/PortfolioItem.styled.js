import styled from "styled-components";
import { motion } from "framer-motion";

export const ItemContainer = styled(motion.div)`
    width: 300px;
    height: 350px;
    box-shadow: 0 0 12px #1c1c1c;
    border-radius: 5px;
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-rows: 1.17rem 100px 80px 40px 1rem;
`;

export const ItemTitle = styled.h3`
    text-align: center;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    color: ${({ theme }) => theme.primaryAccent};
`;

export const ItemImg = styled.div`
    width: 200px;
    height: 100px;
    overflow: hidden;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    justify-self: center;
    cursor: pointer;
    transition: .5s ease-in-out;

    &:hover {
        transform: scale(1.5);
    }

    img {
        width: 100%;
        height: auto;
    }
`;

export const ItemDesc = styled.p`
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    text-align: justify;
`;

export const ItemTech = styled.p`
    grid-row: 4 / 5;
    grid-column: 1 / 2;
`;

export const ItemLink = styled.a`
    grid-row: 5 / 6;
    grid-column: 1 / 2;
    text-align: center;
    color: ${({ theme }) => theme.primaryLight};
    font-size: 1.5rem;
    text-align: right;

    &:hover {
        color: ${({ theme }) => theme.primaryHover};
    }
`;