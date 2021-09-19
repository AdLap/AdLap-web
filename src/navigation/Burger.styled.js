import styled from 'styled-components';
import { motion } from  'framer-motion';

export const StyledBurger = styled(motion.button)`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 2rem;
    left: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    div {
        width: 2rem;
        height: .25rem;
        background: ${({ theme }) => theme.primaryLight};
        transform-origin: 1px;
    }

`;
