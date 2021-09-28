import styled from "styled-components";
import { motion } from "framer-motion";

export const ItemContainer = styled(motion.div)`
    color: ${({ theme }) => theme.primaryLight};
    width: 300px;
    height: 350px;
    /* border: 1px solid green; */
  box-shadow: 0 0 12px #1c1c1c;
  border-radius: 5px;
    padding: 1rem;
    /* display: grid; */
    gap: 1rem;
    grid-template-columns: 100px 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ItemTitle = styled.h3`
    text-align: center;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
`;

export const ItemImg = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid blue;
    overflow: hidden;
    grid-row: 2 / 3;
    grid-column: 1 / 2;

    img {
        width: 100%;
        height: auto;
    }
`;

export const ItemDesc = styled.p`
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    text-align: justify;
`;

export const ItemTech = styled.p`
    grid-row: 3 / 4;
    grid-column: 1 / 3;
`;

export const ItemLink = styled.a`
    grid-row: 4 / 5;
    grid-column: 1 / 3;
    text-align: center;
    color: ${({ theme }) => theme.logoColor}
`;