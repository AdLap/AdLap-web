import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFooter = styled(motion.footer)`
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.desktop}) {
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export const FooterLogo = styled.div`
    height: 100%;
    color: ${({ theme }) => theme.primaryLight};
    font-size: 1rem;
    line-height: 50px;
    
    a {
        color: ${({ theme }) => theme.logoColor};
    }
`;

export const FooterIcons = styled.div`
    height: 100%;
    font-size: 1.5rem;
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
            color: ${({ theme }) => theme.linkedinIconsHover};
        }
    }
`;
