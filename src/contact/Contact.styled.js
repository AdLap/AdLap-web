import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactSection = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primaryLight};
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr 1fr 4fr 1fr;
`;

export const Label = styled.label`
    &:first-of-type {
        grid-column: 1 / 2;
    }
    &:nth-of-type(2) {
        grid-column: 2 / 3;
    }
    &:first-of-type,
    &:nth-of-type(2) {
        grid-row: 1 / 2;
    }
    &::last-of-type {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }
`;

export const Input = styled.input`
    background: transparent;
    color: ${({ theme }) => theme.primaryLight};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.primaryLight};

    &:focus {
        outline: none;
        border-bottom-color: ${({ theme }) => theme.primaryHover};
    }
`;

export const TextArea = styled.textarea`
    grid-row: 4 / 5;
    grid-column: 1 / 3;
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
    grid-row: 5 / 6;
    grid-column: 1 / 2;
    width: fit-content;
    padding: 0 2rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;

    &:hover {
        background:  ${({ theme }) => theme.primaryHover};
    }

    &:active {
        background: transparent;
        color:  ${({ theme }) => theme.primaryLight};
        border: 1px solid  ${({ theme }) => theme.primaryLight};
    }
`;
