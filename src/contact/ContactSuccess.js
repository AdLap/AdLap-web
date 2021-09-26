import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const SuccessMsg = styled(motion.h2)`
    font-size: 2rem;
    color: ${({ theme }) => theme.successMessage};
`;

const successVariants = {
    hidden: {
        opacity: 0,
        y: '-100vh'
    },
    visable: {
        opacity: 1,
        y: 0,
        trnsition: {
            duration: 1,
            ease: 'easeInOut'
        }
    },
    exit: {
        opacity: 0,
        x: '100vw',
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
};

const ContactSuccess = () => {
    return (
        <SuccessMsg
            variants={successVariants}
            initial='hidden'
            animate='visable'
            exit='exit'
        >
            Wiadomość wysłana!
        </SuccessMsg>
    )
}

export default ContactSuccess;
