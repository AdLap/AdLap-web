import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFooter = styled(motion.footer)`
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
`;

export const FooterLogo = styled.div`
    height: 100%;
    color: ${({ theme }) => theme.primaryLight};
    font-size: 1rem;
    line-height: 50px;
    
    a {
        color: ${({ theme }) => theme.logoColor};
        font-size: 1.5rem;
        margin-left: 1rem;
    }
`;

export const FooterIcons = styled.div`
    height: 100%;
    font-size: 2rem;
    color: ${({ theme }) => theme.footerIcons};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    a {
        color: inherit;

        &:first-of-type:hover {
            color: ${({ theme }) => theme.primaryHover};
        }

        &:last-of-type:hover {
            color: ${({ theme }) => theme.footerIconsHover};
        }
    }
`;
