import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactSection = styled(motion.section)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`;

export const ContactTitle = styled.h2`
    
`;

export const Form = styled(motion.form)`
    width: 100%;
    max-width: 400px;
    height: 100%; 
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const Label = styled.label`
    width: 100%;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.primaryLight};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.primaryLight};

    &:focus {
        outline: none;
        border-bottom-color: ${({ theme }) => theme.primaryHover};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        -webkit-text-fill-color: ${({ theme }) => theme.primaryLight};
        transition: background-color 5000s ease-in-out 0s;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.primaryLight};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.primaryLight};

    &:focus {
        outline: none;
        border-bottom-color: ${({ theme }) => theme.primaryHover};
    }
`;

export const Button = styled.button`
    border-radius: 3px;
    border: 1px solid transparent;
    cursor: pointer;
    align-self: flex-start;
    padding: .5rem 1rem;

    &:hover {
        background:  ${({ theme }) => theme.primaryHover};
    }

    &:active {
        background: transparent;
        color:  ${({ theme }) => theme.primaryLight};
        border: 1px solid  ${({ theme }) => theme.primaryLight};
    }
`;

export const ErrorMsg = styled.div`
    font-size: 1rem;
    color: ${({ theme }) => theme.errorMessage};
    position: absolute;
`;

