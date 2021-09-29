import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.menuBackground};
    backdrop-filter: blur(4px);
    overflow: hidden;
    cursor: pointer;
`;

export const ModalImgContainer = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50vw;
    height: 50vh;
    overflow: hidden;
`;

export const ModalImg = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
`;
