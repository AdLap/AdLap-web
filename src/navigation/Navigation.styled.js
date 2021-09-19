import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNavigation = styled(motion.nav)`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: ${({ theme }) => theme.menuBackground};
    backdrop-filter: blur(4px);

    a {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 700;
        color: ${({ theme }) => theme.primaryLight};
        padding: 1.5rem 0;
        
        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`;
